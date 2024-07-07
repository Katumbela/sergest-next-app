// Import the functions you need from the SDKs you need
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import { doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkA14SXODm3ggIzj7fraJSyyYN_VJMz90",
  authDomain: "sergest-blog.firebaseapp.com",
  projectId: "sergest-blog",
  storageBucket: "sergest-blog.appspot.com",
  messagingSenderId: "988689076882",
  appId: "1:988689076882:web:0785c9953131e139ac8c4b",
  measurementId: "G-5SYG8HHJ2N",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

export { db, doc, setDoc, storage, firebase };
