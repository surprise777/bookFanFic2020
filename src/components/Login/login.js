import React from "react";
import Container from "../../containers/mui/container";
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import styles from "./login.module.css";
import LoginContent from '../../contents/login';
import Button from '../../containers/mui/button';
import {RoutesMap} from '../../utils/routesMap';
import user from '../../contents/dummyData/user';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userName: "",
            password: "",
            acctType: "",
            match: false,
        }
        console.log(this.props.state.header.input)
        this.handleUser = this.handleUser.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleMatch = this.handleMatch.bind(this)
    }
    
    async handleUser(event){
        await this.setState({userName: event.target.value})
        let tempProps = this.props.state
        tempProps.login.userName = this.state.userName
        this.props.handler(tempProps)
    }

    async handlePassword(event){
        await this.setState({password: event.target.value})
        let tempProps = this.props.state
        tempProps.login.password = this.state.password
        this.props.handler(tempProps)
    }

    async handleMatch(event){
        const matchU = user.filter(u => u.userName === this.state.userName)
        let tempProps = this.props.state
        if (matchU.length === 0 || this.state.email === '') {
            alert("Email does not exist");
            event.preventDefault();
        } else {
                if (this.state.password !== matchU[0].password) {
                    alert("Password is incorrect");
                    event.preventDefault();
                }else{
                    await this.setState({match: true})
                    tempProps.current.userName = this.state.userName
                    tempProps.current.userType = matchU[0].acctType
                }
        }
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
                            placeholder={LoginContent.username}
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