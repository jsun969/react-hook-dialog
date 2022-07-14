import { useDialogGlobalState } from './DialogProvider';
import { closeDialog } from './logic/closeDialog';
import type { Dialogs, OmitOpenFromProps } from './types';

export const useDialog = <
  TDialogs extends Dialogs = Dialogs,
  TName extends keyof TDialogs = keyof TDialogs,
>(
  name: TName extends keyof Dialogs ? TName : never,
  props?: Partial<OmitOpenFromProps<TDialogs[TName]>>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _dialogs?: TDialogs,
) => {
  const { globalState, setGlobalState } = useDialogGlobalState();

  const open = (openProps?: Partial<OmitOpenFromProps<TDialogs[TName]>>) => {
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
