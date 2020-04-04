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
import {getBookById} from '../../actions/book';
class BookReview extends React.Component {
    constructor(props) {
        super(props)
        // console.log(this.props.state.login_status)
        this.state = {
            // allUser: this.props.state.user,
            // targetBook: this.props.state.book.filter(b => b.brefTitle === this.props.state.selectedReview.book)[0],
            //targetUser: this.props.state.user.filter(u => u.email === this.props.state.selectedReview.email),
            targetReview: this.props.app.state.targetReview,
            reviewId: this.props.app.state.targetReview._id,
            // allReview: this.props.state.review,
            click: this.checkLike(this.props.app.state.currentUser, this.props.app.state.targetReview._id),
            nextLoadingReviews: this.loadReviewsInTime(this.props.app.state.targetBook._id),
            media: this.props.app.state.targetBook.cover_url,
            title: this.props.app.state.targetBook.title,
            author: this.props.app.state.targetBook.author,
            book: this.props.app.state.targetBook,
            published: this.props.app.state.targetBook.published,
            popularity: this.props.app.state.targetReview.popularity
            // counter: this.props.state.selectedReview.popularity
        }
        //console.log(JSON.parse(this.state.nextLoadingReviews))
        // console.log(this.props.state.selectedReview.email)
        // this.findBookCoverById = this.findBookCoverById.bind(this)
        // this.findBookAuthorById = this.findBookAuthorById.bind(this)
        // this.findBookPublishedById = this.findBookPublishedById.bind(this)
        // this.findBookTitleById = this.findBookTitleById.bind(this)
        this.handleLikeReview = this.handleLikeReview.bind(this)
        this.checkLike = this.checkLike.bind(this)
        this.getPopularity = this.getPopularity.bind(this)
        // this.findBookById = this.findBookById.bind(this)
        this.loadReviewsInTime = this.loadReviewsInTime.bind(this)

    }

    createThumbUpButton() {
        if (this.state.click) {
            return (
                <FavoriteIcon fontSize='small' color='primary' />
            )
        } else {
            return (
                <FavoriteIcon fontSize='small' />
            )
        }
    }

    // clickhandler() {
    //     const clicked = this.state.click ? false : true;
    //     if (clicked) {
    //         this.setState({
    //             "click": clicked,
    //             "counter": this.state.counter + 1
    //         })
    //     } else {
    //         this.setState({
    //             "click": clicked,
    //             "counter": this.state.counter - 1
    //         })
    //     }
    // }
    
    handleLikeReview(page){

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
                    alert( "Like/Unlike review Failed.")
                    return
                }
            })   
            .then(json => {
                page.setState({ click: json.status });
            })
            .catch(error => {
                console.log(error);
            });
    };

    checkLike(user, reviewId){
        const url = "/review/byId/"+reviewId;
        if(!user){
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
    
    getPopularity(reviewId){
        const url = "/review/byId/"+reviewId;

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

    // findBookCoverById(bookId){
    //     const url = "/book/searchById/"+bookId;
    
    //     fetch(url)
    //         .then(res => {
    //             if (res.status === 200) {
    //                 return res.json().cover_url;
    //             } else {
    //                 console.log("Could not get book cover url by id");
    //             }
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // };

    // findBookAuthorById(bookId){
    //     const url = "/book/searchById/"+bookId;
    
    //     fetch(url)
    //         .then(res => {
    //             if (res.status === 200) {
    //                 return res.json().author;
    //             } else {
    //                 console.log("Could not get book cover url by id");
    //             }
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // };

    // findBookPublishedById(bookId){
    //     const url = "/book/searchById/"+bookId;
    
    //     fetch(url)
    //         .then(res => {
    //             if (res.status === 200) {
    //                 return res.json().published;
    //             } else {
    //                 console.log("Could not get book cover url by id");
    //             }
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // };

    // findBookById(bookId){
    //     const url = "/book/searchById/"+bookId;
    
    //     fetch(url)
    //         .then(res => {
    //             if (res.status === 200) {
    //                 return res.json();
    //             } else {
    //                 console.log("Could not get book cover url by id");
    //             }
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // };

    // findBookTitleById(bookId){
    //     const url = "/book/searchById/"+bookId;
    
    //     fetch(url)
    //         .then(res => {
    //             if (res.status === 200) {
    //                 return res.json().title;
    //             } else {
    //                 console.log("Could not get book cover url by id");
    //             }
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // };
    
    loadReviewsInTime(bookId){
        const url = "/review/loadReviews/"+bookId + "/0";
    
        fetch(url)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    console.log("Could not load next reviews");
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

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
                                    <IconButton edge='start' onClick={()=>this.handleLikeReview(this)} disabled={!this.props.app.state.currentUser}>
                                        {this.createThumbUpButton()}
                                    </IconButton>
                                    <span className={styles.likeCount} >{this.state.popularity}</span>
                                </Box>
                                <Box pt={5}>
                                    <SectionHeader headerText="You may also like" />
                                    {this.state.nextLoadingReviews.map(
                                        (rv, index) => (
                                            <Review key={index} src={this.state.media} title={rv.title} author={rv.author} rating={(rv.rating)} reviewItem={rv} page={this.props.app}/>
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