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

class Home extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.state.login_status)
        this.state = {
            monthlyBook: this.props.state.book.filter((b) => b.monthRec),
            likeBook: this.props.state.book.filter((b) => !b.monthRec),
            pupReview: this.props.state.review.filter((r) => r.popularity < 10),
            allBook:  this.props.state.book,
            allUser: this.props.state.user,
            selectedBook:this.props.state.selectedBook,
            selectedReview: this.props.state.selectedReview,
            input: this.props.state.header.input,
        }
        this.handleSelectedBook = this.handleSelectedBook.bind(this)
        this.handleSelectedReview = this.handleSelectedReview.bind(this)
        this.searchingChange = this.searchingChange.bind(this)
        this.searchingTagChange = this.searchingTagChange.bind(this)
    }

    async handleSelectedBook(e){
        let tempState = this.props.state
        tempState.selectedBook = this.props.state.book.filter(b => b.brefTitle === e.target.innerText)[0]
        console.log(tempState)
        await this.props.handler(tempState)

    }

    async handleSelectedReview(e){
        let tempState = this.props.state
        tempState.selectedReview = this.props.state.review.filter(r => r.title === e.target.innerText)[0]
        console.log(tempState.selectedReview)
        await this.props.handler(tempState)
        console.log(this.props.state.selectedReview)

    }

    async searchingChange(e){
        await this.setState({input: e.target.value})
        let tempState = this.props.state
        tempState.header.input = this.state.input
        console.log(tempState)
        this.props.handler(tempState)

    }

    async searchingTagChange(e){
        e.persist()
        this.setState({input: e.target.innerText})
        let tempState = this.props.state
        tempState.header.input = e.target.innerText
        console.log(tempState.header.input)
        this.props.handler(tempState)

    }


    render(){

        return(
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
                            <Grid  fullWidth
                                        container
                                        justify="space-between"
                                        alignItems="center">
                                {this.state.monthlyBook.map((book, index) => (<Grid container item xs={12} sm={6} md={4} lg={3} className={styles.cardLayout} key={index} justify="center">
                                    <BookCard media={book.image} title={book.brefTitle} book={book} handleSelectedBook={this.handleSelectedBook}/>
                                </Grid>) )}
                            </Grid>
                        </Box>

                        <Box px={6} pt={4}>
                            <SectionHeader headerText={HomeContent.sec_header2} />
                            <Grid  fullWidth
                                        container
                                        justify="space-between"
                                        alignItems="center">
                                {this.state.likeBook.map((book, index) => (<Grid container item xs={12} sm={6} md={4} lg={3} className={styles.cardLayout} key={index} justify="center">
                                    <BookCard media={book.image} title={book.title} book={book} handleSelectedBook={this.handleSelectedBook}/>
                                </Grid>) )}
                            </Grid>
                        </Box>

                        <Box px={6} pt={4} className={styles.overWidth}>
                            <SectionHeader headerText={HomeContent.popular_review} />
                            {this.state.pupReview.map(
                                (rv, index) => (
                                    <Review key={index} src={this.state.allBook.filter(b => b.brefTitle === rv.book)[0].image} title={rv.title} author={this.state.allUser.filter(u => u.email === rv.email)[0].userName} rating={(rv.rating)} reviewItem={rv} handleSelectedReview={this.handleSelectedReview}/>
                                )
                            )}
                        </Box>
                    </Grid>
                    <SideBar handleSearching={this.searchingTagChange} book={this.state.allBook} handleSelectedBook={this.handleSelectedBook}/>
                </Grid>
                </Container>
                </Box>
                <Footer/>
            </Container>
        )
    }
}

export default Home;