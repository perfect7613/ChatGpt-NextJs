import { getApp, getApps, initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDADNOETSIeiigzIW26dt9-XbZwKlMkTRM",
  authDomain: "chatgpt-amey-maze.firebaseapp.com",
  projectId: "chatgpt-amey-maze",
  storageBucket: "chatgpt-amey-maze.appspot.com",
  messagingSenderId: "365386494906",
  appId: "1:365386494906:web:aacd106e46da20113ee383"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };