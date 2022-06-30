import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA2QlbnNP1uNQrC4SRYRiSyZTdTDP9_ngo",
  authDomain: "sistema-4234a.firebaseapp.com",
  projectId: "sistema-4234a",
  storageBucket: "sistema-4234a.appspot.com",
  messagingSenderId: "986663225226",
  appId: "1:986663225226:web:89dd34e3efa6e55ad92a73",
  measurementId: "G-7YR8BY4PNF"
};

  // Initialize Firebase
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }


  export default firebase;

