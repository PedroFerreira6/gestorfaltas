// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl4VB6wRByIaPsBsqdG6ihLSWSDnoeo6w",
  authDomain: "gestorfaltas.firebaseapp.com",
  projectId: "gestorfaltas",
  storageBucket: "gestorfaltas.appspot.com",
  messagingSenderId: "762888585208",
  appId: "1:762888585208:web:be826207962253293a200d",
  measurementId: "G-9NGCL4867B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);