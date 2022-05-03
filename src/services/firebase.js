// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = initializeApp({
  apiKey: "AIzaSyCvH9u2tHp6mTVuWOdri-fAlZjp79yk9Us",
  authDomain: "clarkhistoricfarm-31b32.firebaseapp.com",
  projectId: "clarkhistoricfarm-31b32",
  storageBucket: "clarkhistoricfarm-31b32.appspot.com",
  messagingSenderId: "862341147797", 
  appId: "1:862341147797:web:4aca4ee146a4cbd4c9bf9c",
});

// Initialize Firebase
export const db = getFirestore();
