import { useDialogController } from '../../../src';
import Dialog from '../components/Dialog';
import { dialogs } from '../main';

const HookControlledDialog: React.FC = () => {
  const { isOpen, handleClose, props } = useDialogController(
    'hookControlledDialog',
    dialogs,
  );

  return <Dialog open={isOpen} onClose={handleClose} {...props} />;
};

export default HookControlledDialog;
