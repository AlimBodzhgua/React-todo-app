import React, {useState, useEffect, useContext} from 'react';
import CategoryItem from '../components/CategoryItem';
import AddCategory from '../components/AddCategory';
import Tasks from '../components/Tasks';
import axios from 'axios';
import {UserContext} from '../context/index';
import Sidebar from '../components/Sidebar';

import {useFetching} from '../hooks/useFetching.js';
import UserService from '../API/UserService';

export default function Home() {
	const {user, setUser, setIsLoading, setError} = useContext(UserContext);
	const [selectedCategory, setSelectedCategory] = useState(0);

	const [fetchUser, isLoading, userError] = useFetching(async() => {
		const token = localStorage.getItem('token');
		const user = await UserService.getUser(token);
		setUser(...user);
	});

	useEffect(() => {
		fetchUser();
		setIsLoading(isLoading);
		setError(userError);
	}, [])

	return (
		<div className='main'>
			<Sidebar
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
				isLoading={isLoading}
			/>
			<Tasks
				selectedCategory={selectedCategory}
			/>
		</div>
	)
}