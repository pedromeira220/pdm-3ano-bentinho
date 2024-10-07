import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import {getAuth} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCED9mBoWhBXKydEJB7Qjqrk37pqwduDF0",
  authDomain: "aula-jorge-c3ac6.firebaseapp.com",
  projectId: "aula-jorge-c3ac6",
  storageBucket: "aula-jorge-c3ac6.appspot.com",
  messagingSenderId: "825273630201",
  appId: "1:825273630201:web:b2c35ecf6c6d07b85f5128"
};

export const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export const auth = getAuth(app);