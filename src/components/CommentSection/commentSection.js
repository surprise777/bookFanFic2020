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
            "comment": event.target.value.split("\n")
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
                <Box pb={2}>
                <Grid container>
                    <Grid item xs={12} sm={1}>
                        <Box display='flex' justifyContent='flex-start' flexWrap='wrap' alignItems='flex-start' pt={3}>
                            <img src={require("../../static/Profile/icon.jpg")} className={styles.icon}/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={11}>
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
                    </Grid>
                </Grid>
                <Box>
                    <Box display='flex' justifyContent='flex-end'>
                        <ClickRating rating_handler={this.ratinghandler.bind(this)} rating={this.state.rating}/>
                        <Button
                        onClick={this.cancelhandler.bind(this)}
                        >cancel
                        </Button>
                        <Button color='primary'>comment</Button>
                    </Box>
                </Box>
                </Box>
                <Box>
                {comments.map((comment, index) => {
                    const {userName, img_url, content} = comment;
                    return (                       
                            <Comment userName={userName} icon_url={img_url} content={content} key={index}/>
                    )
                })}
                </Box>
                {this.state.comment}
            </Box>
        )
    }
}

export default CommentSection;