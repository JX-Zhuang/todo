import axios from './index';
export default async function detail(id) {
    try {
        const response = await axios.get('/detail', {
            params: {
                id
            }
        });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}