export type DialogProps = Record<string, any>;

export type DialogPropsWithOpen = { isOpen: boolean } & DialogProps;

export type Dialogs = Record<string, DialogPropsWithOpen>;

export type OmitOpenInProps<TProps extends DialogProps> = Omit<
  TProps,
  'isOpen'
>;

export type UseDialogControllerReturn<TProps extends DialogProps> = {
  isOpen: boolean;
  handleClose: () => void;
  props: TProps;
};
