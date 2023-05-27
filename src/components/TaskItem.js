import React from 'react';

export default function TaskItem({task, deleteTask, changeTaskComplete}) {
	return (
		<li className="tasks__item">
			<input 
				onChange={() => changeTaskComplete(task.id)}
				checked={task.isCompleted}
				className="tasks__select" 
				type="checkbox" 
			/>
			<div className="tasks__item-value">
				{task.name}
			</div>
			<button 
				onClick={() => deleteTask(task.id)}
				className="task__delete"
			>x</button>
		</li>
	)
}