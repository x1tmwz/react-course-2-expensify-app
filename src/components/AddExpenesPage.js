import React from 'react';
import { connect } from 'react-redux';
import ExpensForm from './ExpensForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpenesPage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                <h1>New Expense</h1>
                <ExpensForm
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})


export default connect(undefined, mapDispatchToProps)(AddExpenesPage);