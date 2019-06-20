import React from 'react';
import getList from '../service/list';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
export default function FetchApi({ fetchApi, children, onError, onOk }) {
    const { showLoading, setLoading } = React.useState(true);
    async function api() {
        const result = await fetchApi();
        if (result.success) {
            onOk(result);
        } else {
            onError(result);
        }
    }
    React.useEffect(() => {
        api();
        setLoading(false);
    }, [])
    return <>
        {
            showLoading ? <LinearProgress /> : children
        }
    </>
}
FetchApi.propTypes = {
    fetchApi: PropTypes.func,
    onOk: PropTypes.func,
    onError: PropTypes.func
};

