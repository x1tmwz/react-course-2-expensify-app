import { shallow } from 'enzyme';
import React from 'react';
import { Header } from '../../components/Header';

let wrapper,startLogout
beforeEach(()=>{
    startLogout = jest.fn();
    wrapper = shallow(<Header startLogout={startLogout} />);

})

test('shuold render header correctley', () => { 
    expect(wrapper).toMatchSnapshot();
});
test('should call startlogout on click',()=>{
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled();
})