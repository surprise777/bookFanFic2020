import React from "react";
import Container from "../../containers/mui/container";
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import styles from "./signup.module.css";


class Signup extends React.Component{
    render() {
        return(
            <Container>
                <div className={styles.signup_panel}>
                    <div className={styles.signup_header}>
                        <Typography variant="h4">Sign up</Typography>
                        <img alt="" src={require('../../static/Signup/book.png')} className={styles.header_img} />
                    </div>
                    <div className={styles.signup_form}>
                        <form autoComplete="off" className={`${styles.signup_form}`}>
                            <input 
                            placeholder='email'
                            className={styles.form_input}>
                            </input>
                            <input
                            placeholder='username'
                            className={styles.form_input}>
                            </input>
                            <input
                            placeholder='password'
                            className={styles.form_input}>
                            </input>
                            <input
                            placeholder='confirm password'
                            className={styles.form_input}>
                            </input>
                            <button type='button' className={styles.signup_button}>
                                Sign up now!
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

export default Signup;