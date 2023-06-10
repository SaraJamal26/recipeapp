// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4aIohLe0yKycqN_ofcx0R4F7mQh2avqc",
  authDomain: "recipe-app-f1bbb.firebaseapp.com",
  projectId: "recipe-app-f1bbb",
  storageBucket: "recipe-app-f1bbb.appspot.com",
  messagingSenderId: "1094787427567",
  appId: "1:1094787427567:web:deeffc92a871de11d0bf1a",
  measurementId: "G-KLSVENTQX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;