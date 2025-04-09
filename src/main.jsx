import { StrictMode } from 'react'; // StrictMode helps highlight potential problems in the app
import { createRoot } from 'react-dom/client'; // createRoot is for React 18+
import './index.css'; // Import your global CSS
import App from './App.jsx'; // Import your App component

// Render your app inside the root element of your HTML
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Render your App component */}
  </StrictMode>,
);
