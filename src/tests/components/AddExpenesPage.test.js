import { shallow } from 'enzyme';
import React from 'react';
import { AddExpenesPage } from '../../components/AddExpenesPage';
import expenses from '../fixtures/expenses';

let wrapper, addExpense, history;

beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpenesPage addExpense={addExpense} history={history} />)
})

test('should AddExpense Render', () => {
    expect(wrapper).toMatchSnapshot();
});
test('should onSubmit with valid expense dispatch', () => {
    wrapper.find('ExpensForm').prop('onSubmit')(expenses[0]);
    expect(addExpense).toHaveBeenLastCalledWith(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
})
