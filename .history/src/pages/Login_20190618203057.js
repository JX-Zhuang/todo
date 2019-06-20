import React from 'react';
import Login from '../components/Login';
import loginApi from '../service/login';
import { Redirect } from "react-router-dom";
import FetchApi from '../components/FetchApi';
export default function ({ user, location, history,getUserSuccess }) {
    let { from } = location.state || { from: { pathname: "/" } };
    const login = async ({username,password}) => {
        const result = await loginApi({username,password});
        if(result.success){
            getUserSuccess({username:result.data.username});
        }
    }
    console.log(user)
    return user ? <Redirect to={from} /> :
        <Login login={login} />;
}