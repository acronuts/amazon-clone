import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC1jNwXX-PYAgublM43nZsPh8R33D0Jxhs",
    authDomain: "clone-63e37.firebaseapp.com",
    databaseURL: "https://clone-63e37.firebaseio.com",
    projectId: "clone-63e37",
    storageBucket: "clone-63e37.appspot.com",
    messagingSenderId: "731293124809",
    appId: "1:731293124809:web:a0d23782d0d930c6b5e518",
    measurementId: "G-RE5X3PR974"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };