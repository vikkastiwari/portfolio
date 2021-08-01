import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAYI8S8DIhW4-qYqgxufTvmQlBMwoZcjXg",
  authDomain: "iamvikkastiwari.firebaseapp.com",
  databaseURL: "https://iamvikkastiwari-default-rtdb.firebaseio.com",
  projectId: "iamvikkastiwari",
  storageBucket: "iamvikkastiwari.appspot.com",
  messagingSenderId: "338927216945",
  appId: "1:338927216945:web:753f58148faee9a90ce810",
  measurementId: "G-WG1PMB28P4",
});

var db = firebaseApp.firestore();

export { db };
