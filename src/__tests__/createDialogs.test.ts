import { createDialogs } from '../createDialogs';
import { dialogs } from './__fixtures__/data';

type FirstDialogProps = { title: string; content: string };
type SecondDialogProps = { lol: string; olo: string };

describe('createDialogs', () => {
  it('should add isOpen:false to all dialogs', () => {
    const testDialogs = createDialogs<
      FirstDialogProps | SecondDialogProps,
      'firstDialogName' | 'secondDialogName'
    >({
      firstDialogName: {
        title: '',
        content: '',
      },
      secondDialogName: {
        lol: '',
        olo: '',
      },
    });
    expect(testDialogs).toEqual(dialogs);
  });
});
