<div align="center">
  <h1>💬 React Hook Dialog</h1>
  
  React hook for master your dialog component
</div>

<div align="center">

[![version](https://img.shields.io/npm/v/react-hook-dialog?style=for-the-badge)](https://www.npmjs.com/package/react-hook-dialog)
[![license](https://img.shields.io/npm/l/react-hook-dialog?style=for-the-badge)](https://github.com/jsun969/react-hook-dialog/blob/main/LICENSE)
[![size](https://img.shields.io/bundlephobia/minzip/react-hook-dialog?style=for-the-badge)](https://bundlephobia.com/result?p=react-hook-dialog)

</div>

## 📦 Installation

```bash
npm install react-hook-dialog
```

## 🕹 API

### 🔗 `createDialogs`

Initialize your dialogs name and props

```ts
// In main.tsx

type FirstDialogProps = { title: string; content: string };
type SecondDialogProps = { lol: string; olo: string };

// For type-safe, you can provide 2 generic types
// 1. The union type of your dialog props
// 2. The union type of your dialog names
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
// In main.tsx

<DialogProvider dialogs={dialogs}>
  <App />
</DialogProvider>
```

### 🔗 `useDialogController`

A hook to control your dialog component

```tsx
// In your dialog component

// For type-safe, you can provide dialogs as argument or generic type
const { isOpen, handleClose, props } = useDialogController(
  'dialogName',
  dialogs,
);
// Or
const { isOpen, handleClose, props } = useDialogController<typeof dialogs>('dialogName');

return <Dialog open={isOpen} onClose={handleClose} {...props}>
```

### 🔗 `DialogController`

The component form of `useDialogController`

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

A hook to use any dialogs anywhere!

> **Note**  
> You may have found that the dialog props can be defined in 3 places  
> Priority: `open` > `useDialog` > `createDialogs`

```tsx
// In any component

const { open, close, isOpen } = useDialog(
  'dialogName',
  // Dialog props
  { title: 'New Title' },
  // Just for type-safe like `useDialogController`, you can also provide it as generic type
  dialogs,
);
```

```tsx
<>
  <div>Dialog Status: {isOpen ? 'open' : 'closed'}</div>
  <button onClick={() => open({ title: 'New New Title' })}>Open</button>
  <button onClick={() => close()}>Close</button>
</>
```
