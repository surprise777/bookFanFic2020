import React from "react";
import Container from "../../containers/mui/container";
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import styles from "./login.module.css";
import LoginContent from '../../contents/login';
import Button from '../../containers/mui/button';
import {RoutesMap} from '../../utils/routesMap';

class Login extends React.Component{
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
                            className={styles.form_input}>
                            </input>
                            <input label={LoginContent.password}
                            placeholder={LoginContent.password}
                             className={styles.form_input}>
                            </input>
                            <br/>
                            <Button className={styles.login_button}>
                            {LoginContent.login}
                                </Button>
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