import axios from './index';
export default async function detail({id,detail,title}) {
    try {
        const response = await axios.put(`/detail/${id}`,{
            params:{
                detail,detail
            }
        });
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
    }
}