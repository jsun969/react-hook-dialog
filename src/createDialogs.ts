import type { DialogProps } from './types';

export const createDialogs = <
  TDialogProps extends DialogProps,
  TNames extends string,
>(
  defaultProps: Record<TNames, TDialogProps>,
): Record<TNames, { isOpen: boolean } & TDialogProps> => {
  return Object.entries(defaultProps).reduce((prev, [name, props]) => {
    prev[name] = { ...(props as any), isOpen: false };
    return prev;
  }, {} as any);
};
