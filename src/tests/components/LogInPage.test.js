import { shallow } from 'enzyme';
import React from 'react';
import { LoginPage } from '../../components/LoginPage';

let wrapper,startLogin

beforeEach(()=>{
    startLogin = jest.fn()
    wrapper = shallow(<LoginPage startLogin={startLogin} />)
})
test('should LoginPage Will render', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should call startLogin on click',()=>{
    wrapper.find('button').simulate('click')
    expect(startLogin).toHaveBeenCalled();
})

