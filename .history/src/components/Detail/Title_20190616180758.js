import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
export default function Title({ value, onChange }) {
    const handleChange = e => onChange(e.target.value);
    return <Grid item xs={12}>
        <Typography component="h1" variant="h5">
            Title
        </Typography>
        <TextField
            autoComplete="title"
            name="title"
            variant="outlined"
            required
            fullWidth
            id="title"
            label="Title"
            onChange={handleChange}
            autoFocus
            value={value}
        />
    </Grid>
}
Title.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};