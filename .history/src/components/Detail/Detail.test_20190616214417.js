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
        wrapper.find(Button).simulate('click');
        title = `${title} change`;
        content = `${content} change`;
        wrapper.find(Title).simulate('change', title);
        wrapper.find(Button).simulate('click');
        wrapper.find(Content).simulate('change',content);
        wrapper.find(Button).simulate('click');
        const newTitle = 'new title',newContent = 'new content';
        wrapper.props({
            title:newTitle,
            content:newContent,
            save:value=>{
                expect(value).toEqual({
                    content:newContent
                })
            }
        });
        wrapper.find(Button).simualte('click');
    });
});
