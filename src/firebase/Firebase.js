    // src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAkx5vWQ0C9J-fuIJKokLLPMx6nzoDvGWI",
    authDomain: "lcsfaxhub-69ec5.firebaseapp.com",
    projectId: "lcsfaxhub-69ec5",
    storageBucket: "lcsfaxhub-69ec5.appspot.com",
    messagingSenderId: "19313985855",
    appId: "1:19313985855:web:5b28f59985d1fc3dcc6b8a",
    measurementId: "G-XK11WGBQ5X"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app); // Initialize Firestore

export { auth ,db};
