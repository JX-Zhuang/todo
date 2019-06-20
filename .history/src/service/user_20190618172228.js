import axios from './index';
export default async function register(id) {
    try {
        const response = await axios.post('/user', {
            id
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}