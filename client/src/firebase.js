// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-eb283.firebaseapp.com",
  projectId: "estate-eb283",
  storageBucket: "estate-eb283.firebasestorage.app",
  messagingSenderId: "711752028997",
  appId: "1:711752028997:web:66e8eff2c9ec1edd21642c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
