import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styles from './bookCard.module.css';
import { BookDialog } from '../../actions/viewBookDetails';

const BookCard = ({
	media,
	title,
	book
}) => {

	return (
		<Card className={styles.cardLayout}>
			<CardActionArea onClick={() => BookDialog(book)}>

				<CardMedia image={media} className={styles.cardMedia} >
					
					</CardMedia>

			</CardActionArea>
			<CardActions disableSpacing>
				<IconButton>
					<AddBoxIcon />
				</IconButton>
				<IconButton>
					<RemoveCircleIcon />
				</IconButton>
				<IconButton>
					<MoreVertIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default BookCard;
