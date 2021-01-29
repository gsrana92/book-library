import React from "react";
import Header from './Header';
import BooksList from './BooksList';
import { connect } from "react-redux";

export const Library = ({myBookList}) => {


  return (
    <div>
    <Header />
      <h2>Library component</h2>
      <BooksList bookList = {myBookList}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    myBookList: state.myBook
  }
}

export default connect(mapStateToProps)(Library);