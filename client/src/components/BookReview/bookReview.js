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
            // targetReview: this.props.state.selectedReview,
            // allReview: this.props.state.review,
            // click: this.props.state.selectedReview.fanList.filter(u => this.props.state.current.userName === u).length !== 0,
            // counter: this.props.state.selectedReview.popularity
        }
        // console.log(this.props.state.selectedReview)
        // console.log(this.props.state.selectedReview.email)
        this.findBookCoverById = this.findBookCoverById.bind(this)
        this.findBookAuthorById = this.findBookAuthorById.bind(this)
        this.findBookPublishedById = this.findBookPublishedById.bind(this)
        this.findBookTitleById = this.findBookTitleById.bind(this)
        // this.findBookById = this.findBookById.bind(this)

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

    findBookCoverById(bookId){
        const url = "/book/searchById/"+bookId;
    
        fetch(url)
            .then(res => {
                if (res.status === 200) {
                    return res.json().cover_url;
                } else {
                    console.log("Could not get book cover url by id");
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    findBookAuthorById(bookId){
        const url = "/book/searchById/"+bookId;
    
        fetch(url)
            .then(res => {
                if (res.status === 200) {
                    return res.json().author;
                } else {
                    console.log("Could not get book cover url by id");
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    findBookPublishedById(bookId){
        const url = "/book/searchById/"+bookId;
    
        fetch(url)
            .then(res => {
                if (res.status === 200) {
                    return res.json().published;
                } else {
                    console.log("Could not get book cover url by id");
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    findBookById(bookId){
        const url = "/book/searchById/"+bookId;
    
        fetch(url)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    console.log("Could not get book cover url by id");
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    findBookTitleById(bookId){
        const url = "/book/searchById/"+bookId;
    
        fetch(url)
            .then(res => {
                if (res.status === 200) {
                    return res.json().title;
                } else {
                    console.log("Could not get book cover url by id");
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
                                    <IconButton edge='start'>
                                        {this.createThumbUpButton()}
                                    </IconButton>
                                    <span className={styles.likeCount}>{this.props.app.state.targetReview.popularity}</span>
                                </Box>
                                {/* <Box pt={5}>
                                    <SectionHeader headerText="You may also like" />
                                    {this.state.allReview.filter((r) => r.book === this.state.targetBook.brefTitle).map(
                                        (rv, index) => (
                                            <Review key={index} src={this.state.targetBook.image} title={rv.title} author={this.state.allUser.filter(u => u.email === rv.email)[0].userName} rating={(rv.rating)} reviewItem={rv} />
                                        )
                                    )}
                                </Box> */}
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box pt={12} className={styles.center_text}>
                                    <BookCard media={this.findBookCoverById(this.props.app.state.targetReview.bookId)} title={this.findBookTitleById(this.props.app.state.targetReview.bookId)} book={this.findBookById(this.props.app.state.targetReview.bookId)} page={this.props.app} />
                                    <div>Author: {this.findBookAuthorById(this.props.app.state.targetReview.bookId)}</div>
                                    <div>Published: {this.findBookPublishedById(this.props.app.state.targetReview.bookId)}</div>
                                    <ReveiwDialog />
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