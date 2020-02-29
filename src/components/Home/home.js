import React from "react";
import Container from '../../containers/mui/container';
import styles from "./home.module.css"
import {BookList} from '../../contents/recommendBooks';
import BookCard from '../BookCard/bookCard';
import Grid from '../../containers/mui/grid';
import { Typography, Box } from "@material-ui/core";
import Review from '../Review/review';
class Home extends React.Component{

    render(){

        return(
            <Container maxWidth={false} className={styles.padding_bottom} disableGutters={true}>
                <Box className={styles.home_bg} display="flex" justifyContent="center" alignItems="center">
                    <div className={styles.caption}>
                        <Typography variant='h3'>Books,</Typography>
                        <Typography variant='h4'>Bring to a Journey you have never experienced before</Typography>
                    </div>
                </Box>
                <Container maxWidth='lg'>
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <Box px={6} pt={4} className={styles.homeLayout}>
                            <div className={styles.section_header}>
                                    <strong>Books of the month</strong>
                            </div>
                            <Grid  fullWidth
                                        container
                                        justify="space-between"
                                        alignItems="center">
                                {BookList.map((book, index) => (<Grid container item xs={12} sm={6} md={4} lg={3} className={styles.cardLayout} key={index} justify="center">
                                    <BookCard media={book.image} title={book.title} book={book} />
                                </Grid>) )}
                            </Grid>
                        </Box>

                        <Box px={6} pt={4} className={styles.homeLayout}>
                            <div className={styles.section_header}>
                                    <strong>You may like</strong>
                            </div>
                            <Grid  fullWidth
                                        container
                                        justify="space-between"
                                        alignItems="center">
                                {BookList.map((book, index) => (<Grid container item xs={12} sm={6} md={4} lg={3} className={styles.cardLayout} key={index} justify="center">
                                    <BookCard media={book.image} title={book.title} book={book} />
                                </Grid>) )}
                            </Grid>
                        </Box>

                        <Box px={6} pt={4} className={styles.homeLayout}>
                            <div className={styles.section_header}>
                                    <strong>Popular review</strong>
                            </div>
                            <Review src={"../../static/book-cover/harrypotter.jpg"} title='The rise of a legend - Arthur' author='chasing star' rating={5}/>
                            <Review src={"../../static/book-cover/harrypotter.jpg"} title='Welcome to Hogwarts' author='Beyond the sky' rating={4}/>
                        </Box>
                    </Grid>
                    <Grid item xs>
                        <Box px={6} pt={10}>
                            <div className={styles.section_header}>
                                    <strong>Popular tags</strong>
                            </div>
                            
                        </Box>
                        <Box px={6} pt={8}>
                            <div className={styles.section_header}>
                                    <strong>Trending</strong>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
                </Container>
            </Container>
        )
    }
}

export default Home;