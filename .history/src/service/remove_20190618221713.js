import axios from './index';
export default async function detail(id) {
    try {
        const response = await axios.delete(`/detail/${id}`);
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
    }
}