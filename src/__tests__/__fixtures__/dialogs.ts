export type DialogProps = { title: string; content: string };

export const dialogProps: DialogProps = { title: '', content: '' };

export const dialogs = {
  dialogName: {
    isOpen: false,
    ...dialogProps,
  },
};

export const openDialogs = {
  dialogName: {
    isOpen: true,
    ...dialogProps,
  },
};
