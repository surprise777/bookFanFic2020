import React from "react";
import Container from "../../containers/mui/container";
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import styles from "./login.module.css";


class Login extends React.Component{
    render() {
        return(
            <Container>
                <div className={styles.login_panel}>
                    <div className={styles.login_header}>
                        <Typography variant="h4">Welcome back!</Typography>
                        <img alt="" src={require('./static/book.png')} className={styles.header_img} />
                    </div>
                    <div className={styles.login_form}>
                        <form>
                            <input 
                            placeholder='username'
                            className={styles.form_input}>
                            </input>
                            <input label='password'
                            placeholder='password'
                             className={styles.form_input}>
                            </input>
                            <br/>
                            <button type='button' className={styles.login_button}>
                                Login
                                </button>
                        </form>
                    </div>
                    <Link to="/Signup" className={styles.no_decor}>
                        <div className={styles.signup_link}>Not a member yet? Join Now!</div>     
                    </Link>
                </div>
            </Container>
        )
    }
}

export default Login;