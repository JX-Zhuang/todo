import axios from './index';
export default async function getList() {
    try {
        const response = await axios.get('/getList');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}