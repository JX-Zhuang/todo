import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1),
        cursor: 'pointer'
    },
}));

export default function MenuAppBar({ title, login, username, logout, history }) {
    const classes = useStyles();

    return (
        <AppBar position="static" color="default" >
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    {title}
                </Typography>
                <nav>
                    <Link className={classes.link} onClick={() => {
                        history.push('/');
                    }}>
                        Home
                   </Link>
                    <Link className={classes.link} onClick={() => {
                        history.push('/detail');
                    }}>
                        Add
                  </Link>
                </nav>
                {login && <Avatar username={username} logout={logout} />}
            </Toolbar>
        </AppBar>
    );
}
MenuAppBar.propTypes = {
    title: PropTypes.string,
    login: PropTypes.bool,
    username: PropTypes.string,
    logout: PropTypes.func
};
