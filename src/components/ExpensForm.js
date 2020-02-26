import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


export default class ExpensForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note:  props.expense ? props.expense.note : '',
            amount:  props.expense ? (props.expense.amount / 100).toString() : '',
            createAt: props.expense ? moment(props.expense.createAt) : moment(),
            calendarFocused: false,
            error: ''
        }

    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));

    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        const reg = /^\d{1,}(\.\d{0,2})?$/;
        if (!amount || amount.match(reg)) {
            this.setState(() => ({ amount }));
        }
    }
    onDateChange = (createAt) => {
        if (createAt) {
            this.setState(() => ({ createAt }))
        }

    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }
    render() {
        return (
            <div>
                {this.state.error || <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        onChange={this.onDescriptionChange}
                        autoFocus
                        placeholder='description'
                        value = {this.state.description}
                    />
                    <input
                        type='text'
                        onChange={this.onAmountChange}
                        placeholder='amount'
                        value = {this.state.amount} 
                        />

                    <SingleDatePicker
                        date={this.state.createAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => { return false }}
                        displayFormat={"DD/MM/YYYY"}
                    />
                    <textarea
                        onChange={this.onNoteChange}
                        value = {this.state.note}
                        placeholder='enter you notes'
                    />
                    <button type='submit'>Done!</button>
                </form>
            </div>
        )

    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            const message = 'please provide description and amount';
            this.setState(() => ({ error: message }));
        }
        else {
            const message = '';
            this.setState(() => ({ error: message }));
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,10)*100,
                createAt:this.state.createAt.valueOf(),
                note:this.state.note
            });
        }
    }
}