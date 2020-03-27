import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Rating from '@material-ui/lab/Rating';
import Grid from '../../containers/mui/grid';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import styles from './editReviewDialog.module.css';
const informations = ['Title', 'Rating', 'Content'];


function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };


    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} fullWidth maxWidth="md">
            <Grid container className={styles.padding}>
                <Grid container item xs={12} justify="center" className={styles.paddingBottom} >
                    <Typography variant="h3" color="secondary">Review</Typography>
                </Grid>
                <Grid container item xs={12} className={styles.paddingBottom}>
                    <Grid container item xs={6}>
                        <Grid container item xs={9}> <TextField id="standard-basic" placeholder="Title" fullWidth /></Grid>
                    </Grid>
                    <Grid container item xs={6} justify="flex-end" alignItems="center">
                        <Rating
                            name="book_rating"
                            size='medium'
                        />
                    </Grid></Grid>
                <Grid container item md={12} className={styles.paddingBottom}>
                    <Grid container item xs={12}>
                        <TextField
                            id="outlined-multiline-statics"
                            label="Content"
                            multiline
                            fullWidth
                            rows="10"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid container item xs={6} justify="flex-start">
                        <Button variant='outlined' component='span' color='primary' onClick={handleClose}>
                            cancel</Button>        </Grid>
                    <Grid container item xs={6} justify="flex-end">
                        <Button variant='outlined' component='span' color='secondary'>
                            submit</Button>
                    </Grid>
                </Grid>
            </Grid>
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
                Add a Review
      </Button>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    );
}