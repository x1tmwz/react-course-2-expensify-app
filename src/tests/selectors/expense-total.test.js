import getExpensesTotal  from '../../selectors/expense-total';
import expenses from '../fixtures/expenses';


test('should return 0 if no expense', () => {
    expect(getExpensesTotal()).toBe(0);
})
test('should corrctly add up a multiplay expenses', () => {
    expect(getExpensesTotal(expenses)).toBe(6);
})
test('should corrctly add up a one expenses', () => {
    expect(getExpensesTotal([expenses[0]])).toBe(1);
})