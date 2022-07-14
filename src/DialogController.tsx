import type {
  Dialogs,
  OmitOpenFromProps,
  UseDialogControllerReturn,
} from './types';
import { useDialogController } from './useDialogController';

type DialogControllerProps<
  TDialogs extends Dialogs = Dialogs,
  TName extends keyof TDialogs = string,
> = {
  name: TName;
  dialogs: TDialogs;
  render: (
    props: UseDialogControllerReturn<OmitOpenFromProps<TDialogs[TName]>>,
  ) => React.ReactElement;
};

export const DialogController = <
  TDialogs extends Dialogs = Dialogs,
  TName extends keyof TDialogs = string,
>({
  name,
  render,
}: DialogControllerProps<TDialogs, TName>) =>
  render(useDialogController(name as any));
