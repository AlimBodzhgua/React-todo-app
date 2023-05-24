import React, { useRef } from 'react';


export default function AddTask({setTaskMenu, addTask}) {
	const inputRef = useRef();

	return (
		<div className="task-menu">
			<input 
				ref={inputRef}
				className="task-menu__input" 
				type="text" 
				placeholder="Your task text..."
			/>
			<button
				onClick={() => addTask(inputRef.current.value)}
				className="task-menu__add"
			>Добавить задачу</button>
			<button
				onClick={() => setTaskMenu(false)}
				className="task-menu__cancel"
			>Отмена</button>
		</div>
	)
}