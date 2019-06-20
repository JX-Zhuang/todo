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
    function handleClick(id, event) {
        setId(id);
        setAnchorEl(event.currentTarget);
    }
    function handleClose() {
        setAnchorEl(null);
    }
    const open = Boolean(anchorEl);
    const onOk = result => setList(result.data.list);
    const remove = () => removeApi(id);
    return <>
        <FetchApi onOk={onOk} fetchApi={getList}>
            <List list={list} action={handleClick} />
        </FetchApi>
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
                    <Button variant="contained" onClick={remove}>
                        确认
                    </Button>
                    <Button variant="contained" onClick={handleClose}>
                        取消
                    </Button>
                </Grid>
            </Grid>
        </Popover>
    </>
}