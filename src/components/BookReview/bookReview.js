import React from 'react';
import styles from './bookReview.module.css';
import Container from '../../containers/mui/container';
import Box from "@material-ui/core/Box";
import Grid from '../../containers/mui/grid';
import Banner from '../Banner/banner';
import Rating from '@material-ui/lab/Rating';
import BookCard from '../BookCard/bookCard';
import SectionHeader from '../SectionHeader/sectionHeader';
import CommentSection from '../CommentSection/commentSection';
import {Typography} from '@material-ui/core';
import BookReviewContent from '../../contents/bookReview';

class BookReview extends React.Component {
    render() {
        console.log(this.props.match);
        return (
            <Container maxWidth={false} className={styles.padding_bottom} disableGutters={true}>
                    <Banner />
                    <Container maxWidth='lg'>
                        <Box pt={4}>
                        <Grid container>
                            <Grid item xs={12} sm={8}>
                                <Box>
                                    <Typography variant="h4" className={styles.title}>{BookReviewContent.review.title}</Typography>
                                   
                                    <Box display='flex' justifyContent='flex-start' justifyItems='flex-end'>
                                    <div className={styles.author}>
                                        {BookReviewContent.review.author}
                                    </div>
                                    <Rating
                                        value={4}
                                        precision={0.5}
                                        readOnly={true}
                                        size={"small"}
                                    />
                                    </Box>
                                </Box>
                                <Box pt={3}>
                                    {BookReviewContent.review.content.map(
                                        (paragraph, index) => <div key={index}>{paragraph}<br/><br/></div>
                                    )}
                                </Box>
                                <Box pt={5}>
                                <SectionHeader headerText="Comments"/>
                                <CommentSection/>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box pt={12} className={styles.center_text}>
                                <BookCard media={BookReviewContent.book.photo} title={BookReviewContent.book.title} />
                                    <div>Author: {BookReviewContent.book.author}</div>
                                    <div>Genres: {BookReviewContent.book.genres}</div>
                                    <div>Published: {BookReviewContent.book.published}</div>
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