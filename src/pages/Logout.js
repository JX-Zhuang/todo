import React from 'react';
import logoutApi from '../service/logout';
import { Redirect } from "react-router-dom";
import FetchApi from '../components/FetchApi';
export default function ({ user, getUserSuccess }) {
    const logout = async () => {
        const result = await logoutApi();
        if (result.success) {
            getUserSuccess({ username: '' });
        }
    }
    React.useEffect(() => {
        logout();
    }, []);
    return user ? null :  <Redirect to={'/login'} />;
}