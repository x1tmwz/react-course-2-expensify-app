import React from 'react';
import getTotalExpense from '../selectors/expense-total';
import { connect } from 'react-redux';
import numeral from 'numeral';


export const ExpensesSummary = (props) => {
    const totalAmount = getTotalExpense(props.expenses);
    return (
        <div>
            {props.expenses.length > 0 &&
                <p>Viewing {props.expenses.length} {props.expenses.length === 1 ? 'expense' : 'expenses'} totalling {numeral(totalAmount / 100).format('$0,0.00')} </p>
            }
        </div>

    );
}
const mapStateToProps = (state) => ({
    expenses: state.expenses
})
export default connect(mapStateToProps)(ExpensesSummary)



