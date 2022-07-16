interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Dialog: React.FC<DialogProps> = ({ open, onClose, title, content }) => {
  if (!open) return <div></div>;
  return (
    <div style={{ border: 'solid', padding: 8, margin: 16 }}>
      <button onClick={onClose}>X</button>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Dialog;
