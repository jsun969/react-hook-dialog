import { useDialogGlobalState } from './DialogProvider';
import { closeDialog } from './logic/closeDialog';
import type { Dialogs } from './types';

export const useDialog = <
  TDialogs extends Dialogs = Dialogs,
  TName extends keyof TDialogs = string,
  TProps extends Partial<Omit<TDialogs[TName], 'isOpen'>> = {},
>(
  name: TName extends keyof Dialogs ? TName : never,
  props?: TProps,
) => {
  const { globalState, setGlobalState } = useDialogGlobalState();

  const open = (openProps?: TProps) => {
    setGlobalState((state) => {
      state[name] = {
        ...state[name],
        isOpen: true,
        ...props,
        ...openProps,
      };
      return state;
    });
  };

  const close = () => closeDialog(name);

  return { open, close, isOpen: globalState[name].isOpen };
};
