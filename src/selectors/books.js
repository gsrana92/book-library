  //Get visible books
  export default  (books, {text, sortBy}) =>{
    const b = books.filter((book) => {
        const textMatch = book.title.toLowerCase().includes(text.toLowerCase());
        return textMatch
    });
    return b;

}