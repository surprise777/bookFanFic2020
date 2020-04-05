import React from "react";
import Container from "../../containers/mui/container";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import styles from "./login.module.css";
import LoginContent from '../../contents/login';
import Button from '../../containers/mui/button';
import { RoutesMap } from '../../utils/routesMap';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            userName: "",
            password: "",
            acctType: "",
        }
        console.log(this.props.state)
        console.log(this.props.app)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleUser = this.handleUser.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
    }

    async handleUser(event) {
        await this.setState({ email: event.target.value })
    }

    async handlePassword(event) {
        await this.setState({ password: event.target.value })
    }

    handleLogin(loginPage, app) {

        const request = new Request("/user/login", {
            method: "post",
            body: JSON.stringify(loginPage.state),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });

        fetch(request)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
                else {
                    alert("account does not exist!");
                }
            })
            .then(json => {
                if (json.currentUser !== null) {
                    app.setState({
                        currentUser: json.currentUser,
                        loggedIn: true
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <Container>
                <div className={styles.login_panel}>
                    <div className={styles.login_header}>
                        <Typography variant="h4">{LoginContent.title}</Typography>
                        <img alt="" src={LoginContent.image} className={styles.header_img} />
                    </div>
                    <div className={styles.login_form}>
                        <form>
                            <input
                                placeholder={LoginContent.email}
                                className={styles.form_input}
                                onChange={(e) => this.handleUser(e)}>
                            </input>
                            <input label={LoginContent.password} type="password"
                                placeholder={LoginContent.password}
                                className={styles.form_input}
                                onChange={(e) => this.handlePassword(e)}>
                            </input>
                            <br />
                            <Link to={RoutesMap.Home.path} className={styles.no_decor}><Button className={styles.login_button} onClick={() => this.handleLogin(this, this.props.app)}>
                                {LoginContent.login}
                            </Button></Link>
                        </form>
                    </div>
                    <Link to={RoutesMap.Signup.path} className={styles.no_decor}>
                        <div className={styles.signup_link}>{LoginContent.signup}</div>
                    </Link>
                </div>
            </Container>
        )
    }
}

export default Login;