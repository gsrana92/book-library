import React from "react";
import AppRouter, {history} from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
//import { startSetBooks } from "./actions/books";
import "./styles/styles.scss";
import './firebase/firebase';
import { firebase } from "./firebase/firebase";
// import { useEffect } from "react";


function App() {
  const store = configureStore();

  const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );

  return jsx;
}

firebase.auth().onAuthStateChanged((user) => {
  if(user){
    console.log('log in')
  }else{
    history.push('/')
    console.log('log out')
  }
    
})

export default App;


