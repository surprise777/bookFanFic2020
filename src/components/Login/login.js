import React from "react";
import Container from "../../containers/mui/container";
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import styles from "./login.module.css";
import LoginContent from '../../contents/login';
import Button from '../../containers/mui/button';
import {RoutesMap} from '../../utils/routesMap';


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            userName: "",
            password: "",
            acctType: "",
            match: this.props.state.login_status,
        }
        console.log(this.props.state.header.input)
        this.handleUser = this.handleUser.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleMatch = this.handleMatch.bind(this)
    }
    
    async handleUser(event){
        await this.setState({email: event.target.value})
        let tempProps = this.props.state
        tempProps.login.email = this.state.email
        this.props.handler(tempProps)
    }

    async handlePassword(event){
        await this.setState({password: event.target.value})
        let tempProps = this.props.state
        tempProps.login.password = this.state.password
        this.props.handler(tempProps)
    }

    handleMatch(event){
        let tempProps = this.props.state
        const matchU = tempProps.global.filter(u => u.email === this.state.email)
        if (matchU.length === 0 || this.state.email === '') {
            alert("Email does not exist");
            event.preventDefault();
        } else {
                if (this.state.password !== matchU[0].password) {
                    alert("Password is incorrect");
                    event.preventDefault();
                }else{
                    tempProps.current.email = matchU[0].email
                    tempProps.current.userName = matchU[0].userName
                    tempProps.current.userType = matchU[0].acctType
                    tempProps.login_status = true
                }
        }
        console.log(tempProps.current.email)
        console.log(tempProps.current.userName)
        console.log(this.state.match)
        console.log(tempProps.login_status)
        tempProps.login = this.state
        this.props.handler(tempProps)
    }

    render() {
        return(
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
                            onChange={(e)=>this.handleUser(e)}>
                            </input>
                            <input label={LoginContent.password} type="password"
                            placeholder={LoginContent.password}
                             className={styles.form_input}
                             onChange={(e)=>this.handlePassword(e)}>
                            </input>
                            <br/>
                            <Link to={RoutesMap.Home.path} className={styles.no_decor}><Button className={styles.login_button} checked={this.state.match} onClick={(e)=>this.handleMatch(e)}>
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