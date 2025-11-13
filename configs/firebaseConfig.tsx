// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ecommerce-fullstack-61f24.firebaseapp.com",
  projectId: "ecommerce-fullstack-61f24",
  storageBucket: "ecommerce-fullstack-61f24.firebasestorage.app",
  messagingSenderId: "827252684008",
  appId: "1:827252684008:web:6371ecde1375665f4a455d",
  measurementId: "G-83Z24ZKBQV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
