import React from 'react';
import PropTypes from 'prop-types';
import ListComponent from '@material-ui/core/List';
import Item from './Item';
export default function List({ list, action }) {
    return <ListComponent>
        {
            list.map(item => <Item key={item.id} id={value.id} value={item.value} action={action} />)
        }
    </ListComponent>
}
List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        value: PropTypes.string
    })),
    action: PropTypes.func
};