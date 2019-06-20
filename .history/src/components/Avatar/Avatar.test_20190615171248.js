import React from 'react';
import Avatar from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
configure({ adapter: new Adapter() });
describe('<Avatar/>', () => {
    const title = 'TodoList';
    it('renders Avatar and click', () => {
        const wrapper = shallow(<Avatar />);
        expect(wrapper.find.props().open).toEqual(false);
        expect(wrapper.find.props().anchorEl).toEqual(null); 
        wrapper.find(IconButton).simulate('click', {
            currentTarget: IconButton
        });
        expect(wrapper.find.props().open).toEqual(true);
        expect(wrapper.find.props().anchorEl).toEqual(IconButton); 
    });
})