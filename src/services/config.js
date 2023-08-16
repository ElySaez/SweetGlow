import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAaRgAPiqkaOJvBc65xRx7iMeIAoXoCoGY",
  authDomain: "sweetglow.firebaseapp.com",
  projectId: "sweetglow",
  storageBucket: "sweetglow.appspot.com",
  messagingSenderId: "616760454608",
  appId: "1:616760454608:web:f6c2c37dc506c3cb8b5dd5"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);