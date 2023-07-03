import React from 'react';
import '../../styles/Note.css';
import pixelAvatar from '../../imgs/pixel-avatar.png';

interface NoteProps {
    note: {
      title: string;
      comment: string;
      files?: File[];
    };
    handleEditarNota: () => void;
}

const Note: React.FC<NoteProps> = ({ note, handleEditarNota }) => {
    const { title, comment, files } = note;
  
    return (
      <div className="container">
        <div>
          <img
            className="img-profile"
            src={pixelAvatar}
            alt="Foto de perfil"
          />
        </div>
        <div className="data-info">
          <div className="title">{title}</div>
          <div className="comment">{comment}</div>
          {files && (
            <div className="archivos">
              {files.map((file, index) => (
                <p key={index}>{file.name}</p>
              ))}
            </div>
          )}
        </div>
        <div>
          <button className='update-button' onClick={handleEditarNota}>Update</button>
        </div>
      </div>
    );
};

export default Note;
  
  
  
  
  
  
  