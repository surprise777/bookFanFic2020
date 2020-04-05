import React from "react";
import Container from "../../containers/mui/container";
import Typography from '@material-ui/core/Typography';
import Button from '../../containers/mui/button';
import { Link } from "react-router-dom";
import styles from "./signup.module.css";
import SignupContent from '../../contents/signup';
import { RoutesMap } from '../../utils/routesMap';
import { handleSignup } from '../../actions/user';

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            userName: "",
            password: "",
            confirm: "",
            acctType: "",
        }
        this.handleEmail = this.handleEmail.bind(this)
        this.handleUser = this.handleUser.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleConfirm = this.handleConfirm.bind(this)
        this.handleMatch = this.handleMatch.bind(this)
    }

    async handleEmail(event) {
        await this.setState({ email: event.target.value })
    }
    async handleUser(event) {
        await this.setState({ userName: event.target.value })
    }

    async handlePassword(event) {
        await this.setState({ password: event.target.value })
    }


    async handleConfirm(event) {
        await this.setState({ confirm: event.target.value })
    }


    handleMatch(event, page) {
        const passwordCheck = new RegExp('[0-9]+')
        const emailCheck = new RegExp(".+@.+\\.[A-Za-z0-9_]+")
        if (this.state.email === '' || this.state.userName === '' || this.state.password === '' || this.state.confirm === '') {
            alert("all input values cannot be empty");
            event.preventDefault();
        }
        else {
            if (!emailCheck.test(this.state.email)) {
                alert("Email should at least be a@a.a format");
                event.preventDefault();
            }
            else if (this.state.password.length < 6 || !passwordCheck.test(this.state.password)) {
                alert("Password must be at least 6 characters and include at least 1 digit. ");
                event.preventDefault();
            }
            else if (this.state.password !== this.state.confirm) {
                alert("Password is not matching.");
                event.preventDefault();
            }
            else {
                handleSignup(page);
            }
        }
    }

    render() {
        return (
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
                                className={styles.form_input}
                                onChange={(e) => this.handleEmail(e)}>
                            </input>
                            <input
                                placeholder='username'
                                className={styles.form_input}
                                onChange={(e) => this.handleUser(e)}>
                            </input>
                            <input
                                placeholder='password'
                                className={styles.form_input}
                                onChange={(e) => this.handlePassword(e)}>
                            </input>
                            <input
                                placeholder='confirm password'
                                className={styles.form_input}
                                onChange={(e) => this.handleConfirm(e)}>
                            </input>
                            <Link to={RoutesMap.Login.path} className={styles.no_decor}><Button type='button' className={styles.signup_button} onClick={(e) => this.handleMatch(e, this)}>
                                {SignupContent.sign_up}
                            </Button></Link>
                        </form>
                    </div>
                    <Link to={RoutesMap.Login.path} className={styles.no_decor}>
                        <div className={styles.signup_link}>{SignupContent.login}</div>
                    </Link>
                </div>
            </Container>
        )
    }
}

export default Signup;