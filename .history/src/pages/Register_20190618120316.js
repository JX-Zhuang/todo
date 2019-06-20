import React from 'react';
import Register from '../components/Register';
import {register} from '../service/register';
export default function(){
    return <Register register={register}/>
}