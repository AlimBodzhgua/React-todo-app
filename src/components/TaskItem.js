import React from 'react';

export default function TaskItem({task}) {
	return (
		<li className="tasks__item">
			<input 
				onChange={() => console.log(!task.isCompleted)}
				checked={task.isCompleted}
				className="tasks__select" 
				type="checkbox" 
			/>
			<div className="tasks__item-value">
				{task.name}
			</div>
		</li>
	)
}