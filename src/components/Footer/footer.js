import React from 'react';
import styles from './footer.module.css';
import Box from '@material-ui/core/Box';
import FooterContent from '../../contents/footer';

class Footer extends React.Component {
    render() {
        return (
            <Box className={styles.footer} display='flex' justifyContent='center' alignItems='center'>
                <div>{FooterContent.copyright}</div>
            </Box>
        )
    }
}

export default Footer;