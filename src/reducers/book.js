const bookDefaultState = [];

export const myBookReducer = (state = bookDefaultState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      //console.log("This is action: ",action)
      return [...state, action.book];

    case "REMOVE_BOOK":
      //console.log(action.id);
      return state.filter(({id}) => id !==action.id);

    default:
      return state;
  }
};

export default myBookReducer;
