import React, {useEffect,} from "react";
import Header from './Header';
import BooksList from './BooksList';
import { connect } from "react-redux";
import { startSetBooks } from "../actions/books";

export const Library = ({myBookList, startSetBooks}) => {

  useEffect(() => {
    startSetBooks()
  }, [startSetBooks])


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

const mapDispatchToProps = () => {
  return{
    startSetBooks
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Library);