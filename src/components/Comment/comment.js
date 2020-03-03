import React from 'react';
import styles from './comment.module.css';
import Box from '@material-ui/core/Box';
import Grid from '../../containers/mui/grid';
import Container from '../../containers/mui/container';
import Rating from '@material-ui/lab/Rating';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

class Comment extends React.Component{
    render() {
        const {userName, icon_url, content} = this.props;
        return(
            <Grid container>
                <Grid item xs={12} sm={1}>
                    <Box display='flex' justifyContent='flex-start' flexWrap='wrap' alignItems='flex-start' pb={1}>
                        <img src={icon_url} className={styles.icon}/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={11} className={styles.comment}>
                    <Box pl={2} pb={1}>
                    <div className={styles.userName}>
                        {userName}
                        <span className={styles.date}>8 months ago</span>
                    </div>
                    <Rating
                                    value={4.53}
                                    precision={0.5}
                                    readOnly={true}
                                    size={"small"}
                    />
                    <div>{content}</div>
                    <Box pt={2} display='flex' alignItems='center'>
                    <IconButton edge='start'>
                        <ThumbUpIcon fontSize='small'/>
                    </IconButton>
                    <span className={styles.likeCount}>56</span>
                    </Box>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

export default Comment;