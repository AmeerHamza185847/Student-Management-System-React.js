// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAL6oLbFgnu-uUS6O9bfSo1T2bQxRT1Mts",
  authDomain: "student-management-syste-79669.firebaseapp.com",
  projectId: "student-management-syste-79669",
  storageBucket: "student-management-syste-79669.appspot.com",
  messagingSenderId: "482797711748",
  appId: "1:482797711748:web:d7fe701df1a0fb51406dd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore

const db = getFirestore(app);

export {db};