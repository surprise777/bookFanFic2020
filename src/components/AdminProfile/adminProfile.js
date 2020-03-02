import React from "react"
import styles from "./adminProfile.module.css"
import Typography from '@material-ui/core/Typography'
import Grid from '../../containers/mui/grid'
import AdminContent from '../../contents/adminContent';
import AdminTabs from './adminTabs';

class AdminProfile extends React.Component {
    state = {
        login_status: false
    }

    render() {
        return (
            <React.Fragment>
                <img
                    className={styles.user_banner}
                    src={AdminContent.spanner}
                    alt='' />
                <Grid container className={styles.profile}>
                    <Grid container item xs={12} sm={4} direction="column" className={styles.user}>
                        <Grid container item xs={12} alignItems="center" justify="center" className={styles.list_padding}>
                            <img
                                alt=''
                                className={styles.user_ProfilePic}
                                src={AdminContent.user.photo}
                            />
                        </Grid>
                        <Grid container item xs={12} direction="column" alignItems="center" >
                            {AdminContent.user.profile.map((item, index) => (<Grid item key={index} >
                                <Typography variant="h5">{item.tag}: {item.u}</Typography>
                            </Grid>))}
                        </Grid>
                    </Grid>
                    
                    <Grid container item xs={12} sm={8} direction="column" justify="flex-start" >
                        <div className={styles.comments}>
                            <Grid container item xs={12}>
                                <AdminTabs render={() => (<AdminTabs> </AdminTabs>)}/>
                            </Grid>
                        </div>
                    </Grid >
                </Grid>
            </React.Fragment>
        )
    }
}

export default AdminProfile;
