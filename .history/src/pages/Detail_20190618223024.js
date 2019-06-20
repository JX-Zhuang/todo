import React from 'react';
import Detail from '../components/Detail';
import { Redirect } from "react-router-dom";
import FetchApi from '../components/FetchApi';
import save from '../service/save';
import detail from '../service/detail';
export default function ({ user, match, history }) {
    const [fetchApi, setFetchApi] = React.useState(() => {
        console.log(999)
        return ()=>{};
    });
    console.log(fetchApi)
    const [value, setValue] = React.useState({
        title: '', content: ''
    });
    React.useEffect(() => {
        const { id } = match.params;
        if (id) {
            setFetchApi(() => { console.log(1);detail(id) });
        }
    }, [])
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
    const onOk = value => {console.log(value);setValue(value)};
    return <FetchApi onOk={onOk} fetchApi={fetchApi}>
        <Detail save={saveDetail} {...value} />
    </FetchApi>
}