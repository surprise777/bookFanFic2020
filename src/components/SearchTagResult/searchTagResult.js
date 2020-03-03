import React from "react";
import Container from '../../containers/mui/container';
import styles from "./searchTagResult.module.css"
import {BookList} from '../../contents/recommendBooks';
import BookCard from '../BookCard/bookCard';
import Grid from '../../containers/mui/grid';
import { Box } from "@material-ui/core";
import Review from '../Review/review';
import SectionHeader from '../SectionHeader/sectionHeader';
import Footer from '../Footer/footer';
import User from '../../contents/dummyData/user';
import SideBar from '../SideBar/sideBar';
import Books from '../../contents/dummyData/book';
import SearchResultContent from '../../contents/searchResult';
import UserCard from '../UserCard/userCard';

class SearchTag extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.state.header.input)
        this.state = {
            searchTitle: this.props.state.header.input,
            searchBook: BookList,
            searchReview: Books,
            searchComment: User,
        }
        console.log(this.props.state.header.input)
    

    }
    render(){
        const reg = new RegExp(this.state.searchTitle)
        return(
            <Container maxWidth={false} disableGutters={true}>
                <Box className={styles.padding_bottom}>
                <Container maxWidth='lg'>
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <Box px={6} pt={4}>
                            <SectionHeader headerText={SearchResultContent.tag1+ this.state.searchTitle+ SearchResultContent.endComa} />
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
                            <SectionHeader headerText={SearchResultContent.tag2 + this.state.searchTitle+ SearchResultContent.endComa } />
                            <Grid  fullWidth
                                        container
                                        justify="space-between"
                                        alignItems="center">
                                {User.filter(u => reg.test(u.userName)).map((us, index) => (<Grid container item xs={12} sm={6} key={index}>
                                <UserCard icon_url={us.icon_url} name={us.userName} signature={us.signature}/>
                                </Grid>) )}
                            </Grid>
                        </Box>

                        <Box px={6} pt={4} className={styles.overWidth}>
                            <SectionHeader headerText={SearchResultContent.tag3+ this.state.searchTitle+ SearchResultContent.endComa} />
                            {Books.filter(b => reg.test(b.title)).map(
                                (book, index) => (<Review key={index} src={book.image} title={book.title} author={book.author} rating={book.rating}/>)
                            )}                           
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

export default SearchTag;