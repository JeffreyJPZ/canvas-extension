import React from 'react';
import { createRoot } from 'react-dom/client';
import Options from '@pages/options/Options';
import '@pages/options/index.css';
import MainPage from './MainPage'; // Import the MainPage component

function init() {
    const rootContainer = document.querySelector("#__root");
    if (!rootContainer) throw new Error("Can't find Options root element");
    const root = createRoot(rootContainer);
  root.render(<MainPage />);
}

init();