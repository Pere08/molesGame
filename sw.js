// sw.js

import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Habilitar el precaching
precacheAndRoute(self.__WB_MANIFEST || []);

// Manejo de caché
registerRoute(
  ({ request }) => request.destination === 'document',
  new StaleWhileRevalidate()
);

// Escuchar eventos de instalación y activación
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
});
