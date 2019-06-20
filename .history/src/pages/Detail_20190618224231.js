import React from 'react';
import Detail from '../components/Detail';
import { Redirect } from "react-router-dom";
import FetchApi from '../components/FetchApi';
import save from '../service/save';
import update from '../service/update';
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
        let result;
        if (id) {
            result = await update({
                title,
                detail,
                id
            });

        } else {
            result = await save({
                title,
                detail
            });
        }
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
    const onOk = result => setValue(result.data);
    return <FetchApi onOk={onOk} fetchApi={fetchApi}>
        <Detail save={saveDetail} {...value} />
    </FetchApi>
}