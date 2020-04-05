import React from 'react';
import styles from './bookReview.module.css';
import Container from '../../containers/mui/container';
import Box from "@material-ui/core/Box";
import Grid from '../../containers/mui/grid';
import Banner from '../Banner/banner';
import Rating from '@material-ui/lab/Rating';
import BookCard from '../BookCard/bookCard';
import SectionHeader from '../SectionHeader/sectionHeader';
import { Typography } from '@material-ui/core';
import Review from '../Review/review';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ReveiwDialog from '../EditReviewDialog/editReviewDialog';
import { loadReviews } from '../../actions/review';
class BookReview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            targetReview: this.props.app.state.targetReview,
            reviewId: this.props.app.state.targetReview._id,
            click: this.props.app.state.currentUser === null ? false : this.props.app.state.targetReview.fanList.includes(this.props.app.state.currentUser._id),
            nextLoadingReviews: [],
            media: this.props.app.state.targetBook.cover_url,
            title: this.props.app.state.targetBook.title,
            author: this.props.app.state.targetBook.author,
            book: this.props.app.state.targetBook,
            targetBook: this.props.app.state.targetBook,
            published: this.props.app.state.targetBook.published,
            popularity: this.props.app.state.targetReview.popularity,
            offset: 0
        }
        this.checkLike = this.checkLike.bind(this)
        this.getPopularity = this.getPopularity.bind(this)
        loadReviews(this)

    }

    handleLikeReview(page) {

        const url = "/review/like";

        const review = page.state

        const request = new Request(url, {
            method: "PATCH",
            body: JSON.stringify(review),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });

        fetch(request)
            .then((res) => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    alert("Like/Unlike review Failed.")
                    return
                }
            })
            .then(async json => {
                await page.setState({ click: json.status, popularity: json.result.popularity });
            })
            .catch(error => {
                console.log(error);
            });
    };

    checkLike(user, reviewId) {
        const url = "/review/byId/" + reviewId;
        if (!user) {
            return false
        }
        fetch(url)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    console.log("Could not get review by id");
                }
            })
            .then(json => {
                return json.fanList.includes(user._id);
            })
            .catch(error => {
                console.log(error);
            });
    }

    getPopularity(reviewId) {
        const url = "/review/byId/" + reviewId;

        fetch(url)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    console.log("Could not get review by id");
                }
            })
            .then(json => {
                return json.popularity;
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        // console.log(this.props.match);
        return (
            <Container maxWidth={false} className={styles.padding_bottom} disableGutters={true}>
                <Banner />
                <Container maxWidth='lg'>
                    <Box pt={4}>
                        <Grid container>
                            <Grid item xs={12} sm={8}>
                                <Box>
                                    <Typography variant="h4" className={styles.title}>{this.props.app.state.targetReview.title}</Typography>

                                    <Box display='flex' justifyContent='flex-start' justifyItems='flex-end'>
                                        <div className={styles.author}>
                                            {this.props.app.state.targetReview.userName}
                                        </div>
                                        <Rating
                                            value={this.props.app.state.targetReview.rating}
                                            precision={0.5}
                                            readOnly={true}
                                            size={"small"}
                                        />
                                    </Box>
                                </Box>
                                <Box pt={3}>
                                    {this.props.app.state.targetReview.contents}
                                </Box>
                                <Box pt={1} display='flex' alignItems='center' justifyContent='flex-end'>
                                    <IconButton edge='start' onClick={() => this.handleLikeReview(this)} disabled={!this.props.app.state.currentUser}>
                                        <FavoriteIcon fontSize='small' color={this.state.click ? "primary" : "secondary"} />
                                    </IconButton>
                                    <span className={styles.likeCount} >{this.state.popularity}</span>
                                </Box>
                                <Box pt={5}>
                                    <SectionHeader headerText="You may also like" />
                                    {this.state.nextLoadingReviews.map(
                                        (rv, index) => (
                                            <Review key={index} bookId={rv.bookId} title={rv.title} author={rv.author} rating={(rv.rating)} reviewItem={rv} page={this.props.app} />
                                        )
                                    )}
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box pt={12} className={styles.center_text}>
                                    <BookCard media={this.state.media} title={this.state.author} book={this.state.book} page={this.props.app} />
                                    <div>Author: {this.state.author}</div>
                                    <div>Published: {this.state.published}</div>
                                    <ReveiwDialog book={this.state.book} />
                                </Box>



                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Container>
        )
    }
}

export default BookReview;