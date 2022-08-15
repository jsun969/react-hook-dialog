<div align="center">

# 💬 React Hook Dialog

用 React hook 拿捏你的对话框组件

[![version](https://img.shields.io/npm/v/react-hook-dialog?style=for-the-badge)](https://www.npmjs.com/package/react-hook-dialog)
[![license](https://img.shields.io/npm/l/react-hook-dialog?style=for-the-badge)](https://github.com/jsun969/react-hook-dialog/blob/main/LICENSE)
[![size](https://img.shields.io/bundlephobia/minzip/react-hook-dialog?style=for-the-badge)](https://bundlephobia.com/result?p=react-hook-dialog)

[English](./README.md) | 简体中文

</div>

## ✨ 特性

- 🧙‍♂️ 类型安全
- 🐎 开发友好
- 🍃 轻量至极

## 🕶 例子

- [Material UI](https://codesandbox.io/s/rhd-mui-example-etwz20)
- [Ant Design](https://codesandbox.io/s/rhd-antd-example-qhj7zy)

## 📦 安装

```bash
npm install react-hook-dialog
```

## 🎯 快速上手

`lib/dialog.ts`

```tsx
import { createDialogs, createDialogHooks } from 'react-hook-dialog';

type CustomDialogProps = { title: string; content: string };

export const dialogs = createDialogs<CustomDialogProps, 'customDialog'>({
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

`任何地方`

```tsx
import { dialog } from '路径至 lib/dialog';

const YourComponent: React.FC = () => {
  const { open, close, isOpen } = dialog.useDialog('customDialog', {
    title: '标题',
    content: '内容',
  });

  return (
    <>
      <div>对话框状态: {isOpen ? '开启' : '关闭'}</div>
      <button onClick={() => open()}>打开对话框</button>
      <button onClick={() => close()}>关闭对话框</button>
      <button onClick={() => open({ title: '另一个标题' })}>
        打开另一个对话框
        {/* { title: '另一个标题', content: '内容' } */}
      </button>
    </>
  );
};

export default YourComponent;
```

## 🕹 API

### 🔗 `createDialogs`

初始化对话框名和 Props

```ts
type FirstDialogProps = { title: string; content: string };
type SecondDialogProps = { lol: string; olo: string };

// 为了类型安全，您可以提供两个泛型
// 1. 对话框组件 Props 的联合类型
// 2. 对话框名的联合类型
const dialogs = createDialogs<
  FirstDialogProps | SecondDialogProps,
  'firstDialogName' | 'secondDialogName'
>({
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

创建类型安全的对话框 Hooks

```ts
const dialog = createDialogHooks(dialogs);
```

### 🔗 `useDialogController`

一个控制对话框组建的 Hook

```tsx
const { isOpen, handleClose, props } = dialog.useDialogController('dialogName');

return <Dialog open={isOpen} onClose={handleClose} {...props}>
```

### 🔗 `DialogController`

`useDialogController` 的组件形式

```tsx
<DialogController
  dialogs={dialogs}
  name="dialogName"
  render={({ isOpen, handleClose, props }) => (
    <Dialog open={isOpen} onClose={handleClose} {...props} />
  )}
/>
```

### 🔗 `useDialog`

一个让你在任何地方使用任何对话框的 Hook！

> **Note**  
> 你可能发现对话框 Props 能够在三个地方被定义  
> 优先级: `open` > `useDialog` > `createDialogs`

```tsx
const { open, close, isOpen } = dialog.useDialog(
  'dialogName',
  { title: '新标题' }, // 对话框 Props
);
```

```tsx
<>
  <div>对话框状态: {isOpen ? '开启' : '关闭'}</div>
  <button onClick={() => open({ title: '另一个新标题' })}>打开</button>
  <button onClick={() => close()}>关闭</button>
</>
```
