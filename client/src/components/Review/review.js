import React from 'react';
import styles from './review.module.css';
import Grid from '../../containers/mui/grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';
import { RoutesMap } from '../../utils/routesMap';
import { Box } from "@material-ui/core";
import {getReviewById} from '../../actions/review';
import {getBookCover} from "../../actions/book";
class Review extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bookId: this.props.bookId,
            cover_url: ""
        }

        getBookCover(this);
    }

    render() {
        const { title, author, rating, reviewItem, page } = this.props;
        const {cover_url} = this.state;
        console.log(cover_url)
        return (
            <Box pt={1} pb={1} className={styles.outline_bottom}>
                <Grid container className={styles.review} spacing={1}>
                    <Grid item xs={12} sm={2}>
                        <Box display='flex' justifyContent='center' justifyItems='center'>
                            <CardMedia>
                                <img alt="" src={cover_url} className={styles.cardMedia}></img>
                            </CardMedia>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <Link onMouseOver={() =>getReviewById(reviewItem._id, page)} id={reviewItem.title} to={RoutesMap.BookReview.path} className={styles.no_decor}> <Typography variant="h6" className={styles.fullLink}> {title}</Typography></Link>


                        <Box display='flex' justifyContent='flex-start' alignContent='center'>
                            <div className={styles.author}>
                                {author}
                            </div>
                            <Rating
                                value={rating}
                                precision={0.5}
                                readOnly={true}
                                size={"small"}
                            />
                        </Box>
                        <div>
                        <Link onMouseOver={() =>getReviewById(reviewItem._id, page)} id={reviewItem.title} to={RoutesMap.BookReview.path} className={styles.no_decor}>{reviewItem.contents}<span className={styles.fullLink}>full</span></Link>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default Review;