import React from "react"
import styles from "./profile.module.css"
import Typography from '@material-ui/core/Typography'
import Grid from '../../containers/mui/grid'
import ProfileContent from '../../contents/profile';
import Container from '../../containers/mui/container';
import Dialog from '../EditProfileDialog/editProfileDialog';
import UserTabs from '../UserProfileTabs/profileTabs';
import { getAllCommentsByUser } from '../../actions/comment';
import { getAllReviewsByOneUser } from '../../actions/review';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: this.props.app.state.currentUser,
            allCommentsByTargetUser: [],
            targetUserReviews: []
        }
        getAllCommentsByUser(this.state.currentUser._id, this)
        getAllReviewsByOneUser(this.state.currentUser._id, this)

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
                            <Grid container item xs={2} />
                            <Grid container item xs={3} className={styles.list_padding}>
                                <img
                                    alt=''
                                    className={styles.user_ProfilePic}
                                    src={this.state.currentUser.icon_url}
                                />
                            </Grid>
                            <Grid container item xs={7} direction="column" alignItems="flex-start" >
                                <Grid item>
                                    <Typography variant='body1'>Email: {this.state.currentUser.email}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='body1'>Username: {this.state.currentUser.userName}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='body1'>Signature: {this.state.currentUser.signature}</Typography>
                                </Grid>
                                <Dialog user={this.props.app} />
                            </Grid>

                        </Grid>

                        <Container className={styles.profile}>
                            <Grid container item direction="column" justify="flex-start" >
                                <div className={styles.comments}>
                                    <Grid container item xs={12}>
                                        <UserTabs page={this.props.app} app={this} render={() => (<UserTabs page={this.props.app} app={this} />)} />
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
