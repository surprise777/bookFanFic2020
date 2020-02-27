import React from "react";
//import NavigationBar from "../Navbar";

import "./style.css";


class Login extends React.Component{
    render() {
        return(
            <div className='login'>
            <div className='login_panel'>
                <form className='login_form'>
                    <input type='text' name='username'>
                    </input>
                    <br/>
                    <input type='text' name='password'>
                    </input>
                    <br/>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
        )
    }
}

export default Login;