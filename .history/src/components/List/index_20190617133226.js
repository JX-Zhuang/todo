import React from 'react';
import ListComponent from './List';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import deleteItem from '../../utils/deleteItem';
export default function List({ list, action }) {
    const [searchValue, setSearchValue] = React.useState('');
    const handleChange = e => {
        setSearchValue(searchValue);
    }
    const handleClick = e => {

    }
    const filterList = () => {
        return list.filter(item => {
            if (item.indexOf(searchValue) > -1) return item;
        });
    };
    const action = id => {
        
    }
    return <Grid container direction='column'>
        <Grid item>
            <TextField
                id="outlined-name"
                label="Search"
                value={searchValue}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                fullWidth
            />
            <Button
                type="search"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                Search
          </Button>
        </Grid>
        <ListComponent list={filterList()} action={action} />
    </Grid>
}
List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        value: PropTypes.string
    })),
    action: PropTypes.func
};