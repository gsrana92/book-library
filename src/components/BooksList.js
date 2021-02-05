import React from "react";
import { connect } from "react-redux";
import {  startRemoveBook } from "../actions/books";

const BooksList = ({ bookList, id, startRemoveBook }) => {
  return (
    <div>
    <div className='content-container'>
      <h1> My Books List</h1>
      <div>
        {bookList.map((book) => {
          return (
            <div key={book.id}>
              <img
                src={book.book_image}
                alt={book.title}
                width="30%"
                className="image"
              />
              <h3>{book.title}</h3>
              <p>{book.id}</p>
              <button onClick={() => startRemoveBook({id: book.id})}>-</button>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     myBook: state.myBook,
//   };
// };

const mapDispatchToProps = () => {
  return {
    startRemoveBook,
  };
};

export default connect(undefined, mapDispatchToProps())(BooksList);
