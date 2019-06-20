import React from 'react';
import List from '../components/List';
import getList from '../service/list';
import { Redirect } from "react-router-dom";
import FetchApi from '../components/FetchApi';
export default function ({ user, location }) {
    const [list, setList]  = React.useState([]);
    return <FetchApi onOk={setList} fetchApi={getList}>
        <List />
    </FetchApi>;
}