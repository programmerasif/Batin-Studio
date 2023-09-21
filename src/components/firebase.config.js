// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3MFvexkRHXDnl3w4So8dJtmppa9e1RXc",
  authDomain: "batin-studio.firebaseapp.com",
  projectId: "batin-studio",
  storageBucket: "batin-studio.appspot.com",
  messagingSenderId: "680171261234",
  appId: "1:680171261234:web:2d4d79d04744c4c05b9b2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;