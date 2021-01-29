import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import bookReducer from "../reducers/books";
import  myBookReducer   from "../reducers/book";
import filterReducer from "../reducers/filters";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation

export const configureStore =  () => {
  const store = createStore(
  
    combineReducers({
      books: bookReducer,
      myBook: myBookReducer,
      filters: filterReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)) 
  );

  return store;
};

export default configureStore;