import React from 'react';
import ToDoItem from '../ToDoItem';

interface ToDoListProps {
  toDos: { id: number; title: string }[];
  removeToDo: (id: number) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({ toDos, removeToDo }) => {
  return (
    <>
      {toDos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} removeToDo={removeToDo} />
      ))}
    </>
  );
};

export default ToDoList;
