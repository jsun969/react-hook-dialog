import type {
  Dialogs,
  GetDialogControllerHookReturn,
  GetDialogHookReturn,
  GetDialogProps,
} from './types';
import { useDialog as _useDialog } from './useDialog';
import { useDialogController as _useDialogController } from './useDialogController';

export const createDialogHooks = <TDialogs extends Dialogs>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dialogs: TDialogs,
) => {
  const useDialog = <
    D extends TDialogs,
    TName extends keyof D,
    TProps extends GetDialogProps<D[TName]>,
  >(
    name: TName,
    props?: TProps,
  ): GetDialogHookReturn<TProps> => _useDialog<D, TName, TProps>(name, props);

  const useDialogController = <D extends TDialogs, TName extends keyof D>(
    name: TName,
  ): GetDialogControllerHookReturn<D[TName]> =>
    _useDialogController<D, TName>(name);

  return { useDialog, useDialogController };
};
