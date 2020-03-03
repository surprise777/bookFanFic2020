import React from "react";
import Container from '../../containers/mui/container';
import styles from "./searchResult.module.css"
import {BookList} from '../../contents/recommendBooks';
import BookCard from '../BookCard/bookCard';
import Grid from '../../containers/mui/grid';
import { Box } from "@material-ui/core";
import Review from '../Review/review';
import SectionHeader from '../SectionHeader/sectionHeader';
import Footer from '../Footer/footer';
import comments from '../../contents/commentCollection';
import SideBar from '../SideBar/sideBar';
<<<<<<< HEAD
import SearchResultContent from '../../contents/searchResult';
=======
import UserCard from '../UserCard/userCard';
>>>>>>> 7f6e611aa2199143e35bcdfb86b073fe02b200bd

class Search extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.state.header.input)
        this.state = {
            searchTitle: this.props.state.header.input,
            searchBook: BookList,
            searchReview: Review,
            searchComment: comments,
        }
        console.log(this.props.state.header.input)
    

    }
    render(){
        const user = {
            icon_url: require("../../static/Profile/icon.jpg"),
            name: "Hina",
            signature: "This guy is lazy, he haven't write anything yet."
        }
        const reg = new RegExp(this.state.searchTitle)
        return(
            <Container maxWidth={false} disableGutters={true}>
                <Box className={styles.padding_bottom}>
                <Container maxWidth='lg'>
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <Box px={6} pt={4}>
                            <SectionHeader headerText={"Books with '"+ this.state.searchTitle+ "'"} />
                            <Grid  fullWidth
                                        container
                                        justify="space-between"
                                        alignItems="center">
                                {BookList.filter(bk => reg.test(bk.title)).map((book, index) => (<Grid container item xs={12} sm={6} md={4} lg={3} className={styles.cardLayout} key={index} justify="center">
                                    <BookCard media={book.image} title={book.title} book={book} />
                                </Grid>) )}
                            </Grid>
                        </Box>

                        <Box px={6} pt={4}>
                            <SectionHeader headerText={"Comments with '" + this.state.searchTitle+ "'" } />
                            <Grid  fullWidth
                                        container
                                        justify="space-between"
                                        alignItems="center">
                                {BookList.filter(bk => reg.test(bk.title)).map((book, index) => (<Grid container item xs={12} sm={6} md={4} lg={3} className={styles.cardLayout} key={index} justify="center">
                                    <BookCard media={book.image} title={book.title} book={book} />
                                </Grid>) )}
                            </Grid>
                        </Box>

                        <Box px={6} pt={4} className={styles.overWidth}>
                            <SectionHeader headerText={"Reviews with '"+ this.state.searchTitle+ "'"} />
                            <Review src={require("../../static/book-cover/harrypotter.jpg")} title='Welcome to Hogwarts' author='Beyond the sky' rating={4}/>
                            <UserCard user={user}/>
                            <UserCard user={user}/>
                        </Box>
                    </Grid>
                    <SideBar/>
                </Grid>
                </Container>
                </Box>
                <Footer/>
            </Container>
        )
    }
}

export default Search;