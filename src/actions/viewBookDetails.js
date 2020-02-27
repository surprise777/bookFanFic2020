import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import BookDetail from '../components/BookDetails/bookDetails';


export const BookDialog = function(book){
	console.log("dialog!");
	return (
			<Dialog fullWidth maxWidth="lg" open="true" >
			<BookDetail/>
			</Dialog>
	);
};
