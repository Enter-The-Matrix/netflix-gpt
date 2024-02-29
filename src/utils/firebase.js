// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxEQS125g9NrD0m_5HbEpvR9cG3G0LH78",
  authDomain: "netflix-gpt-ec0e8.firebaseapp.com",
  projectId: "netflix-gpt-ec0e8",
  storageBucket: "netflix-gpt-ec0e8.appspot.com",
  messagingSenderId: "634769748213",
  appId: "1:634769748213:web:773633fd67385f6c34d5bc",
  measurementId: "G-6JDDBZ54FF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()