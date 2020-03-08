import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpnese } from '../actions/expenses';
import ExpensForm from './ExpensForm';

export class EditExpensePage extends React.Component {

    startRemoveExpnese = () => {
        this.props.startRemoveExpnese(this.props.expense.id);
        this.props.history.push("/");
    }
    startEditExpense = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpensForm
                        expense={this.props.expense}
                        onSubmit={(expense) => { this.startEditExpense(expense) }}
                    />
                    <button className="button button--secondary" onClick={this.startRemoveExpnese}>Remove Expense</button>
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};
const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpnese: (id) => dispatch(startRemoveExpnese({ id }))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);