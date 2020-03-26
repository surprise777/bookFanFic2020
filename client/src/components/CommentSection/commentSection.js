import React from 'react';
import comments from '../../contents/commentCollection';
import Comment from '../Comment/comment';
import styles from './commentSection.module.css';
import Box from '@material-ui/core/Box';
import Grid from '../../containers/mui/grid';
import Button from '@material-ui/core/Button';
import Container from '../../containers/mui/container';
import Rating from '@material-ui/lab/Rating';
import { TextField } from '@material-ui/core';
import CommentSectionContent from '../../contents/commentSection';

function ClickRating({rating_handler, rating}) {
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
            comment: ''
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

    print_comment() {
        const comments = this.state.comment.split('\n');
        console.log(comments);
        return (
            comments.map(c=> {
                return (
                    <div>{c}</div>
                )
            })
            )
    }

    render() {
        return (
            <Box>
                <Container maxwidth='xl' disableGutters={true}>
                <Box pb={2}>
                    <Grid container>
                        <Grid item sm={12} md={1}>
                            <Box display='flex' justifyContent='flex-start' flexWrap='wrap' alignItems='flex-start' pt={3}>
                                <img src={CommentSectionContent.icon} className={styles.icon} alt=''/>
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
                                    <ClickRating rating_handler={this.ratinghandler.bind(this)} rating={this.state.rating}/>
                                    <Button
                                    onClick={this.cancelhandler.bind(this)}
                                    >{CommentSectionContent.cancel}
                                    </Button>
                                    <Button color='primary'>{CommentSectionContent.comment}</Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                </Container>
                <Box>
                {comments.map((comment, index) => {
                    const {userName, img_url, content} = comment;
                    return (                       
                            <Comment userName={userName} 
                            icon_url={img_url}
                            content={content}
                            key={index}
                            counter={55}
                            date="8 months ago"
                            click={false}/>
                    )
                })}
                </Box>
            </Box>
        )
    }
}

export default CommentSection;