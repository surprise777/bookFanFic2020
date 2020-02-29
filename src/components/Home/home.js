import React from "react";
import Container from '../../containers/mui/container';
import styles from "./home.module.css"
import {BookList} from '../../contents/recommendBooks';
import BookCard from '../BookCard/bookCard';
import Grid from '../../containers/mui/grid';
import { Typography, Box } from "@material-ui/core";
import Review from '../Review/review';
import Tags from '../Tags/tags';
import Trending from '../Trending/trending';
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
                        <Box px={6} pt={4}>
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

                        <Box px={6} pt={4}>
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

                        <Box px={6} pt={4} className={styles.overWidth}>
                            <div className={styles.section_header}>
                                    <strong>Popular review</strong>
                            </div>
                            <Review src={require("../../static/book-cover/wheel_of_time.jpg")} title='The rise of a legend - Arthur' author='chasing star' rating={5}/>
                            <Review src={require("../../static/book-cover/harrypotter.jpg")} title='Welcome to Hogwarts' author='Beyond the sky' rating={4}/>
                        </Box>
                    </Grid>
                    <Grid item xs>
                        <Box px={6} pt={10}>
                            <div className={styles.section_header}>
                                    <strong>Popular tags</strong>
                            </div>
                            <Tags />
                        </Box>
                        <Box px={6} pt={8} className={styles.overWidth}>
                            <div className={styles.section_header}>
                                    <strong>Trending</strong>
                            </div>
                            <Trending />
                        </Box>
                        <Box px={6} pt={8}>
                            <div className={styles.section_header}>
                                    <strong>Contact us</strong>
                            </div>
                            <Container maxWidth='md'>
                                <div className={styles.contact}><strong>Email:</strong> readersclub@gmail.com</div>
                                <div className={styles.contact}><strong>Phone:</strong> 3285974683</div>
                            </Container>
                        </Box>
                    </Grid>
                </Grid>
                </Container>
            </Container>
        )
    }
}

export default Home;