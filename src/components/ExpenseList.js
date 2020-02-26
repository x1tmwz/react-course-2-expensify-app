import React from 'react';
import ExpenseItem from './ExpenseItem';
import getVisibleExpenses from '../selectors/expenses';
import { connect } from 'react-redux';


export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (<p>No Expenses</p>) :
                (props.expenses.map((expense) => (<ExpenseItem key={expense.id} {...expense}/>)))
        }
    </div>
);
const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);

