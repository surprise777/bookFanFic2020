import React from "react";
import Container from '../../containers/mui/container';
import styles from "./home.module.css"
import {BookList} from '../../contents/recommendBooks';
import BookCard from '../BookCard/bookCard';
import Grid from '../../containers/mui/grid';
class Home extends React.Component{

    render(){
        // const {login_status} = this.props.state;
        return(
                <Container fullWidth className={styles.homeLayout}>
                <Grid  fullWidth
                            container
                            justify="space-between"
                            alignItems="center">
                {BookList.map((book, index) => (<Grid container item xs={12} sm={6} md={4} lg={3} className={styles.cardLayout} key={index} justify="center">
                    <BookCard media={book.image} title={book.title} book={book} />
                </Grid>) )}
                                </Grid>
                    </Container>
        )
    }
}

export default Home;