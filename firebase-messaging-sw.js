importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDDUeVDt1dpYlSxK7x3-NGzT0gX0l9h9KA",
  authDomain: "chat-owais.firebaseapp.com",
  projectId: "chat-owais",
  messagingSenderId: "363036044536",
  appId: "1:363036044536:web:3b9e0508806c23f07a9f0d"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
  return self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: payload.notification.icon
    }
  );
});
