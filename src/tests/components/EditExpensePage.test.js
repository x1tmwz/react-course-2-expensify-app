import { shallow } from 'enzyme';
import React from 'react';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, startEditExpenseSpy, startRemoveExpenseSpy, historySpy;
beforeEach(() => {
    startEditExpenseSpy = jest.fn();
    startRemoveExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage
        startEditExpense={startEditExpenseSpy}
        startRemoveExpnese={startRemoveExpenseSpy}
        history={historySpy}
        expense={expenses[0]}
    />)
})
test('should EditExpensePage will render', () => {
    expect(wrapper).toMatchSnapshot();
})
test('should removeExpens work',()=>{
    wrapper.find('button').simulate('click')
    expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith(expenses[0].id)
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
})
test('should editExpense work',()=>{
    wrapper.find('ExpensForm').prop('onSubmit')(expenses[0])
    expect(startEditExpenseSpy).toHaveBeenLastCalledWith(expenses[0].id,expenses[0]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
})