import type { DialogProps } from './types';

export const createDialogs = <
  TDefaultDialogs extends Record<string, DialogProps>,
>(
  defaultProps: TDefaultDialogs,
): {
  [Name in keyof TDefaultDialogs]: TDefaultDialogs[Name] & { isOpen: boolean };
} => {
  return Object.entries(defaultProps).reduce((prev, [name, props]) => {
    prev[name] = { ...(props as any), isOpen: false };
    return prev;
  }, {} as any);
};
