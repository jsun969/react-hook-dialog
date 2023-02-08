import { createDialogHooks, createDialogs } from '../../../src';

export const dialogs = createDialogs({
  dialog1: { title1: '111', content1: '' },
  dialog2: { title2: '222', content2: '' },
});

export const d = createDialogHooks(dialogs);
