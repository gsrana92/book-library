import React  from "react";
import Carousel from "react-elastic-carousel";
import { connect } from "react-redux";
import {startAddBook} from '../actions/books';

const BookSlider = ({ library , myBook, startAddBook}) => {

  const handleOnClick = (book) => {
    console.log(book);
    startAddBook(book)
    console.log(myBook)
  };

  return (
    <div className="slider-wrapper content-container">
      <Carousel
        className='carousel'
        itemsToShow={4}
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        itemsToScroll={4}
        autoPlaySpeed={4000}
      >
        {
          library.books.map((book) => {
            return (
              <div key={book.rank} className='images-div'>
                <img
                  src={book.book_image}
                  width="70%"
                  alt={book.title}
                  className="image"
                />
                <p>{book.description}</p>
                <button onClick={() => handleOnClick(book)} className='button'>+</button>

              </div>

            );
          })}
      </Carousel>

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myBook: state.myBook,
    //filters: state.filters
  }
}

const mapDispatchToProps = () => {
  return{
    startAddBook
    }
  }


export default connect(mapStateToProps, mapDispatchToProps())(BookSlider)