export const handleAddBook = (bookPage) => {

    const url = "/book/addBook";

    const book = bookPage.state

    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(book),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(function (res) {
            if (res.status === 200) {
                console.log("Add book Successfully.")
            } else {
                alert( "Book adds Failed.")
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const handleDeleteBook = (page) => {

    const url = "/book/deleteBook";

    const book = page.state.targetBook

    const request = new Request(url, {
        method: "delete",
        body: JSON.stringify(book),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(function (res) {
            if (res.status === 200) {
                console.log("delete book Successfully.")
            } else {
                alert( "Book deletes Failed.")
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const getAllBooks = (page) => {
    const url = "/book/all";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log( "Error: Could not get books.")
            }
        })
        .then(json => {
            page.setState({ allBooks: json });
        })
        .catch(error => {
            console.log(error);
        });
};

export const getBookById = (bookId, page) => {
    const url = "/book/searchById/"+bookId;

    fetch(url)
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
};


export const searchBooksByName = (bookTitle, page) => {
    const url = "/book/searchByName/"+bookTitle;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Could not search books");
            }
        })
        .then(json => {
            page.setState({ searchBooks: json });
        })
        .catch(error => {
            console.log(error);
        });
};

export const getBookByGenres = (genresList, page) => {
    let genres = ""
    for(let i = 0 ; i < genresList.length; i++){
        genres = genres + genresList[i]
        if (i !== genresList.length-1){
            genres = genres + "&"
        }
    }
    const url = "/book/searchByGenres/"+genres;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Could not get user");
            }
        })
        .then(json => {
            page.setState({ genresBooks: json });
        })
        .catch(error => {
            console.log(error);
        });
};


export const getReleventById = (bookId, page) => {
    const url = "/book/relevant/"+bookId;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Could not get relevent books");
            }
        })
        .then(json => {
            page.setState({ relevantBooks: json });
        })
        .catch(error => {
            console.log(error);
        });
};


export const getTrending = (page) => {
    const url = "/book/trending";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log( "Error: Could not get trending books.")
            }
        })
        .then(json => {
            page.setState({ trending: json });
        })
        .catch(error => {
            console.log(error);
        });
};

export const getMonthlyRec = (page) => {
    const url = "/book/monthRecommendation";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log( "Error: Could not get monthly books.")
            }
        })
        .then(json => {
            page.setState({ monthly: json });
        })
        .catch(error => {
            console.log(error);
        });
};


export const handleMakeRec = (page) => {

    const url = "/book/addBook";

    const book = page.state.targetBook

    const request = new Request(url, {
        method: "patch",
        body: JSON.stringify(book),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(function (res) {
            if (res.status === 200) {
                console.log("recomend book Successfully.")
            } else {
                alert( "Book recomendation Failed.")
            }
        })
        .catch(error => {
            console.log(error);
        });
};