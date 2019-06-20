import axios from './index';
export default ({
    username,
    password,
    checkPassword
}) => axios.post('/register', {
    username,
    password,
    checkPassword
});