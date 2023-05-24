import React, {useState, useEffect, useContext} from 'react';
import CategoryItem from '../components/CategoryItem';
import AddCategory from '../components/AddCategory';
import Tasks from '../components/Tasks';
import axios from 'axios';
import {UserContext} from '../context/index';
import Sidebar from '../components/Sidebar';

export default function Home() {
	const {user, setUser} = useContext(UserContext);
	const [selectedCategory, setSelectedCategory] = useState(0);

	return (
		<div className='main'>
			<Sidebar
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			<Tasks
				selectedCategory={selectedCategory}
			/>
		</div>
	)
}