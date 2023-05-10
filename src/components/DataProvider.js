import React, { createContext, useState } from 'react';

export const TodoContext = createContext([]);

export const DataProvider = (props) => {

  const [todos,setTodos] = useState([]);
  const [editingTodoId, setEditingTodoId] = useState(null);

  const addTodo = (todo) => {
    setTodos([{id: todos.length, task: todo, completed: false}, ...todos,]);
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



  return (
    <TodoContext.Provider value={[todos,setTodos,addTodo, markComplete, deleteTodo, editingTodoId, setEditingTodoId, handleEdit]}>
      {props.children}
    </TodoContext.Provider>
  )
}