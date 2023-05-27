import React, { useRef, useEffect } from 'react';


export default function AddTask({setTaskMenu, addTask}) {
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.focus();
	}, []) 

	return (
		<div className="task-menu">
			<input 
				ref={inputRef}
				className="task-menu__input" 
				type="text" 
				placeholder="Your task text..."
			/>
			<button
				onClick={() => {
					addTask(inputRef.current.value)
					inputRef.current.value = '';
				}}
				className="task-menu__add"
			>Добавить задачу</button>
			<button
				onClick={() => setTaskMenu(false)}
				className="task-menu__cancel"
			>Отмена</button>
		</div>
	)
}