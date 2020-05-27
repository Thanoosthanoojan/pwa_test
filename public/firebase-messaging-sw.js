importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-messaging.js');

firebase.initializeApp({
        apiKey: "AIzaSyC5ghkX8x22Mh5wzw-SUJXwlMW2P7YqcqA",
        authDomain: "pwatest-45bb6.firebaseapp.com",
        databaseURL: "https://pwatest-45bb6.firebaseio.com",
        projectId: "pwatest-45bb6",
        storageBucket: "pwatest-45bb6.appspot.com",
        messagingSenderId: "704492817614",
        appId: "1:704492817614:web:6d145870eeef3f2bf6d49f"
  });

const messaging = firebase.messaging();