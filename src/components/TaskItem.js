import React from 'react';

export default function TaskItem({
	task, 
	deleteTask, 
	changeTaskComplete, 
	changeTask, 
	changingTask,
	setChangingTask,
	saveChangedTask,
}) {
	return (
		<li className="tasks__item">
			<input 
				onChange={() => changeTaskComplete(task.id)}
				checked={task.isCompleted}
				className="tasks__select" 
				type="checkbox" 
			/>
			{changingTask.id === task.id 
				?   <div>
						<input 
							type="text" 
							value={changingTask.value} 
							onChange={(e) => setChangingTask({...changingTask, value: e.target.value})}
							className="task__change"
					  	/>
					  	<button
							onClick={saveChangedTask}
							className="task__complete"
						>complete</button>
					</div>
				: (
					<div className="tasks__item-value">
						{task.name}
					</div>
				)
			}
			<button 
				onClick={() => changeTask(task)}
				className="task__edit"
				style={{backgroundImage: changingTask.id === task.id 
					? `url(${require('../assets/icons/cancel.svg').default})`
					: `url(${require('../assets/icons/edit.svg').default})`
				}}
			>edit</button>
			<button 
				onClick={() => deleteTask(task.id)}
				className="task__delete"
			>delete</button>
		</li>
	)
}