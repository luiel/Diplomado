
import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAsDqyA8BDsjS6MUAnPoXxk7wmfEcHG23k",
  authDomain: "crud-bc484.firebaseapp.com",
  projectId: "crud-bc484",
  storageBucket: "crud-bc484.appspot.com",
  messagingSenderId: "765606950670",
  appId: "1:765606950670:web:215f3f4a5b551c060d895f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}