// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: import.meta.env.VITE_APIKEY,
    // authDomain: import.meta.env.VITE_AUTHDOMAIN,
    // projectId: import.meta.env.VITE_PROJECTID,
    // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    // appId: import.meta.env.VITE_APPID

    apiKey: "AIzaSyCjeXQUzmo8lXFt1NmPPbECx9EYewod1iA",
    authDomain: "gizmo-glamour.firebaseapp.com",
    projectId: "gizmo-glamour",
    storageBucket: "gizmo-glamour.appspot.com",
    messagingSenderId: "116527853922",
    appId: "1:116527853922:web:4c3d953ef4c30db60ebc3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;