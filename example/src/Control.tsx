import { dialog } from './lib/dialogs';

function Control() {
  const {
    isOpen: isHookDialogOpen,
    open: openHookDialog,
    close: closeHookDialog,
  } = dialog.useDialog('hookControlledDialog');

  const {
    isOpen: isComponentDialogOpen,
    open: openComponentDialog,
    close: closeComponentDialog,
  } = dialog.useDialog('componentControlledDialog');

  return (
    <div>
      <h2>Hook Controlled Dialog</h2>
      <div>isOpen: {`${isHookDialogOpen}`}</div>
      <button onClick={() => openHookDialog()}>Open</button>
      <button onClick={() => closeHookDialog()}>Close</button>
      <h2>Component Controlled Dialog</h2>
      <div>isOpen: {`${isComponentDialogOpen}`}</div>
      <button onClick={() => openComponentDialog()}>Open</button>
      <button onClick={() => closeComponentDialog()}>Close</button>
    </div>
  );
}

export default Control;
