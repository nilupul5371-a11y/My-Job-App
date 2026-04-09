importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCllM0e1x-6TCt17MZ3gIrij1qAkuU7nL4",
    projectId: "my-job-app-52bf2",
    messagingSenderId: "269752262423",
    appId: "1:269752262423:web:ff5c167ff9a95ee89ae152"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body
    });
});
