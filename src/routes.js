import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Layout from './layout';
import { RoutesMap } from './utils/routesMap';
import Home from "./components/Home/home";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";
import Profile from './components/Profile/profile';



class Routes extends React.Component {
    state = {
      login_status: false
    }
    
    render() {
        return (

            <BrowserRouter>
              <Switch>
                <Route exact path={RoutesMap.Home.path} render={() => 
                            (<Layout pageName={RoutesMap.Home.name}><Home state={this.state}/></Layout>)}/>
                <Route exact path={RoutesMap.Login.path} render={() =>
                            (<Layout pageName={RoutesMap.Login.name}><Login state={this.state}/></Layout>)}/>
                <Route exact path={RoutesMap.Signup.path} render={() =>
                            (<Layout pageName={RoutesMap.Signup.name}><Signup state={this.state}/></Layout>)}/>
                <Route exact path={RoutesMap.Profile.path} render={() =>
                            (<Layout pageName={RoutesMap.Profile.name}><Profile state={this.state}/></Layout>)}/>
              </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;
