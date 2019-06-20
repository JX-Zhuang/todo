import React from 'react';
import Avatar from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IconButton from '@material-ui/core/IconButton';
import MenuComponent from '@material-ui/core/Menu';
configure({ adapter: new Adapter() });
describe('<Avatar/>', () => {
    const title = 'TodoList';
    it('renders Avatar and click', () => {
        const wrapper = shallow(<Avatar />);
        const Menu = wrapper.find(MenuComponent);
        expect(Menu.props().open).toEqual(false);
        expect(Menu.props().anchorEl).toEqual(null); 
        wrapper.find(IconButton).simulate('click', {
            currentTarget: IconButton
        });
        expect(wrapper.find(MenuComponent).props().open).toEqual(true);
        expect(wrapper.find(MenuComponent).props().anchorEl).toEqual(IconButton); 
    });
})