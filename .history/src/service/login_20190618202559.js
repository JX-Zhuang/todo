import axios from './index';
export default async function register({
    username,
    password
}) {
    try {
        const response = await axios.post('/login', {
            username,
            password
        });
        const {data} = response;
        return {
            ...data,
            data:{
                username
            }
        };
    } catch (error) {
        console.error(error);
    }
}