// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCaiTCLUTdogdflm-dwAUFECYOIn0VVofA",
    authDomain: "netflix-clone-bdd9f.firebaseapp.com",
    projectId: "netflix-clone-bdd9f",
    storageBucket: "netflix-clone-bdd9f.appspot.com",
    messagingSenderId: "56699849477",
    appId: "1:56699849477:web:939222b4dc6c2c57a1c56c",
    measurementId: "G-7LQ83E4JN2"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }