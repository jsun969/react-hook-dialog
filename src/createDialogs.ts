import type { Dialogs } from './types';

export const createDialogs = <TDialogProps extends any[]>(
  defaultPropValues: Record<string, TDialogProps[number]>,
) => {
  return Object.entries(defaultPropValues).reduce((prev, [name, props]) => {
    prev[name] = { ...props, isOpen: false };
    return prev;
  }, {} as Dialogs);
};
