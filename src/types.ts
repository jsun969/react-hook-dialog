export type DialogProps = { isOpen: boolean } & Record<string, any>;

export type Dialogs = Record<string, DialogProps>;

export type UseDialogControllerReturn = DialogProps & {
  handleClose: () => void;
};
