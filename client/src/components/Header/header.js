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
import { RoutesMap } from '../../utils/routesMap';
class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            input: this.props.state.header.input,
        }
        this.searchingChange = this.searchingChange.bind(this)
        this.handleLogout = this.handleLogout.bind(this) 
    }

    async searchingChange(e) {
        await this.setState({ input: e.target.value })
        let tempState = this.props.state
        tempState.header.input = this.state.input
        console.log(tempState)
        this.props.handler(tempState)

    }

    handleLogout(app) {
        const url = "/users/logout";

        fetch(url)
            .then(res => {
                app.setState({
                    loggedIn: false,
                    currentUser: null,
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    loginU() {
        console.log(this.props.app)
        if (!this.props.app.state.loggedIn) {
            return (
                <React.Fragment>
                    <Button >
                        <Link className={styles.link} to={RoutesMap.Login.path}>
                            {HeaderContent.login}
                        </Link>
                    </Button>
                    <Button >
                        <Link className={styles.link} to={RoutesMap.Signup.path}>
                            {HeaderContent.signup}
                        </Link>
                    </Button>
                </React.Fragment>
            )
        } else {
            let next = RoutesMap.Profile.path
            if(this.props.app.state.currentUser.acctType ==='a')
            { next = RoutesMap.AdminProfile.path}
            else{
                next = RoutesMap.Profile.path
            }
            return (
                <React.Fragment>
                    <Button >
                        <Link className={styles.link} to={next}>
                            {this.props.state.currentUser.userName}
                        </Link>
                    </Button>
                    <Button onClick={() => this.handleLogout(this.props.app)}>
                        <Link className={styles.link} to={RoutesMap.Home.path}>
                            {HeaderContent.logout}
                        </Link>
                    </Button>
                </React.Fragment>
            )
        }
    }
    render() {
        // {login_status} = this.props;
        const searchLink = window.location.pathname === RoutesMap.SearchResult.path ? RoutesMap.SearchTagResult.path : RoutesMap.SearchResult.path
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
                                    <TextField id="search-field" className={styles.text} placeholder={HeaderContent.searchField} fullWidth onChange={this.searchingChange}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <Button> <Link className={styles.link} to={searchLink}><SearchIcon /></Link></Button>
                                                </InputAdornment>
                                            ),
                                        }} />
                                </Grid>
                            </Grid>
                            <Grid container item xs={4} sm={2} alignItems="center" justify="flex-end">
                                {this.loginU()}
                            </Grid>


                        </Grid>
                    </Toolbar>
                </AppBar>
            </Container>
        )
    }
}

export default Header;