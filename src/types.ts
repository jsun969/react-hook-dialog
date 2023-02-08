export type DialogProps = Record<string, any>;
export type DialogPropsWithOpen = { isOpen: boolean } & DialogProps;
export type Dialogs = Record<string, { isOpen: boolean } & Record<string, any>>;

export type GetDialogProps<TDialog extends DialogPropsWithOpen> =
  Partial<TDialog>;
