
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';    
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyA3JPAYIivNUIS8h7pL6PJ96kuSfd6TmAw",
  authDomain: "japanese-app-8ef2c.firebaseapp.com",
  projectId: "japanese-app-8ef2c",
  storageBucket: "japanese-app-8ef2c.appspot.com",
  messagingSenderId: "323816300883",
  appId: "1:323816300883:web:4737d9ed46e1d2b50181a6"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);