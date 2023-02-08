import { d } from '../lib/dialog';

const Dialog1 = () => {
  const { props } = d.useDialogController('dialog1');

  return (
    <div>
      <div>Dialog1</div>
      <div>title:</div>
    </div>
  );
};

export default Dialog1;
