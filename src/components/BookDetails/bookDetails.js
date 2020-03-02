import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './bookDetails.module.css';
import Container from '../../containers/mui/container';
import Grid from '../../containers/mui/grid';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import Banner from '../Banner/banner';
import Card from '@material-ui/core/Card';
import SectionHeader from '../SectionHeader/sectionHeader';
import CommentSection from '../CommentSection/commentSection';

import Tags from '../Tags/tags';


class BookDetail extends React.Component {
    render() {
        const url = require("../../static/book-cover/harrypotter.jpg");
        const style = {
            backgroundImage: `url(${url})`
        }
        const rating = 4.6;
        return (
            <Container maxWidth={false} disableGutters={true}>
                <Banner />
                <Container maxWidth='lg'>
                    <Box pt={8}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={8}>
                            <Grid container spacing={0}>
                                <Grid item xs={12} md={3}>
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <Box>
                                            <Card className={styles.cardLayout} style={style}>
                                            </Card>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <Container maxWidth='lg'>
                                    <Box pt={1}>
                                    <Typography variant="h4">Harry Potter - The Chamber of Secrets</Typography>
                                    </Box>
                                    <Box pt={2}>
                                        <div>Author: J.K Rowling</div>
                                        <div>Published: June 26, 1997</div>
                                        <div>Gneres: Novel, Fantasy, Children's literature, Fantasy Fiction, High fantasy</div>
                                        <div>Id: 10041314</div>
                                    </Box>
                                    </Container>
                                </Grid>
                            </Grid>
                            <Container maxWidth='lg'>
                                <Box pt={6}>
                                <SectionHeader headerText="Description" />
                                <Container maxWidth='lg'>
                                    <Box pt={1}>
                                    Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.
                                    The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic
                                    and subjugate all wizards and Muggles (non-magical people).
                                    </Box>
                                </Container>
                                </Box>
                                <Box pt={6} className={styles.sshrink}>
                                    <SectionHeader headerText="Comments"/>
                                    <CommentSection/>
                                </Box>
                            </Container>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box pt={4} className={styles.shrink}>
                                <SectionHeader headerText="Rating" />
                                <Box className={styles.padding_left}>
                                    <Rating
                                        value={4.53}
                                        precision={0.5}
                                        readOnly={true}
                                        size={"medium"}
                                    />
                                    
                                    <Typography variant='h4' className={styles.rating}>{rating}</Typography>
                                    <div>76 people have rated this</div>
                                    
                                </Box>
                            </Box>
                            <Box pt={4} className={styles.shrink}>
                                <SectionHeader headerText="Tags" />
                                <Tags tags={["western", "magic", "fantasy", "children"]} />
                            </Box>
                            <Box pt={6} className={styles.shrink}>
                                <SectionHeader headerText="Related" />
                                <Box className={styles.trending} pb={2} pt={2}>
                                    <Box className={styles.padding_left}>
                                        <div className={styles.bookTitle}>Wheel of time - Memory of light</div>
                                        <div className={styles.author}>Robert Jordan</div>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    </Box>
                </Container>
            </Container>
        )
    }
}

export default BookDetail;
