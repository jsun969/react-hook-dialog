import type { Dialogs, OmitOpenInProps } from './types';
import { useDialog as _useDialog } from './useDialog';
import { useDialogController as _useDialogController } from './useDialogController';

export const createDialogHooks = <
  TDialogs extends Dialogs = Dialogs,
  TName extends keyof TDialogs = keyof TDialogs,
>(
  dialogs?: TDialogs,
) => {
  const useDialog = (
    name: TName extends keyof Dialogs ? TName : never,
    props?: Partial<OmitOpenInProps<TDialogs[TName]>>,
  ) => _useDialog(name, props, dialogs);
  const useDialogController = (
    name: TName extends keyof Dialogs ? TName : never,
  ) => _useDialogController(name, dialogs);

  return { useDialog, useDialogController };
};
