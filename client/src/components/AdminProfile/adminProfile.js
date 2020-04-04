import React from "react"
import styles from "./adminProfile.module.css"
import Typography from '@material-ui/core/Typography'
import Grid from '../../containers/mui/grid'
import AdminContent from '../../contents/adminProfile';
import AdminTabs from '../AdminTabs/adminTabs';
import Banner from '../Banner/banner';
import Container from '../../containers/mui/container';
import Button from '../../containers/mui/button';
import Add from '@material-ui/icons/Add';
import AdminProfileContent from '../../contents/adminProfile';
import AddBook from '../AddBook/addBook';

class AdminProfile extends React.Component {
    constructor(props) {
        super(props)
    
    
    }
  

    render() {
        return (
            <React.Fragment>
                <Container maxWidth={false} disableGutters={true}>
                <Banner/>
                <Container maxWidth={'lg'} className={styles.page_content}>
                    <Grid container item alignItems='center'>
                        <Grid container item xs={3}/>
                        <Grid container item xs={3} className={styles.list_padding}>
                            <img
                                alt=''
                                name="name"
                                className={styles.user_ProfilePic}
                                src={this.props.app.state.currentUser.icon_url}
                            />
                        </Grid>
                        <Grid container item xs={3} >
                            {/* {AdminContent.user.profile.map(
                                (item, index) => (<Grid item key={index} >
                                <Typography variant="h6">{item.id}</Typography>
                            </Grid>))} */}
                            <Grid item xs={12}> <Typography variant="h6">{this.props.app.state.currentUser.userName}</Typography></Grid>
                        <Grid item xs={12}> <Typography variant="body1" color="primary">{this.props.app.state.currentUser.signiture}</Typography></Grid>
                        </Grid>
                        <Grid container item xs={3}>
                            <AddBook page={this.props.app}/>
                        </Grid>
                    </Grid>
                    <Container className={styles.profile}>                        
                        <Grid container item direction="column" justify="flex-start" >
                            <div className={styles.comments}>
                                <Grid container item xs={12}>
                                    <AdminTabs page={this.props.app} render={() => (<AdminTabs page={this.props.app}/>)}/>
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
