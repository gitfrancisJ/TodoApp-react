import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

export const TodoItem = ({task, markComplete, deleteTodo, editTodo}) => {
  return (
      <div className='todo-item-wrapper'>
        <div onClick={markComplete} className={task.completed ? "completed" : ""}>{task.task}</div>
        <div className='actions-container'>
          <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={editTodo}/>
          <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={deleteTodo}/>
        </div>
      </div>
  )
}