import React from 'react';
import styles from './tags.module.css';
import {tags} from '../../contents/tag_collection';
import { Box } from '@material-ui/core';


class Tags extends React.Component {
    render() {
        return (
            <Box pt={1}>
                {tags.map((tag, index)=>{
                    return (
                        <div key={index} className={styles.tag}>{tag}</div>     
                    )
                })}
            </Box>
        )
    }
}

export default Tags;