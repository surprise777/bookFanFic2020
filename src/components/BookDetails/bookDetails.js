import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './bookDetails.module.css';
import Container from '../../containers/mui/container';
import DialogContent from '@material-ui/core/DialogContent';

const BookDetail = ({
	book
}) => {
	
	return ( 
            <DialogContent>
			<Container>
                <Typography variant="h6" color="textSecondary">
					{book.title}
				</Typography>
                </Container>
                </DialogContent>
	);
};

export default BookDetail;
