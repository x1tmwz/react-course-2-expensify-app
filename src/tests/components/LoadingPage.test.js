import { shallow } from 'enzyme';
import React from 'react';
import LoadingPage from '../../components/LoadingPage';


test('should LoadingPage Render',()=>{
    const wrapper = shallow(<LoadingPage />)
    expect(wrapper).toMatchSnapshot();
})