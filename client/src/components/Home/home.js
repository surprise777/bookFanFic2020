import React from "react";
import Container from '../../containers/mui/container';
import styles from "./home.module.css"
import BookCard from '../BookCard/bookCard';
import Grid from '../../containers/mui/grid';
import { Typography, Box } from "@material-ui/core";
import Review from '../Review/review';
import SectionHeader from '../SectionHeader/sectionHeader';
import Footer from '../Footer/footer';
import SideBar from '../SideBar/sideBar';
import HomeContent from '../../contents/home';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.findBookCoverById = this.findBookCoverById.bind(this)
        this.getMonthlyRec = this.getMonthlyRec.bind(this)
        this.getMostPopularReviews = this.getMostPopularReviews.bind(this)
        this.getTrending = this.getTrending.bind(this)
        this.getPopularGenres = this.getPopularGenres.bind(this)
        this.getMonthlyRec(this.props.app)
        this.getMostPopularReviews(this.props.app)
        this.getTrending(this.props.app)
        this.getPopularGenres(this.props.app)
    }

    findBookCoverById(bookId) {
        const url = "/book/searchById/" + bookId;

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

    getMonthlyRec(page) {
        const url = "/book/monthRecommendation";

        fetch(url)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    console.log("Error: Could not get monthly books.")
                }
            })
            .then(json => {
                page.setState({ monthly: json });
            })
            .catch(error => {
                console.log(error);
            });
    };

    getMostPopularReviews(page) {
        const url = "/review/mostPopular";

        fetch(url)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    console.log("Error: Could not get popular reviews.")
                }
            })
            .then(json => {
                page.setState({ popularReviews: json });
            })
            .catch(error => {
                console.log(error);
            });
    };

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

    getPopularGenres(page) {
        const url = "/book/popularGenres";

        fetch(url)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    console.log("Error: Could not get monthly books.")
                }
            })
            .then(json => {
                page.setState({ popularTags: json });
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {

        return (
            <Container maxWidth={false} disableGutters={true}>
                <Box className={styles.padding_bottom}>
                    <Box className={styles.home_bg} display="flex" justifyContent="center" alignItems="center">
                        <div className={styles.caption}>
                            <Typography variant='h3'>{HomeContent.banner_title}</Typography>
                            <Typography variant='h4'>{HomeContent.banner_subtitle}</Typography>
                        </div>
                    </Box>
                    <Container maxWidth='lg'>
                        <Grid container>
                            <Grid item xs={12} md={8}>
                                <Box px={6} pt={4}>
                                    <SectionHeader headerText={HomeContent.sec_header1} />
                                    <Grid fullWidth
                                        container
                                        justify="flex-start"
                                        alignItems="center">
                                        {this.props.app.state.monthly.map((book, index) => (<Grid container item xs={12} sm={6} md={4} lg={3} className={styles.cardLayout} key={index} justify="center">
                                            <BookCard media={book.cover_url} title={book.brefTitle} book={book} page={this.props.app} />
                                        </Grid>))}
                                    </Grid>
                                </Box>

                                <Box px={6} pt={4}>
                                    <SectionHeader headerText={HomeContent.popular_review} />
                                    {this.props.app.state.popularReviews.map(
                                        (rv, index) => (
                                            <Review key={index} bookId={rv.bookId} title={rv.title} author={rv.userName} rating={(rv.rating)} reviewItem={rv} page={this.props.app} />
                                        )
                                    )}
                                </Box>
                            </Grid>
                            <SideBar tags={this.props.app.state.popularTags} trending={this.props.app.state.trending} page={this.props.app} />
                        </Grid>
                    </Container>
                </Box>
                <Footer />
            </Container>
        )
    }
}

export default Home;