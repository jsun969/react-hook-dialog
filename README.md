<div align="center">

# 💬 React Hook Dialog

React hooks for master your dialog(modal) component

[![version](https://img.shields.io/npm/v/react-hook-dialog?style=for-the-badge)](https://www.npmjs.com/package/react-hook-dialog)
[![license](https://img.shields.io/npm/l/react-hook-dialog?style=for-the-badge)](https://github.com/jsun969/react-hook-dialog/blob/main/LICENSE)
[![size](https://img.shields.io/bundlephobia/minzip/react-hook-dialog?style=for-the-badge)](https://bundlephobia.com/result?p=react-hook-dialog)

English | [简体中文](./README_zh-CN.md)

</div>

## ✨ Features

- 🧙‍♂️ TYPE SAFE
- 🐎 Awesome DX
- 🍃 Super light

## 🕶 Example

- [Material UI](https://codesandbox.io/s/rhd-mui-example-etwz20)
- [Ant Design](https://codesandbox.io/s/rhd-antd-example-qhj7zy)

## 📦 Installation

```bash
npm install react-hook-dialog
```

## 🎯 Quickstart

`lib/dialog.ts`

```tsx
import { createDialogs, createDialogHooks } from 'react-hook-dialog';

export const dialogs = createDialogs({
  customDialog: { title: '', content: '' },
});

export const dialog = createDialogHooks(dialogs);
```

`components/CustomDialog.tsx`

```tsx
import { Dialog } from 'your-ui-lib';

import { dialog } from '../lib/dialog';

const CustomDialog: React.FC = () => {
  const { isOpen, handleClose, props } =
    dialog.useDialogController('customDialog');

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </Dialog>
  );
};

export default CustomDialog;
```

`main.tsx`

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { DialogProvider } from 'react-hook-dialog';

import App from './App';
import CustomDialog from './components/CustomDialog';
import { dialogs } from './lib/dialog';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DialogProvider dialogs={dialogs}>
      <App />
      <CustomDialog />
    </DialogProvider>
  </React.StrictMode>,
);
```

`anywhere`

```tsx
import { dialog } from 'dir to lib/dialog';

const YourComponent: React.FC = () => {
  const { open, close, isOpen } = dialog.useDialog('customDialog', {
    title: 'Some Title',
    content: 'some content',
  });

  return (
    <>
      <div>Dialog Status: {isOpen ? 'open' : 'closed'}</div>
      <button onClick={() => open()}>Open Dialog</button>
      <button onClick={() => close()}>Close Dialog</button>
      <button onClick={() => open({ title: 'Another Title' })}>
        Open Another Dialog
        {/* { title: 'Another Title', content: 'some content' } */}
      </button>
    </>
  );
};

export default YourComponent;
```

## 🕹 API

### 🔗 `createDialogs`

Initialize your dialogs name and props

```ts
const dialogs = createDialogs({
  firstDialogName: {
    title: '',
    content: '',
  },
  secondDialogName: {
    lol: '',
    olo: '',
  },
});
```

### 🔗 `DialogProvider`

```tsx
<DialogProvider dialogs={dialogs}>
  <App />
  <FirstDialog />
  <SecondDialog />
</DialogProvider>
```

### 🔗 `createDialogHooks`

Create type-safe dialog hooks

```ts
const dialog = createDialogHooks(dialogs);
```

### 🔗 `useDialogController`

A hook to control your dialog component

```tsx
const { isOpen, handleClose, props } = dialog.useDialogController('dialogName');

return <Dialog open={isOpen} onClose={handleClose} {...props}>
```

### 🔗 `useDialog`

A hook to use any dialogs anywhere!

> **Note**  
> You may have found that the dialog props can be defined in 3 places  
> Priority: `open` > `useDialog` > `createDialogs`

```tsx
const { open, close, isOpen } = dialog.useDialog(
  'dialogName',
  { title: 'New Title' }, // Dialog props
);
```

```tsx
<>
  <div>Dialog Status: {isOpen ? 'open' : 'closed'}</div>
  <button onClick={() => open({ title: 'New New Title' })}>Open</button>
  <button onClick={() => close()}>Close</button>
</>
```
