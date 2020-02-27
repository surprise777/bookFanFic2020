
import {RoutesMap} from '../utils/routesMap';
export const BookDialog = function(book){
    console.log("dialog!");
    console.log(book.title);
    window.location=RoutesMap.BookDetail.path;
};
