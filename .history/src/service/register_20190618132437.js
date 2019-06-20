import axios from './index';
export default async function register({
    username,
    password,
    checkPassword
}) {
    try {
        const response = await axios.post('/register', {
            username,
            password,
            checkPassword
        });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}