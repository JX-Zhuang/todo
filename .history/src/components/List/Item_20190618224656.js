import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
export default function Item({ value, action, id }) {
    const handleClick = e => action(id);
    return <ListItem>
        <Link to={`/detail/${id}`}>
            <ListItemText
                primary={value}
            />
        </Link>
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="Delete" onClick={handleClick}>
                <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
}
Item.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    action: PropTypes.func
};
Item.defaultProps = {
    action:()=>{}
} 