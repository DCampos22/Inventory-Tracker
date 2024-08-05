// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR_DCIBJnj-YEV79b-nU2Ju6IuzfMWZhY",
  authDomain: "inventory-management-a18a2.firebaseapp.com",
  projectId: "inventory-management-a18a2",
  storageBucket: "inventory-management-a18a2.appspot.com",
  messagingSenderId: "502251758683",
  appId: "1:502251758683:web:6dbe36e16096f5d6930b7e",
  measurementId: "G-CV9TQG08T5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}