// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnfaqQTxv8mPFbYClJ_cgIh4mIUPaAXX0",
  authDomain: "todoenventa-react.firebaseapp.com",
  projectId: "todoenventa-react",
  storageBucket: "todoenventa-react.appspot.com",
  messagingSenderId: "548218719883",
  appId: "1:548218719883:web:d7d6a4a33994f32ba4ce8e",
  measurementId: "G-DW0GDPW4FH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const getFirestoreApp = () => {
  return app;
};
