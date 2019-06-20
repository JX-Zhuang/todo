import React from 'react';
import Detail from '../components/Detail';
import { Redirect } from "react-router-dom";
import FetchApi from '../components/FetchApi';
import save from '../service/save';
export default function ({ user, location }) {
    const saveDetail = ({
        title,
        content
    }) => {
        save({ title, detail: content });
    }
    return <Detail save={saveDetail} />
}