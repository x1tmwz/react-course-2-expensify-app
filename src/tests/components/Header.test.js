import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../components/Header';


test('shuold render header correctley', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

});