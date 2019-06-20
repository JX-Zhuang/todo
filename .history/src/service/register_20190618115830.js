import axios from './index';
export default {
    register:({
        username,
        password,
        checkPassword
    })=>axios.post('/api/register',{
        username,
        password,
        checkPassword
    })
}