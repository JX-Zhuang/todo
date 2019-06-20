import React from 'react';
import AppBar from './index';
import { mount,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Typography from '@material-ui/core/Typography';
configure({ adapter: new Adapter() });
describe('<AppBar/>',()=>{
    const title = 'TodoList';
    it('renders AppBar',()=>{
        const wrapper = mount(<AppBar title={title} login={false} />);
        expect(wrapper.find(Typography).innerText).to.equal(title);
    });
});