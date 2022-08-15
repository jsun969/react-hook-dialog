import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { useDialogGlobalState } from '../DialogProvider';
import { useDialog } from '../useDialog';
import { contextWrapper } from './__fixtures__/contextWrapper';
import { dialogs, openDialogs } from './__fixtures__/dialogs';

const modifiedProps = { title: 'Modified Title', content: 'modified content' };

describe('useDialog', () => {
  it('isOpen should be false by default', () => {
    const { result } = renderHook(() => useDialog('dialogName', {}, dialogs), {
      wrapper: contextWrapper,
    });
    expect(result.current.isOpen).toBe(false);
  });

  it('close should set isOpen to false', () => {
    const { result } = renderHook(
      () => ({
        dialog: useDialog('dialogName', {}, dialogs),
        globalState: useDialogGlobalState(),
      }),
      { wrapper: contextWrapper },
    );
    act(() => {
      result.current.globalState.setGlobalState(openDialogs);
    });
    expect(result.current.globalState.globalState.dialogName.isOpen).toBe(true);
    act(() => {
      result.current.dialog.close();
    });
    expect(result.current.globalState.globalState.dialogName.isOpen).toBe(
      false,
    );
  });

  it('props should be modified in hook when open', () => {
    const { result } = renderHook(
      () => ({
        dialog: useDialog('dialogName', modifiedProps, dialogs),
        globalState: useDialogGlobalState(),
      }),
      { wrapper: contextWrapper },
    );
    act(() => {
      result.current.dialog.open();
    });
    expect(result.current.globalState.globalState.dialogName).toEqual({
      isOpen: true,
      ...modifiedProps,
    });
  });

  it('props should be modified in open when open', () => {
    const { result } = renderHook(
      () => ({
        dialog: useDialog('dialogName', {}, dialogs),
        globalState: useDialogGlobalState(),
      }),
      { wrapper: contextWrapper },
    );
    act(() => {
      result.current.dialog.open(modifiedProps);
    });
    expect(result.current.globalState.globalState.dialogName).toEqual({
      isOpen: true,
      ...modifiedProps,
    });
  });

  it('props should be modified in open with the highest priority when open', () => {
    const { result } = renderHook(
      () => ({
        dialog: useDialog('dialogName', modifiedProps, dialogs),
        globalState: useDialogGlobalState(),
      }),
      { wrapper: contextWrapper },
    );
    act(() => {
      result.current.dialog.open({ title: 'Modified Title by open' });
    });
    expect(result.current.globalState.globalState.dialogName).toEqual({
      isOpen: true,
      title: 'Modified Title by open',
      content: 'modified content',
    });
  });
});
