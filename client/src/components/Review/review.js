import React from 'react';
import styles from './review.module.css';
import Grid from '../../containers/mui/grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';
import { RoutesMap } from '../../utils/routesMap';
import { Box } from "@material-ui/core";

class Review extends React.Component {

    render() {
        const { src, title, author, rating, reviewItem, handleSelectedReview } = this.props;
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
                        <Link onClick={handleSelectedReview} id={reviewItem.title} to={RoutesMap.BookReview.path} className={styles.no_decor}> <Typography variant="h6" className={styles.fullLink}> {title}</Typography></Link>


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
                            {reviewItem.content[0]}<span className={styles.fullLink}>full</span>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default Review;