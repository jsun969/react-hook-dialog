import { DialogProvider } from '../../DialogProvider';
import { dialogs } from './dialogs';

type ContextWrapperProps = {
  children?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};

export const contextWrapper = ({ children }: ContextWrapperProps) => (
  <DialogProvider dialogs={dialogs}>{children}</DialogProvider>
);
