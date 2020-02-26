import { shallow } from 'enzyme';
import React from 'react';
import { ExpenseItem } from '../../components/ExpenseItem';
import expenses from '../fixtures/expenses'

test("should ExpenseItem render with data", () => {
    const wrapper = shallow(<ExpenseItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
})
