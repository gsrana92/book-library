import React  from "react";
import Carousel from "react-elastic-carousel";
import { connect } from "react-redux";
import {addBook} from '../actions/books';

const BookSlider = ({ library , myBook, addBook}) => {

  const handleOnClick = (book) => {
    console.log(book);
    addBook(book)
    console.log(myBook)
  };

  return (
    <div className="slider-wrapper content-container">
      <Carousel
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
    addBook
    }
  }


export default connect(mapStateToProps, mapDispatchToProps())(BookSlider)