import { shallow } from 'enzyme';
import React from 'react';
import { ExpenseListFilter } from '../../components/ExpenseListFilter';
import { filters, altFilters } from '../fixtures/filters';

let wrapper, setFillterSpy, sortByAmountSpy, sortByDateSpy, setStartDateSpy, setEndDateSpy;

beforeEach(() => {
    setFillterSpy = jest.fn();
    sortByAmountSpy = jest.fn();
    sortByDateSpy = jest.fn();
    setStartDateSpy = jest.fn();
    setEndDateSpy = jest.fn();
    wrapper = shallow(<ExpenseListFilter
        setFillter={setFillterSpy}
        sortByAmount={sortByAmountSpy}
        sortByDate={sortByDateSpy}
        setStartDate={setStartDateSpy}
        setEndDate={setEndDateSpy}
        filters={filters}
    />)
})
test('should ExpenseListFilter with default fillter object ', () => {
    expect(wrapper).toMatchSnapshot();

})
test('should ExpenseListFilter with fillter object that have data ', () => {
    wrapper.setProps({ filters: altFilters })
    expect(wrapper).toMatchSnapshot();
})
test('should handle text change', () => {
    const event = {
        target: {
            value: 'tomer'
        }
    }
    wrapper.find('input').simulate('change', event);
    expect(setFillterSpy).toHaveBeenLastCalledWith(event.target.value);
})
test('should sort by date', () => {
    const event = {
        target: {
            value: 'date'
        }
    }
    wrapper.find('select').simulate('change', event);
    expect(sortByDateSpy).toHaveBeenCalled();

})
test('should sort by amount', () => {
    const event = {
        target: {
            value: 'amount'
        }
    }
    wrapper.find('select').simulate('change', event);
    expect(sortByAmountSpy).toHaveBeenCalled();
})
test('should handle date change', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate:altFilters.stratDate,
        endDate:altFilters.endDate
    });
    expect(setStartDateSpy).toHaveBeenLastCalledWith(altFilters.stratDate);
    expect(setEndDateSpy).toHaveBeenLastCalledWith(altFilters.endDate);
})
test('should handle date foucs changes', () => {
    const calendarFocused='endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);

})