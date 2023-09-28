// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqVRMJEG6ywrXc85Lt6kl4RhYsMbmRgkY",
  authDomain: "decisive-duck.firebaseapp.com",
  projectId: "decisive-duck",
  storageBucket: "decisive-duck.appspot.com",
  messagingSenderId: "482659605021",
  appId: "1:482659605021:web:f4160ef079b7077ff604f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
