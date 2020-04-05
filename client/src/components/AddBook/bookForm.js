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

class BookForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            checked: false
        }
        this.handleClicked = this.handleClicked.bind(this);
    }
    handleClicked(e) {
        this.setState({
            checked: !this.state.checked
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        const url = "/book/addBook";
        const data = new FormData(event.target);

        const request = new Request(url, {
            method: "post",
            body: data,
        });

        fetch(request)
            .then(function (res) {
                if (res.status === 200) {
                    console.log("Add book Successfully.")
                } else {
                    alert("Book adds Failed.")
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <Grid container className={styles.padding}>

                <Grid container item xs={12} justify="center" className={styles.paddingBottom} >
                    <Typography variant="h3" color="secondary">Add a book</Typography>
                </Grid>
                <Grid container spacing={0} item xs={12}>
                    <form id="add-book" onSubmit={this.handleSubmit}>
                        <Grid container item xs={12} md={3}>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Box display="flex-center">
                                    <Typography variant="h6" align="center"> Upload image</Typography>
                                    <Button>
                                        <input
                                            accept="image/*"
                                            id="contained-button-file"
                                            name="image"
                                            multiple
                                            type="file"
                                        />
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid container item xs={12} md={9}>
                            <Container maxWidth='lg'>
                                <Box pt={2}>
                                    <Grid container item xs={12}> <TextField id="standard-basic" name="brefTitle" placeholder="BrefTitle" fullWidth /></Grid>
                                    <Grid container item xs={12}> <TextField id="standard-basic" name="title" placeholder="Title" fullWidth /></Grid>
                                    <Grid container item xs={12}> <TextField id="standard-basic" name="author" placeholder="Author" fullWidth /></Grid>
                                    <Grid container item xs={12}> <TextField id="standard-basic" name="published" placeholder="Published On" fullWidth /></Grid>
                                    <Grid container item xs={12}> <TextField id="standard-basic" name="genres" placeholder="Genres" fullWidth /></Grid>
                                    <Grid container item xs={12}> <input type="radio" name="monthRec" checked={this.state.checked} value={this.state.checked} onChange={(e) => this.handleClicked(e)} /><label for="monthRec">monthRec?</label></Grid>
                                    <Grid container item xs={12} className={styles.paddingBottom}></Grid>

                                    <Grid container item xs={12} className={styles.paddingBottom}>
                                        <TextField
                                            id="outlined-multiline-statics"
                                            label="description"
                                            name="description"
                                            multiline
                                            fullWidth
                                            rows="10"
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Box>
                            </Container>
                        </Grid>
                    </form>
                </Grid>
                <Grid container item xs={12}>
                    <Grid container item xs={6} justify="flex-start">
                        <button variant='outlined' component='span' color='primary' type="reset" form="add-book">
                            cancel</button>        </Grid>
                    <Grid container item xs={6} justify="flex-end">
                        <button variant='outlined' component='span' color='secondary' type="submit" form="add-book">
                            submit</button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default BookForm;