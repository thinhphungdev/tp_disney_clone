import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKeI0l_l0ZisKReL4a477ZvofNxQ6hGXs",
  authDomain: "https://tp-disney-clone.web.app/",
  projectId: "tp-disney-clone",
  storageBucket: "https://tp-disney-clone.appspot.com/",
  messagingSenderId: "38936321497",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;