import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/home";
import Login from "./components/Login/login";
class App extends React.Component {
    state = {
      login_status: false
    }
    
    render() {
        return (
            <div>
            <BrowserRouter>
              <Switch>
                <Route exact path='/' render={() => 
                            (<Home state={this.state}/>)}/>
                <Route exact path='/Home' render={() =>
                            (<Home state={this.state}/>)}/>
                <Route exact path='/Login' render={() =>
                            (<Login state={this.state}/>)}/>
              </Switch>
            </BrowserRouter>
            </div>
        )
    }
}

export default App;
