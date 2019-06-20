import React from 'react';
import Login from '../components/Login';
import login from '../service/login';
import { Redirect } from "react-router-dom";
import FetchApi from '../components/FetchApi';
export default function ({ user, location, history }) {
    let { from } = location.state || { from: { pathname: "/" } };
    // const login = async () => {
    //     await login();
    //     history.push(from);
    // }
    return user ? <Redirect to={from} /> :
        <Login login={login} />;
}