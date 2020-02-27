import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Button from '../../containers/mui/button';
import { Link } from 'react-router-dom';
import Container from '../../containers/mui/container';
import Grid from '../../containers/mui/grid';
import HeaderContent from '../../contents/header';
import styles from './header.module.css';
import TextField from '@material-ui/core/TextField';
import Hidden from '@material-ui/core/Hidden';
import InputAdornment from '@material-ui/core/InputAdornment';
import {RoutesMap} from '../../utils/routesMap';

class Header extends React.Component {
    state = this.props.state;

    render() {
        // {login_status} = this.props;

        return (
            <Container className={styles.head} >
            <AppBar>
              
                    <Toolbar>
                        <Grid
                            fullWidth
                            container
                            justify="space-between"
                            alignItems="center"
                        >
                            <Hidden mdDown>
                                <Grid container item xs={12} sm={2} alignItems="center" justify="center">
                               
                                    <Grid container item xs={2} alignItems="center" justify="center">
                                        <MenuBookIcon />
                                    </Grid>
                                    <Grid container item xs={10} alignItems="center" justify="flex-start">
                                    <Link className={styles.link} to={RoutesMap.Home.path}>
                                        <Typography variant="h6">
                                            {HeaderContent.title}
                                        </Typography></Link>
                                    </Grid>
                                    
                                </Grid>
                            </Hidden>
                            <Grid container item xs={8} sm={8} alignItems="center" fullWidth>
                                <Grid container item alignItems="center" justify="center">
                                    <TextField id="search-field" className={styles.text} placeholder={HeaderContent.searchField} fullWidth
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <Button> <SearchIcon /></Button>
                                                </InputAdornment>
                                            ),
                                        }} />
                                </Grid>
                            </Grid>
                            <Grid container item xs={4} sm={2} alignItems="center" justify="flex-end">
                                <Button >
                                    <Link className={styles.link} to={RoutesMap.Login.path}>
                                        {HeaderContent.login}
                                    </Link>
                                </Button></Grid>


                        </Grid>
                    </Toolbar>
            </AppBar>
            </Container>
        )
    }
}

export default Header;