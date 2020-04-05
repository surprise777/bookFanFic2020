import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ReviewForm from './reviewForm';
const informations = ['Title', 'Rating', 'Content'];


function SimpleDialog(props) {
    const { onClose, selectedValue, open, book } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };


    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} fullWidth maxWidth="md">
            <ReviewForm book={book} />
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
    const { book } = props
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(informations[1]);

    const handleClickOpen = () => {
        console.log(props)
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
                Add a Review
      </Button>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} book={book} />
        </div>
    );
}