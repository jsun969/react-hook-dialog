import { useDialogGlobalState } from '../DialogProvider';
import type { Dialogs } from '../types';

const useCloseDialog = (name: keyof Dialogs) => {
  const { setGlobalState, initialDialogs } = useDialogGlobalState();

  setGlobalState((state) => {
    state[name] = initialDialogs[name];
    return state;
  });
};

export { useCloseDialog as closeDialog };
