import React from 'react';
import styles from './trending.module.css';
import { Box } from '@material-ui/core';
import Grid from '../../containers/mui/grid';
//import {Link} from 'react-router-dom';
//import {RoutesMap} from '../../utils/routesMap';

class Trending extends React.Component{
    render() {
        const {book} = this.props
        return (
            <Box pt={1}>
                {book.map((b, index)=> {
                    return (
                    <Box className={styles.trending} pb={2} key={index}>
                    <Grid container justify="flex-start" align-items="flex-end" spacing={0}>
                        <Grid item xs={1}>
                            <span className={styles.rank}>{index + 1}. </span>
                        </Grid>
                        <Grid item xs={11}> 
                            <div className={styles.bookTitle}>{b.title}</div>
                            <div className={styles.author}>{b.author}</div>
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