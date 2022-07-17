import { createDialogHooks, createDialogs } from '../../../src';

export const dialogs = createDialogs<
  { title: string; content: string },
  'hookControlledDialog' | 'componentControlledDialog'
>({
  hookControlledDialog: { title: 'Hook', content: 'Hook' },
  componentControlledDialog: { title: 'Component', content: 'Component' },
});

export const dialog = createDialogHooks(dialogs);
