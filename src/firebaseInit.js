import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyDtAnVXukt9kQgJV0den1oEhrieUNqI9_I",
  authDomain: "fcm-test-e1aa5.firebaseapp.com",
  projectId: "fcm-test-e1aa5",
  storageBucket: "fcm-test-e1aa5.appspot.com",
  messagingSenderId: "47932052637",
  appId: "1:47932052637:web:1a9113193cd003ea46f074",
});

// const messaging = getMessaging(firebaseConfig);
const { REACT_APP_VAPID_KEY } =
  "BFP5fUpJBxUhvTOfaH3T1h_2nQEVDjrUj27YyAI9fMNWZBiniAprd3Tkyc4rMpnaqxunBVyIzQtrpQnkZOlTKA4";
const publicKey = REACT_APP_VAPID_KEY;
