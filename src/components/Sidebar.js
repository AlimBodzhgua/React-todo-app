import React, {useState, useEffect, useContext} from 'react';
import AddCategory from './AddCategory';
import axios from 'axios';
import {UserContext} from '../context/index';
import CategoryList from './CategoryList';


export default function Sidebar({selectedCategory, setSelectedCategory}) {
	const {user, setUser, fetchUser} = useContext(UserContext);

	const [addCategoryMenu, setAddCategoryMenu] = useState(false);
	const [userIsLoading, setUserIsLoading] = useState(true);
	const [borderColor, setBorderColor] = useState();

	useEffect(() => {
		const token = localStorage.getItem('token');
		fetchUser(token);
		setUserIsLoading(false);
	}, [])

	const addMenu = (e) => {
		e.preventDefault();
		setAddCategoryMenu(!addCategoryMenu);
	}

	return (
		<aside className="sidebar" style={{borderRight: borderColor && `3px solid ${borderColor}`}}>
			<div className="sidebar__header">
				<span className="sidebar__icon"></span>
				<h3 className="sidebar__title">Все задачи</h3>
			</div>

			{userIsLoading 
				? <h3>Loading content...</h3>
				: <CategoryList 
					user={user}
					setBorderColor={setBorderColor}
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				  /> 
			}

			<button onClick={(e) => addMenu(e)} className="btn btn__open">
				+ Добавить папку
			</button>
			{addCategoryMenu && 
				<AddCategory 
					addMenu={addMenu} 
					user={user} 
					setUser={setUser}
					setBorderColor={setBorderColor}
					setSelectedCategory={setSelectedCategory}
				/>
			}
		</aside>
	);
}