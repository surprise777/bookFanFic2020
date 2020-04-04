import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '../../containers/mui/grid';
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import styles from './addBook.module.css';
import Container from '../../containers/mui/container';
import BookForm from './bookForm';

const informations = ['Title', 'Rating', 'Content'];


function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} fullWidth maxWidth="md">

        <BookForm handleClose={handleClose}/>
        
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(informations[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = value => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
            <br />
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Add Book
      </Button>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    );
}