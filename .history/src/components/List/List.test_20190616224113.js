import React from 'react';
import List from './List';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IconButton from '@material-ui/core/IconButton';
import Item from './Item';
configure({ adapter: new Adapter() });
describe('<Item/>', () => {
    const list = Array.from(new Array(10)).map((item,index)=>({
        id:index,
        value:`item ${index}`
    }));
    const action=id=>id;
    it('renders List', () => {
        const wrapper = shallow(<List list={list} action={action}/>);
        expect(wrapper.find(Item)).toHaveLength(list.length);
    });
});
