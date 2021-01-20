import React from "react";
import Carousel from "react-elastic-carousel";
import "../styles/BookSLider.css";

const BookSlider = ({ library }) => {
  return (
    <div className="slider-wrapper">
      <Carousel
        itemsToShow={4}
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        itemsToScroll={4}
        enableAutoPlay={true}
      >
        {library &&
          library.books.map((book) => {
            return (
              <img
                src={book.book_image}
                width="70%"
                alt={book.title}
                className="image"
              />
            );
          })}
      </Carousel>
    </div>
  );
};

export default BookSlider;
