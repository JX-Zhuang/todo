import axios from './index';
export default async function register({
    title,
    detail
}) {
    try {
        const response = await axios.post('/save', {
            title,
            detail
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}