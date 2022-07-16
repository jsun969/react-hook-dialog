import { DialogProvider, createDialogs } from '../../src';
import Control from './Control';
import ComponentControlledDialog from './dialogs/ComponentControlledDialog';
import HookControlledDialog from './dialogs/HookControlledDialog';
import React from 'react';
import ReactDOM from 'react-dom/client';

export const dialogs = createDialogs<
  { title: string; content: string },
  'hookControlledDialog' | 'componentControlledDialog'
>({
  hookControlledDialog: { title: 'Hook', content: 'Hook' },
  componentControlledDialog: { title: 'Component', content: 'Component' },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DialogProvider dialogs={dialogs}>
      <Control />
      <HookControlledDialog />
      <ComponentControlledDialog />
    </DialogProvider>
  </React.StrictMode>,
);
