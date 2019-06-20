import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import { Link } from "react-router-dom";
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
}));

export default function MenuAppBar({ title, login, username, logout }) {
    const classes = useStyles();

    return (
        <AppBar position="static" color="default" >
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    {title}
                </Typography>
                <nav>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Home
            </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
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
