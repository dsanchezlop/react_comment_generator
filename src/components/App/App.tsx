import React, { useState } from 'react';
import '../../../src/styles/App.css';
import Form from '../notes/Form';
import Note from '../notes/Note';

function App() {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [notes, setNotes] = useState<any[]>([]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleAddNote = (attachedFiles: File[]) => {
    const newNote = {
      title,
      comment,
      files: attachedFiles
    };
    setNotes([...notes, newNote]);
    setTitle('');
    setComment('');
  };

  const handleEditNote = (index: number) => {
    const note = notes[index];
    setTitle(note.title);
    setComment(note.comment);
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <h1>Aplicación de Notas</h1>
      <Form
        title={title}
        comment={comment}
        handleTitleChange={handleTitleChange}
        handleCommentChange={handleCommentChange}
        handleAddNote={handleAddNote}
      />
      <div className="ListaNotas">
        <h2>Notas</h2>
        {notes.map((note: any, index: number) => (
          <Note
            key={index}
            note={note}
            handleEditarNota={() => handleEditNote(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;







/* import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'

// Styles
import '@/styles/App.css'

import { Counter } from '@/components/ui/Counter'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Counter title={'Counter'}/>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */
