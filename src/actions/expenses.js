
import database from '../firebase/firebase'


const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = 'unknow',
            note = '',
            amount = 0,
            createAt = 0
        } = expenseData;
        const expense = {description, note,amount,createAt};
        return database.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }))
        })
    };
}
const removeExpense = ({ id = "" } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
export { addExpense, removeExpense, editExpense };