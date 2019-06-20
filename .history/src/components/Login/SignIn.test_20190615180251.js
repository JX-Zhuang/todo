import React from 'react';
import Login from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
configure({ adapter: new Adapter() });
describe('<Login/>', () => {
    const username = 'admin';
    const password = 'admin123'
    const login = value => expect(value.username).toEqual(username);
    it('renders Login', () => {
        const wrapper = shallow(<Login login={login} />);
        wrapper.find(TextField).at(0).simulate('onchange', {
            target: {
                value: username
            }
        });
        wrapper.find(TextField).at(1).simulate('onchange', {
            target: {
                value: password
            }
        });
        wrapper.find(Button).simulate('click');

    });
})
