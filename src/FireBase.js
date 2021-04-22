import firebase from 'firebase';

const FirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDIkoqYPeIxoms7HG3tVYH875QKKgRsFDQ",
  authDomain: "instagram-clone-ca74f.firebaseapp.com",
  projectId: "instagram-clone-ca74f",
  storageBucket: "instagram-clone-ca74f.appspot.com",
  messagingSenderId: "440628368245",
  appId: "1:440628368245:web:881fe4b30253c5e68e793c",
  measurementId: "G-SDC6TLKVBF"
});

const db = FirebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };