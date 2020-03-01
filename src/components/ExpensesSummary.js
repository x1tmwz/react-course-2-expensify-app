import React from 'react';
import getTotalExpense from '../selectors/expense-total';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import numeral from 'numeral';


export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const totalAmountFormat = numeral(expenseTotal / 100).format('$0,0.00');
    return (
        <div>
            {expenseCount > 0 &&
                <h1>Viewing {expenseCount} {expenseWord} totalling {totalAmountFormat} </h1>
            }
        </div>

    );
}
const mapStateToProps = (state) => {
    const expenses = getVisibleExpenses(state.expenses, state.filters)
    return {
        expenseCount: expenses.length,
        expenseTotal:getTotalExpense(expenses)
    }

}

export default connect(mapStateToProps)(ExpensesSummary)



