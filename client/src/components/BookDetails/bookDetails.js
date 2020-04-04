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
// import {getReleventById} from '../../actions/book';
import SideBar from '../SideBar/sideBar';
class BookDetail extends React.Component {
    constructor(props) {
        super(props)
        // console.log(this.props.state.login_status)
        // this.state = {
            // allUser: this.props.state.user,
            // targetBook: this.props.app.state.targetBook,
            // allReview: this.props.state.review,
            // allComment: this.props.state.comment,
            // targetComents: this.props.state.comment.filter(c => c.book === this.props.state.selectedBook.brefTitle),
            // targetReviews: this.props.state.review.filter((r) => r.book === this.props.state.selectedBook.brefTitle),
            // currentComents: this.props.state.comment.filter(c => c.book === this.props.state.selectedBook.brefTitle).slice(0, 1),
            // currentReviews: this.props.state.review.filter((r) => r.book === this.props.state.selectedBook.brefTitle).slice(0,1),
            // pageSize: 1,
            // commentOffset: 0,
            // reviewOffset: 0,
        // }
        // this.handleSelectedBook = this.handleSelectedBook.bind(this)
        // this.searchingTagChange = this.searchingTagChange.bind(this)
        // this.commentPageNext = this.commentPageNext.bind(this)
        // this.commentCurrentPage = this.commentCurrentPage.bind(this)
        // this.reviewPageNext = this.reviewPageNext.bind(this);
        // this.reviewCurrentPage = this.reviewCurrentPage.bind(this)
        // this.getReleventById = this.getReleventById.bind(this)
        // console.log(this.props.app.state.targetBook)
        // this.getReleventById(this.props.app.state.targetBook._id, this.props.app)
        this.getTrending = this.getTrending.bind(this)
        this.getTrending(this.props.app)

    }
    
    // getReleventById(bookId, page){
    //     const url = "/book/relevant/"+bookId;
    //     console.log(this.props.app.state.targetBook)
    //     console.log(bookId)
    //     fetch(url)
    //         .then(res => {
    //             if (res.status === 200) {
    //                 console.log(res.json)
    //                 return res.json();
    //             } else {
    //                 console.log("Could not get relevent books");
    //             }
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // };
    

    // commentCurrentPage(num) {
    //     this.setState({
    //         currentComents: this.state.targetComents.slice(0, num + this.state.pageSize)
    //     })
    // }

    // commentPageNext() {
    //     this.setState({
    //         commentOffset: this.state.commentOffset + this.state.pageSize
    //     })
    //     this.commentCurrentPage(this.state.commentOffset)
    // }

    // reviewCurrentPage(num) {
    //     this.setState({
    //         currentComents: this.state.targetComents.slice(0, num + this.state.pageSize)
    //     })
    // }

    // reviewPageNext() {
    //     this.setState({
    //         reviewOffset: this.state.reviewOffset + this.state.pageSize
    //     })
    //     this.reviewCurrentPage(this.state.reviewOffset)
    // }


    // async searchingTagChange(e) {
    //     e.persist()
    //     this.setState({ input: e.target.innerText })
    //     let tempState = this.props.state
    //     tempState.header.input = e.target.innerText
    //     console.log(tempState.header.input)
    //     this.props.handler(tempState)

    // }

    // async handleSelectedBook(e) {
    //     let tempState = this.props.state
    //     tempState.selectedBook = this.props.state.book.filter(b => b.brefTitle === e.target.innerText)[0]
    //     console.log(tempState)
    //     await this.props.handler(tempState)

    // }
    
    getTrending(page){
        const url = "/book/trending";
    
        fetch(url)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    console.log( "Error: Could not get trending books.")
                }
            })
            .then(json => {
                page.setState({ trending: json });
            })
            .catch(error => {
                console.log(error);
            });
    };

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
                                                <Grid container alignItems="center"><Grid item xs={1}>Gneres: </Grid><Grid item xs={11}><Tags tags={this.props.app.state.targetBook.genres} page={this.props.app}/></Grid></Grid>
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
                                        <CommentSection bookId={this.props.app.state.targetBook._id} currentUser={this.props.app.state.currentUser}/>
                                    </Box>
                                    {/*
                                    <Box pt={10}>
                                        <SectionHeader headerText="Reviews" />
                                        <Box display='flex' justifyContent='flex-end'>
                                            <ReveiwDialog />
                                        </Box>
                                        {this.state.currentReviews.map(
                                            (rv, index) => (
                                                <Review key={index} src={this.state.targetBook.image} title={rv.title} author={this.state.allUser.filter(u => u.email === rv.email)[0].userName} rating={(rv.rating)} reviewItem={rv} />
                                            )
                                        )}
                                         <Box display='flex' justifyContent='flex-end'>
                                         <Button color='secondary' onClick={this.reviewPageNext}>show more</Button></Box>
                                    </Box>*/}
                                </Container>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box pt={4} className={styles.shrink}>
                                    <SectionHeader headerText="Rating" />
                                    <Box className={styles.padding_left}>
                                        <Rating
                                            value={this.props.app.state.targetBook.rating}
                                            precision={0.5}
                                            readOnly={true}
                                            size={"medium"}
                                        />

                                        <Typography variant='h4' className={styles.rating}>{this.props.app.state.targetBook.rating}</Typography>
                                        <div>{this.props.app.state.targetBook.numOfRating}</div>

                                    </Box>
                                </Box>
                                {/* <Box pt={4} className={styles.shrink}>
                                    <SectionHeader headerText="Tags" />
                                    <Tags tags={this.props.app.state.targetBook.genres} page={this.props.app} />
                                </Box> */}
                                {/* <Box pt={6} className={styles.shrink}>
                                    <SectionHeader headerText="Relevant" />
                                    <Box className={styles.trending} pb={2} pt={2}>
                                        <Box className={styles.padding_left}>
                                            {this.state.targetBook.relatedBook.map((b, index) => <React.Fragment key={index}><div className={styles.bookTitle} onClick={this.handleSelectedBook} >{b.title}</div>
                                                <div className={styles.author}>{b.author}}</div></React.Fragment>)}
                                        </Box>
                                    </Box>
                                </Box> */}
                             <Box pt={10} className={styles.shrink}>
                            <SideBar tags={this.props.app.state.targetBook.genres} trending={this.props.app.state.trending} page={this.props.app}/>
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
