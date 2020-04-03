export const handleAddReview = (detailPage) => {

    const url = "/review/addReview";

    const review = detailPage.state.review

    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(review),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(function (res) {
            if (res.status === 200) {
                console.log("Add review Successfully.")
            } else {
                alert( "Review adds Failed.")
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const handleDeleteReview = (page, reviewId) => {

    const url = "/review/removeReview/" + reviewId;

    const review = page.state.targetReview

    const request = new Request(url, {
        method: "delete",
        body: JSON.stringify(review),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(function (res) {
            if (res.status === 200) {
                console.log("delete review Successfully.")
            } else {
                alert( "Review deletes Failed.")
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const getAllReviews = (page) => {
    const url = "/review/all";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log( "Error: Could not get reviews.")
            }
        })
        .then(json => {
            page.setState({ allReviews: json });
        })
        .catch(error => {
            console.log(error);
        });
};

export const getReviewByName = (title, page) => {
    const url = "/review/searchByName/"+title;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Could not get review by name");
            }
        })
        .then(json => {
            page.setState({ targetReview: json });
        })
        .catch(error => {
            console.log(error);
        });
};

export const getAllReviewsByOneUser = (userId, page) => {
    const url = "/review/byUser/"+userId;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Could not get all reviews by user");
            }
        })
        .then(json => {
            page.setState({ targetUserReviews: json });
        })
        .catch(error => {
            console.log(error);
        });
};

export const getAllReviewsByOneBook = (bookId, page) => {
    const url = "/review/byBook/"+bookId;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Could not get all reviews by a book");
            }
        })
        .then(json => {
            page.setState({ targetBookReviews: json });
        })
        .catch(error => {
            console.log(error);
        });
};

export const loadCommentsInTime = (bookId, offset, page) => {
    const url = "/review/loadReviews/"+bookId + offset;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Could not load next reviess");
            }
        })
        .then(json => {
            page.setState({ nextLoadingReviews: json });
        })
        .catch(error => {
            console.log(error);
        });
};

export const getTopReviewByBook = (bookId, page) => {

    const url = "/review/top/"+bookId;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Could not get top review");
            }
        })
        .then(json => {
            page.setState({ topComment: json });
        })
        .catch(error => {
            console.log(error);
        });
};





export const handleLikeReview = (page) => {

    const url = "/review/like";

    const review = page.state.targetReview

    const request = new Request(url, {
        method: "patch",
        body: JSON.stringify(review),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(function (res) {
            if (res.status === 200) {
                console.log("like/unlike review Successfully.")
            } else {
                alert( "Like/Unlike review Failed.")
            }
        })
        .catch(error => {
            console.log(error);
        });
};