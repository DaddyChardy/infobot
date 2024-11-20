// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuBYKYRbrVN33Y15k6CMCMIYV2KXAI6JU",
  authDomain: "infobot-45d23.firebaseapp.com",
  projectId: "infobot-45d23",
  storageBucket: "infobot-45d23.firebasestorage.app",
  messagingSenderId: "391828373762",
  appId: "1:391828373762:web:1c115f0088a58c7e5f421b",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
