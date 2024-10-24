import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import './index.css'; // Ensure you have a CSS file, or remove this line if not needed
import App from './App';

const container = document.getElementById('root'); // Get the root element
const root = createRoot(container); // Create a root for React 18

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
