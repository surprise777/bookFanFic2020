import React from 'react';
import styles from './tags.module.css';
import { Box } from '@material-ui/core';


class Tags extends React.Component {
    render() {
        const {tags} = this.props;
        return (
            <Box pt={1} className={styles.pointer}>
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