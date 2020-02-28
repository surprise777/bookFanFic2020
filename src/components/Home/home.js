import React from "react";
import Container from '../../containers/mui/container';
import styles from "./home.module.css"
import {BookList} from '../../contents/recommendBooks';
import BookCard from '../BookCard/bookCard';
import Grid from '../../containers/mui/grid';
import { Typography, Box } from "@material-ui/core";
class Home extends React.Component{

    render(){

        return(
            <Container maxWidth={false} className={styles.no_padding} disableGutters={true}>
                <Box className={styles.home_bg} display="flex" justifyContent="center" alignItems="center">
                    <div className={styles.caption}>
                        <Typography variant='h3'>Books,</Typography>
                        <Typography variant='h4'>Bring to a Journey you have never experienced before</Typography>
                    </div>
                </Box>
                <br />
                <Container maxWidth='lg'>
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <Box px={6} pt={3} className={styles.homeLayout}>
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

                        <Box px={6} pt={3} className={styles.homeLayout}>
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

                        <Box px={6} pt={3} className={styles.homeLayout}>
                            <div className={styles.section_header}>
                                    <strong>Popular review</strong>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs mt={2}>
                        <Box px={6} pt={8}>
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