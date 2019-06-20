import React from 'react';
import Login from '../components/Login';
import register from '../service/register';
export default function(){
    return <Login register={register}/>
}