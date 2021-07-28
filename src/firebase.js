import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/firebase-auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDKeI0l_l0ZisKReL4a477ZvofNxQ6hGXs",
  authDomain: "tp-disney-clone.firebaseapp.com",
  projectId: "tp-disney-clone",
  storageBucket: "tp-disney-clone.appspot.com",
  messagingSenderId: "38936321497",
  appId: "1:38936321497:web:3fa7020bf232484bce0dc8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;