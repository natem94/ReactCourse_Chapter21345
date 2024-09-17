import React, { useState } from 'react';

interface AddToDoProps {
  addToDo: (title: string) => void;
}

const AddToDo: React.FC<AddToDoProps> = ({ addToDo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addToDo(title);
      setTitle(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Add a new ToDo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '8px', width: '80%' }}
      />
      <button type="submit" style={{ padding: '8px 16px', marginLeft: '10px' }}>
        Add
      </button>
    </form>
  );
};

export default AddToDo;
