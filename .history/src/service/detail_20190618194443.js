import axios from './index';
export default async function detail({
    username,
    password
}) {
    try {
        const response = await axios.post('/login', {
            username,
            password
        });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}