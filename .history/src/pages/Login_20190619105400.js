import React from 'react';
import Login from '../components/Login';
import loginApi from '../service/login';
import { Redirect } from "react-router-dom";
export default function ({ user, location, history, getUserSuccess }) {
    let { from } = location.state || { from: { pathname: "/" } };
    if (from.pathname === '/logout'){
        from = {
            ...from,
            pathname:'/'
        }
    }
    const login = async ({ username, password }) => {
        const result = await loginApi({ username, password });
        if (result.success) {
            getUserSuccess({ username: result.data.username });
        }
    }
    return user ? <Redirect to={from} /> :
        <Login login={login} />;
}