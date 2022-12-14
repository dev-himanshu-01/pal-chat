// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyACAJSeO63dVsDj0GZV02YGITiEdQEY0A8",
  authDomain: "palchatx.firebaseapp.com",
  projectId: "palchatx",
  storageBucket: "palchatx.appspot.com",
  messagingSenderId: "1096445207894",
  appId: "1:1096445207894:web:f8d6f22340832ed90862f7",
  measurementId: "G-3HE4P5P7TZ"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore();

const auth = getAuth(app)


export { db, auth }
