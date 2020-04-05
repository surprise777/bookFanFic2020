import React from 'react';
import styles from './tags.module.css';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { RoutesMap } from '../../utils/routesMap';
import { getBookByGenres } from '../../actions/book';

class Tags extends React.Component {
    render() {
        const { tags, page } = this.props;
        const searchLink = window.location.pathname === RoutesMap.SearchResult.path ? RoutesMap.SearchTagResult.path : RoutesMap.SearchResult.path
        return (
            <Box pt={1} className={styles.pointer}>
                {tags.map((tag, index) => {
                    return (
                        <Link key={index} to={searchLink} className={styles.link} onMouseOver={() => getBookByGenres([tag], page)}><div className={styles.tag} >{tag}</div></Link>
                    )
                })}
            </Box>
        )
    }
}

export default Tags;