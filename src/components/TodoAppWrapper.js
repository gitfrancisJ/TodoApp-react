import '../index.css';
import React, { useContext } from 'react';
import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';
import { TodoContext } from './DataProvider';

import logo from '../logo.svg';

export const TodoAppWrapper = () => {
  const [todos, setTodos, addTodo, markComplete, deleteTodo, editingTodoId, setEditingTodoId, handleEdit] = useContext(TodoContext);

  const handleUpdate = (id, task) => {
      setTodos(
        todos.map(todo => (todo.id === id ? { ...todo, task } : todo))
      );
    setEditingTodoId(null);
  }

  return (

      <div className='todo-app-wrapper'>
        <p className='title'>To-do App</p>

        <div className='todo-form-container'>
          <TodoForm addTodo={addTodo}  onUpdate={handleUpdate} editingTodoId={editingTodoId} todos={todos}/>
          <div className='todos-container'>
            {
              todos.map((todo) => (
                <TodoItem task={todo} key={todo.id} markComplete={() => markComplete(todo.id)} deleteTodo={() => deleteTodo(todo.id)} handleEdit={() => handleEdit(todo.id)}/>
              ))
            }
          </div>
        </div>
        <div className='bottom-label'>
          <p className='powered-by'>Powered by: Reactjs</p>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
  )
}