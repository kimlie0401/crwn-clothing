import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCQqeRojenQR3L35ztzUK8ROLZe5BbXoco",
  authDomain: "crwn-db-71ed3.firebaseapp.com",
  databaseURL: "https://crwn-db-71ed3.firebaseio.com",
  projectId: "crwn-db-71ed3",
  storageBucket: "crwn-db-71ed3.appspot.com",
  messagingSenderId: "97436285031",
  appId: "1:97436285031:web:f73dfee03f03901d22fcc2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
