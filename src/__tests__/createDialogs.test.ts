import { createDialogs } from '../createDialogs';
import type { DialogProps } from './__fixtures__/dialogs';
import { dialogs } from './__fixtures__/dialogs';

describe('createDialogs', () => {
  it('should add isOpen:false to all dialogs', () => {
    const testDialogs = createDialogs<DialogProps, 'dialogName'>({
      dialogName: { title: '', content: '' },
    });
    expect(testDialogs).toEqual(dialogs);
  });
});
