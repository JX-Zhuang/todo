import React from 'react';
import Avatar from './index';
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IconButton from '@material-ui/core';
configure({ adapter: new Adapter() });
describe('<Avatar/>',()=>{
    const title = 'TodoList';
    it('renders Avatar and click',()=>{
        const wrapper = shallow(<Avatar />);
        wrapper.find(IconButton).simulate('click');
    });
})