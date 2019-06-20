import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
export default function ({ message, handleClose ,open}) {
    return <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        onClose={handleClose}
        message={<span>{message}</span>}
    />
}