import React from 'react';
import Title from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
configure({ adapter: new Adapter() });
describe('<Title/>', () => {
    const value = 'title';
    const onChange = v=>v;
    it('renders Title', () => {
        const wrapper = shallow(<Title value={value} onChange={onChange}/>);
        expect(wrapper.find(TextField).props().value).toEqual(value);
        const newValue = 'title change';
        wrapper.find(TextField).simulate('change', {
            target: {
                value:newValue
            }
        });
        expect(wrapper.find(TextField).props().value).toEqual(newValue); 
    });
});
