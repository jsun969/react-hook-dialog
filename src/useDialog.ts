import { useDialogGlobalState } from './DialogProvider';
import type { Dialogs, GetDialogProps } from './types';

export const useDialog = <
  TDialogs extends Dialogs,
  TName extends keyof TDialogs,
  TProps extends GetDialogProps<TDialogs[TName]>,
>(
  name: TName,
  props?: TProps,
) => {
  const { globalState, setGlobalState, initialDialogs } =
    useDialogGlobalState<TDialogs>();

  const open = (openProps?: TProps) => {
    setGlobalState((state) => ({
      ...state,
      [name]: { ...initialDialogs[name], isOpen: true, ...props, ...openProps },
    }));
  };

  const close = () => {
    setGlobalState((state) => ({ ...state, [name]: initialDialogs[name] }));
  };

  return { open, close, isOpen: globalState[name].isOpen };
};
