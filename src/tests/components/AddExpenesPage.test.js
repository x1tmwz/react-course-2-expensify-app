import { shallow } from 'enzyme';
import React from 'react';
import { AddExpenesPage } from '../../components/AddExpenesPage';
import expenses from '../fixtures/expenses';

let wrapper, startAddExpense, history;

beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpenesPage startAddExpense={startAddExpense} history={history} />)
})

test('should startAddExpense Render', () => {
    expect(wrapper).toMatchSnapshot();
});
test('should onSubmit with valid expense dispatch', () => {
    wrapper.find('ExpensForm').prop('onSubmit')(expenses[0]);
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
})
