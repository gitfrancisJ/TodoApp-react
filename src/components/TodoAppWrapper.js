import '../index.css';
import React, {useState} from 'react';
import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';
import { EditTodo } from './EditTodo';

export const TodoAppWrapper = () => {
  const [todos,setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([{id: todos.length, task: todo, completed: false, isEditing: false}, ...todos]);
    // console.log(...todos);
  }

  const markComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, completed: !todo.completed} : todo))
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, isEditing: !todo.isEditing} : todo))
  }
  return (
    <div className='todo-app-wrapper'>
      <p className='title'>To-do App Reactjs</p>

      <div className='todo-form-container'>
        <TodoForm addTodo={addTodo}/>
        <div className='todos-container'>
       
          {
            todos.map((todo) => (
              todo.isEditing ? <EditTodo key={todo.id}/>
              :
              <TodoItem task={todo} key={todo.id} markComplete={() => markComplete(todo.id)} deleteTodo={() => deleteTodo(todo.id)} editTodo={editTodo(todo.id)}/>
              
            ))
          }
        </div>
      </div>
    </div>
  )
}