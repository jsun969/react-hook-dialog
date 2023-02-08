import { useDialogGlobalState } from './DialogProvider';
import type { Dialogs } from './types';

export const useDialogController = <
  TDialogs extends Dialogs,
  TName extends keyof TDialogs,
>(
  name: TName,
) => {
  const { globalState, setGlobalState, initialDialogs } =
    useDialogGlobalState<TDialogs>();

  const { isOpen, ...props } = globalState[name];
  const handleClose = () => {
    setGlobalState((state) => ({ ...state, [name]: initialDialogs[name] }));
  };

  return { isOpen, handleClose, props };
};
