import { useState, ChangeEvent } from 'react';
import '../../styles/Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import pixelAvatar from '../../imgs/pixel-avatar.png';

interface FormProps {
    title: string;
    comment: string;
    handleTitleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleCommentChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    handleAddNote: (archivos: File[]) => void;
}

const Form: React.FC<FormProps> = ({
    title,
    comment,
    handleTitleChange,
    handleCommentChange,
    handleAddNote
  }) => {
    const [archivos, setArchivos] = useState<File[]>([]);
  
    const handleArchivoChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const nuevosArchivos = Array.from(event.target.files);
        setArchivos(nuevosArchivos);
      }
    };
  
    const handleAgregarNotaConArchivos = () => {
        handleAddNote(archivos);
        setArchivos([]);
    };
  
    return (
      <div className="note-container">
        <img className="img-profile"
            alt="image profile" 
            src={pixelAvatar} 
        />
        <div className="data-note">
          <h1>
            <input className="title" type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
          </h1>
          <textarea className="coment" placeholder="Comentario" value={comment} onChange={handleCommentChange} />
          <hr />
          <div className="note-interacctions">
            <div className="note-files">
              <label htmlFor="archivos">
                <FontAwesomeIcon className="clip-icon" icon={faPaperclip} />
              </label>
              <p className='attach-files-p'>Attach files</p>
              <input id="archivos" type="file" onChange={handleArchivoChange} multiple />
              {archivos.length > 0 && <p className="files">{archivos.length} archivo(s) adjuntado(s)</p>}
            </div>
            <button onClick={handleAgregarNotaConArchivos}>Añadir Nota</button>
          </div>
        </div>
      </div>
    );
};
  
export default Form;