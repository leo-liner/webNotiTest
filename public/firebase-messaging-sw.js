// import { initializeApp } from "workbox-@firebase/app";
// import { getMessaging } from "@firebase/messaging";
// import { onBackgroundMessage } from "firebase/messaging/sw";
// importScripts("http://www.gstatic.com/firebasejs/9.6.6/firebase-app.js");
// importScripts("http://www.gstatic.com/firebasejs/9.6.6/firebase-messaging.js");
// importScripts(
//   "http://www.gstatic.com/firebasejs/9.6.6/firebase-messaging.sw.js"
// );

importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDtAnVXukt9kQgJV0den1oEhrieUNqI9_I",
  authDomain: "fcm-test-e1aa5.firebaseapp.com",
  projectId: "fcm-test-e1aa5",
  storageBucket: "fcm-test-e1aa5.appspot.com",
  messagingSenderId: "47932052637",
  appId: "1:47932052637:web:1a9113193cd003ea46f074",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "라이너 노티입니다.",
    icon: "/firebase-logo.png",
  };

  return self.registration.showNotification("라이너 노티", notificationOptions);
});
