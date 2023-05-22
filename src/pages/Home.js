import React, {useState, useEffect, useContext} from 'react';
import CategoryItem from '../components/CategoryItem';
import AddCategory from '../components/AddCategory';
import axios from 'axios';
import {UserContext} from '../context/index';

export default function Home() {
	const [addCategoryWindow, setAddCategoryWindow] = useState(false);
	const {user, setUser, fetchUser} = useContext(UserContext);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem('token');
		fetchUser(token).then(setIsLoading(false));
	}, [])

	const addWindow = (e) => {
		e.preventDefault();
		setAddCategoryWindow(!addCategoryWindow);
	}

	return (
		<div className='main'>
			<aside className="sidebar">
				<div className="sidebar__header">
					<span className="sidebar__icon">
					</span>
					<h3 className="sidebar__title">Все задачи</h3>
				</div>

				{isLoading
					? <h1>Loading content</h1>
					: (
						<ul className="categories">
							{user.categories?.length > 0 
								? 
								user.categories.map(category => 
									<CategoryItem 
										key={category.id} 
										category={category} 
									/>
								)
								: <h4>You have no categories yet</h4>
							}
						</ul>
					)
				}

				<button onClick={(e) => addWindow(e)} className="btn btn--add">
					+ Добавить папку
				</button>

				{addCategoryWindow && <AddCategory addWindow={addWindow}/>}

			</aside>

			<div className="">
				<h1>Content</h1>
			</div>
		</div>
	)
}