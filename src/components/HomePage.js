import React, { useState, useEffect } from "react";
import Header from "./Header";
import BookSlider from "./BookSlider";
import axios from "axios";
import { connect } from "react-redux";
import { saveBook } from "../actions/books";


const apiKey = (input) =>
  `https://api.nytimes.com/svc/books/v3/lists/current/${input}.json?api-key=FBWSBGAaoqsA6icX6FAFNsozT02IGNDT`;


export const HomePage = ({ booksState, saveBook }) => {

  // const [library, setLibrary] = useState({});
  const [input, setInput] = useState("hardcover-fiction");

  useEffect(() => {
    const url = apiKey(input);
    axios
      .get(url)
      // .then((res) => res.json())
      .then((data) => {
        saveBook({collection: data.data.results});
        // setLibrary(bookState)
      });
  },[saveBook, input]);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  console.log(booksState)

  return (
    <div className="wrapper">
      <Header />
      <select onChange={handleChange}>
        <option value="hardcover-fiction" defaultValue>
          Hardcover Fiction
        </option>
        <option value="hardcover-nonfiction">Hardcover Nonfiction</option>
        <option value="paperback-nonfiction">Paperback Nonfiction</option>

        <option value="e-book-fiction">E-book Fiction</option>
      </select>
{/* <div>{JSON.stringify(bookState)}</div>
  */}      { booksState && booksState.books && booksState.books.length > 0 && (
        <BookSlider library={booksState} />
      ) }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    booksState: state.books,
    //filters: state.filters
  }
}

const mapDispatchToProps = () => {
  return{
    saveBook
    }
  }



export default connect(mapStateToProps, mapDispatchToProps())(HomePage)
