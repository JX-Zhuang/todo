import axios from './index';
export default async function detail(id) {
    try {
        const response = await axios.get('/detail', {
            params: {
                id
            }
        });
        const data = response.data;
        return {
            ...data,
            data:{
                title:data.data.title,
                content:data.data.detail
            }
        }
    } catch (error) {
        console.error(error);
    }
}