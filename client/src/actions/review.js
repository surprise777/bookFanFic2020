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
                alert("Review adds Failed.")
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const handleDeleteReview = (reviewId) => {

    const url = "/review/removeReview/" + reviewId;


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
                console.log("delete review Successfully.")
            } else {
                alert("Review deletes Failed.")
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
                console.log("Error: Could not get reviews.")
            }
        })
        .then(json => {
            page.setState({ allReviews: json });
        })
        .catch(error => {
            console.log(error);
        });
};

export const getReviewById = (id, page) => {

    const url = "/review/byId/" + id;
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Could not get review by id");
            }
        })
        .then(json => {
            page.setState({ targetReview: json });
            return json.bookId
        }).then(bookId => {

            const bookUrl = "/book/searchById/" + bookId;

            fetch(bookUrl)
                .then(res => {
                    if (res.status === 200) {
                        return res.json();
                    } else {
                        console.log("Could not get book by id");
                    }
                })
                .then(json => {
                    page.setState({ targetBook: json });
                })
                .catch(error => {
                    console.log(error);
                });


        })
        .catch(error => {
            console.log(error);
        });

};

export const searchReviewsByName = (title, page) => {
    const url = "/review/searchByName/" + title;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Could not search reviews");
            }
        })
        .then(json => {
            page.setState({ searchReviews: json });
        })
        .catch(error => {
            console.log(error);
        });
};

export const getAllReviewsByOneUser = (userId, page) => {
    const url = "/review/byUser/" + userId;

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
    const url = "/review/byBook/" + bookId;

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

export const loadReviewsInTime = (bookId, offset, page) => {
    const url = "/review/loadReviews/" + bookId + offset;

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

    const url = "/review/top/" + bookId;

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


export const getMostPopularReviews = (page) => {
    const url = "/review/mostPopular";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Error: Could not get popular reviews.")
            }
        })
        .then(json => {
            page.setState({ popularReviews: json });
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
                return res.json();
            } else {
                alert("Like/Unlike review Failed.")
            }
        })
        .then(json => {
            page.setState({ click: json.status });
        })
        .catch(error => {
            console.log(error);
        });
};


export const loadReviews = (app) => {
    const url = `/review/loadReviews/${app.state.targetBook._id}/${app.state.offset}`;
    fetch(url).then(res => {
        if (res.status == 200) {
            return res.json();
        }
    }).then(json => {
        if (json.length !== 0) {
            const newList = app.state.nextLoadingReviews;
            console.log("incremented");
            json.forEach(c => newList.push(c));
            app.setState({ nextLoadingReviews: newList, offset: app.state.offset + json.length });
        }
    }).catch(error => {
        console.log(error);
    })
}

export const loadTopReview = (app) => {
    const url = "/review/top/" + app.state.targetBook._id;
    fetch(url).then(res => {
        if (res.status == 200) {
            return res.json();
        }
    }).then(json => {
        if (json) {
            app.setState({ top_review: json });
        }
    }).catch(error => {
        console.log(error)
    })
}