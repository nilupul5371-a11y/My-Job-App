// Firebase scripts load කිරීම (Compatibility version එක භාවිතා කර ඇත)
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// ඔබේ Firebase Configuration එක මෙහි ඇතුළත් කරන්න
const firebaseConfig = {
    apiKey: "AIzaSyCllM0e1x-6TCt17MZ3gIrij1qAkuU7nL4",
    authDomain: "my-job-app-52bf2.firebaseapp.com",
    projectId: "my-job-app-52bf2",
    storageBucket: "my-job-app-52bf2.firebasestorage.app",
    messagingSenderId: "269752262423",
    appId: "1:269752262423:web:ff5c167ff9a95ee89ae152"
};

// Firebase initialize කිරීම
firebase.initializeApp(firebaseConfig);

// Messaging ලියාපදිංචි කිරීම
const messaging = firebase.messaging();

// Background එකේදී notification එකක් ලැබුණු විට එය පෙන්වන ආකාරය
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Background message received: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png' // මෙහි ඔබ කැමති icon එකක path එකක් දිය හැක
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
