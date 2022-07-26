// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCsMj6EuQJ6raVVH0xGD8QvLVqCXeuGKc",
  authDomain: "omar-portfolio-3b185.firebaseapp.com",
  projectId: "omar-portfolio-3b185",
  storageBucket: "omar-portfolio-3b185.appspot.com",
  messagingSenderId: "1087449605156",
  appId: "1:1087449605156:web:b65985e70cc176f76ea4b1",
  measurementId: "G-JW2PWSYN86"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);