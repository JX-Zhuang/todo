import React from 'react';
import AppBar from './index';
import { shallow } from 'enzyme';
import Typography from '@material-ui/core/Typography';
describe('<AppBar/>',()=>{
    const title = 'TodoList';
    it('renders AppBar',()=>{
        const wrapper = shallow(<AppBar title={title} login={false} />);
        expect(wrapper.find(Typography).text()).to.equal(title);
    });
});