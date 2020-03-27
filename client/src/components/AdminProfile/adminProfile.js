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
    state = {
        login_status: false
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
                                className={styles.user_ProfilePic}
                                src={AdminContent.user.photo}
                            />
                        </Grid>
                        <Grid container item xs={3} >
                            {AdminContent.user.profile.map(
                                (item, index) => (<Grid item key={index} >
                                <Typography variant="h6">{item.id}</Typography>
                            </Grid>))}
                        </Grid>
                        <Grid container item xs={3}>
                            <AddBook/>
                        </Grid>
                    </Grid>
                    <Container className={styles.profile}>                        
                        <Grid container item direction="column" justify="flex-start" >
                            <div className={styles.comments}>
                                <Grid container item xs={12}>
                                    <AdminTabs render={() => (<AdminTabs/>)}/>
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
