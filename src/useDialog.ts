import { useDialogGlobalState } from './DialogProvider';
import type { Dialogs, GetDialogHookReturn, GetDialogProps } from './types';

export const useDialog = <
  TDialogs extends Dialogs,
  TName extends keyof TDialogs,
  TProps extends GetDialogProps<TDialogs[TName]>,
>(
  name: TName,
  props?: TProps,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dialogs?: TDialogs,
): GetDialogHookReturn<TProps> => {
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
