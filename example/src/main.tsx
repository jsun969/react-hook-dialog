import React from 'react';
import ReactDOM from 'react-dom/client';

import { DialogProvider } from '../../src';
import App from './App';
import { dialogs } from './lib/dialog';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DialogProvider dialogs={dialogs}>
      <App />
    </DialogProvider>
  </React.StrictMode>,
);
