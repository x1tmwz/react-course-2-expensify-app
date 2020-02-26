import React from 'react';
import { connect } from 'react-redux';
import ExpensForm from './ExpensForm';
import { addExpense } from '../actions/expenses';

export class AddExpenesPage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
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
    addExpense: (expense) => dispatch(addExpense(expense))
})


export default connect(undefined, mapDispatchToProps)(AddExpenesPage);