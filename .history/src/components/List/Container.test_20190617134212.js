import React from 'react';
import List from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextField from '@material-ui/core/TextField';
import ListComponent from './List';
import Item from './Item';
configure({ adapter: new Adapter() });
describe('<List/>', () => {
    const list = Array.from(new Array(10)).map((item, index) => ({
        id: index + '',
        value: `item ${index}`
    }));
    const searchValue = '2';
    const action = id => { };
    it('renders List', () => {
        const wrapper = shallow(<List list={list} action={action} />);
        wrapper.find(TextField).simulate('change', {
            target: {
                value: searchValue
            }
        });
        expect(wrapper.find(TextField).prop('value')).toEqual(searchValue);
        const itemsWrapper = wrapper.find(ListComponent).shallow();
        expect(itemsWrapper.find(Item)).toHaveLength(1);

    });
});
