import React from "react";
import { connect } from "react-redux";

const BooksList = ({ bookList }) => {

  const handleOnClickRemove = () => {
    console.log('book removed')
  }
  return (
    <div>
      <h1> My Books List</h1>
      <div>
        {bookList.map((myBook) => {
          return (
            <div>
              <img src={myBook.book_image} alt={myBook.title} />
              <button onClick = {handleOnClickRemove}>-</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>{
  return {
    myBook: state.myBook
    
  }
}

export default connect(mapStateToProps)(BooksList);
