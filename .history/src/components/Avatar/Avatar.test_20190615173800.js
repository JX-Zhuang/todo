import React from 'react';
import Avatar from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
configure({ adapter: new Adapter() });
describe('<Avatar/>', () => {
    it('renders Avatar and clicks', () => {
        const wrapper = shallow(<Avatar />);

        const MenuStart = wrapper.find(Menu);
        expect(MenuStart.props().open).toEqual(false);
        expect(MenuStart.props().anchorEl).toEqual(null); 

        wrapper.find(IconButton).simulate('click', {
            currentTarget: IconButton
        });

        const MenuAfterButtonClicks = wrapper.find(Menu);
        expect(MenuAfterButtonClicks.props().open).toEqual(true);
        expect(MenuAfterButtonClicks.props().anchorEl).toEqual(IconButton); 
        
        MenuAfterButtonClicks.find(MenuItem).at(0).simulate('click');

        const MenuAfterItemClicks = wrapper.find(Menu); 
        expect(MenuAfterItemClicks.props().open).toEqual(false);
        expect(MenuAfterItemClicks.props().anchorEl).toEqual(null);  
    });
})