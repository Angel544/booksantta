import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyBU3juSgJPjuq2dcnQjpjURoiRpGAgm40Y",
    authDomain: "booksanta-8fad7.firebaseapp.com",
    databaseURL: "https://booksanta-8fad7.firebaseio.com",
    projectId: "booksanta-8fad7",
    storageBucket: "booksanta-8fad7.appspot.com",
    messagingSenderId: "568440999293",
    appId: "1:568440999293:web:f578a56d1aa27fff271014"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestor();
  