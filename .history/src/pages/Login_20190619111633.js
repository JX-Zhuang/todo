import React from 'react';
import Login from '../components/Login';
import loginApi from '../service/login';
import { Redirect } from "react-router-dom";
import Message from '../components/Message';
export default function ({ user, location, history, getUserSuccess }) {
    const [message, setMessage] = React.useState({
        open: false,
        message: ''
    });
    function closeMsg() {
        setMessage({
            open: false,
            message: ''
        });
    }
    let { from } = location.state || { from: { pathname: "/" } };
    if (from.pathname === '/logout') {
        from = {
            ...from,
            pathname: '/'
        }
    }
    const login = async ({ username, password }) => {
        const result = await loginApi({ username, password });
        setMessage({
            open: true,
            message: result.msg
        });
        if (result.success) {
            getUserSuccess({ username: result.data.username });
        }
    }
    return <>
        <Message {...message} handleClose={closeMsg} />
        {user ? <Redirect to={from} /> :
            <Login login={login} />}
    </>;
}