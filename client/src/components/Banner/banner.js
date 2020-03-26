import React from 'react';
import styles from './banner.module.css';
import Box from "@material-ui/core/Box";


class Banner extends React.Component {
    render() {
        return (
            <Box className={styles.banner} display="flex" justifyContent="center" alignItems="center">
            </Box>
        )
    }
}

export default Banner;