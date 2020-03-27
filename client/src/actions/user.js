

export const handleLogin = (loginPage, app) => {
    
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
        })
        .then(json => {
            if (json.currentUser !== undefined) {
                app.setState({ currentUser: json.currentUser,
                loggedIn: true});
            }
        })
        .catch(error => {
            console.log(error);
        });
};


export const handleLogout = (app) => {
    const url = "/users/logout";

    fetch(url)
        .then(res => {
            app.setState({
                currentUser: null,
                loggedIn: false,
            });
        })
        .catch(error => {
            console.log(error);
        });
};


export const handleSignup = (signupPage) => {

    const url = "/user/signup";

    const user = signupPage.state

    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(function (res) {
            if (res.status === 200) {
                console.log("Singup Successfully.")
            } else {
                alert( "Signup Failed.")
            }
        })
        .catch(error => {
            console.log(error);
        });
};


export const handleCheckLogin = (app) => {
    const url = "/user/check-session";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.currentUser) {
                app.setState({ loggedIn: json.loggedIn });
            }
        })
        .catch(error => {
            console.log(error);
        });
};


export const getAllUsers = (page) => {
    const url = "/user/all";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log( "Error: Could not get Users.")
            }
        })
        .then(json => {
            page.setState({ allUser: json.users });
        })
        .catch(error => {
            console.log(error);
        });
};

export const getUserById = (userId, page) => {
    const url = "/user/"+userId;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Could not get user");
            }
        })
        .then(json => {
            page.setState({ targetUser: json });
        })
        .catch(error => {
            console.log(error);
        });
};