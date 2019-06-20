import React from 'react';
import List from '../components/List';
import getList from '../service/list';
import { Redirect } from "react-router-dom";
import FetchApi from '../components/FetchApi';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import removeApi from '../service/remove';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import deleteItem from '../utils/deleteItem';
import Message from '../components/Message';
const useStyles = makeStyles(theme => ({
    popover: {
        padding: theme.spacing(2),
    },
    typography: {
        padding: theme.spacing(1),
    }
}));

export default function ({ user, location }) {
    const classes = useStyles();
    const [list, setList] = React.useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [id, setId] = React.useState(null);
    const [message,setMessage] = React.useState({
        open:false,
        message:''
    });
    function closeMsg(){
        setMessage({
            open:false,
            message:''
        });
    }
    function handleClick(id, event) {
        setId(id);
        setAnchorEl(event.currentTarget);
    }
    function handleClose() {
        setAnchorEl(null);
    }
    const open = Boolean(anchorEl);
    const onOk = result => setList(result.data.list);
    const remove = async () => {
        const result = await removeApi(id);
        if (result.success) {
            setList(deleteItem(list, 'id', id));
            setMessage({
                open:true,
                message:'delete ok'
            })
        }
        handleClose();
    };
    return <>
        <FetchApi onOk={onOk} fetchApi={getList}>
            <List list={list} action={handleClick} />
        </FetchApi>
        <Message {...message}/>
        <Popover
            id={open ? 'delete-popover' : null}
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
            <Grid container classes={{
                container: classes.popover
            }}>
                <Typography className={classes.typography}>
                    是否删除
               </Typography>
                <Grid container justify="space-around">
                    <Button size='small' variant="outlined" color="primary" onClick={remove}>
                        确认
                    </Button>
                    <Button size='small' variant="outlined" color="secondary" onClick={handleClose}>
                        取消
                    </Button>
                </Grid>
            </Grid>
        </Popover>
    </>
}