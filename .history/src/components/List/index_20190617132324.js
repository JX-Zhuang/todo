import React from 'react';
import ListComponent from './List';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export default function List({ list, action }) {
    return <Grid container direction='column'>
    <Grid>
        <TextField
            id="outlined-name"
            label="Name"
            className={classes.textField}
            value={values.name}
            onChange={handleChange('name')}
            margin="normal"
            variant="outlined"
            fullWidth
        />
        <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Search
          </Button>
    </Grid>
        

    </Grid>
}
List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        value: PropTypes.string
    })),
    action: PropTypes.func
};