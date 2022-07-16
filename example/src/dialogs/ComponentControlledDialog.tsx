import { DialogController } from '../../../src';
import Dialog from '../components/Dialog';
import { dialogs } from '../main';

const ComponentControlledDialog: React.FC = () => {
  return (
    <DialogController
      dialogs={dialogs}
      name="componentControlledDialog"
      render={({ isOpen, handleClose, props }) => (
        <Dialog open={isOpen} onClose={handleClose} {...props} />
      )}
    />
  );
};

export default ComponentControlledDialog;
