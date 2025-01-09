import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration (pastikan Anda memasukkan nilai yang benar dari Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyA2xzDudJSG8oJq6Gux_dKJjqfND3RtOzg",
    authDomain: "animeku-35a3b.firebaseapp.com",
    databaseURL: "https://animeku-35a3b.firebaseio.com",
    projectId: "animeku-35a3b",
    storageBucket: "animeku-35a3b.appspot.com",
    messagingSenderId: "845156431605",
    appId: "1:845156431605:web:ded791fcf2e00ba0c177bc",
    measurementId: "G-5XKME7KFNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
