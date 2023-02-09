import { d } from '../lib/dialog';

const Dialog1 = () => {
  const { props, isOpen, handleClose } = d.useDialogController('dialog1');

  if (!isOpen) {
    return <></>;
  }

  return (
    <div>
      <div>Dialog1</div>
      <div>title:{props.title1}</div>
      <div>content:{props.content1}</div>
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default Dialog1;
