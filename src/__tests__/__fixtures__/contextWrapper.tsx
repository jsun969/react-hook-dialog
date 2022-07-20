import { DialogProvider } from '../../DialogProvider';
import { dialogs } from './dialogs';

type ContextWrapperProps = {
  children?: React.ReactElement;
};

export const contextWrapper = ({ children }: ContextWrapperProps) => (
  <DialogProvider dialogs={dialogs}>{children}</DialogProvider>
);
