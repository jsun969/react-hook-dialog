import { useDialogGlobalState } from './DialogProvider';
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
  const { globalState, setGlobalState, initialDialogs } =
    useDialogGlobalState();

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

  const close = () => {
    setGlobalState((state) => {
      state[name] = initialDialogs[name];
      return state;
    });
  };

  return { open, close, isOpen: globalState[name].isOpen };
};
