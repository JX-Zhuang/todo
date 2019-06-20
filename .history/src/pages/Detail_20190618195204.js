import React from 'react';
import Detail from '../components/Detail';
import { Redirect } from "react-router-dom";
import FetchApi from '../components/FetchApi';
import save from '../service/save';
import detail from '../service/detail';
import FetchApi from '../components/FetchApi';
export default function ({ user, match, history }) {
    const [fetchApi, setFetchApi] = React.useState(() => { });
    React.useEffect(() => {
        const { id } = match.params;
        if (id) {
            fetchApi = () => detail(id);
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
    return <FetchApi onOk={onOk} fetchApi={getList}>
        <Detail save={saveDetail} />
    </FetchApi>;
}