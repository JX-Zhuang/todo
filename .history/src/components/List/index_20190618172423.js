import React from 'react';
import ListComponent from './List';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
// import deleteItem from '../../utils/deleteItem';
const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(2)
    },
    button: {
        float: 'right'
    }
}));
export default function List({ list, action }) {
    const classes = useStyles();
    const [searchValue, setSearchValue] = React.useState('');
    const handleChange = e => {
        setSearchValue(e.target.value);
    };
    const filterList = () => list.filter(item => item.value.indexOf(searchValue) > -1)
};
return <Container classes={{ root: classes.root }}>
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
    </Grid>
    <ListComponent list={filterList()} action={action} />
</Container>
}
List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        value: PropTypes.string
    })),
    action: PropTypes.func
};