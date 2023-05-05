import React, {useState} from 'react';


export const EditTodo = ({editTodo, task}) => {
  const [value, setValue] = useState('');
  

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-wrapper'>
        <input type='text' placeholder='Update Task'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='button-6'>Update Task</button>
      </div>
    </form>
  )
}