import React, { useState, useEffect } from "react";
import Header from "./Header";
import BookSlider from "./BookSlider";
import '../styles/Homepage.css'

const FEATURE_API =
  "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=FBWSBGAaoqsA6icX6FAFNsozT02IGNDT";

const SEARCH_API = ":keyes&key=AIzaSyCQAk_Fvz8vZFpFptY3B0sPWNph94mBal0";


export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [library, setLibrary] = useState({});


  useEffect(() => {
    getBooks(FEATURE_API);
  }, []);

  const getBooks = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setLibrary(data.results);
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
    <div className='wrapper'>
    <Header />
      <form onSubmit={handleSubmit} className=''>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          value={searchTerm}
          className=''
        />
      </form>

        {library &&
          library.books &&
          library.books.length > 0 &&
          <BookSlider library={library} />}
    </div>
  );
};

export default HomePage;
