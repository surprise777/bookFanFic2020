import React from 'react';
import styles from './bookReview.module.css';
import Container from '../../containers/mui/container';
import Box from "@material-ui/core/Box";
import Grid from '../../containers/mui/grid';
import Banner from '../Banner/banner';
import Rating from '@material-ui/lab/Rating';
import BookCard from '../BookCard/bookCard';
import SectionHeader from '../SectionHeader/sectionHeader';
import {Typography} from '@material-ui/core';
import Review from '../Review/review';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ReveiwDialog from '../EditReviewDialog/editReviewDialog';

class BookReview extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props.state.login_status)
        this.state = {
            allUser: this.props.state.user,
            targetBook:this.props.state.book.filter(b => b.brefTitle === this.props.state.selectedReview.book)[0],
            targetUser: this.props.state.user.filter(u => u.email === this.props.state.selectedReview.email),
            targetReview: this.props.state.selectedReview,
            allReview: this.props.state.review,
            click: this.props.state.selectedReview.fanList.filter(u => this.props.state.current.userName === u).length !== 0,
            counter: this.props.state.selectedReview.popularity
        }
        console.log(this.props.state.selectedReview)
        console.log(this.props.state.selectedReview.email)

    }

    createThumbUpButton(){
        if (this.state.click)
        {
            return (
                <FavoriteIcon fontSize='small' color='primary'/>
            )
        }else{
            return (
                <FavoriteIcon fontSize='small'/>
            )
        }
    }

    clickhandler(){
        const clicked = this.state.click ? false : true;
        if (clicked){
            this.setState({
                "click": clicked,
                "counter": this.state.counter + 1
            })
        }else{
            this.setState({
                "click": clicked,
                "counter": this.state.counter - 1
            })
        }
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
                                <Box pt={1} display='flex' alignItems='center' justifyContent='flex-end'>
                    <IconButton edge='start' onClick={this.clickhandler.bind(this)}>
                        {this.createThumbUpButton()}
                    </IconButton>
                        <span className={styles.likeCount}>{this.state.counter}</span>
                    </Box>
                                <Box pt={5}>
                                <SectionHeader headerText="You may also like"/>
                                {this.state.allReview.filter((r)=>r.book === this.state.targetBook.brefTitle).map(
                                (rv, index) => (
                                    <Review key={index} src={this.state.targetBook.image} title={rv.title} author={this.state.allUser.filter(u => u.email === rv.email)[0].userName} rating={(rv.rating)} reviewItem={rv}/>
                                )
                            )}
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box pt={12} className={styles.center_text}>
                                <BookCard media={this.state.targetBook.image} title={this.state.targetBook.title} />
                                    <div>Author: {this.state.targetBook.author}</div>
                                    <div>Published: {this.state.targetBook.published}</div>
                                    <ReveiwDialog/>
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