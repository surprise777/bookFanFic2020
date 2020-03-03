import React from "react";
import Container from "../../containers/mui/container";
import Typography from '@material-ui/core/Typography';
import Button from '../../containers/mui/button';
import {Link} from "react-router-dom";
import styles from "./signup.module.css";
import SignupContent from '../../contents/signup';


class Signup extends React.Component{
    render() {
        return(
            <Container>
                <div className={styles.signup_panel}>
                    <div className={styles.signup_header}>
                        <Typography variant="h4">{SignupContent.title}</Typography>
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
                            <Button type='button' className={styles.signup_button}>
                                {SignupContent.sign_up}
                                </Button>
                        </form>
                    </div>
                    <Link to="/Signup" className={styles.no_decor}>
                        <div className={styles.signup_link}>{SignupContent.join_now}</div>     
                    </Link>
                </div>
            </Container>
        )
    }
}

export default Signup;