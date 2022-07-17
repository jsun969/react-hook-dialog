import Dialog from '../components/Dialog';
import { dialog } from '../lib/dialogs';

const HookControlledDialog: React.FC = () => {
  const { isOpen, handleClose, props } = dialog.useDialogController(
    'hookControlledDialog',
  );

  return <Dialog open={isOpen} onClose={handleClose} {...props} />;
};

export default HookControlledDialog;
