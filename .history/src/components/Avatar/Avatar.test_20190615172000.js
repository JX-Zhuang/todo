import React from 'react';
import Avatar from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
configure({ adapter: new Adapter() });
describe('<Avatar/>', () => {
    const title = 'TodoList';
    it('renders Avatar and click', () => {
        const wrapper = shallow(<Avatar />);

        const MenuPrev = wrapper.find(Menu);
        expect(MenuPrev.props().open).toEqual(false);
        expect(MenuPrev.props().anchorEl).toEqual(null); 

        wrapper.find(IconButton).simulate('click', {
            currentTarget: IconButton
        });
        expect(wrapper.state().anchorEl).toEqual(10);
        const MenuNext = wrapper.find(Menu);
        expect(MenuNext.props().open).toEqual(true);
        expect(MenuNext.props().anchorEl).toEqual(IconButton); 
        
        wrapper.find(MenuItem).simulate('click');
        expect(MenuNext.props().open).toEqual(true);
        expect(MenuNext.props().anchorEl).toEqual(IconButton);  
    });
})