import '../index.css';
import React, {useEffect, useState} from 'react';
import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';

export const TodoAppWrapper = () => {
  const [todos,setTodos] = useState([]);
  const [editingTodoId, setEditingTodoId] = useState(null);

  const addTodo = todo => {
    setTodos([ ...todos, {id: todos.length, task: todo, completed: false}]);
    
  }

  const markComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, completed: !todo.completed} : todo))
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleEdit = (id) => {
    setEditingTodoId(id);
  };

  const handleUpdate = (id, task) => {
      setTodos(
        todos.map(todo => (todo.id === id ? { ...todo, task } : todo))
      );
    setEditingTodoId(null);
  }

  useEffect(() => {
  }, [todos, editingTodoId])
  return (
    <div className='todo-app-wrapper'>
      <p className='title'>To-do App Reactjs</p>

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
      <p className='powered-by'>Powered by: Reactjs</p>
    </div>
  )
}