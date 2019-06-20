import React from 'react';
import Detail from '../components/Detail';
import { Redirect } from "react-router-dom";
import FetchApi from '../components/FetchApi';
import save from '../service/save';
export default function ({ user, match, history }) {
    React.useEffect(() => {
        const { id } = match.params;
        if (id) {
            
        }
    }, [])
    async function api({
        title,
        content
    }) {
        const result = await save({
            title,
            detail: content
        });
        if (result.success) {
            history.push('/list');
        }
    }
    const saveDetail = ({
        title,
        content
    }) => {
        api({ title, detail: content });
    }
    return <Detail save={saveDetail} />
}