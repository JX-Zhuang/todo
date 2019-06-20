import React from 'react';
import AppBar from './index';
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Typography from '@material-ui/core/Typography';
configure({ adapter: new Adapter() });
describe('<AppBar/>',()=>{
    const title = 'TodoList';
    it('renders AppBar',()=>{
        const wrapper = shallow(<AppBar title={title} login={false} />);
        expect(wrapper.text()).to.equal(title);
        expect(wrapper.text()).to.equal(title);
    });
})