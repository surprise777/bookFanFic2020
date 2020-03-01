import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Box from '@material-ui/core/Box';
import styles from './bookCard.module.css';
import { BookDialog } from '../../actions/viewBookDetails';

const BookCard = ({
	media,
	title,
}) => {
	const style = {
		backgroundImage: `url(${media})`
	}
	return (
		<Box display="flex" justifyContent="center" alignItems="center">
			<Box className={styles.bookCard}>
			<CardActionArea onClick={() => BookDialog()}>
				<Card className={styles.cardLayout} style={style}>
				</Card>
			</CardActionArea>
				<div>{title}</div>
			</Box>
		</Box>
	);
};

export default BookCard;
