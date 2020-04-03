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
                alert( "Comment adds Failed.")
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const handleDeleteComment = (page, commentId) => {

    const url = "/comment/removeComment/" + commentId;

    const comment = page.state.targetComment

    const request = new Request(url, {
        method: "delete",
        body: JSON.stringify(comment),
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
                alert( "Comment deletes Failed.")
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
                console.log( "Error: Could not get comments.")
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
    const url = "/comment/byBook/"+bookId;

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
    const url = "/comment/loadComments/"+bookId + offset;

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

    const url = "/comment/top/"+bookId;

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
                console.log( "Error: Could not get comments by user.")
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
                alert( "Like/Unlike comment Failed.")
            }
        })
        .catch(error => {
            console.log(error);
        });
};