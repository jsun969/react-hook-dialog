import { useDialogGlobalState } from './DialogProvider';
import type { Dialogs, OmitOpenInProps } from './types';

export const useDialog = <
  TDialogs extends Dialogs = Dialogs,
  TName extends keyof TDialogs = keyof TDialogs,
>(
  name: TName extends keyof Dialogs ? TName : never,
  props?: Partial<OmitOpenInProps<TDialogs[TName]>>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _dialogs?: TDialogs,
) => {
  const { globalState, setGlobalState, initialDialogs } =
    useDialogGlobalState();

  const open = (openProps?: Partial<OmitOpenInProps<TDialogs[TName]>>) => {
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
