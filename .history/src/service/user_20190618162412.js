import axios from './index';
export default async function register(id) {
    try {
        const response = await axios.post('/user', {
            id
        });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}