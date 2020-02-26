import { shallow } from 'enzyme';
import React from 'react';
import NotFoundPage from '../../components/NotFoundPage';

test('should NotFoundPage Will render',()=>{
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot();
})