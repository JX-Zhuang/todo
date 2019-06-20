import axios from './index';
export default async function getList() {
    try {
        const response = await axios.get('/getList');
        const data = response.data;
        return {
            ...data,
            list: data.data.list.map(item => ({
                id: item.id,
                value: item.title
            }))
        };
    } catch (error) {
        console.error(error);
    }
}