import React from 'react';
import Card from '@material-ui/core/CardActionArea';
import Box from '@material-ui/core/Box';
import styles from './bookCard.module.css';
import {Link} from "react-router-dom";
import {RoutesMap} from '../../utils/routesMap';

const BookCard = ({
	media,
	title,
	book,
	handleSelectedBook,
}) => {
	return (
		<Box display="flex" justifyContent="center" alignItems="center">
			<Box className={styles.bookCard}>
			<Card >
				<img  alt='' className={styles.cardLayout} src={media}></img>
				<Link to={RoutesMap.BookDetail.path} className={styles.no_decor}><div className={styles.bookTitle} onClick={handleSelectedBook}>{title}</div></Link>
			</Card>
				
			</Box>
		</Box>
	);
};

export default BookCard;
