import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '../../containers/mui/button';
import {Link} from 'react-router-dom';
class NavigationBar extends React.Component {
    state = this.props.state;

    render() {
        // {login_status} = this.props;

        return (
            <AppBar>
                <Toolbar>
                    <MenuIcon />
                    <Typography variant="h6" noWrap>
                        Readers Club
             </Typography>
                    <SearchIcon />
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <Button>
                        <Link to="./Login">
                            Login
                        </Link>
                        </Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default NavigationBar;