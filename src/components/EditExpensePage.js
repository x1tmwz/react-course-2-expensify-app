import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpensForm from './ExpensForm';

export class EditExpensePage extends React.Component {

    removeExpense = () => {
        console.log("remove");
        this.props.removeExpense(this.props.expense.id);
        this.props.history.push("/");
    }
    editExpense=(expense)=>{
        this.props.editExpense(this.props.expense.id,expense);
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                <h1>Edit Expense</h1>
                <ExpensForm
                    expense={this.props.expense}
                    onSubmit={(expense)=>{this.editExpense(expense)}}
                />
                <button onClick={this.removeExpense}>Remove</button>
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
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (id) => dispatch(removeExpense({ id }))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);