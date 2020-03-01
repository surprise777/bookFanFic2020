import React from 'react';
import styles from './review.module.css';
import Grid from '../../containers/mui/grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import {Link} from 'react-router-dom';
import {RoutesMap} from '../../utils/routesMap';
import {Box} from "@material-ui/core";

class Review extends React.Component {
    render() {
        const {src, title, author, rating} = this.props;
        console.log(src);
        return (
            <Box pt={1} pb={1} className={styles.outline_bottom}>
            <Grid container className={styles.review} spacing={1}>
                <Grid item xs={12} sm={2}>
                    <Box display='flex' justifyContent='center' justifyItems='center'>
                    <CardMedia>
                        <img alt="" src={src} className={styles.cardMedia}></img>
                    </CardMedia>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <Link to={RoutesMap.BookReview.path} className={styles.no_decor}>
                    <Typography variant="h6" className={styles.fullLink}>{title}</Typography>
                    </Link>
                    <Box display='flex' justifyContent='flex-start' alignContent='center'>
                    <div className={styles.author}>
                        {author}
                    </div>
                    <Rating
                        value={rating}
                        precision={0.5}
                        readOnly={true}
                        size={"small"}
                    />
                    </Box>
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu....<Link to={RoutesMap.BookReview.path}className={styles.fullLink}>full</Link>
                    </div>
                </Grid>
            </Grid>
            </Box>
        )
    }
}

export default Review;