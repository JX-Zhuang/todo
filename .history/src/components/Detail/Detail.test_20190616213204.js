import React from 'react';
import Detail from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
configure({ adapter: new Adapter() });
describe('<Detail/>', () => {
    const title = 'title';
    const content = 'title change';
    const save = value=>{
        expect(value).toEqual({
            title,
            content
        });
    };
    it('renders Detail', () => {
        const wrapper = shallow(<Detail title={title} content={content} save={save}/>);
        wrapper.find(Button).simulate('click');
        
        // wrapper.find(TextField).simulate('change', {
        //     target: {
        //         value:newValue
        //     }
        // });
    });
});
