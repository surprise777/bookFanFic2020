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
    render() {
        return (

            <BrowserRouter>
              <Switch>
                <Route exact path={RoutesMap.Home.path} render={() => 
                            (<Layout pageName={RoutesMap.Home.name} handler={this.props.handler}  state={this.props.state}><Home handler={this.props.handler}  state={this.props.state}/></Layout>)}/>
                <Route exact path={RoutesMap.Login.path} render={() =>
                            (<Layout pageName={RoutesMap.Login.name} handler={this.props.handler}  state={this.props.state}><Login handler={this.props.handler}  state={this.props.state}/></Layout>)}/>
                <Route exact path={RoutesMap.Signup.path} render={() =>
                            (<Layout pageName={RoutesMap.Signup.name} handler={this.props.handler}  state={this.props.state}><Signup handler={this.props.handler} state={this.props.state}/></Layout>)}/>
                <Route exact path={RoutesMap.Profile.path} render={() =>
                            (<Layout pageName={RoutesMap.Profile.name} handler={this.props.handler}  state={this.props.state}><Profile handler={this.props.handler} state={this.props.state}/></Layout>)}/>
                <Route exact path={RoutesMap.AdminProfile.path} render={() =>
                            (<Layout pageName={RoutesMap.AdminProfile.name} handler={this.props.handler}  state={this.props.state}><AdminProfile handler={this.props.handler} state={this.props.state}/></Layout>)}/>
                <Route exact path={RoutesMap.BookDetail.path} render={() =>
                            (<Layout pageName={RoutesMap.BookDetail.name} handler={this.props.handler}  state={this.props.state}><BookDetail handler={this.props.handler} state={this.props.state} book={this.state.book}/></Layout>)}/>
                <Route exact path={RoutesMap.BookReview.path} render={() =>
                            (<Layout pageName={RoutesMap.BookReview.name} handler={this.props.handler}  state={this.props.state}><BookReview handler={this.props.handlerr} state={this.props.state}/></Layout>)}/>
                <Route exact path={RoutesMap.SearchResult.path} render={() =>
                            (<Layout pageName={RoutesMap.SearchResult.name} handler={this.props.handler}  state={this.props.state}><Search handler={this.props.handler} state={this.props.state}/></Layout>)}/>
              </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;
