// Import the functions you need from the SDKs you need
import { firebase } from "firebase/compat/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsDqyA8BDsjS6MUAnPoXxk7wmfEcHG23k",
  authDomain: "crud-bc484.firebaseapp.com",
  projectId: "crud-bc484",
  storageBucket: "crud-bc484.appspot.com",
  messagingSenderId: "765606950670",
  appId: "1:765606950670:web:215f3f4a5b551c060d895f"
};

// Initialize Firebase
firebaseConfig.initializeApp(firebaseConfig);
export (firebase)