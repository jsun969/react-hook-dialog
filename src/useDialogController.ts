import { useDialogGlobalState } from './DialogProvider';
import { closeDialog } from './logic/closeDialog';
import type { Dialogs, UseDialogControllerReturn } from './types';

export const useDialogController = <
  TDialogs extends Dialogs = Dialogs,
  TName extends keyof TDialogs = string,
>(
  name: TName extends keyof Dialogs ? TName : never,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dialogs?: TDialogs,
): UseDialogControllerReturn => {
  const { globalState } = useDialogGlobalState();

  const { isOpen, ...props } = globalState[name];
  const handleClose = () => closeDialog(name);

  return { isOpen, handleClose, props };
};
