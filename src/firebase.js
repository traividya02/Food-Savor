import firebase from "firebase/app"
import "firebase/auth"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvLJjP2fbYwbrXamCue9i8cBKBCZd3VvE",
  authDomain: "food-savor-b5302.firebaseapp.com",
  projectId: "food-savor-b5302",
  storageBucket: "food-savor-b5302.appspot.com",
  messagingSenderId: "783961116163",
  appId: "1:783961116163:web:e39817409a8a3bf8a68836",
  measurementId: "G-6D0G1H6LSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth=app.auth();
export default app;