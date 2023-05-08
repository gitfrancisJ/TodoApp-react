import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faCheck, faRotateLeft } from '@fortawesome/free-solid-svg-icons';

export const TodoItem = ({task, markComplete, deleteTodo, handleEdit}) => {
  return (
      <div className='todo-item-wrapper'>
        <p className={task.completed ? "completed" : ""}>{task.task}</p>
        <div className='actions-container'>
          { task.completed ? <FontAwesomeIcon className="undo-icon" icon={faRotateLeft} onClick={markComplete}/> :
          <FontAwesomeIcon className="check-icon" icon={faCheck} onClick={markComplete} />}
          <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={handleEdit} />
          <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={deleteTodo} />
        </div>
      </div>
  )
}