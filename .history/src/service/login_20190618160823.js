import axios from './index';
export default async function register({
    username,
    password
}) {
    try {
        const response = await axios.post('/register', {
            username,
            password
        });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}