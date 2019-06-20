import React from 'react';
import Register from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
configure({ adapter: new Adapter() });
describe('<Register/>', () => {
    const username = 'admin';
    const password = 'admin123'; 
    it('renders Register', () => {
        const checkPassword = password;
        const register = value => {
            expect(value).toEqual({username,password,checkPassword});
        }
        const wrapper = shallow(<Register register={register} />);
        wrapper.find(TextField).at(0).simulate('change', {
            target: {
                value: username
            }
        });
        wrapper.find(TextField).at(1).simulate('change', {
            target: {
                value: password
            }
        });
        wrapper.find(TextField).at(2).simulate('change', {
            target: {
                value: checkPassword
            }
        });
        wrapper.find(Button).simulate('click');
    });
    it('renders Register,password!==checkPassword', () => {
        const checkPassword = `${password}password`;
        const register = value => {
            expect(value).toEqual({username,password,checkPassword});
        }
        const wrapper = shallow(<Register register={register} />);
        wrapper.find(TextField).at(0).simulate('change', {
            target: {
                value: username
            }
        });
        expect(wrapper.find(TextField).at(0).props().value).toEqual(username);
        wrapper.find(TextField).at(1).simulate('change', {
            target: {
                value: password
            }
        });
        wrapper.find(TextField).at(2).simulate('change', {
            target: {
                value: checkPassword
            }
        });
        wrapper.find(Button).simulate('click');
    });
})
