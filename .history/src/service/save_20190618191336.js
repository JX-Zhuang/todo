import axios from './index';
export default async function register({
    title,
    detail
}) {
    try {
        const response = await axios.post('/save/1', {
            title,
            detail
        });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}