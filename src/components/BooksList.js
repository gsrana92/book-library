import React from "react";
import { connect } from "react-redux";
import { removeBook } from "../actions/books";

const BooksList = ({ bookList, id, removeBook }) => {
  return (
    <div>
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
              <button onClick={() => removeBook({id: book.id})}>-</button>
            </div>
          );
        })}
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
    removeBook,
  };
};

export default connect(undefined, mapDispatchToProps())(BooksList);
