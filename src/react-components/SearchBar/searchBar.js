import React from 'react';


class SearchBar extends React.Component{
    render() {
        return (
            <form>
                <input
                type="text"
                >
                </input>
                <button type="submit">search</button>
            </form>
        )
    }
}

export default SearchBar;