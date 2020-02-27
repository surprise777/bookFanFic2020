import React from "react";

import "./home.module.css"
import Navigationbar from "../Navbar/navBar"
class Home extends React.Component{

    render(){
        const {login_status} = this.props.state;
        return(
                <Navigationbar login_status={login_status}/> 
        )
    }
}

export default Home;