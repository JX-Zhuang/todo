import React from 'react';
import Detail from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Title from './Title';
import Content from './Content';
import Button from '@material-ui/core/Button';
configure({ adapter: new Adapter() });
describe('<Detail/>', () => {
    let title = 'title';
    let content = 'content';
    const save = value=>{
        expect(value).toEqual({
            title,
            content
        });
    };
    it('renders Detail', () => {
        const wrapper = shallow(<Detail title={title} content={content} save={save}/>);
        setTimeout(() => {
        expect(wrapper.find(Title).prop('value')).toEqual(title); 
            
        }, 1000);
        wrapper.find(Button).simulate('click');

        title = `${title} change`;
        wrapper.find(Title).simulate('change', title);
        wrapper.find(Button).simulate('click');

        content = `${content} change`;
        wrapper.find(Content).simulate('change',content);
        wrapper.find(Button).simulate('click');

        title = 'new title',content = 'new content';
        wrapper.setProps({
            title,
            content
        });
        expect(wrapper.find(Title).prop('value')).toEqual(title);
        expect(wrapper.find(Content).prop('value')).toEqual(content);
        wrapper.find(Button).simulate('click');
    });
});
