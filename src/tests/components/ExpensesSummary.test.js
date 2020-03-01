import { shallow } from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';
import {ExpensesSummary} from '../../components/ExpensesSummary';

let wrapper;
beforeEach(()=>{
    wrapper = shallow(<ExpensesSummary expenses={[]}/>)
})

test('should it render witout data',()=>{
    expect(wrapper).toMatchSnapshot();
})
test('should render with mulitExpenses',()=>{
    wrapper.setProps({expenses})
    expect(wrapper).toMatchSnapshot();
})
test('should render with SingleExpenses',()=>{
    wrapper.setProps({expenses:[expenses[0]]})
    expect(wrapper).toMatchSnapshot();
})