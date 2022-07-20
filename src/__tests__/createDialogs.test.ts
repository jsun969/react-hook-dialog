import { createDialogs } from '../createDialogs';
import type { DialogProps } from './__fixtures__/dialogs';
import { dialogProps, dialogs } from './__fixtures__/dialogs';

describe('createDialogs', () => {
  it('should add isOpen:false to all dialogs', () => {
    const testDialogs = createDialogs<DialogProps, 'dialogName'>({
      dialogName: dialogProps,
    });
    expect(testDialogs).toEqual(dialogs);
  });
});
