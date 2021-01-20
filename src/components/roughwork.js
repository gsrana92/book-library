import React, { useState, useEffect } from "react";
import AppRouter from "./routers/AppRouter";
import HomePage from "./components/HomePage";

const FEATURE_API =
  "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=FBWSBGAaoqsA6icX6FAFNsozT02IGNDT";

const SEARCH_API = ":keyes&key=AIzaSyCQAk_Fvz8vZFpFptY3B0sPWNph94mBal0";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState({});

  useEffect(() => {
    getBooks(FEATURE_API);
  }, []);

  const getBooks = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setBooks(data.results);
      });
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getBooks(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          searchTerm +
          SEARCH_API
      );
      setSearchTerm("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}></form>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={searchTerm}
      />
      <div>
        {books &&
          books.books &&
          books.books.length > 0 &&
          books.books.map((book) => <HomePage key={book.rank}{...book} />)}
      </div>
    </div>
  );
}

