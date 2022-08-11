import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WindowWidthContext } from './context/WindowWidthContext'
import './scss/app.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WindowWidthContext>
      <App />
    </WindowWidthContext>
  </React.StrictMode>
);
