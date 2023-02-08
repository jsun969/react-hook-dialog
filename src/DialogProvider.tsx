import type React from 'react';
import { createContext, useContext, useState } from 'react';

import type { Dialogs } from './types';

type DialogContentValue<TDialogs extends Dialogs> = {
  globalState: TDialogs;
  setGlobalState: React.Dispatch<React.SetStateAction<TDialogs>>;
  initialDialogs: TDialogs;
};

const DialogContext = createContext<DialogContentValue<Dialogs>>(null as any);

export const useDialogGlobalState = <TDialogs extends Dialogs>() =>
  useContext(
    DialogContext as unknown as React.Context<DialogContentValue<TDialogs>>,
  );

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
