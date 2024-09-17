import React from 'react';

interface ToDoItemProps {
  todo: { id: number; title: string };
  removeToDo: (id: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ todo, removeToDo }) => {
  return (
    <tr>
      <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
        {todo.id}
      </td>
      <td style={{ border: '1px solid black', padding: '8px' }}>{todo.title}</td>
      <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
        <button onClick={() => removeToDo(todo.id)}>Remove</button>
      </td>
    </tr>
  );
};

export default ToDoItem;
