import React from 'react';
import Login from '../components/Login';
import login from '../service/login';
export default function(){
    return <Login login={login}/>
}