// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_1_YFjP_cljY44Yiu5sCBjhSozCJx0kU",
    authDomain: "review-summary-6b0d6.firebaseapp.com",
    projectId: "review-summary-6b0d6",
    storageBucket: "review-summary-6b0d6.appspot.com",
    messagingSenderId: "540028314807",
    appId: "1:540028314807:web:cf048d3bb0593c4da49932",
    measurementId: "G-EL8JN1V518"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

