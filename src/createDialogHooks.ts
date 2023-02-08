import type { Dialogs, GetDialogProps } from './types';
import { useDialog as _useDialog } from './useDialog';
import { useDialogController as _useDialogController } from './useDialogController';

export const createDialogHooks = <
  TDialogs extends Dialogs,
  TName extends keyof TDialogs = keyof TDialogs,
  TProps extends GetDialogProps<TDialogs[TName]> = GetDialogProps<
    TDialogs[TName]
  >,
>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dialogs: TDialogs,
) => {
  const useDialog = (name: TName, props: TProps) =>
    _useDialog<TDialogs, TName, TProps>(name, props);

  const useDialogController = (name: TName) =>
    _useDialogController<TDialogs, TName>(name);

  return { useDialog, useDialogController };
};
