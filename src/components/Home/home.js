import React from "react";

import "./home.module.css"
import Navigationbar from "../Navbar/navBar"
import Container from "../../containers/mui/container"
class Home extends React.Component{

    render(){
        const {login_status} = this.props.state;
        return(
            <Container>
                <Navigationbar login_status={login_status}/> 
            </Container>
        )
    }
}

export default Home;