// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzT99IBeZNNNI_5rYEftaEXI7t_G3vfKo",
  authDomain: "weather-cast-fabe7.firebaseapp.com",
  projectId: "weather-cast-fabe7",
  storageBucket: "weather-cast-fabe7.appspot.com",
  messagingSenderId: "932178663910",
  appId: "1:932178663910:web:2ff46277d27a7cc27f9e27",
  measurementId: "G-C1SMPLN2JS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
