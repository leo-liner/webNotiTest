import React from "react";
import logo from "./logo.svg";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import "./App.css";
import { initializeApp } from "@firebase/app";

function App() {
  const firebaseConfig = initializeApp({
    apiKey: "AIzaSyDtAnVXukt9kQgJV0den1oEhrieUNqI9_I",
    authDomain: "fcm-test-e1aa5.firebaseapp.com",
    projectId: "fcm-test-e1aa5",
    storageBucket: "fcm-test-e1aa5.appspot.com",
    messagingSenderId: "47932052637",
    appId: "1:47932052637:web:1a9113193cd003ea46f074",
  });

  const messaging = getMessaging(firebaseConfig);

  getToken(messaging, {
    vapidKey:
      "BFP5fUpJBxUhvTOfaH3T1h_2nQEVDjrUj27YyAI9fMNWZBiniAprd3Tkyc4rMpnaqxunBVyIzQtrpQnkZOlTKA4",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log(currentToken);
        // Send the token to your server and update the UI if necessary
        // ...
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
        // ...
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // ...
    });

  onMessage(messaging, (payload) => {
    console.log(`message ${payload}`);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
