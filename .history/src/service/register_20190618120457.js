import axios from './index';
export default ({
        username,
        password,
        checkPassword
    })=>axios.post('/api/register',{
        username,
        password,
        checkPassword
    });