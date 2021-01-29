
// Books Reducer
const bookReducerDefaultState = [];

export const books = (state = bookReducerDefaultState, action) => {
  switch (action.type) {

    case "SAVE_BOOK":
      //console.log(action)
      return action.collection;

    default:
      return state;
  }
};

export default books;
