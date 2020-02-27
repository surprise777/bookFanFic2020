import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './bookDetails.module.css';
import Container from '../../containers/mui/container';
import Paper from '@material-ui/core/Paper';
import Grid from '../../containers/mui/grid';
import Button from '../../containers/mui/button';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const BookDetail = ({
    book
}) => {
    console.log(book.title);
    return (
        <Container>
            <Paper className={styles.paper}>
                <Grid fullWidth
                    container
                    justify="space-between"
                    alignItems="center" className={styles.paper}>
                    <Grid item container xs={4} className={styles.image}>
                        <img className={styles.img} alt="" src={require("../../static/book-cover/harrypotter.jpg")} />
                    </Grid>
                    <Grid item xs={8} container alignItems="flex-start" justify="flex-start">
                        <Grid container item xs={12} justify="center" alignItems="stretch">
                            <Typography variant="h2">
                                Harry Potter
                </Typography>
                        </Grid>
                        <Grid container item xs={12} alignItems="stretch" justify="center">
                            <Typography variant="body1" align="center" color="textSecondary">
                                Originally published: June 26, 1997
                </Typography>
                        </Grid>
                        <Grid container item xs={12} alignItems="stretch" justify="center">
                            <Typography variant="body1" align="center" color="textSecondary">Author: J. K. Rowling
                </Typography>
                        </Grid>
                        <Grid container item xs={12} alignItems="stretch" justify="center">
                            <Typography variant="body1" align="center" color="textSecondary">Release number: 1st in series
                </Typography>
                        </Grid>
                        <Grid container item xs={12} alignItems="stretch" justify="center">
                            <Typography variant="body1" align="center" color="textSecondary">
                                Genres: Novel, Fantasy, Children's literature, Fantasy Fiction, High fantasy
                </Typography>
                        </Grid>
                        <Grid container item xs={12} alignItems="stretch" justify="center">
                            <Typography variant="body1" align="center" color="textSecondary">
                                Characters: Harry Potter, Hermione Granger, Lord Voldemort, MORE
                </Typography>
                        </Grid>
                        <Grid container item xs={12} alignItems="stretch" justify="center">
                            <Typography variant="body1" color="textSecondary">
                                ID: 1030114
                </Typography>
                        </Grid>
                        <Grid container item xs={12} alignItems="center" justify="center">
                            <Button><Typography variant="body2">
                                Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).
                    </Typography></Button></Grid>
                        <Grid container item xs={12} alignItems="center" justify="center">  <IconButton>
                            <AddBoxIcon />
                        </IconButton>
                            <IconButton>
                                <RemoveCircleIcon />
                            </IconButton>
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        </Grid>
                    </Grid>

                </Grid>
            </Paper>
        </Container>
    );
};

export default BookDetail;
