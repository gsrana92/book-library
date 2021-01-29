import React from "react";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
//import Playground from './components/Playground';
import configureStore from "./store/configureStore";
// import { addBook } from "./actions/books";
// import { setTextFilter } from "./actions/filters";
// import getVisibleBooks from "./selectors/books";
import "./styles/styles.scss";
// import { useEffect } from "react";



function App() {
  const store = configureStore();


  // useEffect(() => {
  //   store.dispatch(addBook({ author: "JK" }));
  //   store.dispatch(addBook({ title: "Harry Potter" }));
  //   store.dispatch(setTextFilter("harry"));
  // });
  

  //const state = store.getState();
  //const visibleBooks = getVisibleBooks(state.books, state.filters);
  // console.log(visibleBooks);

  //console.log(store.getState());

  const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );

  return jsx;
}

export default App;
