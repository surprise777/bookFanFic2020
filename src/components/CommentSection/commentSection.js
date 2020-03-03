import React from 'react';
import comments from '../../contents/commentCollection';
import Comment from '../Comment/comment';
import styles from './commentSection.module.css';
import Box from '@material-ui/core/Box';
import Grid from '../../containers/mui/grid';
import Button from '@material-ui/core/Button';
import Container from '../../containers/mui/container';
import { TextField } from '@material-ui/core';


class CommentSection extends React.Component {
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
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Box>
                    <Box display='flex' justifyContent='flex-end' >
                        <Button>cancel</Button>
                        <Button  color='primary'>comment</Button>
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
            </Box>
        )
    }
}

export default CommentSection;