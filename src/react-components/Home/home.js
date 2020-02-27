import React from "react";

import "./style.css"
//import Navigationbar from "../Navbar"

class Home extends React.Component{

    render(){
        const {login_status} = this.props.state;
        return(
            <div>
                {/* <Navigationbar login_status={login_status}/> */}
            </div>
        )
    }
}

export default Home;