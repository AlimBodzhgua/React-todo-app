import React, {useState, useRef, useEffect, useContext} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import AddTask from './AddTask.js';
import {UserContext} from '../context/index';
import {isObjectEmpty} from '../utils/utils.js';
import TaskItem from './TaskItem.js';
import axios from 'axios';

import { CSSTransition,TransitionGroup} from 'react-transition-group';

export default function Tasks({selectedCategory}) {
	const {user, setUser} = useContext(UserContext);
	const [taskMenu, setTaskMenu] = useState(false);
	const [currentCategory, setCurrentCategory] = useState({});

	const [changingTask, setChangingTask] = useState({id: 0, value: ''});

	//Show selected category tasks
	useEffect(() => {
		if (!isObjectEmpty(user)) {
			setCurrentCategory(...user.categories
				?.filter(category => category.id === selectedCategory)
			);
		}
	}, [selectedCategory])

	const changeTask = (task) => {
		if (changingTask.id === task.id) {
			setChangingTask({...changingTask, id: 0});
		} else {
			setChangingTask({id: task.id, value: task.name});
		}
	}

	const saveChangedTask = () => {
		const updatedTasks = currentCategory.tasks.map(task => {
			if (task.id === changingTask.id) {
				return {...task, name: changingTask.value}
			} 
			return task;
		})

		setCurrentCategory({...currentCategory, tasks: updatedTasks});
		setChangingTask({id: 0, value: ''});
	}

	const addTask = (value) => {
		const newTask = {
			id: currentCategory.tasks.length + 1,
			name: value,
			isCompleted: false,
		};

		const updatedTasks = currentCategory.tasks;;
		updatedTasks.push(newTask);
		setCurrentCategory({...currentCategory, tasks: updatedTasks});
	}

	const deleteTask = (deleteTask) => {
		const updatedTasks = currentCategory.tasks
			.filter(task => task.id !== deleteTask)
			.map(task => task.id > deleteTask ? {...task, id: task.id - 1} : task);

		
		setCurrentCategory({...currentCategory, tasks: updatedTasks});
	}

	const changeTaskComplete = (completeTask) => {
		const updatedTasks = currentCategory.tasks
			.map(task => task.id === completeTask 
				? {...task, isCompleted: !task.isCompleted}
				: task
			)
		setCurrentCategory({...currentCategory, tasks: updatedTasks});
	}


	useEffect(() => {
		if (!isObjectEmpty(currentCategory)) {
			const updatedCategories = user.categories.map(category => {
				if (category.id === currentCategory.id) {
					return currentCategory;
				}
				return category;
			})
			const newUser = {...user, categories: updatedCategories} 
			setUser(newUser);
			axios.patch(`http://localhost:8080/users/${user.id}`, newUser);
		}
	}, [currentCategory]) 
	
	return (
		<div className="tasks">
			<h2 className="tasks__title">{currentCategory?.name}</h2>
			<ul className="tasks__list">
				<TransitionGroup>
					{currentCategory?.tasks?.map(task => 
						<CSSTransition 
							key={task.id}
			             	timeout={500}
            				classNames="task"
            			>
							<TaskItem 
								task={task}
								deleteTask={deleteTask}
								changeTaskComplete={changeTaskComplete}
								changeTask={changeTask}
								changingTask={changingTask}
								setChangingTask={setChangingTask}
								saveChangedTask={saveChangedTask}
							/>
						</CSSTransition>
					)}
				</TransitionGroup>
			</ul>

			{ taskMenu
				? <AddTask addTask={addTask} setTaskMenu={setTaskMenu}/>
				: (selectedCategory !== 0 
					? (
						<button onClick={() => setTaskMenu(true)} className="btn add__task-menu">
							<span className="mark">+</span> новая задача
						</button>
					) 
					:   <h2>Select a category or add new</h2> 
				)
			}		
		</div>
	);
} 