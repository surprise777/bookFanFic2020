import React from "react"
import styles from "./adminProfile.module.css"
import Typography from '@material-ui/core/Typography'
import Grid from '../../containers/mui/grid'
import AdminTabs from '../AdminTabs/adminTabs';
import Banner from '../Banner/banner';
import Container from '../../containers/mui/container';
import AddBook from '../AddBook/addBook';
import { getAllBooks } from '../../actions/book';
import { getAllReviews } from '../../actions/review';
import { getAllComments } from '../../actions/comment';
import { getAllUsers } from '../../actions/user';
class AdminProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allBooks: [],
            allUser: [],
            allComments: [],
            allReviews: []
        }
        getAllBooks(this)
        getAllUsers(this)
        getAllComments(this)
        getAllReviews(this)
    }

    render() {
        return (
            <React.Fragment>
                <Container maxWidth={false} disableGutters={true}>
                    <Banner />
                    <Container maxWidth={'lg'} className={styles.page_content}>
                        <Grid container item alignItems='center'>
                            <Grid container item xs={3} />
                            <Grid container item xs={3} className={styles.list_padding}>
                                <img
                                    alt=''
                                    name="name"
                                    className={styles.user_ProfilePic}
                                    src={this.props.app.state.currentUser.icon_url}
                                />
                            </Grid>
                            <Grid container item xs={3} >
                                <Grid item xs={12}> <Typography variant="h6">{this.props.app.state.currentUser.userName}</Typography></Grid>
                                <Grid item xs={12}> <Typography variant="body1" color="primary">{this.props.app.state.currentUser.signiture}</Typography></Grid>
                            </Grid>
                            <Grid container item xs={3}>
                                <AddBook page={this.props.app} />
                            </Grid>
                        </Grid>
                        <Container className={styles.profile}>
                            <Grid container item direction="column" justify="flex-start" >
                                <div className={styles.comments}>
                                    <Grid container item xs={12}>
                                        <AdminTabs page={this.props.app} app={this} render={() => (<AdminTabs page={this.props.app} app={this} />)} />
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

export default AdminProfile;
