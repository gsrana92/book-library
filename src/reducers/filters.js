  // Filters Reducer
  const filtersReducerDefaultState = {
    text: "",
    sortBy: "title",
  };

  export const filters =   (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
      case "SET_TEXT_FILTER":
        return {
            ...state,
            text: action.text
        };

    case 'SORT_BY_TITLE':
        return{
            ...state,
            sortBy: action.title
        }
      default:
        return state;
    }
  };

  export default filters
