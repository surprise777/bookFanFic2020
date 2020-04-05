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
import SearchTag from './components/SearchTagResult/searchTagResult';

class Routes extends React.Component {
  render() {
    return (

      <BrowserRouter>
        <Switch>
          <Route exact path={RoutesMap.Home.path} render={() =>
            (<Layout pageName={RoutesMap.Home.name} handler={this.props.handler} state={this.props.state} app={this.props.app}><Home handler={this.props.handler} state={this.props.state} app={this.props.app} /></Layout>)} />
          <Route exact path={RoutesMap.Login.path} render={() =>
            (<Layout pageName={RoutesMap.Login.name} handler={this.props.handler} state={this.props.state} app={this.props.app}><Login handler={this.props.handler} state={this.props.state} app={this.props.app} /></Layout>)} />
          <Route exact path={RoutesMap.Signup.path} render={() =>
            (<Layout pageName={RoutesMap.Signup.name} handler={this.props.handler} state={this.props.state} app={this.props.app}><Signup handler={this.props.handler} state={this.props.state} app={this.props.app} /></Layout>)} />
          <Route exact path={RoutesMap.Profile.path} render={() =>
            (<Layout pageName={RoutesMap.Profile.name} handler={this.props.handler} state={this.props.state} app={this.props.app}><Profile handler={this.props.handler} state={this.props.state} app={this.props.app} /></Layout>)} />
          <Route exact path={RoutesMap.AdminProfile.path} render={() =>
            (<Layout pageName={RoutesMap.AdminProfile.name} handler={this.props.handler} state={this.props.state} app={this.props.app}><AdminProfile handler={this.props.handler} state={this.props.state} app={this.props.app} /></Layout>)} />
          <Route exact path={RoutesMap.BookDetail.path} render={() =>
            (<Layout pageName={RoutesMap.BookDetail.name} handler={this.props.handler} state={this.props.state} app={this.props.app}><BookDetail handler={this.props.handler} state={this.props.state} app={this.props.app} /></Layout>)} />
          <Route exact path={RoutesMap.BookReview.path} render={() =>
            (<Layout pageName={RoutesMap.BookReview.name} handler={this.props.handler} state={this.props.state} app={this.props.app}><BookReview handler={this.props.handlerr} state={this.props.state} app={this.props.app} /></Layout>)} />
          <Route exact path={RoutesMap.SearchResult.path} render={() =>
            (<Layout pageName={RoutesMap.SearchResult.name} handler={this.props.handler} state={this.props.state} app={this.props.app}><Search handler={this.props.handler} state={this.props.state} app={this.props.app} /></Layout>)} />
          <Route exact path={RoutesMap.SearchTagResult.path} render={() =>
            (<Layout pageName={RoutesMap.SearchTagResult.name} handler={this.props.handler} state={this.props.state} app={this.props.app}><SearchTag handler={this.props.handler} state={this.props.state} app={this.props.app} /></Layout>)} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes;
