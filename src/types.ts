export type DialogProps = Record<string, any>;
export type DialogPropsWithOpen = { isOpen: boolean } & DialogProps;
export type Dialogs = Record<string, { isOpen: boolean } & Record<string, any>>;

export type GetDialogProps<TDialog extends DialogPropsWithOpen> = Partial<
  Omit<TDialog, 'isOpen'>
>;

export type GetDialogControllerHookReturn<TDialog extends DialogPropsWithOpen> =
  {
    isOpen: boolean;
    handleClose: () => void;
    props: Omit<TDialog, 'isOpen'>;
  };
export type GetDialogHookReturn<
  TProps extends GetDialogProps<DialogPropsWithOpen>,
> = {
  open: (openProps?: Partial<TProps>) => void;
  close: () => void;
  isOpen: boolean;
};
