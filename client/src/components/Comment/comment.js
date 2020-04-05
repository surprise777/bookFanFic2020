import React from 'react';
import styles from './comment.module.css';
import Box from '@material-ui/core/Box';
import Grid from '../../containers/mui/grid';
import Rating from '@material-ui/lab/Rating';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { findUserInfo } from "../../actions/user";
import { likeComment } from "../../actions/comment";

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            counter: this.props.counter,
            userName: "",
            icon_url: "",
            fanList: this.props.fanList,
            currentUser: this.props.currentUser
        }
        findUserInfo(this, this.props.userId)
    }

    createThumbUpButton() {
        if (!this.state.currentUser) {
            return (
                <ThumbUpIcon fontSize='small' />
            )
        }

        if (this.state.fanList.includes(this.state.currentUser._id)) {
            return (
                <ThumbUpIcon fontSize='small' color='primary' />
            )
        } else {
            return (
                <ThumbUpIcon fontSize='small' />
            )
        }
    }

    loginWarning() {
        window.alert("Please log in first!");
    }

    render() {
        const { content, date, rating } = this.props;
        const { icon_url, userName } = this.state;
        return (
            <Grid container>
                <Grid item sm={12} md={1}>
                    <Box display='flex' justifyContent='flex-start' flexWrap='wrap' alignItems='flex-start' pb={1}>
                        <img src={icon_url} className={styles.icon} alt='' />
                    </Box>
                </Grid>
                <Grid item sm={12} md={11} className={styles.comment}>
                    <Box pl={2} pb={1}>
                        <div className={styles.userName}>
                            {userName}
                            <span className={styles.date}>{date}</span>
                        </div>
                        <Rating
                            value={rating}
                            precision={0.5}
                            readOnly={true}
                            size={"small"}
                        />
                        <div>{content}</div>
                        <Box pt={2} display='flex' alignItems='center'>
                            <IconButton edge='start' onClick={() => { likeComment(this) }}>
                                {this.createThumbUpButton()}
                            </IconButton>
                            <span className={styles.likeCount}>{this.state.counter}</span>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

export default Comment;