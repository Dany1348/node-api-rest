// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBik_PeVqHmPRZz3tljirVIyNPuSOYzgE8",
  authDomain: "node-api-rest-267f9.firebaseapp.com",
  projectId: "node-api-rest-267f9",
  storageBucket: "node-api-rest-267f9.firebasestorage.app",
  messagingSenderId: "481004165658",
  appId: "1:481004165658:web:a1635b6ba35ea5f43c0fa3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore

const db = getFirestore(app);

export {db};
