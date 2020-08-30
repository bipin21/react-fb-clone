import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB0DZjYoy1MM8QTSvjh-9EwOpymBdxyJzw",
  authDomain: "bp-fb-clone.firebaseapp.com",
  databaseURL: "https://bp-fb-clone.firebaseio.com",
  projectId: "bp-fb-clone",
  storageBucket: "bp-fb-clone.appspot.com",
  messagingSenderId: "984687491810",
  appId: "1:984687491810:web:06bea9cb0b65f908de7cbb",
  measurementId: "G-EREK27VTZP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;