import React from 'react';
import getTotalExpense from '../selectors/expense-total';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import numeral from 'numeral';
import { Link } from 'react-router-dom'


export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const totalAmountFormat = numeral(expenseTotal / 100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className='content-container'>
                <h1 className="page-header__title">
                    Viewing {<span>{expenseCount}</span>} {expenseWord} totalling {<span>{totalAmountFormat}</span>}
                </h1>
                <div className="page-header__actions">
                    <Link to="/create" className='button'>Add Expense</Link>
                </div>
            </div>
        </div>

    );
}
const mapStateToProps = (state) => {
    const expenses = getVisibleExpenses(state.expenses, state.filters)
    return {
        expenseCount: expenses.length,
        expenseTotal: getTotalExpense(expenses)
    }

}

export default connect(mapStateToProps)(ExpensesSummary)



