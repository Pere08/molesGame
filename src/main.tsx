import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      (registration) => {
        console.log('Service Worker OK:', registration);
      },
      (err) => {
        console.log('There was an error with Service Worker:', err);
      },
    );
  });
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
