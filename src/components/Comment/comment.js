import React from 'react';
import styles from './comment.module.css';
import Box from '@material-ui/core/Box';
import Grid from '../../containers/mui/grid';
import Rating from '@material-ui/lab/Rating';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

class Comment extends React.Component{
    constructor(props){
        super(props);
        const {counter, click} = this.props;
        this.state = {
            click: click,
            counter: counter
        }
    }

    createThumbUpButton(){
        if (this.state.click)
        {
            return (
                <ThumbUpIcon fontSize='small' color='primary'/>
            )
        }else{
            return (
                <ThumbUpIcon fontSize='small'/>
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
        const {userName, icon_url, content, date} = this.props;
        return(
            <Grid container>
                <Grid item sm={12} md={1}>
                    <Box display='flex' justifyContent='flex-start' flexWrap='wrap' alignItems='flex-start' pb={1}>
                        <img src={icon_url} className={styles.icon}/>
                    </Box>
                </Grid>
                <Grid item sm={12} md={11} className={styles.comment}>
                    <Box pl={2} pb={1}>
                    <div className={styles.userName}>
                        {userName}
                        <span className={styles.date}>{date}</span>
                    </div>
                    <Rating
                                    value={4.53}
                                    precision={0.5}
                                    readOnly={true}
                                    size={"small"}
                    />
                    <div>{content}</div>
                    <Box pt={2} display='flex' alignItems='center'>
                    <IconButton edge='start' onClick={this.clickhandler.bind(this)}>
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