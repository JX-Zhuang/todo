import axios from './index';
export default async function getList() {
    try {
        const response = await axios.get('/getList');
        return {
            ...response.data,
            list: response.data.list.map(item => ({
                id: item.id,
                value: item.title
            }));
        };
    } catch (error) {
        console.error(error);
    }
}