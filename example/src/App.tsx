import Dialog1 from './components/Dialog1';
import Dialog2 from './components/Dialog2';
import { d } from './lib/dialog';

function App() {
  const { open: open1, close: close1 } = d.useDialog('dialog1');
  const { open: open2, close: close2 } = d.useDialog('dialog2', {
    title2: 'LOL',
    content2: 'lololol',
  });

  return (
    <>
      <button onClick={() => open1()}>Open Dialog 1</button>
      <button onClick={close1}>Close Dialog 1</button>
      <button onClick={() => open2()}>Open Dialog 2</button>
      <button onClick={close2}>Close Dialog 2</button>
      <button onClick={() => open2({ content2: 'llooll' })}>
        Open Different Dialog 2
      </button>
      <Dialog1 />
      <Dialog2 />
    </>
  );
}

export default App;
