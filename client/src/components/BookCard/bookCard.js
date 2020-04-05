import React from 'react';
import Card from '@material-ui/core/CardActionArea';
import Box from '@material-ui/core/Box';
import styles from './bookCard.module.css';
import { Link } from "react-router-dom";
import { RoutesMap } from '../../utils/routesMap';
import { getBookById } from '../../actions/book';

const BookCard = ({
	media,
	title,
	book,
	page,
}) => {
	return (
		<Box display="flex" justifyContent="center" alignItems="center">
			<Box className={styles.bookCard} onMouseOver={() => getBookById(book._id, page)} onMouseOout={() => getBookById(null, page)}>
				<Link to={RoutesMap.BookDetail.path} className={styles.no_decor}>
					<Card >
						<img alt='' className={styles.cardLayout} src={media}></img>
						<div className={styles.bookTitle}>{title}</div>
					</Card>
				</Link>
			</Box>
		</Box>
	);
};

export default BookCard;
