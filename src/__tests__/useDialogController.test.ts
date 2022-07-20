import { useDialogGlobalState } from '../DialogProvider';
import { useDialogController } from '../useDialogController';
import { contextWrapper } from './__fixtures__/contextWrapper';
import { dialogProps, dialogs, openDialogs } from './__fixtures__/dialogs';
import { act, renderHook } from '@testing-library/react';

describe('useDialogController', () => {
  it('isOpen should be false by default', () => {
    const { result } = renderHook(
      () => useDialogController('dialogName', dialogs),
      { wrapper: contextWrapper },
    );
    expect(result.current.isOpen).toBe(false);
  });

  it('props should exist', () => {
    const { result } = renderHook(
      () => useDialogController('dialogName', dialogs),
      { wrapper: contextWrapper },
    );
    expect(result.current.props).toEqual(dialogProps);
  });

  it('handleClose should set isOpen to false', () => {
    const { result } = renderHook(
      () => ({
        controller: useDialogController('dialogName', dialogs),
        globalState: useDialogGlobalState(),
      }),
      { wrapper: contextWrapper },
    );
    act(() => {
      result.current.globalState.setGlobalState(openDialogs);
    });
    expect(result.current.globalState.globalState.dialogName.isOpen).toBe(true);
    act(() => {
      result.current.controller.handleClose();
    });
    expect(result.current.globalState.globalState.dialogName.isOpen).toBe(
      false,
    );
  });
});
