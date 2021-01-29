import  { useState, useEffect } from "react";
//import Header from "./Header";
//import BookSlider from "./BookSlider";
//import HeaderTwo from "./HeaderTwo";

//export const bookDefaultState = library

const apiKey = (input) =>
  `https://api.nytimes.com/svc/books/v3/lists/current/${input}.json?api-key=FBWSBGAaoqsA6icX6FAFNsozT02IGNDT`;

export const DataComponent = () => {
  const [library, setLibrary] = useState({});
  const [input, setInput] = useState("hardcover-fiction");
  //const [apiKey, setApiKey] =useState(url)

  useEffect(() => {
    const url = apiKey(input);
    getBooks(url);
  }, [input]);

  const getBooks = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setLibrary(data.results);
      });
  };


}








