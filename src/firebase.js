import firebase from "firebase/app"
import "firebase/auth"

// Initialize Firebase
const app = firebase.initializeApp({
  apiKey: "AIzaSyAvLJjP2fbYwbrXamCue9i8cBKBCZd3VvE",
  authDomain: "food-savor-b5302.firebaseapp.com",
  projectId: "food-savor-b5302",
  storageBucket: "food-savor-b5302.appspot.com",
  messagingSenderId: "783961116163",
  appId: "1:783961116163:web:e39817409a8a3bf8a68836",
  measurementId: "G-6D0G1H6LSC"
});


export const auth=app.auth();
export default app;