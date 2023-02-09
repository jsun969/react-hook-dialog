import { d } from '../lib/dialog';

const Dialog2 = () => {
  const { props, isOpen, handleClose } = d.useDialogController('dialog2');

  if (!isOpen) {
    return <></>;
  }

  return (
    <div>
      <div>Dialog2</div>
      <div>title:{props.title2}</div>
      <div>content:{props.content2}</div>
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default Dialog2;
