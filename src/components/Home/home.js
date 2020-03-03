import React from "react";
import Container from '../../containers/mui/container';
import styles from "./home.module.css"
import {BookList} from '../../contents/recommendBooks';
import BookCard from '../BookCard/bookCard';
import Grid from '../../containers/mui/grid';
import { Typography, Box } from "@material-ui/core";
import Review from '../Review/review';
import SectionHeader from '../SectionHeader/sectionHeader';
import Footer from '../Footer/footer';
import SideBar from '../SideBar/sideBar';
import HomeContent from '../../contents/home';

class Home extends React.Component{

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
                            <SectionHeader headerText="Books of the month" />
                            <Grid  fullWidth
                                        container
                                        justify="space-between"
                                        alignItems="center">
                                {BookList.map((book, index) => (<Grid container item xs={12} sm={6} md={4} lg={3} className={styles.cardLayout} key={index} justify="center">
                                    <BookCard media={book.image} title={book.title} book={book} />
                                </Grid>) )}
                            </Grid>
                        </Box>

                        <Box px={6} pt={4}>
                            <SectionHeader headerText="You may like" />
                            <Grid  fullWidth
                                        container
                                        justify="space-between"
                                        alignItems="center">
                                {BookList.map((book, index) => (<Grid container item xs={12} sm={6} md={4} lg={3} className={styles.cardLayout} key={index} justify="center">
                                    <BookCard media={book.image} title={book.title} book={book} />
                                </Grid>) )}
                            </Grid>
                        </Box>

                        <Box px={6} pt={4} className={styles.overWidth}>
                            <SectionHeader headerText={HomeContent.popular_review} />
                            {HomeContent.books.map(
                                (book) => (
                                    <Review src={book.image} title={book.title} author={book.author} rating={book.rating}/>
                                )
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

export default Home;