import React from 'react';
import styles from './bookReview.module.css';
import Container from '../../containers/mui/container';
import Box from "@material-ui/core/Box";
import Grid from '../../containers/mui/grid';
import Banner from '../Banner/banner';
import { Typography } from '@material-ui/core';

class BookReview extends React.Component {
    render() {
        return (
            <Container maxWidth={false} className={styles.padding_bottom} disableGutters={true}>
                    <Banner />
                    <Container maxWidth='lg'>
                        <Box>
                        <Grid Container>
                            <Grid item xs={12} sm={9}>
                                <Box className={styles.title}>
                                    <Typography variant="h4">The rise of a legend - Arthur</Typography>
                                </Box>
                                <Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                            </Grid>
                        </Grid>
                        </Box>
                    </Container>
            </Container>
        )
    }
}

export default BookReview;