import { shallow } from 'enzyme';
import React from 'react';
import {ExpensesSummary} from '../../components/ExpensesSummary';

let wrapper;
beforeEach(()=>{
     wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={150} />)
})

test('should render with mulitExpenses',()=>{
    wrapper.setProps({expenseCount:5, expenseTotal:300});
    expect(wrapper).toMatchSnapshot();
})
test('should render with SingleExpenses',()=>{
    expect(wrapper).toMatchSnapshot();
})