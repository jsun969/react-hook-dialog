import type {
  Dialogs,
  OmitOpenInProps,
  UseDialogControllerReturn,
} from './types';
import { useDialogController } from './useDialogController';

type DialogControllerProps<
  TDialogs extends Dialogs = Dialogs,
  TName extends keyof TDialogs = keyof TDialogs,
> = {
  dialogs?: TDialogs;
  name: TName;
  render: (
    props: UseDialogControllerReturn<OmitOpenInProps<TDialogs[TName]>>,
  ) => React.ReactElement;
};

export const DialogController = <
  TDialogs extends Dialogs = Dialogs,
  TName extends keyof TDialogs = keyof TDialogs,
>({
  name,
  render,
}: DialogControllerProps<TDialogs, TName>) =>
  render(useDialogController(name as any));
