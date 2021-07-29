import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDuft61edjIZS8b7xl7VXWM13sYoB3f1Vs",
    authDomain: "chat-system-71ead.firebaseapp.com",
    databaseURL: "https://chat-system-71ead-default-rtdb.firebaseio.com",
    projectId: "chat-system-71ead",
    storageBucket: "chat-system-71ead.appspot.com",
    messagingSenderId: "554812560613",
    appId: "1:554812560613:web:7b1a9df7c642ce87c4300c",
    measurementId: "G-J3JTJ2FLCB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
   export default firebase.database();