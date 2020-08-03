import  * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBhXas57eoBnm1tNd7lF9qdLwZAYxWLAu4",
    authDomain: "react-todo-app-da35f.firebaseapp.com",
    databaseURL: "https://react-todo-app-da35f.firebaseio.com",
    projectId: "react-todo-app-da35f",
    storageBucket: "react-todo-app-da35f.appspot.com",
    messagingSenderId: "987751015094",
    appId: "1:987751015094:web:74ae601c3f642d2fbe7c17",
    measurementId: "G-2QQ8XJC22D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  export { firebase, database as default };