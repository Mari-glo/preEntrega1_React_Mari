
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tetejo-19d6b.firebaseapp.com",
  projectId: "tetejo-19d6b",
  storageBucket: "tetejo-19d6b.appspot.com",
  messagingSenderId: "589664514633",
  appId: "1:589664514633:web:adee176a96f2e5aa030598"
};

// Initialize Firebase: iniciar la conexión con firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);
//exportamos para que esté disponible en toda la app