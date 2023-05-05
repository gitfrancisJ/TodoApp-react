import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

export const TodoItem = ({task, markComplete, deleteTodo, handleEdit}) => {
  return (
      <div className='todo-item-wrapper'>
        <p onClick={markComplete} className={task.completed ? "completed" : ""}>{task.task}</p>
        <div className='actions-container'>
          <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={handleEdit}/>
          <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={deleteTodo}/>
        </div>
      </div>
  )
}