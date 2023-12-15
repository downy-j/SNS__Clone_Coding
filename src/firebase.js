import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8lU48b0e_doKu_g0yEREQObZJ4ob3e_0",
  authDomain: "instagram-clone-7fa93.firebaseapp.com",
  projectId: "instagram-clone-7fa93",
  storageBucket: "instagram-clone-7fa93.appspot.com",
  messagingSenderId: "921474871939",
  appId: "1:921474871939:web:142cacf905b155b117a1b6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
