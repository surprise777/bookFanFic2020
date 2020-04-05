import React from 'react';
import Comment from '../Comment/comment';
import styles from './commentSection.module.css';
import Box from '@material-ui/core/Box';
import Grid from '../../containers/mui/grid';
import Button from '@material-ui/core/Button';
import Container from '../../containers/mui/container';
import Rating from '@material-ui/lab/Rating';
import { TextField } from '@material-ui/core';
import CommentSectionContent from '../../contents/commentSection';
import { loadComments, addComment, loadTopComment } from "../../actions/comment";

function ClickRating({ rating_handler, rating }) {
    const [value, setValue] = React.useState(0);
    return (
        <div className={styles.mr2}>
            <Box component="fieldset" borderColor="transparent">
                <Rating
                    name="book_rating"
                    value={rating}
                    size='medium'
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        rating_handler(newValue);
                    }}
                />
            </Box>
        </div>
    )
}

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            comment: '',
            targetBook: this.props.bookId,
            comments: [],
            top_comment: null,
            currentUser: this.props.currentUser,
            index: 0
        }
        loadTopComment(this)
        loadComments(this)
    }

    loginWarning() {
        window.alert("Please log in first!");
    }

    fillInWarning() {
        window.alert("Comment can not be empty/Rating can not be 0");
    }

    loadUserIcon(user) {
        if (user) {
            return (<img src={user.icon_url} className={styles.icon} alt='' />)
        } else {
            return (<img src={CommentSectionContent.icon} className={styles.icon} alt='' />)
        }
    }

    show_top_comment() {
        if (!this.state.top_comment || this.state.top_comment.length === 0) {
            return;
        } else {
            const comment = this.state.top_comment[0];
            return (<Comment
                currentUser={this.state.currentUser}
                id={comment._id}
                fanList={comment.fanList}
                userId={comment.userId}
                content={comment.content}
                rating={comment.rating}
                counter={comment.likes}
                date={comment.date}
            />);
        }
    }

    ratinghandler(val) {
        this.setState({
            "rating": val
        })
    };

    commenthandler(event) {
        this.setState({
            "comment": event.target.value
        })
    };

    cancelhandler() {
        this.setState({
            "comment": "",
            "rating": 0
        })
    };

    render() {
        return (
            <Box>
                <Container maxwidth='xl' disableGutters={true}>
                    <Box pb={2}>
                        <Grid container>
                            <Grid item sm={12} md={1}>
                                <Box display='flex' justifyContent='flex-start' flexWrap='wrap' alignItems='flex-start' pt={3}>
                                    {this.loadUserIcon(this.state.currentUser)}
                                </Box>
                            </Grid>
                            <Grid item sm={12} md={11}>
                                <Box pl={2} pt={3}>
                                    <Box pb={2}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            placeholder="comments..."
                                            value={this.state.comment}
                                            onChange={this.commenthandler.bind(this)}
                                        />
                                    </Box>
                                </Box>
                                <Box>
                                    <Box display='flex' justifyContent='flex-end'>
                                        <ClickRating rating_handler={this.ratinghandler.bind(this)} rating={this.state.rating} />
                                        <Button
                                            onClick={this.cancelhandler.bind(this)}
                                        >{CommentSectionContent.cancel}
                                        </Button>
                                        <Button color='primary' onClick={() => { addComment(this) }}>{CommentSectionContent.comment}</Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                <Box>
                    <Box>
                        <div className={styles.hottest}>Top comment</div>
                        {this.show_top_comment()}
                        <hr className={styles.bottom_padding} />
                    </Box>
                    {this.state.comments.map((comment, index) =>

                        (<Comment
                            currentUser={this.state.currentUser}
                            id={comment._id}
                            fanList={comment.fanList}
                            userId={comment.userId}
                            content={comment.content}
                            rating={comment.rating}
                            key={index}
                            counter={comment.likes}
                            date={comment.date}
                        />)

                    )}
                    <Box display='flex' justifyContent='flex-end'><Button color='secondary' onClick={() => { loadComments(this) }}>show more</Button></Box>
                </Box>
            </Box>
        )
    }
}

export default CommentSection;