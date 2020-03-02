import React from 'react';
import styles from './footer.module.css';
import Container from '../../containers/mui/container';
import Box from '@material-ui/core/Box';

class Footer extends React.Component {
    render() {
        return (
            <Box className={styles.footer} display='flex' justifyContent='center' alignItems='center'>
                <div>2020 Copyright @ ReaderClubs</div>
            </Box>
        )
    }
}

export default Footer;