
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
  
const firebaseConfig = {
    apiKey: "AIzaSyDiXsOU__5m3blJyTIjXJXTsY3qlS2M7k4",
    authDomain: "quizapp-adab3.firebaseapp.com",
    projectId: "quizapp-adab3",
    storageBucket: "quizapp-adab3.appspot.com",
    messagingSenderId: "356870044602",
    appId: "1:356870044602:web:93afe9a3530750c4f97b83",
    measurementId: "G-GWPZ59FTW7"
  };
  // Initialize Firebase

    export default firebase.initializeApp(firebaseConfig);
  