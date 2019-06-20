import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
        margin:theme.spacing(1)
    }
  }));
export default function Title({ value, onChange }) {
    const classes = useStyles();
    const handleChange = e => onChange(e.target.value);
    return <Grid item xs={12} classes={{item:classes.root}}>
        <TextField
            autoComplete="title"
            name="title"
            variant="outlined"
            required
            fullWidth
            id="title"
            label="Title"
            onChange={handleChange}
            value={value}
        />
    </Grid>
}
Title.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};