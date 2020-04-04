import React from "react"
import styles from "./profile.module.css"
import Typography from '@material-ui/core/Typography'
import Grid from '../../containers/mui/grid'
import ProfileContent from '../../contents/profile';
import Button from '../../containers/mui/button';
import { BookDialog } from '../../actions/viewBookDetails';
import Edit from '@material-ui/icons/Edit';
import Container from '../../containers/mui/container';
import Dialog from '../EditProfileDialog/editProfileDialog';
import UserTabs from '../UserProfileTabs/profileTabs';
import Banner from "../Banner/banner";

class Profile extends React.Component {
    constructor(props) {
        super(props)
    
    
    }
    render() {
        return (
            <React.Fragment>
                <Container maxWidth={false} disableGutters={true}>
                    {/* <img
                    className={styles.user_banner}
                    src={ProfileContent.spanner}
                    alt='' /> */}
                    <Banner/>
                    <Container maxWidth='lg' className={styles.page_content}>
                        <Grid container item alignItems='center'>
                            <Grid container item xs={2}/>
                            <Grid container item xs={3} className={styles.list_padding}>
                                <img
                                    alt=''
                                    className={styles.user_ProfilePic}
                                    src={this.props.app.state.currentUser.icon_url}
                                />
                            </Grid>
                            <Grid container item xs={7} direction="column" alignItems="flex-start" >
                                <Grid item>
                                    <Typography variant='body1'>Email: {this.props.app.state.currentUser.email}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='h6'>User Name: {this.props.app.state.currentUser.userName}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='body1'>Signiture: {this.props.app.state.currentUser.signiture}</Typography>
                                </Grid>
                                <Dialog user={this.props.app}/>
                            </Grid>

                            <Grid container item xs={4}/>
                            <Grid container item xs={8}>
                                {/* <Button><Edit/></Button>
                                <Typography variant='h6' component='span'>
                                    This guy is lazy, he haven't write anything yet.
                                </Typography> */}
                            </Grid>
                            
                        </Grid>

                        <Container className={styles.profile}>                        
                            <Grid container item direction="column" justify="flex-start" >
                                <div className={styles.comments}>
                                    <Grid container item xs={12}>
                                        <UserTabs page={this.props.app} render={() => (<UserTabs page={this.props.app} />)}/>
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
