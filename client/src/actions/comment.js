export const handleAddComment = (detailPage) => {

    const url = "/comment/addComment";

    const comment = detailPage.state.comment

    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(comment),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(function (res) {
            if (res.status === 200) {
                console.log("Add comment Successfully.")
            } else {
                alert("Comment adds Failed.")
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const handleDeleteComment = (commentId) => {

    const url = "/comment/removeComment/" + commentId;


    const request = new Request(url, {
        method: "delete",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(function (res) {
            if (res.status === 200) {
                console.log("delete comment Successfully.")
            } else {
                alert("Comment deletes Failed.")
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const getAllComments = (page) => {
    const url = "/comment/all";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Error: Could not get comments.")
            }
        })
        .then(json => {
            page.setState({ allComments: json });
        })
        .catch(error => {
            console.log(error);
        });
};

export const getCommentsByOneBook = (bookId, page) => {
    const url = "/comment/byBook/" + bookId;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Could not get comments by id");
            }
        })
        .then(json => {
            page.setState({ targetAllComments: json });
        })
        .catch(error => {
            console.log(error);
        });
};


export const loadCommentsInTime = (bookId, offset, page) => {
    const url = "/comment/loadComments/" + bookId + offset;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Could not load next comments");
            }
        })
        .then(json => {
            page.setState({ nextLoadingComments: json });
        })
        .catch(error => {
            console.log(error);
        });
};

export const getTopCommentByBook = (bookId, page) => {

    const url = "/comment/top/" + bookId;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Could not get top comment");
            }
        })
        .then(json => {
            page.setState({ topComment: json });
        })
        .catch(error => {
            console.log(error);
        });
};



export const getAllCommentsByUser = (userId, page) => {
    const url = "/comment/byUser/" + userId;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Error: Could not get comments by user.")
            }
        })
        .then(json => {
            page.setState({ allCommentsByTargetUser: json });
        })
        .catch(error => {
            console.log(error);
        });
};


export const handleLikeComment = (page) => {

    const url = "/comment/like";

    const comment = page.state.targetComment

    const request = new Request(url, {
        method: "patch",
        body: JSON.stringify(comment),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(function (res) {
            if (res.status === 200) {
                console.log("like/unlike comments Successfully.")
            } else {
                alert("Like/Unlike comment Failed.")
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const addComment = (app) => {
    if (!app.state.currentUser) {
        app.loginWarning();
        return;
    }

    if (app.state.comment === "" || app.state.rating === 0) {
        app.fillInWarning();
        return;
    }

    const requestBody = { rating: app.state.rating, content: app.state.comment, bookId: app.state.targetBook }
    const url = "/comment/addComment";
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(requestBody),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request).then(res => {
        if (res.status == 200) {
            return res.json();
        } else if (res.status == 401) {
            app.loginWarning();
        }
    }).then(json => {
        if (json) {
            const new_comments = app.state.comments;
            new_comments.unshift(json);
            app.setState({ comments: new_comments });
        }
    }).catch(error => {
        console.log(error)
    })
}

export const likeComment = (app) => {
    if (!app.state.currentUser) {
        app.loginWarning();
        return;
    }
    const requestBody = { commentId: app.state.id }

    const url = "/comment/like";
    const request = new Request(url, {
        method: "PATCH",
        body: JSON.stringify(requestBody),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request).then(res => {
        if (res.status == 200) {
            return res.json()
        } else if (res.status == 401) {
            app.loginWarning();
        }
    }).then(json => {
        app.setState({ fanList: json.fanList, counter: json.likes })
    }).catch(error => {
        console.log(error)
    })

}

export const loadComments = (app) => {
    const url = `/comment/loadComments/${app.state.targetBook}/${app.state.index}`;
    fetch(url).then(res => {
        if (res.status == 200) {
            return res.json();
        }
    }).then(json => {
        if (json.length !== 0) {
            const newList = app.state.comments;
            console.log("incremented");
            json.forEach(c => newList.push(c));
            app.setState({ comments: newList, index: app.state.index + json.length });
        }
    }).catch(error => {
        console.log(error);
    })
}

export const loadTopComment = (app) => {
    const url = "/comment/top/" + app.state.targetBook;
    fetch(url).then(res => {
        if (res.status == 200) {
            return res.json();
        }
    }).then(json => {
        if (json) {
            app.setState({ top_comment: json });
        }
    }).catch(error => {
        console.log(error)
    })
}