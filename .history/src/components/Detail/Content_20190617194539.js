import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
        margin:theme.spacing.unit
    }
  }));
export default function Content({ value, onChange }) {
    const classes = useStyles();
    const handleChange = e => onChange(e.target.value);
    return <Grid item xs={12} classes={{
        item:classes.root
    }} >
        <TextField
            autoComplete="content"
            name="content"
            variant="outlined"
            required
            fullWidth
            id="content"
            label="content"
            onChange={handleChange}
            autoFocus
            value={value}
            multiline
            rows={20}
        />
    </Grid>
}
Content.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};