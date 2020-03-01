import React from 'react';
import styles from './bookReview.module.css';
import Container from '../../containers/mui/container';
import Box from "@material-ui/core/Box";
import Grid from '../../containers/mui/grid';
import Banner from '../Banner/banner';
import Rating from '@material-ui/lab/Rating';
import BookCard from '../BookCard/bookCard';
import { Typography} from '@material-ui/core';

class BookReview extends React.Component {
    render() {
        console.log(this.props.match);
        return (
            <Container maxWidth={false} className={styles.padding_bottom} disableGutters={true}>
                    <Banner />
                    <Container maxWidth='lg'>
                        <Box pt={4}>
                        <Grid container>
                            <Grid item xs={12} sm={8}>
                                <Box>
                                    <Typography variant="h4" className={styles.title}>The rise of a legend - Arthur</Typography>
                                   
                                    <Box display='flex' justifyContent='flex-start' justifyItems='flex-end'>
                                    <div className={styles.author}>
                                        Chasing Star
                                    </div>
                                    <Rating
                                        value={4}
                                        precision={0.5}
                                        readOnly={true}
                                        size={"small"}
                                    />
                                    </Box>
                                </Box>
                                <Box pt={3}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec dui.
                                 Sit amet venenatis urna cursus eget nunc scelerisque. Netus et malesuada fames ac turpis egestas sed.<br /><br/>
                                 Tempor nec feugiat nisl pretium fusce id velit ut. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Id diam vel quam elementum pulvinar etiam non quam.
                                Aenean euismod elementum nisi quis eleifend quam. Nulla facilisi morbi tempus iaculis. Maecenas ultricies mi eget mauris pharetra et ultrices. Tortor pretium viverra suspendisse potenti nullam.
                                Non arcu risus quis varius. Eu turpis egestas pretium aenean pharetra magna ac. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Quis lectus nulla at volutpat diam ut venenatis.<br/><br/>
                                 Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Tempus egestas sed sed risus pretium quam. In aliquam sem fringilla ut morbi tincidunt. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Lacus vestibulum sed arcu non odio euismod lacinia at. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Feugiat sed lectus vestibulum mattis. Id faucibus nisl tincidunt eget nullam non nisi est.<br/> <br/>

                                Mi quis hendrerit dolor magna eget est lorem ipsum. Tortor vitae purus faucibus ornare suspendisse sed. Lobortis mattis aliquam faucibus purus. Porttitor eget dolor morbi non arcu
                                 risus quis varius quam. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. In iaculis nunc sed augue lacus viverra vitae. Tempus imperdiet nulla malesuada pellentesque elit. Vel risus commodo viverra maecenas accumsan. Amet consectetur adipiscing elit pellentesque habitant morbi. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Pellentesque diam volutpat commodo sed egestas egestas. Aliquet eget sit amet tellus cras adipiscing enim.<br/><br/>

                                Amet luctus venenatis lectus magna fringilla. Aliquam etiam erat velit scelerisque in dictum non. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. 
                                Integer eget aliquet nibh praesent tristique magna. Sit amet aliquam id diam maecenas ultricies mi. Lectus arcu bibendum at varius vel pharetra. Et malesuada fames ac turpis egestas maecenas pharetra 
                                convallis posuere. Tellus in metus vulputate eu scelerisque. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Habitant morbi tristique senectus et netus et malesuada. Adipiscing elit duis
                                 tristique sollicitudin nibh sit amet. Cum sociis natoque penatibus et magnis. Fringilla ut morbi tincidunt augue. Aliquet bibendum enim facilisis gravida neque convallis a cras. Placerat in egestas erat imperdiet sed.
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box pt={12} className={styles.center_text}>
                                <BookCard media={require("../../static/book-cover/wheel_of_time.jpg")} title="Wheel of time" />
                                <div>Author: Robert Jordan</div>
                                <div>Genres: Fantasy, Novel</div>
                                <div>Published: January 8, 2013</div>
                                </Box>
                            </Grid>
                        </Grid>
                        </Box>
                    </Container>
            </Container>
        )
    }
}

export default BookReview;