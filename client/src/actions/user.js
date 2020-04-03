


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

export const searchUsersByName = (userName, page) => {
    const url = "/user/byName/"+userName;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Could not search users");
            }
        })
        .then(json => {
            page.setState({ searchUsers: json });
        })
        .catch(error => {
            console.log(error);
        });
};

export const handleUpdateSigniture = (page) => {

    const url = "/user/updateSignature";

    const user = page.state.current

    const request = new Request(url, {
        method: "patch",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(function (res) {
            if (res.status === 200) {
                console.log("update signiture Successfully.")
            } else {
                alert( "Signiture update Failed.")
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const handleUpdateUserName = (page) => {

    const url = "/user/updateUserName";

    const user = page.state.current

    const request = new Request(url, {
        method: "patch",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(function (res) {
            if (res.status === 200) {
                console.log("update userName Successfully.")
            } else {
                alert( "UserName update Failed.")
            }
        })
        .catch(error => {
            console.log(error);
        });
};


export const handleUpdatePassword = (page) => {

    const url = "/user/updatePassword";

    const user = page.state.current

    const request = new Request(url, {
        method: "patch",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(function (res) {
            if (res.status === 200) {
                console.log("update password Successfully.")
            } else {
                alert( "Password update Failed.")
            }
        })
        .catch(error => {
            console.log(error);
        });
};



export const handleUpdateImage = (image, page) => {

    const url = "/user/updateIcons";

    const icons = new FormData(image)

    const request = new Request(url, {
        method: "patch",
        body: icons,
    });

    fetch(request)
        .then(function (res) {
            if (res.status === 200) {
                console.log("update icon Successfully.")
            } else {
                alert( "Icon update Failed.")
            }
        })
        .catch(error => {
            console.log(error);
        });
};


export const handleMakeAdmin = (page) => {

    const url = "/user/updatePassword";

    const user = page.state.current

    const request = new Request(url, {
        method: "patch",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(function (res) {
            if (res.status === 200) {
                console.log("update accountType Successfully.")
            } else {
                alert( "accountType update Failed.")
            }
        })
        .catch(error => {
            console.log(error);
        });
};
