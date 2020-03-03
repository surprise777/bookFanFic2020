import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './bookDetails.module.css';
import Container from '../../containers/mui/container';
import Grid from '../../containers/mui/grid';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import Banner from '../Banner/banner';
import Card from '@material-ui/core/Card';
import SectionHeader from '../SectionHeader/sectionHeader';
import CommentSection from '../CommentSection/commentSection';
import BookDetailsContent from '../../contents/bookDetails';

import Tags from '../Tags/tags';


class BookDetail extends React.Component {
    render() {
        const url = BookDetailsContent.url;
        const style = {
            backgroundImage: `url(${url})`
        }
        const rating = BookDetailsContent.book.rating;
        return (
            <Container maxWidth={false} disableGutters={true}>
                <Banner />
                <Container maxWidth='lg'>
                    <Box pt={8}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={8}>
                            <Grid container spacing={0}>
                                <Grid item xs={12} md={3}>
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <Box>
                                            <Card className={styles.cardLayout} style={style}>
                                            </Card>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <Container maxWidth='lg'>
                                    <Box pt={1}>
                                    <Typography variant="h4">{BookDetailsContent.book.title}</Typography>
                                    </Box>
                                    <Box pt={2}>
                                        <div>Author: {BookDetailsContent.book.author}</div>
                                        <div>Published: {BookDetailsContent.book.published}</div>
                                        <div>Gneres: {BookDetailsContent.book.genres}</div>
                                        <div>Id: {BookDetailsContent.book.id}</div>
                                    </Box>
                                    </Container>
                                </Grid>
                            </Grid>
                            <Container maxWidth='lg'>
                                <Box pt={6}>
                                <SectionHeader headerText="Description" />
                                <Container maxWidth='lg'>
                                    <Box pt={1}>
                                        {BookDetailsContent.book.description}
                                    </Box>
                                </Container>
                                </Box>
                                <Box pt={10}>
                                    <SectionHeader headerText="Comments"/>
                                    <CommentSection/>
                                </Box>
                            </Container>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box pt={4} className={styles.shrink}>
                                <SectionHeader headerText="Rating" />
                                <Box className={styles.padding_left}>
                                    <Rating
                                        value={4.53}
                                        precision={0.5}
                                        readOnly={true}
                                        size={"medium"}
                                    />
                                    
                                    <Typography variant='h4' className={styles.rating}>{rating}</Typography>
                                    <div>{BookDetailsContent.book.numOfRating}</div>
                                    
                                </Box>
                            </Box>
                            <Box pt={4} className={styles.shrink}>
                                <SectionHeader headerText="Tags" />
                                <Tags tags={["western", "magic", "fantasy", "children"]} />
                            </Box>
                            <Box pt={6} className={styles.shrink}>
                                <SectionHeader headerText="Recent" />
                                <Box className={styles.trending} pb={2} pt={2}>
                                    <Box className={styles.padding_left}>
                                        <div className={styles.bookTitle}>{BookDetailsContent.relatedBook.title}</div>
                                        <div className={styles.author}>{BookDetailsContent.relatedBook.author}}</div>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    </Box>
                </Container>
            </Container>
        )
    }
}

export default BookDetail;
