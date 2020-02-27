import React from "react"
import Container from "../../containers/mui/container"
import styles from "./profile.module.css"
import Typography from '@material-ui/core/Typography'
import Grid from '../../containers/mui/grid'
import Button from '../../containers/mui/button'

class Profile extends React.Component {
    state = {
        login_status: false
    }

    render() {
        return (
            <React.Fragment>
            <Container>
                <div className={styles.user_info}>

                    <img 
                      alt=''
                      className={styles.user_ProfilePic} 
                      src={require('./static/my_icon.jpg')}
                    />
                    <Grid>
                    <Typography variant="h5">Name: {'Nick1225'}</Typography>
                    <Typography variant="h5">Address: {'50 Charles St E'}</Typography>
                    <Typography variant="h5">Email: {'N/A'}</Typography>
                    <Typography variant="h5">Phone: {'N/A'}</Typography>
                    <Typography variant="h5">FaceBook: {'N/A'}</Typography>
                    </Grid>
                </div>
                <img className={styles.user_banner} src={require('./static/uoft_banner.jpeg')} alt='' />
                <div className={styles.recommended_books}>
                    <p>
                        <img className={styles.book} src={require('./static/uoft_banner.jpeg')} alt='' />
                    </p>


                </div>
                <img alt='' className={styles.user_banner} src={require('./static/uoft_banner.jpeg')}/>
            
            </Container>
            <Grid className={styles.recommended_books}>
                <Grid  className={styles.book}>
                    <Button to='placeholder'>
                        <img alt='' src={require('./static/my_icon.jpg')} className={styles.book_cover}/>
                    </Button>
                    <Typography variant="p">
                        "Harrypotter"
                    </Typography>
                </Grid>

                <Grid  className={styles.book}>
                    <Button to='placeholder'>
                        <img alt='' src={require('./static/uoft_banner.jpeg')} className={styles.book_cover}/>
                    </Button>
                    <Typography variant="p">
                        "NotHarrypotter"
                    </Typography>
                </Grid>
                
            </Grid>
            </React.Fragment>
        )
    }
}

export default Profile;
