import React from 'react';
import Login from '../components/Login';
import login from '../service/login';
import { Redirect } from "react-router-dom";
export default function ({ user, location }) {
    const { loginSuccess, setLogin } = React.useState(false);
    let { from } = location.state || { from: { pathname: "/" } };
    return user ?<Redirect to={from}/> :<Login login={login} />;
}