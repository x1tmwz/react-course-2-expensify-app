import uuid from "uuid";


const addExpense = (
    {
        description = 'unknow',
        note = '',
        amount = 0,
        createAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }

});
const removeExpense = ({ id = "" } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
const editExpense = (id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
})
export {addExpense,removeExpense,editExpense};