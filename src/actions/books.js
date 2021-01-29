//import {v1 as uuid} from 'uuid';
//import axios from 'axios';

//ADD_BOOK
export const addBook = (book) => ({
  type: 'ADD_BOOK',
  book
})

// export const startAddBook = (bookData = {}) => {
//   return (dispatch, getState) =>{
//     const {
//       author='',
//       title='',
//       amazon_product_url='',
//       book_image='',
//       description=''
//     } = bookData;
//     const book = {author, title, amazon_product_url, book_image, description}
//     return {
//       dispatch(addBook({
//         book
//       }))
//     }
//   }
// }

// REMOVE_BOOK
export const removeBook = ({ id }) => ({
  type: "REMOVE_BOOK",
  id,
});

// SAVE_BOOKS
export const saveBook = ({collection}) => ({
  type: "SAVE_BOOK",
  collection
})