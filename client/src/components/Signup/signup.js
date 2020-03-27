import React from "react";
import Container from "../../containers/mui/container";
import Typography from '@material-ui/core/Typography';
import Button from '../../containers/mui/button';
import {Link} from "react-router-dom";
import styles from "./signup.module.css";
import SignupContent from '../../contents/signup';
import {RoutesMap} from '../../utils/routesMap';
import {handleSignup} from '../../actions/user';

class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            userName: "",
            password: "",
            confirm: "",
            acctType: "",
            // match: this.props.state.login_status,
        }
        this.handleEmail = this.handleEmail.bind(this)
        this.handleUser = this.handleUser.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        // this.handleMatch = this.handleMatch.bind(this)
        this.handleConfirm = this.handleConfirm.bind(this)
    }
    
    async handleEmail(event){
        await this.setState({email: event.target.value})
        // let tempProps = this.props.state
        // tempProps.signup.email = this.state.email
        // this.props.handler(tempProps)
    }
    async handleUser(event){
        await this.setState({userName: event.target.value})
        // let tempProps = this.props.state
        // tempProps.signup.userName = this.state.userName
        // this.props.handler(tempProps)
    }

    async handlePassword(event){
        await this.setState({password: event.target.value})
        // let tempProps = this.props.state
        // tempProps.signup.password = this.state.password
        // this.props.handler(tempProps)
    }


    async handleConfirm(event){
        await this.setState({confirm: event.target.value})
        // let tempProps = this.props.state
        // tempProps.signup.confirm = this.state.confirm
        // this.props.handler(tempProps)
    }

    // handleMatch(event){
    //     let tempProps = this.props.state
    //     const passwordCheck = new RegExp('[0-9]+')
    //     const emailCheck = new RegExp(".+@.+\\.[A-Za-z0-9_]+")
    //     const matchU = tempProps.user.filter(u => u.email === this.state.email)
    //     if (this.state.email === '' || this.state.userName === '' || this.state.password === '' || this.state.confirm === '') {
    //         alert("all input values cannot be empty");
    //         event.preventDefault();
    //     }
    //     else if (matchU.length !== 0){
    //         alert("Email does not exist");
    //         event.preventDefault();
    //     }
    //     else {
    //             if (!emailCheck.test(this.state.email)) {
    //                 alert("Email should at least be a@a.a format");
    //                 event.preventDefault();
    //             }
    //             else if (this.state.password.length<6 || !passwordCheck.test(this.state.password)) {
    //                 alert("Password must be at least 6 characters and include at least 1 digit. ");
    //                 event.preventDefault();
    //             }
    //             else if (this.state.password !== this.state.confirm) {
    //                 alert("Password is not matching.");
    //                 event.preventDefault();
    //             }
    //             else{
    //                 let newUser = {
    //                     userName: this.state.userName,
    //                     email: this.state.email,
    //                     password: this.state.password,
    //                     acctType: "u",
    //                     icon_url: require("../../static/Profile/icon.jpg"),
    //                     signature: "This guy is lazy, he haven't write anything yet."
    //                 }
    //                 tempProps.current.email = newUser.email
    //                 tempProps.current.userName = newUser.userName
    //                 tempProps.current.userType = newUser.acctType
    //                 tempProps.login_status = true
    //                 tempProps.user.push(newUser)
    //             }
    //     }
    //     console.log(tempProps.current.email)
    //     console.log(tempProps.current.userName)
    //     console.log(tempProps.user.length)
    //     console.log(tempProps.login_status)
    //     tempProps.signup = this.state
    //     this.props.handler(tempProps)
    // }


    handleMatch(event, page){
        const passwordCheck = new RegExp('[0-9]+')
        const emailCheck = new RegExp(".+@.+\\.[A-Za-z0-9_]+")
        if (this.state.email === '' || this.state.userName === '' || this.state.password === '' || this.state.confirm === '') {
            alert("all input values cannot be empty");
            event.preventDefault();
        }
        // else if (matchU.length !== 0){
        //     alert("Email does not exist");
        //     event.preventDefault();
        // }
        else {
                if (!emailCheck.test(this.state.email)) {
                    alert("Email should at least be a@a.a format");
                    event.preventDefault();
                }
                else if (this.state.password.length<6 || !passwordCheck.test(this.state.password)) {
                    alert("Password must be at least 6 characters and include at least 1 digit. ");
                    event.preventDefault();
                }
                else if (this.state.password !== this.state.confirm) {
                    alert("Password is not matching.");
                    event.preventDefault();
                }
                else{
                    handleSignup(page);
                }
        }
    }

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
                            className={styles.form_input}
                            onChange={(e)=>this.handleEmail(e)}>
                            </input>
                            <input
                            placeholder='username'
                            className={styles.form_input}
                            onChange={(e)=>this.handleUser(e)}>
                            </input>
                            <input
                            placeholder='password'
                            className={styles.form_input}
                            onChange={(e)=>this.handlePassword(e)}>
                            </input>
                            <input
                            placeholder='confirm password'
                            className={styles.form_input}
                            onChange={(e)=>this.handleConfirm(e)}>
                            </input>
                            <Link to={RoutesMap.Login.path} className={styles.no_decor}><Button type='button' className={styles.signup_button} onClick={(e)=>this.handleMatch(e, this)}>
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