import React from 'react';
import Container from '../../containers/mui/container';
import Grid from '../../containers/mui/grid';
import Box from '@material-ui/core/Box';
import styles from './userCard.module.css';

class UserCard extends React.Component{
    render() {
        const {user} = this.props;
        const {icon_url, name, signature} = user; 
        return (
            <Box pt={2} pb={1} pl={2} className={styles.outline_bottom}>
                <Container maxWidth='xl' disableGutters={true}>
                    <Grid container>
                        <Grid item xs={12} md={1}>
                            <Box display='flex' justifyContent='flex-start' flexWrap='wrap' alignItems='flex-start' pb={1}>
                                <img src={icon_url} className={styles.icon}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={11}>
                            <Box pl={3}>
                                <div className={styles.userName}>
                                    {name}
                                </div>
                                <Box pt={0.5} className={styles.signature}>
                                    {signature}
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        )
    }
}

export default UserCard;