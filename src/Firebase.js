// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCm__Jd3AAqg3mWska3jdSYY-W3Yjf3rxo",
  authDomain: "fir-1-c871a.firebaseapp.com",
  databaseURL: "https://fir-1-c871a-default-rtdb.firebaseio.com",
  projectId: "fir-1-c871a",
  storageBucket: "fir-1-c871a.firebasestorage.app",
  messagingSenderId: "747313342636",
  appId: "1:747313342636:web:38da928dd633e8aad55709",
  measurementId: "G-2BXXD660JD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export {app,auth};