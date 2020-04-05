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
            input: ""
        }
        this.handleLogout = this.handleLogout.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleLogout(app) {
        const url = "/user/logout";
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
            if (this.props.app.state.currentUser.acctType === 'a') { next = RoutesMap.AdminProfile.path }
            else {
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

    async searchingChange(e, page) {
        await page.setState({ searchInput: e.target.value })
        console.log(this.props.app)
    }

    handleSearch(input, page) {
        const bookUrl = "/book/searchByName/" + input;

        fetch(bookUrl)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    console.log("Could not search books");
                }
            })
            .then(json => {
                page.setState({ searchBooks: json, tagSearch: false });
            })
            .catch(error => {
                console.log(error);
            });

        const userUrl = "/user/byName/" + input;

        fetch(userUrl)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    console.log("Could not search users");
                }
            })
            .then(json => {
                page.setState({ searchUsers: json });
            })
            .catch(error => {
                console.log(error);
            });

        const reviewUrl = "/review/searchByName/" + input;

        fetch(reviewUrl)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    console.log("Could not search reviews");
                }
            })
            .then(json => {
                page.setState({ searchReviews: json });
            })
            .catch(error => {
                console.log(error);
            });
        console.log(this.props.app)

    };

    render() {
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
                                    <TextField id="search-field" className={styles.text} placeholder={HeaderContent.searchField} fullWidth onChange={(e) => this.searchingChange(e, this.props.app)}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <Button onClick={() => this.handleSearch(this.props.app.state.searchInput, this.props.app)}> <Link className={styles.link} to={searchLink}><SearchIcon /></Link></Button>
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