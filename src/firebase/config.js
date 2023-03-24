
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDudLePaoTypcEAXjuVb63AkR1FeNGliBk",
  authDomain: "react-cursos-63227.firebaseapp.com",
  projectId: "react-cursos-63227",
  storageBucket: "react-cursos-63227.appspot.com",
  messagingSenderId: "454366488607",
  appId: "1:454366488607:web:0f58cbfa97958a6e3c8d2a",
  measurementId: "G-0RSX4PDJXQ"
};


const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);