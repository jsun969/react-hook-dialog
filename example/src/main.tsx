import { DialogProvider } from '../../src';
import Control from './Control';
import ComponentControlledDialog from './dialogs/ComponentControlledDialog';
import HookControlledDialog from './dialogs/HookControlledDialog';
import { dialogs } from './lib/dialogs';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DialogProvider dialogs={dialogs}>
      <Control />
      <HookControlledDialog />
      <ComponentControlledDialog />
    </DialogProvider>
  </React.StrictMode>,
);
