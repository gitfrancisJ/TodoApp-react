import React, {useState, useEffect} from 'react';


export const TodoForm = ({addTodo, onUpdate, editingTodoId, todos}) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    // If editingTodoId changes, update the form input value
    if (editingTodoId !== null) {
      const editedTodo = todos.find(todo => todo.id === editingTodoId);
      if (editedTodo) {
        setValue(editedTodo.task);
      }
    } else {
      setValue('');
    }
  }, [editingTodoId, todos]);
  
  const onInputchange = (event) => {
    setValue(event.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
    if (editingTodoId !== null) {
      onUpdate(editingTodoId, value);
    } else {
      addTodo(value);
    }
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-wrapper'>
        <input type='text' placeholder={editingTodoId !== null ? 'Edit your task' : 'What needs to be done?'}
        value={value}
        onChange={onInputchange}
        required
        />
        <button type='submit' className='button-6'>{editingTodoId !== null ? 'Update' : 'Add'}</button>
      </div>
    </form>
  )
}