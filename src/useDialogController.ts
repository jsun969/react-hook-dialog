import { useDialogGlobalState } from './DialogProvider';
import type {
  Dialogs,
  OmitOpenFromProps,
  UseDialogControllerReturn,
} from './types';

export const useDialogController = <
  TDialogs extends Dialogs = Dialogs,
  TName extends keyof TDialogs = keyof TDialogs,
>(
  name: TName extends keyof Dialogs ? TName : never,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _dialogs?: TDialogs,
): UseDialogControllerReturn<OmitOpenFromProps<TDialogs[TName]>> => {
  const { globalState, setGlobalState, initialDialogs } =
    useDialogGlobalState();

  const { isOpen, ...props } = globalState[name];
  const handleClose = () => {
    setGlobalState((state) => ({ ...state, [name]: initialDialogs[name] }));
  };

  return {
    isOpen,
    handleClose,
    props: props as OmitOpenFromProps<TDialogs[TName]>,
  };
};
