import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


export default class ExpensForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
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
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input
                        type='text'
                        onChange={this.onDescriptionChange}
                        autoFocus
                        placeholder='Description'
                        value={this.state.description}
                        className="text-input"
                    />
                    <input
                        type='text'
                        onChange={this.onAmountChange}
                        placeholder='Amount'
                        value={this.state.amount}
                        className="text-input"
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
                        value={this.state.note}
                        placeholder='Enter you notes..(optinal)'
                        className="textarea"
                    />
                    <div>
                    <button type='submit' className='button'>Save Expense</button>
                    </div>
                   
                </form>
            
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
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createAt: this.state.createAt.valueOf(),
                note: this.state.note
            });
        }
    }
}