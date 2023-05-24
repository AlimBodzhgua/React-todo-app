import React, {useState, useEffect, useContext} from 'react';
import AddCategory from './AddCategory';
import axios from 'axios';
import {UserContext} from '../context/index';
import CategoryList from './CategoryList';


export default function Sidebar({selectedCategory, setSelectedCategory}) {

	const [addCategoryMenu, setAddCategoryMenu] = useState(false);
	const {user, setUser, fetchUser} = useContext(UserContext);
	const [userIsLoading, setUserIsLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem('token');
		fetchUser(token).then(setUserIsLoading(false));
	}, [])

	const addMenu = (e) => {
		e.preventDefault();
		setAddCategoryMenu(!addCategoryMenu);
	}

	return (
		<aside className="sidebar">
			<div className="sidebar__header">
				<span className="sidebar__icon"></span>
				<h3 className="sidebar__title">Все задачи</h3>
			</div>

			{userIsLoading 
				? <h3>Loading content...</h3>
				: <CategoryList 
					user={user}
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				  /> 
			}

			<button onClick={(e) => addMenu(e)} className="btn btn__open">
				+ Добавить папку
			</button>
			{addCategoryMenu && 
				<AddCategory addMenu={addMenu} user={user} setUser={setUser}/>
			}
		</aside>
	);
}