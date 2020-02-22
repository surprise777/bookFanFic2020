import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./react-components/Home";
import Login from "./react-components/Login";
class App extends React.Component {
    state = {
      login_status: true
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
