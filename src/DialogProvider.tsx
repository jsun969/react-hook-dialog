import type { Dialogs } from './types';
import { createContext, useContext, useState } from 'react';

type DialogContentValue = {
  globalState: Dialogs;
  setGlobalState: React.Dispatch<React.SetStateAction<Dialogs>>;
  initialDialogs: Dialogs;
};

const DialogContext = createContext<DialogContentValue>(null as any);

export const useDialogGlobalState = () => useContext(DialogContext);

type DialogProviderProps = {
  dialogs: Dialogs;
  children?: React.ReactNode;
};

export const DialogProvider = ({ dialogs, children }: DialogProviderProps) => {
  const [globalState, setGlobalState] = useState(dialogs);

  return (
    <DialogContext.Provider
      value={{
        globalState,
        setGlobalState,
        initialDialogs: { ...dialogs },
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};
