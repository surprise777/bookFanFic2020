import React from 'react';
import styles from './bookReview.module.css';
import Container from '../../containers/mui/container';
import Box from "@material-ui/core/Box";
import Grid from '../../containers/mui/grid';
import Banner from '../Banner/banner';
import Rating from '@material-ui/lab/Rating';
import BookCard from '../BookCard/bookCard';
import SectionHeader from '../SectionHeader/sectionHeader';
import CommentSection from '../CommentSection/commentSection';
import {Typography} from '@material-ui/core';

class BookReview extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props.state.login_status)
        this.state = {
            allUser: this.props.state.user,
            targetBook:this.props.state.book.filter(b => b.brefTitle === this.props.state.selectedReview.book),
            targetUser: this.props.state.user.filter(u => u.email === this.props.state.selectedReview.email),
            targetReview: this.props.state.selectedReview,
        }
        console.log(this.props.state.selectedReview)
        console.log(this.props.state.selectedReview.email)

    }

    render() {
        console.log(this.props.match);
        return (
            <Container maxWidth={false} className={styles.padding_bottom} disableGutters={true}>
                    <Banner />
                    <Container maxWidth='lg'>
                        <Box pt={4}>
                        <Grid container>
                            <Grid item xs={12} sm={8}>
                                <Box>
                                    <Typography variant="h4" className={styles.title}>{this.state.targetReview.title}</Typography>
                                   
                                    <Box display='flex' justifyContent='flex-start' justifyItems='flex-end'>
                                    <div className={styles.author}>
                                        {this.state.targetUser[0].userName}
                                    </div>
                                    <Rating
                                        value={this.state.targetReview.rating}
                                        precision={0.5}
                                        readOnly={true}
                                        size={"small"}
                                    />
                                    </Box>
                                </Box>
                                <Box pt={3}>
                                    {this.state.targetReview.content.map(
                                        (paragraph, index) => <div key={index}>{paragraph}<br/><br/></div>
                                    )}
                                </Box>
                                <Box pt={5}>
                                <SectionHeader headerText="Comments"/>
                                <CommentSection/>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box pt={12} className={styles.center_text}>
                                <BookCard media={this.state.targetBook[0].image} title={this.state.targetBook[0].title} />
                                    <div>Author: {this.state.targetBook[0].author}</div>
                                    <div>Genres: {this.state.targetBook[0].genres}</div>
                                    <div>Published: {this.state.targetBook[0].published}</div>
                                </Box>
                            </Grid>
                        </Grid>
                        </Box>
                    </Container>
            </Container>
        )
    }
}

export default BookReview;