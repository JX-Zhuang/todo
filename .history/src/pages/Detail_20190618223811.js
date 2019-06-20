import React from 'react';
import Detail from '../components/Detail';
import { Redirect } from "react-router-dom";
import FetchApi from '../components/FetchApi';
import save from '../service/save';
import detail from '../service/detail';
export default function ({ user, match, history }) {
    const [value, setValue] = React.useState({
        title: '', content: ''
    });
    const { id } = match.params;
    const fetchApi = id ? () => detail(id) : () => { };
    async function api({
        title,
        detail
    }) {
        const result = await save({
            title,
            detail
        });
        if (result.success) {
            history.push(`/list`);
        }
    }
    const saveDetail = ({
        title,
        content
    }) => {
        api({ title, detail: content });
    };
    const onOk = value => setValue(value);
    console.log(fetchApi)
    return <FetchApi onOk={onOk} fetchApi={fetchApi}>
        <Detail save={saveDetail} {...value} />
    </FetchApi>
}