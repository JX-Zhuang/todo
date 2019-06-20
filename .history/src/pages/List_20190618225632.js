import React from 'react';
import List from '../components/List';
import getList from '../service/list';
import { Redirect } from "react-router-dom";
import FetchApi from '../components/FetchApi';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import remove from '../service/remove';
export default function ({ user, location }) {
    const [list, setList] = React.useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [id, setId] = React.useState(null);
    function handleClick(id, event) {
        setId(id);
        setAnchorEl(event.currentTarget);
    }
    function handleClose() {
        setAnchorEl(null);
    }
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : null;
    const onOk = result => setList(result.data.list);
    const remove = () => remove(id);
    return <>
        <FetchApi onOk={onOk} fetchApi={getList}>
            <List list={list} action={handleClick} />
        </FetchApi>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <>
                <Button variant="contained" onClick={remove}>
                    delete
                </Button>
                <Button variant="contained" onClick={handleClose}>
                    no
                </Button>
            </>
        </Popover>
    </>
}