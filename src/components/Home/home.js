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
            <Container maxWidth={false} className={styles.no_padding}>
                <Box className={styles.home_bg} display="flex" justifyContent="center" alignItems="center">
                    <div className={styles.caption}>
                        <Typography variant='h1'>Readers Club</Typography>
                    </div>
                </Box>
                <br />
                <Container fullWidth className={styles.homeLayout}>
                <Typography variant="h4" className={styles.bold}>
                    This Month's top favourite:
                </Typography>
                <Grid  fullWidth
                            container
                            justify="space-between"
                            alignItems="center">
                {BookList.map((book, index) => (<Grid container item xs={12} sm={6} md={4} lg={3} className={styles.cardLayout} key={index} justify="center">
                    <BookCard media={book.image} title={book.title} book={book} />
                </Grid>) )}
                                </Grid>
                </Container>
            </Container>
        )
    }
}

export default Home;