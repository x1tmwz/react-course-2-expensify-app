import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setFillter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilter extends React.Component {
    state = {
        calendarFocused: null,
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }
    onTextChange = (e) => {
        const text = e.target.value.trim();
        this.props.setFillter(text);
    };
    onSelectChange = (e) => {
        const sortBy = e.target.value;
        if (sortBy === 'amount') this.props.sortByAmount();
        if (sortBy === 'date') this.props.sortByDate();
    }
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            type='text'
                            value={this.props.filters.text}
                            onChange={this.onTextChange}
                            className="text-input"
                            placeholder="Search expenses.."
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            onChange={this.onSelectChange}
                            value={this.props.filters.sortBy}
                            className="select"
                        >
                            <option value='amount'>sort by amount</option>
                            <option value='date'>sort by Date</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            displayFormat={"DD/MM/YYYY"}
                            numberOfMonths={1}
                            isOutsideRange={() => { return false }}
                            showClearDates={true}
                        />
                    </div>
                </div>
            </div>





        )
    }
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};
const mapDispatchToProps = (dispatch) => ({
    setFillter: (text) => dispatch(setFillter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))

})
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);