
import database from '../firebase/firebase'

// add expenses
const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});
const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = 'unknow',
            note = '',
            amount = 0,
            createAt = 0
        } = expenseData;
        const expense = { description, note, amount, createAt };
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    };
}
// remove expense
const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
})
const startRemoveExpnese = ({ id = '' } = {}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense(id))
        })
    }
}
// edit expenses
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
//set expenses
const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses

})
const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((snapshotChild) => {
                expenses.push({
                    id: snapshotChild.key,
                    ...snapshotChild.val()
                })
            })
            dispatch(setExpenses(expenses))
        })
    }

}





export { addExpense, removeExpense, editExpense, startAddExpense, setExpenses, startSetExpenses, startRemoveExpnese };