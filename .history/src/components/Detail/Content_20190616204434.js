import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
export default function Content({ value, onChange }) {
    const handleChange = e => onChange(e.target.value);
    return <Grid item xs={12}>
        <Typography component="h1" variant="h5">
            Content
        </Typography>
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
        />
    </Grid>
}
Content.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};