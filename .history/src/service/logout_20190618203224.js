import axios from './index';
export default async function logout() {
    try {
        const response = await axios.get('/logout');
        const {data} = response;
        return data;
    } catch (error) {
        console.error(error);
    }
}