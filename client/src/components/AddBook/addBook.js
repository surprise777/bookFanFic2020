import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Rating from '@material-ui/lab/Rating';
import Grid from '../../containers/mui/grid';
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import styles from './addBook.module.css';
import Tags from '../Tags/tags';
import Container from '../../containers/mui/container';
import ButtonBase from '@material-ui/core/ButtonBase';

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
                    <Typography variant="h3" color="secondary">Add a book</Typography>
                </Grid>

                <Grid container spacing={0}>
                    <Grid item xs={12} md={3}>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Box display="flex-center">
                                <Typography variant="h6" align="center"> Upload image</Typography>
                                <Button>
                                <img alt='' className={styles.cardLayout} src={require("../../static/book-cover/harrypotter.jpg")}>
                                </img>
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Container maxWidth='lg'>
                            <Box pt={2}>
                            <Grid container item xs={9}> <TextField id="standard-basic" placeholder="Title" fullWidth /></Grid>
                            <Grid container item xs={9}> <TextField id="standard-basic" placeholder="Author" fullWidth /></Grid>
                            <Grid container item xs={9}> <TextField id="standard-basic" placeholder="Published On" fullWidth /></Grid>
                            <Grid container item xs={9}> <TextField id="standard-basic" placeholder="Genres" fullWidth /></Grid>
                            <Grid container item xs={9} className={styles.paddingBottom}></Grid>
                            
                            <Grid container item xs={12} className={styles.paddingBottom}>
                                <TextField
                                    id="outlined-multiline-statics"
                                    label="description"
                                    multiline
                                    fullWidth
                                    rows="10"
                                    variant="outlined"
                                />
                            </Grid>
                            </Box>
                        </Container>
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
                Add Book
      </Button>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    );
}