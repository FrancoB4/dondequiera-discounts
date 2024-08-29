import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import './fonts/EditorialOld/PPEditorialOld-Italic.otf';
import './fonts/EditorialOld/PPEditorialOld-Regular.otf';
import './fonts/EditorialOld/PPEditorialOld-Ultrabold.otf';
import './fonts/EditorialOld/PPEditorialOld-UltraboldItalic.otf';
import './fonts/EditorialOld/PPEditorialOld-Ultralight.otf';
import './fonts/EditorialOld/PPEditorialOld-UltralightItalic.otf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
