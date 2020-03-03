import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Layout from './layout';
import { RoutesMap } from './utils/routesMap';
import Home from "./components/Home/home";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";
import Profile from './components/Profile/profile';
import AdminProfile from './components/AdminProfile/adminProfile';
import BookDetail from './components/BookDetails/bookDetails';
import BookReview from './components/BookReview/bookReview';
import Search from './components/SearchResult/searchResult';

class Routes extends React.Component {
    constructor() {
    super()
    // The handler is passed down as a prop method for children to manipulate parent state. Here, the handler is bound to App.js context.
    this.handler = this.handler.bind(this)
    }
    state = {
      login_status: false,
      book: '',
    }
    
    // You pass the handler the full state to update each time. This means the child needs to call the current state as an object into a temporary variable, make changes, and then pass in the variable as the update here. See an example in pages/concerns.js:14 for what that looks like. For us, here. it just means we pass the state as a property down the component tree.
    handler(update) {
      this.setState(update)
  }
    render() {
        return (

            <BrowserRouter>
              <Switch>
                <Route exact path={RoutesMap.Home.path} render={() => 
                            (<Layout pageName={RoutesMap.Home.name}><Home handler={this.handler}  state={this.state}/></Layout>)}/>
                <Route exact path={RoutesMap.Login.path} render={() =>
                            (<Layout pageName={RoutesMap.Login.name}><Login handler={this.handler}  state={this.state}/></Layout>)}/>
                <Route exact path={RoutesMap.Signup.path} render={() =>
                            (<Layout pageName={RoutesMap.Signup.name}><Signup handler={this.handler} state={this.state}/></Layout>)}/>
                <Route exact path={RoutesMap.Profile.path} render={() =>
                            (<Layout pageName={RoutesMap.Profile.name}><Profile handler={this.handler} state={this.state}/></Layout>)}/>
                <Route exact path={RoutesMap.AdminProfile.path} render={() =>
                            (<Layout pageName={RoutesMap.AdminProfile.name}><AdminProfile handler={this.handler} state={this.state}/></Layout>)}/>
                <Route exact path={RoutesMap.BookDetail.path} render={() =>
                            (<Layout pageName={RoutesMap.BookDetail.name}><BookDetail handler={this.handler} state={this.state} book={this.state.book}/></Layout>)}/>
                <Route exact path={RoutesMap.BookReview.path} render={() =>
                            (<Layout pageName={RoutesMap.BookReview.name}><BookReview handler={this.handler} state={this.state}/></Layout>)}/>
                <Route exact path={RoutesMap.SearchResult.path} render={() =>
                            (<Layout pageName={RoutesMap.SearchResult.name}><Search handler={this.handler} state={this.state}/></Layout>)}/>
              </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;
