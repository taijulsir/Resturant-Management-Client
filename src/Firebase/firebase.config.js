// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvLl1LsxlJ7J7BQm-nqagaVqdjKoGWWJ4",
  authDomain: "resturant-management-auth.firebaseapp.com",
  projectId: "resturant-management-auth",
  storageBucket: "resturant-management-auth.appspot.com",
  messagingSenderId: "211256472009",
  appId: "1:211256472009:web:f66c4111e3658ece81f818"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);