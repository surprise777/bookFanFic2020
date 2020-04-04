import React from "react";
import Container from '../../containers/mui/container';
import styles from "./searchTagResult.module.css"
import BookCard from '../BookCard/bookCard';
import Grid from '../../containers/mui/grid';
import { Box } from "@material-ui/core";
import Review from '../Review/review';
import SectionHeader from '../SectionHeader/sectionHeader';
import Footer from '../Footer/footer';
import SideBar from '../SideBar/sideBar';
import SearchResultContent from '../../contents/searchResult';
import UserCard from '../UserCard/userCard';

class SearchTag extends React.Component{
    constructor(props){
        super(props)
        // console.log(this.props.state.header.input)
        //     searchBook: this.props.state.book,
        //     searchReview: this.props.state.review,
        //     searchUser: this.props.state.user,
        //     selectedBook:this.props.state.selectedBook,
        //     selectedReview: this.props.state.selectedReview,
        //     selectedUser: this.props.state.selectedUser,
  
        // console.log(this.props.state.header.input)
        // this.handleSelectedBook = this.handleSelectedBook.bind(this)
        // this.handleSelectedReview = this.handleSelectedReview.bind(this)
        // this.searchingChange = this.searchingChange.bind(this)
        // this.searchingTagChange = this.searchingTagChange.bind(this)
        this.findBookCoverById = this.findBookCoverById.bind(this)
        this.getTrending = this.getTrending.bind(this)
        this.getPopularGenres = this.getPopularGenres.bind(this)
        this.getPopularGenres(this.props.app)
        this.getTrending(this.props.app)

    }

    // async handleSelectedBook(e){
    //     let tempState = this.props.state
    //     tempState.selectedBook = this.props.state.book.filter(b => b.brefTitle === e.target.innerText)[0]
    //     console.log(tempState)
    //     await this.props.handler(tempState)

    // }

    // async handleSelectedReview(e){
    //     let tempState = this.props.state
    //     tempState.selectedReview = this.props.state.review.filter(r => r.title === e.target.innerText)[0]
    //     console.log(tempState.selectedReview)
    //     await this.props.handler(tempState)
    //     console.log(this.props.state.selectedReview)

    // }

    // async searchingChange(e){
    //     await this.setState({searchTitle: e.target.value})
    //     let tempState = this.props.state
    //     tempState.header.input = this.state.searchTitle
    //     console.log(tempState)
    //     this.props.handler(tempState)

    // }

    // async searchingTagChange(e){
    //     e.persist()
    //     this.setState({input: e.target.innerText})
    //     let tempState = this.props.state
    //     tempState.header.input = e.target.innerText
    //     console.log(tempState.header.input)
    //     this.props.handler(tempState)

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

    getPopularGenres(page){
        const url = "/book/popularGenres";
    
        fetch(url)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    console.log( "Error: Could not get monthly books.")
                }
            })
            .then(json => {
                page.setState({ popularTags: json });
            })
            .catch(error => {
                console.log(error);
            });
    };

    render(){
        return(
            <Container maxWidth={false} disableGutters={true}>
                <Box className={styles.padding_bottom}>
                <Container maxWidth='lg'>
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <Box px={6} pt={4}>
                            <SectionHeader headerText={SearchResultContent.tag1+ this.props.app.state.searchInput+ SearchResultContent.endComa} />
                            <Grid  fullWidth
                                        container
                                        justify="space-between"
                                        alignItems="center">
                                {/* {this.state.searchBook.filter(bk => reg.test(bk.title)).map((book, index) => (<Grid container item xs={12} sm={6} md={4} lg={3} className={styles.cardLayout} key={index} justify="center"> */}
                                {this.props.app.state.searchBooks.map((book, index) => (<Grid container item xs={12} sm={6} md={4} lg={3} className={styles.cardLayout} key={index} justify="center">
                                    <BookCard media={book.image} title={book.title} book={book} page={this.props.app}  />
                                </Grid>) )}
                            </Grid>
                        </Box>

                        <Box px={6} pt={4}>
                            <SectionHeader headerText={SearchResultContent.tag2 + this.props.app.state.searchInput+ SearchResultContent.endComa } />
                            <Grid  fullWidth
                                        container
                                        justify="space-between"
                                        alignItems="center">
                                {/* {this.state.searchUser.filter(u => (reg.test(u.userName) && u.acctType !== 'a')).map((us, index) => (<Grid container item xs={12} sm={6} key={index}> */}
                                {this.props.app.state.searchUsers.map((us, index) => (<Grid container item xs={12} sm={6} md={4} lg={3} className={styles.cardLayout} key={index} justify="center">
                                <UserCard icon_url={us.icon_url} name={us.userName} signature={us.signature}/>
                                </Grid>) )}
                            </Grid>
                        </Box>

                        <Box px={6} pt={4} className={styles.overWidth}>
                            <SectionHeader headerText={SearchResultContent.tag3+ this.props.app.state.searchInput+ SearchResultContent.endComa} />
                            {/* {this.state.searchReview.filter(r => reg.test(r.title)).map( */}
                            {this.props.app.state.searchReviews.map(
                                (rv, index) => <Review key={index}src={this.findBookCoverById(rv.bookId)} title={rv.title} author={rv.userName} rating={(rv.rating)} reviewItem={rv} page={this.props.app} />
                            )}                           
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <SideBar tags={this.props.app.state.popularTags} trending={this.props.app.state.trending} page={this.props.app}/>
                </Grid></Grid>
                </Container>
                </Box>
                <Footer/>
            </Container>
        )
    }
}

export default SearchTag;