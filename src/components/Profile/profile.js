import React from "react"
import Container from "../../containers/mui/container"
import styles from "./profile.module.css"
import Typography from '@material-ui/core/Typography'
import Grid from '../../containers/mui/grid'
import Button from '../../containers/mui/button'
import Link from '@material-ui/core/Link'

class Profile extends React.Component {
    state = {
        login_status: false
    }

    render() {
        return (
            <React.Fragment>
            <Container className={styles.page_content}>
                <Container>
                    <Container className={styles.user_info}>

                        <img 
                        alt=''
                        className={styles.user_ProfilePic} 
                        src={require('../../static/Profile/my_icon.jpg')}
                        />
                        <Grid>
                        <Typography variant="h5">Name: {'Nick1225'}</Typography>
                        <Typography variant="h5">Address: {'50 Charles St E'}</Typography>
                        <Typography variant="h5">Email: {'N/A'}</Typography>
                        <Typography variant="h5">Phone: {'N/A'}</Typography>
                        <Typography variant="h5">FaceBook: {'N/A'}</Typography>
                        </Grid>
                    </Container>
                    <img 
                    className={styles.user_banner} 
                    src={require('../../static/spanner/Essential-Books.jpg')} 
                    alt='' />
                    
                
                </Container>

        
                <Grid className={styles.comments} container spacing={1}>
                    <Typography variant='h3'> My comments </Typography>
                    <Grid container item xs={12} spacing={3}>
                        <Container className={styles.comment}>            
                            <Container>
                                <img 
                                className={styles.book_cover} 
                                src={require('../../static/spanner/Essential-Books.jpg')}
                                alt=''
                                />                        
                                <Link className={styles.comment_title}>
                                    <Typography variant='h4' className={styles.comment_title}> Harry Potter </Typography>
                                </Link>
                                <Typography variant='h5' className={styles.comment_content}> Hmmmm... </Typography>   
                            </Container>
                        </Container>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <Container className={styles.comment}>            
                            <Container>
                                <img 
                                className={styles.book_cover} 
                                src={require('../../static/spanner/Essential-Books.jpg')}
                                alt=''
                                />
                                <Link className={styles.comment_title}>
                                    <Typography variant='h4' className={styles.comment_title}> Harry Potter 2 </Typography>
                                </Link>
                                <Typography variant='h5' className={styles.comment_content}> Harry Potter 2 is so good! </Typography>   
                            </Container>
                        </Container>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <Container className={styles.comment}>            
                            <Container>
                                <img 
                                className={styles.book_cover} 
                                src={require('../../static/spanner/Essential-Books.jpg')}
                                alt=''
                                />
                                <Link className={styles.comment_title}>
                                    <Typography variant='h4' className={styles.comment_title}> Harry Potter 3 </Typography>
                                </Link>
                                <Typography variant='h5' className={styles.comment_content}> I think Harry Potter 3 is the best! </Typography>
                            </Container>
                        </Container>
                    </Grid>
                
                    
                
                </Grid>
            </Container>
            </React.Fragment>
        )
    }
}

export default Profile;
