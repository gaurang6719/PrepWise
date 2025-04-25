import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_abak3iZAHow8mthZhWjOZqNnDrJiDEQ",
  authDomain: "prepwise-7efae.firebaseapp.com",
  projectId: "prepwise-7efae",
  storageBucket: "prepwise-7efae.firebasestorage.app",
  messagingSenderId: "800478771421",
  appId: "1:800478771421:web:c5e8949b7ebbb6c67b0334",
  measurementId: "G-681B24GVDT"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();



export const auth = getAuth(app);
export const db = getFirestore(app);



