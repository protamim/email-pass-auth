// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHhnHchaj-u96XNw5qbZ4n0nbCqinGWkg",
  authDomain: "email-pass-auth-7e96f.firebaseapp.com",
  projectId: "email-pass-auth-7e96f",
  storageBucket: "email-pass-auth-7e96f.appspot.com",
  messagingSenderId: "575972531387",
  appId: "1:575972531387:web:82ab2a7010a7e614101d9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;