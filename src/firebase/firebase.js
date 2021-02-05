import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAif59CApVGs_5e5rdwwHHl79k7bPEUWp4",
  authDomain: "book-buddy-17f2d.firebaseapp.com",
  databaseURL: "https://book-buddy-17f2d-default-rtdb.firebaseio.com",
  projectId: "book-buddy-17f2d",
  storageBucket: "book-buddy-17f2d.appspot.com",
  messagingSenderId: "715561143738",
  //appId: "1:715561143738:web:8580907127de0bb02aa183",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider,  database as default};  

// database.ref('notes')
//     .once('value')
//     .then((snapshot) => {
//         const books = [];

//         snapshot.forEach((childSnapshot) => {
//             books.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(books);
//     })

// database.ref('notes').push().set({
//     title: 'Book buddy',
//     body: 'test it is then'
// })

// database.ref().set({
//   name: "Gaurav Rana",
// });

// database.ref().set('This is some data');

// database.ref('name').set('Gavi')

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     })
