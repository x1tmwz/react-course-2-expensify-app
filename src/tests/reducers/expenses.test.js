import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('should expenseReducer return default obj value', () => {
    const result = expensesReducer(undefined, { type: '@@INIT' })
    expect(result).toEqual([]);
})
test('should addExpens works', () => {
    const expense = {
        id: '5',
        description: 'pizza',
        note: '',
        amount: '10',
        createAt: 2
    }
    const result = expensesReducer({}, { type: 'ADD_EXPENSE', expense })
    expect(result).toEqual([expense])
})

test('should removeExpens works', () => {
    const result = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[0].id })
    expect(result).toEqual([expenses[1],expenses[2]])
})
test('should removeExpens works without id ', () => {
    const result = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: "tttt" })
    expect(result).toEqual(expenses)
})
test('should editExpens works', () => {
    const updates = {
        description: 'car',
        note: 'BMW',
        amount: '21',
        createAt: 0
    }
    const result = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: expenses[0].id,updates })

    expect(result[0]).toEqual({id:expect.any(String),...updates})
})
test('should editExpens works without proper id', () => {
    const updates = {
        description: 'car',
        note: 'BMW',
        amount: '21',
        createAt: 0
    }
    const result = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: "ddd",updates })

    expect(result).toEqual(expenses)
})
