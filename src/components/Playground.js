// import React, { useState, useEffect } from "react";
// import DataComponent from "./DataComponent";
// import { createStore, combineReducers } from "redux";
// import { v1 as uuid } from "uuid";

// export const Playground = () => {
//   // ADD_BOOK
//   const addBook = ({
//     author = "",
//     title = "",
//     amazon_product_url = "",
//     book_image = "",
//     description = "",
//   }) => ({
//     type: "ADD_BOOK",
//     book: {
//       id: uuid(),
//       author,
//       title,
//       amazon_product_url,
//       book_image,
//       description,
//     },
//   });
//   // REMOVE_BOOK
//   const removeBook = ({ id }) => ({
//     type: "REMOVE_BOOK",
//     id,
//   });

//   // SET_TEXT_FILTER
//   const setTextFilter = (text = "") => ({
//     type: "SET_TEXT_FILTER",
//     text
//   });

//   //SORT_BY_TITLE
//   const sortByTitle = () =>({
//       type: 'SORT_BY_TITLE'
//   })

//   // Books Reducer
//   const bookReducerDefaultState = [];

//   const bookReducer = (state = bookReducerDefaultState, action) => {
//     switch (action.type) {
//       case "ADD_BOOK":
//         return [...state, action.book];

//       case "REMOVE_BOOK":
//         return state.filter(({ id }) => {
//           return id !== action.id;
//         });

//       default:
//         return state;
//     }
//   };

//   // Filters Reducer
//   const filtersReducerDefaultState = {
//     text: "",
//     sortBy: "title",
//   };

//   const filterReducer = (state = filtersReducerDefaultState, action) => {
//     switch (action.type) {
//       case "SET_TEXT_FILTER":
//         return {
//             ...state,
//             text: action.text
//         };

//     case 'SORT_BY_TITLE':
//         return{
//             ...state,
//             sortBy: 'title'
//         }
//       default:
//         return state;
//     }
//   };

//   //Get visible books
//   const getVisibleBooks = (expenses, {text, sortBy}) =>{
//       return books.filter((book) => {
//           const textMatch;

//           return textMatch
//       });

//   }

//   // Store Creation

//   const store = createStore(
//     combineReducers({
//       books: bookReducer,
//       filters: filterReducer,
//     })
//   );

//   store.subscribe(() => {
//     const state = store.getState();
//     const visibleBooks = getVisibleBooks(state.books, state.filters)
//     console.log(visibleBooks)
//   });

//   const bookOne = store.dispatch(
//     addBook({ author: "JK Rowling", title: "Harry potter" })
//   );
//   const bookTwo = store.dispatch(
//     addBook({
//       author: "Patrick Rothfuss",
//       title: "The name of wind",
//       description: "Awesome fantasy book",
//     })
//   );

//   //store.dispatch(removeBook({ id: bookOne.book.id }));
//   store.dispatch(setTextFilter('JK'))
//   store.dispatch(sortByTitle())

//   console.log(bookOne);

//   //   const user = {
//   //       name: 'Jan',
//   //       age: 24
//   //   }

//   //   console.log({
//   //       ...user,
//   //       loc: 'PA'
//   //   })

//   const demoState = {
//     books: [
//       {
//         id: "asdasdaa",
//         author: "JK Rowling",
//         title: "Harry Potter",
//         amazon_product_url: "https://amazon.com",
//         book_image: "https://example.com",
//         description: "A fantasy",
//       },
//     ],
//     filters: {
//       text: "rent",
//       sortBy: "name", // title or name
//     },
//   };
//   return <div>asd</div>;
// };

// export default Playground;
