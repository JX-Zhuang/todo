import React from 'react';
import Item from './Item';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IconButton from '@material-ui/core/IconButton';
configure({ adapter: new Adapter() });
describe('<Item/>', () => {
    const value = 'This is a Item Component';
    const id = '1000';
    const action=id=>expect(id).toEqual(id);
    it('renders Item', () => {
        const wrapper = shallow(<Item title={title} id={id} action={action}/>);
        wrapper.find(IconButton).simulate('click');
    });
});
