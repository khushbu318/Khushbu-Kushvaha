// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByC44JhzVhvThOk5W0OxyNUNZovgkUg4U",
  authDomain: "protfolio-kk.firebaseapp.com",
  projectId: "protfolio-kk",
  storageBucket: "protfolio-kk.firebasestorage.app",
  messagingSenderId: "331806933160",
  appId: "1:331806933160:web:30a801ad44d151c2c5029d",
  measurementId: "G-7JRH7F6PV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
