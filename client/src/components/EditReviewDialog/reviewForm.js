import React from 'react';
import Grid from '../../containers/mui/grid';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import styles from './editReviewDialog.module.css';
import Rating from '@material-ui/lab/Rating';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            value: 0
        }
        this.handleRating = this.handleRating.bind(this);
    }
    handleRating(e) {
        this.setState({
            value: e.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        const url = "/review/addReview";
        const data = new FormData(event.target);
        const jsonRaw = {
            "bookId": data.get("bookId"),
            "title": data.get("title"),
            "rating": data.get("rating"),
            "contents": data.get("contents")
        }

        const request = new Request(url, {
            method: "post",
            body: JSON.stringify(jsonRaw),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });

        fetch(request)
            .then(function (res) {
                if (res.status === 200) {
                    console.log("Add review Successfully.")
                } else {
                    alert("Review adds Failed.")
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <Grid container className={styles.padding}>
                <Grid container className={styles.padding}>
                    <Grid container item xs={12} justify="center" className={styles.paddingBottom} >
                        <Typography variant="h3" color="secondary">Review</Typography>
                    </Grid>
                    <form id="add-review" onSubmit={this.handleSubmit}>
                        <input type="hidden" name="bookId" value={this.props.book._id} />
                        <Grid container item xs={12} className={styles.paddingBottom}>
                            <Grid container item xs={6}>
                                <Grid container item xs={9}> <TextField id="standard-basic" name="title" placeholder="Title" fullWidth /></Grid>
                            </Grid>
                            <Grid container item xs={6} justify="flex-end" alignItems="center">
                                <Rating
                                    value={this.state.value}
                                    name="rating"
                                    size='medium'
                                    precision={0.5}
                                    onChange={(event) => this.handleRating(event)}
                                />
                            </Grid></Grid>
                        <Grid container item md={12} className={styles.paddingBottom}>
                            <Grid container item xs={12}>
                                <TextField
                                    id="outlined-multiline-statics"
                                    name="contents"
                                    label="Content"
                                    multiline
                                    fullWidth
                                    rows="10"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Grid container item xs={12}>
                    <Grid container item xs={6} justify="flex-start">
                        <button variant='outlined' component='span' color='primary' type="reset" form="add-review">
                            cancel</button>        </Grid>
                    <Grid container item xs={6} justify="flex-end">
                        <button variant='outlined' component='span' color='secondary' type="submit" form="add-review">
                            submit</button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default ReviewForm;