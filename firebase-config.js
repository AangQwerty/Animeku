// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2xzDudJSG8oJq6Gux_dKJjqfND3RtOzg",
  authDomain: "animeku-35a3b.firebaseapp.com",
  projectId: "animeku-35a3b",
  storageBucket: "animeku-35a3b.firebasestorage.app",
  messagingSenderId: "845156431605",
  appId: "1:845156431605:web:ded791fcf2e00ba0c177bc",
  measurementId: "G-5XKME7KFNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);