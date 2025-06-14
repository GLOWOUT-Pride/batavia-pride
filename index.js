import React from 'react';
import ReactDOM from 'react-dom/client'; // Note: ReactDOM/client for React 18+
import './index.css'; // Optional: for global styles
import App from './App'; // Your main application component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
