// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAO1y1dyflccDlGoCY_U3hza2CuNaO3Bzs",
    authDomain: "messanger-3bl.firebaseapp.com",
    projectId: "messanger-3bl",
    storageBucket: "messanger-3bl.appspot.com",
    messagingSenderId: "984206722631",
    appId: "1:984206722631:web:c5c845951dbbdd9c629362"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)