
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBmI6WF9wu5hdQ8H9aUCqKM9tKsO6AYcW0",
  authDomain: "expense-tracker-f2bdd.firebaseapp.com",
  projectId: "expense-tracker-f2bdd",
  storageBucket: "expense-tracker-f2bdd.appspot.com",
  messagingSenderId: "650106519610",
  appId: "1:650106519610:web:aa88ad3204082f0d51f503",
  measurementId: "G-Q7T9HX6LMT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
