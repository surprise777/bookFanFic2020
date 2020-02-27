import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from '@material-ui/core/styles';
import Home from "./components/Home/home";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";
import theme from './muiTheme';
class App extends React.Component {
    state = {
      login_status: false
    }
    
    render() {
        return (
            <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Switch>
                <Route exact path='/' render={() => 
                            (<Home state={this.state}/>)}/>
                <Route exact path='/Home' render={() =>
                            (<Home state={this.state}/>)}/>
                <Route exact path='/Login' render={() =>
                            (<Login state={this.state}/>)}/>
                <Route exact path='/Signup' render={() =>
                            (<Signup state={this.state}/>)}/>
              </Switch>
            </BrowserRouter>
            </ThemeProvider>
        )
    }
}

export default App;
