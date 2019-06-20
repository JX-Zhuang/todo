import React from 'react';
import AppBar from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Typography from '@material-ui/core/Typography';
import Avatar from '../Avatar';
configure({ adapter: new Adapter() });
describe('<AppBar/>', () => {
    const title = 'TodoList';
    it('renders AppBar', () => {
        const wrapper = shallow(<AppBar title={title} login={false} />);
        expect(wrapper.find(Typography).text()).toEqual(title);
        expect(wrapper.contains(<Avatar />)).toEqual(false);
    });
    it('if login,renders AppBar', () => {
        const wrapper = shallow(<AppBar title={title} login={true} />);
        expect(wrapper.contains(<Avatar />)).toEqual(true);
    });
})

