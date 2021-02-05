import { v1 as uuid } from "uuid";
import database from "../firebase/firebase";
//import axios from 'axios';

//ADD_BOOK
export const addBook = (book) => ({
  type: "ADD_BOOK",
  book: {
    id: uuid(),
    ...book,
  },
});

export const startAddBook = (book) => {
  return (dispatch) => {
    database
      .ref("books")
      .push(book)
      .then((ref) => {
        dispatch(
          addBook({
            id: ref.key,
            ...book,
          })
        );
      });
  };
};

// REMOVE_BOOK
export const removeBook = ({ id } = {}) => ({
  type: "REMOVE_BOOK",
  id,
});

export const startRemoveBook = ({ id } = {}) => {
  return (dispatch) => {
    return database
      .ref(`books/${id}`)
      .remove()
      .then(() => {
        dispatch(removeBook({ id }));
      });
  };
};

// SAVE_BOOKS
export const saveBook = ({ collection }) => ({
  type: "SAVE_BOOK",
  collection,
});

//SET_BOOKS
export const setBooks = (books) => ({
  type: "SET_BOOKS",
  books,
});

export const startSetBooks = () => {
  return (dispatch) => {
    return database
      .ref("books")
      .once("value")
      .then((snapshot) => {
        const books = [];

        snapshot.forEach((childSnapshot) => {
          books.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setBooks(books));
      });
  };
};
