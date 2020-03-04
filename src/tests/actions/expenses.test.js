import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense,setExpenses,startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
    const expenseData ={};
    expenses.forEach(({id,description,note,amount,createAt})=>{
        expenseData[id]={description,note,amount,createAt};
    })
    database.ref('expenses').set(expenseData).then(()=>{done();})
})
test('should setExpneses transform to ther right object',()=>{
    const action =setExpenses(expenses);
    expect(action).toEqual({
        type:"SET_EXPENSES",
        expenses
    })
})

test('shuold remove expense by id', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})
test('should editExpnese transform to the right action object', () => {
    const action = editExpense('abc', { discription: 'what', note: '', amount: '50', creatAt: '30' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc',
        updates: {
            discription: 'what',
            note: '',
            amount: '50',
            creatAt: '30',
        }

    })
})

test('should addExpens work when we insert a object', () => {
    const action = addExpense(expenses[0]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]

    })
})
test('should add Expens to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'mouse',
        note: 'whatttt',
        amount: 50,
        createAt: 50
    }

    const t = store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id:expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })


})
test('should add Expens with default values', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'unknow',
        note: '',
        amount: 0,
        createAt: 0
    }

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id:expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })


})
test('should fetch expnese from database works',(done)=>{
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        })
        done();


    })


})