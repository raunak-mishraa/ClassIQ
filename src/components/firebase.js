// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPlNzRK3tPl4Qm_QJuyazow56vNA7jxVw",
  authDomain: "classiq-bd1f5.firebaseapp.com",
  projectId: "classiq-bd1f5",
  storageBucket: "classiq-bd1f5.appspot.com",
  messagingSenderId: "594434651091",
  appId: "1:594434651091:web:c18e36048955cd464fb526",
  measurementId: "G-VTBR9RSQ8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;