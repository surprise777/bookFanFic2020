import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './bookDetails.module.css';
import Container from '../../containers/mui/container';
import Grid from '../../containers/mui/grid';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import Banner from '../Banner/banner';
import SectionHeader from '../SectionHeader/sectionHeader';
import CommentSection from '../CommentSection/commentSection';
import ReveiwDialog from '../EditReviewDialog/editReviewDialog';
import Tags from '../Tags/tags';
import Review from '../Review/review';
import Button from '@material-ui/core/Button';
import { loadReviews, loadTopReview } from '../../actions/review';
import SideBar from '../SideBar/sideBar';
class BookDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            targetBook: this.props.app.state.targetBook,
            offset: 0,
            nextLoadingReviews: [],
            top_review: null,
            currentUser: this.props.app.state.currentUser,
        }
        this.getTrending = this.getTrending.bind(this)
        this.getTrending(this.props.app)
        loadReviews(this)
        loadTopReview(this)

    }

    getTrending(page) {
        const url = "/book/trending";

        fetch(url)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    console.log("Error: Could not get trending books.")
                }
            })
            .then(json => {
                page.setState({ trending: json });
            })
            .catch(error => {
                console.log(error);
            });
    };

    show_top_review() {
        if (!this.state.top_review || this.state.top_review.length === 0) {
            return;
        } else {
            const rv = this.state.top_review[0];
            return (<Review
                bookId={rv.bookId} title={rv.title} author={rv.userName} rating={(rv.rating)} reviewItem={rv} page={this.props.app}
            />);
        }
    }
    render() {

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
                                                <img className={styles.cardLayout} alt='' src={this.props.app.state.targetBook.cover_url}>
                                                </img>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={9}>
                                        <Container maxWidth='lg'>
                                            <Box pt={1}>
                                                <Typography variant="h4">{this.props.app.state.targetBook.title}</Typography>
                                            </Box>
                                            <Box pt={2}>
                                                <div>Author: {this.props.app.state.targetBook.author}</div>
                                                <div>Published: {this.props.app.state.targetBook.published}</div>
                                                <Grid container alignItems="center"><Grid item xs={1}>Gneres: </Grid><Grid item xs={11}><Tags tags={this.props.app.state.targetBook.genres} page={this.props.app} /></Grid></Grid>
                                            </Box>
                                        </Container>
                                    </Grid>
                                </Grid>
                                <Container maxWidth='lg'>
                                    <Box pt={6}>
                                        <SectionHeader headerText="Description" />
                                        <Container maxWidth='lg'>
                                            <Box pt={1}>
                                                {this.props.app.state.targetBook.description}
                                            </Box>
                                        </Container>
                                    </Box>
                                    <Box pt={10}>
                                        <SectionHeader headerText="Comments" />
                                        <CommentSection bookId={this.props.app.state.targetBook._id} currentUser={this.props.app.state.currentUser} />
                                    </Box>
                                    <Box pt={10}>
                                        <SectionHeader headerText="Reviews" />
                                        <Box>
                                            <div className={styles.hottest}>Top Review</div>
                                            {this.show_top_review()}
                                            <hr className={styles.bottom_padding} />
                                        </Box>
                                        <Box display='flex' justifyContent='flex-end'>
                                            <ReveiwDialog book={this.state.targetBook} />
                                        </Box>
                                        {this.state.nextLoadingReviews.map(
                                            (rv, index) => (
                                                <Review key={index} bookId={rv.bookId} title={rv.title} author={rv.userName} rating={(rv.rating)} reviewItem={rv} page={this.props.app} />
                                            )
                                        )}
                                        <Box display='flex' justifyContent='flex-end'>
                                            <Button color='secondary' onClick={() => { loadReviews(this) }}>show more</Button></Box>
                                    </Box>
                                </Container>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box pt={4} className={styles.shrink}>
                                    <SectionHeader headerText="Rating" />
                                    <Box className={styles.padding_left}>
                                        <Rating
                                            value={(this.props.app.state.targetBook.rating / this.props.app.state.targetBook.numRating).toFixed(2)}
                                            precision={0.5}
                                            readOnly={true}
                                            size={"medium"}
                                        />

                                        <Typography variant='h4' className={styles.rating}>{(this.props.app.state.targetBook.rating / this.props.app.state.targetBook.numRating).toFixed(2)}</Typography>
                                        <div>{this.props.app.state.targetBook.numRating} people has rated this book</div>

                                    </Box>
                                </Box>
                                <Box pt={10} className={styles.shrink}>
                                    <SideBar tags={this.props.app.state.targetBook.genres} trending={this.props.app.state.trending} page={this.props.app} />
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
