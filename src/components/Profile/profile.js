import React from "react"
import styles from "./profile.module.css"
import Typography from '@material-ui/core/Typography'
import Grid from '../../containers/mui/grid'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ProfileContent from '../../contents/profile';
import { BookDialog } from '../../actions/viewBookDetails';
import Container from '../../containers/mui/container'

class Profile extends React.Component {
    state = {
        login_status: false
    }

    render() {
        return (
            <React.Fragment>
                <Container maxWidth={false} disableGutters={true}>
                    <img
                    className={styles.user_banner}
                    src={ProfileContent.spanner}
                    alt='' />
                    <Container maxWidth='lg' className={styles.page_content}>
                        <Grid container item alignItems='center'>
                            <Grid container item xs={3}/>
                            <Grid container item xs={3} className={styles.list_padding}>
                                <img
                                    alt=''
                                    className={styles.user_ProfilePic}
                                    src={ProfileContent.user.photo}
                                />
                            </Grid>
                            <Grid container item xs={6} direction="column" alignItems="left" >
                                {ProfileContent.user.profile.map((item, index) => (<Grid item key={index} >
                                    <Typography variant="h6">{item.tag}: {item.u}</Typography>
                                </Grid>))}
                            </Grid>
                        </Grid>

                        <Container className={styles.profile}>    
                            <Grid container item xs={12} direction="column" justify="flex-start" >
                                <div className={styles.comments}>
                                    <Grid container item xs={12} direction="column" alignItems="center" >
                                        <div className={styles.title}>
                                            <Typography variant='h3' align="center"> My comments </Typography>
                                        </div>
                                    </Grid>
                                    <Grid container item xs={12}>
                                        <List className={styles.list}>
                                            {ProfileContent.user.comments.map((c, key) => (
                                                <React.Fragment key={key}>
                                                    <Divider variant="fullWidth" component="li" />
                                                    <ListItem alignItems="flex-start">
                                                        <ListItemAvatar>
                                                            <Avatar alt={c.book} src={c.src} />
                                                        </ListItemAvatar>
                                                        <ListItemText
                                                            primary={
                                                                <React.Fragment>
                                                                    <Link className={styles.comment_title} onClick={() => BookDialog(c)}>
                                                                        <Typography variant='h4' component="span" className={styles.comment_title}> {c.book} </Typography>
                                                                    </Link>
                                                                </React.Fragment>
                                                            }
                                                            secondary={
                                                                <React.Fragment>
                                                                    <Typography
                                                                        component="span"
                                                                        variant='h6' className={styles.comment_content}
                                                                        gutterBottom
                                                                    >{c.comment}</Typography>
                                                                </React.Fragment>
                                                            }
                                                        />
                                                    </ListItem>
                                                </React.Fragment>
                                            ))}
                                        </List>
                                    </Grid>
                                </div>
                            </Grid >
                        </Container>
                    </Container>
                </Container>
            </React.Fragment>
        )
    }
}

export default Profile;
