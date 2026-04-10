// sw.js
self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : { title: 'New Update', body: 'Check your panel!' };
    
    const options = {
        body: data.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/1157/1157000.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/1157/1157000.png',
        vibrate: [100, 50, 100],
        data: { url: self.registration.scope }
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    );
});
