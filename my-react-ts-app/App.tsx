import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';

interface ToDo {
  id: number;
  title: string;
}

const App: React.FC = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addToDo = (title: string) => {
    const newToDo: ToDo = {
      id: Date.now(), 
      title,
    };
    setToDos([...toDos, newToDo]);
  };

  const removeToDo = (id: number) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  const filteredToDos = toDos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App" style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>ToDo List</h1>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', width: '100%', padding: '8px' }}
      />
      <AddToDo addToDo={addToDo} />
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Title</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          <ToDoList toDos={filteredToDos} removeToDo={removeToDo} />
        </tbody>
      </table>
    </div>
  );
};

export default App;
