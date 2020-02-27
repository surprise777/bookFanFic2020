import React from "react";
import Container from '../../containers/mui/container';
import styles from "./home.module.css"
import {BookList} from '../../contents/recommendBooks';
import BookCard from '../BookCard/bookCard';
import Grid from '../../containers/mui/grid';
import { Typography } from "@material-ui/core";
class Home extends React.Component{

    render(){
        // const {login_status} = this.props.state;
        return(
            <Container maxWidth={false} className={styles.no_padding}>
                <div className={styles.home_bg}>
                    <div>
                        <div className={styles.caption}></div>
                    </div>
                </div>
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