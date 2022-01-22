import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAqt3a4dejnwaSbVrgf1wPTIEm4J3Sri1I",
  authDomain: "instagram-clone-bdb55.firebaseapp.com",
  projectId: "instagram-clone-bdb55",
  storageBucket: "instagram-clone-bdb55.appspot.com",
  messagingSenderId: "291991232111",
  appId: "1:291991232111:web:f33de45d388f674cca779a"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    // posts : firestore.collection('posts'),
    // comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()