import { shallow } from 'enzyme';
import React from 'react';
import ExpenseDashBoard from '../../components/ExpenseDashBoard';


test('should ExpenseDashBorad Will render',()=>{
    const wrapper = shallow(<ExpenseDashBoard />)
    expect(wrapper).toMatchSnapshot();
})
