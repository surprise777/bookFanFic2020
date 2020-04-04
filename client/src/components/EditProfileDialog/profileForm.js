import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from "@material-ui/core/Box";
import Edit from '@material-ui/icons/Edit';
import { Input, StylesProvider, TextField } from '@material-ui/core';
import Grid from '../../containers/mui/grid';
import EditProfileDialogContent from '../../contents/editProfileDialog';
import styles from './editProfileDialog.module.css';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

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
            <List>
                <Grid container spacing={0} xs={12}>
                        <Grid item xs={12} md={4}>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Box display="flex-center">
                                   <form id="update-icon" onSubmit={(e)=>this.handleSubmitIcon(e,this.props.user)}>
                                        <input
                                            accept="image/*"
                                            id="contained-button-file"
                                            name="image"
                                            multiple
                                            type="file"
                                        />
                                      <button type="submit" form="update-icon"><AddPhotoAlternateIcon /></button></form>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <ListItem>
                                    <ListItemText primary={'userName：'} justify="flex-end" />
                                    <form id="update-user-name" onSubmit={(e)=>this.handleSubmitUserName(e,this.props.user)}>
                                    <input name="userName" placeholder={this.props.user.state.currentUser.userName} />
                                    <button type="submit" form="update-user-name"><Edit/></button></form>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={'password：'} justify="flex-end" />
                                    <form id="update-password" onSubmit={(e)=>this.handleSubmitPassword(e, this.props.user)}>
                                    <input type="hidden" name="id" value={this.props.user.state.currentUser._id}/>
                                    <input name="password" />
                                    <button type="submit" form="update-password"><Edit /></button></form>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={'signiture：'} justify="flex-end" />
                                    <form id="update-signiture" onSubmit={(e)=>this.handleSubmitSigniture(e, this.props.user)}>
                                    <input type="hidden" name="userId" value={this.props.user.state.currentUser._id}/>
                                    <input name="signiture" placeholder={this.props.user.state.currentUser.signiture} />
                                    <button type="submit" form="update-signiture"><Edit/></button></form>
                                </ListItem>
                        </Grid>
                </Grid>
            </List>

        );
    }
}

export default ProfileForm;