// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5YvE6ADuxELqGzbSE7LGdDEeBmV05W_Y",
  authDomain: "the-watcher-comics.firebaseapp.com",
  projectId: "the-watcher-comics",
  storageBucket: "the-watcher-comics.appspot.com",
  messagingSenderId: "304787397108",
  appId: "1:304787397108:web:030a6485ea1eed9f5bc1a1",
  measurementId: "G-DCR2EP0P3V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);