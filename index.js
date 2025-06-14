import React from 'react';
import ReactDOM from 'react-dom/client'; // Use ReactDOM.createRoot for React 18+
import './index.css'; // Optional: If you have a global CSS file for basic styling
import App from './App'; // Import your main App component

// Get the root DOM element where the React app will be mounted
const rootElement = document.getElementById('root');

// Create a root for the React app using ReactDOM.createRoot (React 18+)
// This is the recommended way to render a React app in React 18
const root = ReactDOM.createRoot(rootElement);

// Render your App component into the root
root.render(
  <React.StrictMode>
    {/* The App component is your main React application */}
    <App />
  </React.StrictMode>
);

// If you want to measure performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import reportWebVitals from './reportWebVitals'; // Uncomment if you have reportWebVitals
// reportWebVitals(); // Uncomment if you have reportWebVitals
