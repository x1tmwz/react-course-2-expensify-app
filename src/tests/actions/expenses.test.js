import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

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
test('should addExpens defult values work when we dont insert a object', () => {
    const expenseDefultData = {
        description: 'unknow',
        note: '',
        amount: 0,
        createAt: 0
    }
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseDefultData
        }
    })


})
test('should addExpens work when we insert a object', () => {
    const expenseData = {
        description: 'bla',
        note: 'a',
        amount: 50,
        createAt: 10
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    })
})