import React from 'react';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from "@material-ui/core/Box";
import Edit from '@material-ui/icons/Edit';
import Grid from '../../containers/mui/grid';
import styles from './editProfileDialog.module.css';
import Container from '../../containers/mui/container';

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmitIcon = this.handleSubmitIcon.bind(this);
        this.handleSubmitUserName = this.handleSubmitUserName.bind(this);
        this.handleSubmitPassword = this.handleSubmitPassword.bind(this);
        this.handleSubmitSigniture = this.handleSubmitSigniture.bind(this);
        this.state = {
            checked: false
        }
        this.handleClicked = this.handleClicked.bind(this);
    }

    handleClicked(e) {
        this.setState({
            checked: !this.state.checked
        })
    }

    handleSubmitIcon(event, app) {
        event.preventDefault();
        const url = "/user/updateIcons";
        const data = new FormData(event.target);
        const request = new Request(url, {
            method: "PATCH",
            body: data,
        });

        fetch(request)
            .then(function (res) {
                if (res.status === 200) {
                    console.log("Add Icon Successfully.")
                } else {
                    alert("Icon adds Failed.")
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleSubmitUserName(event, app) {
        event.preventDefault();
        const url = "/user/updateUserName";
        const data = new FormData(event.target);
        const jsonRaw = {
            "userName": data.get("userName"),
        }
        const request = new Request(url, {
            method: "PATCH",
            body: JSON.stringify(jsonRaw),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });

        fetch(request)
            .then(function (res) {
                if (res.status === 200) {
                    console.log("Add username Successfully.")
                } else {
                    alert("username adds Failed.")
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleSubmitPassword(event, app) {
        event.preventDefault();
        const url = "/user/updatePassword";
        const data = new FormData(event.target);
        const jsonRaw = {
            "password": data.get("password"),
            "id": data.get("id"),
        }
        const request = new Request(url, {
            method: "PATCH",
            body: JSON.stringify(jsonRaw),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });

        fetch(request)
            .then(function (res) {
                if (res.status === 200) {
                    console.log("Add password Successfully.")
                } else {
                    alert("Password adds Failed.")
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    handleSubmitSigniture(event, app) {
        event.preventDefault();
        const url = "/user/updateSigniture";
        const data = new FormData(event.target);
        const jsonRaw = {
             "userId": data.get("userId"),
            "signiture": data.get("signiture"),
        }
        const request = new Request(url, {
            method: "PATCH",
            body: JSON.stringify(jsonRaw),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });

        fetch(request)
            .then(function (res) {
                if (res.status === 200) {
                    console.log("Add signiture Successfully.")
                } else {
                    alert("Signiture  add Failed.")
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <Grid className={styles.padding}>
                <Grid container spacing={0} xs={12}>
                    <Grid item xs={12} md={3}>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Box display="flex-center" className={styles.paddingTop}>
                                <Typography variant="body2" align="center"> Upload image</Typography>
                                <Button >
                                    <input
                                        accept="image/*"
                                        id="contained-button-file"
                                        name="image"
                                        multiple
                                        type="file"
                                        className={styles.uploadButton}
                                    />
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Container maxWidth='lg'>
                            <Box pt={2}>
                                <ListItem>
                                    <ListItemText justify="flex-end" />
                                    <form id="update-user-name" onSubmit={(e)=>this.handleSubmitUserName(e,this.props.user)}>
                                    <Grid item xs={12} md={3}>
                                        <Typography variant="body1">UserName: </Typography>
                                        </Grid>
                                        <Grid xs={12} md={9}>
                                        <input name="userName" className={styles.inputSize} placeholder={this.props.user.state.currentUser.userName}/>
                                        <button type="submit" form="update-user-name"><Edit/></button>
                                    </Grid>
                                    </form>
                                </ListItem>
                                <ListItem>
                                    <ListItemText justify="flex-end" />
                                    <form id="update-password" onSubmit={(e)=>this.handleSubmitPassword(e, this.props.user)}>
                                    <Grid item xs={12} md={3}>
                                        <Typography variant="body1">Password: </Typography>
                                    </Grid>
                                    <Grid xs={12} md={9}>
                                        <input type="hidden" name="id" value={this.props.user.state.currentUser._id}/>
                                        <input name="password" className={styles.inputSize}/>
                                        <button type="submit" form="update-password"><Edit /></button>
                                    </Grid>
                                    </form>
                                </ListItem>
                                <ListItem>
                                    <ListItemText justify="flex-end" />
                                    <form id="update-signiture" onSubmit={(e)=>this.handleSubmitSigniture(e, this.props.user)}>
                                    <Grid item xs={12} md={3}>
                                        <Typography variant="body1">Signature: </Typography>
                                    </Grid>
                                    <Grid xs={12} md={9}>
                                        <input type="hidden" name="userId" value={this.props.user.state.currentUser._id}/>
                                        <input name="signiture" placeholder={this.props.user.state.currentUser.signiture} className={styles.inputSize}/>
                                        <button type="submit" form="update-signiture"><Edit/></button>
                                    </Grid>
                                    </form>
                                </ListItem>
                            </Box>
                        </Container>
                    </Grid>
                </Grid>
            </Grid>

        );
    }
}

export default ProfileForm;