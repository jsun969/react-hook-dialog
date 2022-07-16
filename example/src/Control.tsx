import { useDialog } from '../../src';
import { dialogs } from './main';

function Control() {
  const {
    isOpen: isHookDialogOpen,
    open: openHookDialog,
    close: closeHookDialog,
  } = useDialog('hookControlledDialog', {}, dialogs);

  const {
    isOpen: isComponentDialogOpen,
    open: openComponentDialog,
    close: closeComponentDialog,
  } = useDialog('componentControlledDialog', {}, dialogs);

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
