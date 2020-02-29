import React from 'react';
import styles from './trending.module.css';
import { Box } from '@material-ui/core';
import Grid from '../../containers/mui/grid';
import {trendings} from '../../contents/trending_collection';

class Trending extends React.Component{
    render() {
        return (
            <Box pt={1}>
                {trendings.map((book, index)=> {
                    return (
                    <Box className={styles.trending} pb={2} key={index}>
                    <Grid container justify="flex-start" align-items="flex-end" spacing={0}>
                        <Grid item xs={1}>
                            <span className={styles.rank}>{index + 1}. </span>
                        </Grid>
                        <Grid item xs={11}>
                            <div className={styles.bookTitle}>{book.name}</div>
                            <div className={styles.author}>{book.author}</div>
                        </Grid>
                    </Grid>
                    </Box>
                    )
                })}
            </Box>
        )
    }
}

export default Trending;