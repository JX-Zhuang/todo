import React from 'react';
import List from '../components/List';
import getList from '../service/list';
import { Redirect } from "react-router-dom";
import FetchApi from '../components/FetchApi';
export default function ({ user, location }) {
    const [list, setList]  = React.useState([]);
    const onOk = result=>setList(result.data.list);
    console.log(list)
    return <FetchApi onOk={onOk} fetchApi={getList}>
        <List list={list}/>
    </FetchApi>;
}