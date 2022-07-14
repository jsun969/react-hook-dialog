import type { Dialogs, UseDialogControllerReturn } from './types';
import { useDialogController } from './useDialogController';

type DialogControllerProps<
  TDialogs extends Dialogs = Dialogs,
  TName extends keyof TDialogs = string,
> = {
  name: TName;
  dialogs: TDialogs;
  render: (props: UseDialogControllerReturn) => React.ReactElement;
};

export const DialogController = <
  TDialogs extends Dialogs = Dialogs,
  TName extends keyof TDialogs = string,
>(
  props: DialogControllerProps<TDialogs, TName>,
) => props.render(useDialogController(props.name as string));
