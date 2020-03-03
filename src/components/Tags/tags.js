import React from 'react';
import styles from './tags.module.css';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {RoutesMap} from '../../utils/routesMap';

class Tags extends React.Component {
    render() {
        const {tags} = this.props;
        return (
            <Box pt={1} className={styles.pointer}>
                {tags.map((tag, index)=>{
                    return (
                        <Link key={index}  to={RoutesMap.SearchResult.path} className={styles.link}><div className={styles.tag}>{tag}</div></Link>   
                    )
                })}
            </Box>
        )
    }
}

export default Tags;