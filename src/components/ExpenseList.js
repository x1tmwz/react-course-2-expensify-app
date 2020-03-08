import React from 'react';
import ExpenseItem from './ExpenseItem';
import getVisibleExpenses from '../selectors/expenses';
import { connect } from 'react-redux';


export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className='list-body'>
            {
                props.expenses.length === 0 ? (
                    <div>
                        <span className="list-item list-item--message">
                            No Expenses
                    </span>
                    </div>
                ) :
                    (props.expenses.map((expense) => (<ExpenseItem key={expense.id} {...expense} />)))
            }
        </div>
    </div>
);
const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);

