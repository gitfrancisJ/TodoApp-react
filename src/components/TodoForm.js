import React, {useState} from 'react';


export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('');
  

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-wrapper'>
        <input type='text' placeholder='What needs to be done?'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='button-6'>Add Task</button>
      </div>
    </form>
  )
}