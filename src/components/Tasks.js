import React, {useState, useRef, useEffect, useContext} from 'react';
import AddTask from './AddTask.js';
import {UserContext} from '../context/index';
import TaskItem from './TaskItem.js';
import axios from 'axios';


export default function Tasks({selectedCategory}) {
	const {user, setUser} = useContext(UserContext);
	const [taskMenu, setTaskMenu] = useState(false);
	const inputRef = useRef();

	const [currentCategory, setCurrentCategory] = useState({});

	//Show selected category tasks
	useEffect(() => {
		if (Object.keys(user).length) {
			setCurrentCategory(...user.categories
				?.filter(category => category.id === selectedCategory)
			);
		}
	}, [selectedCategory])


	const addTask = (value) => {
		const currentTasks = currentCategory.tasks;
		const newTask = {
			id: currentTasks.length + 1,
			name: value,
			isCompleted: false,
		};
		currentTasks.push(newTask);
		setCurrentCategory({...currentCategory, tasks: currentTasks})
	}

	useEffect(() => {
		user?.categories?.map(category => {
			if (category.id === currentCategory.id) {
				return currentCategory;
			} 
			return category;
		})
		if (Object.keys(user).length) {
			axios.patch(`http://localhost:8080/users/${user.id}`, user)
				.then(response => console.log('TASK ADDED TO SERVER'))
				.catch(error => console.log(error))
		}
	}, [currentCategory])

	return (
		<div className="tasks">
			<h2 className="tasks__title">{currentCategory?.name}</h2>
			<ul className="tasks__list">
				{currentCategory.tasks?.map(task => 
					<TaskItem 
						key={task.id}
						task={task}
					/>
				)}
			</ul>

			{ taskMenu
				? <AddTask addTask={addTask} setTaskMenu={setTaskMenu}/>
				: 
				<button onClick={() => setTaskMenu(true)} className="btn add__task-menu">
					<span className="mark">+</span> новая задача
				</button>
			}			
		</div>
	);
} 