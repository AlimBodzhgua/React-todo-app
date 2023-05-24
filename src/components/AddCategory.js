import React, {useContext, useState, useEffect} from 'react';
import {colors} from '../utils/colorsData';
import {UserContext} from '../context/index';
import ColorItem from './ColorItem';
import axios from 'axios';


export default function AddCategory({addMenu}) {
	const {user, setUser} = useContext(UserContext);
	const [value, setValue] = useState('')
	const [selectedColor, setSelectedColor] = useState(null);

	const addCategory = (e) => {
		e.preventDefault();

		if (value.length) {
			console.log(user.categories.length);
			const id = user.categories.length + 1;
			const newCategory = {
				id: id,
				name: value, 
				color: selectedColor,
				tasks: [],
			}
			console.log(newCategory);
			//If initial categories is empty
			if ((user.categories).length) {
				setUser({...user, categories: [...user.categories, newCategory]});		
			} else {
				setUser({...user, categories: [newCategory]});						
			}
			setSelectedColor(null);
			setValue('');
		}
	}

	useEffect(() => {
		axios.patch(`http://localhost:8080/users/${user.id}`, user)
			.then(response => console.log('ADD CATEGORY:', response))
			.catch(error => console.log('ADD CATEGORY:', error))
	}, [user])

	return (
		<div className="add-menu">
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className="add-menu__input"
				type="text"
				placeholder="folder name..."
			/>
			<div className="colors">
				{colors.map((clr) => (
					<ColorItem 
						key={clr}
						clr={clr} 
						selectedColor={selectedColor} 
						setSelectedColor={setSelectedColor}
					/>
				))}
			</div>
			<button onClick={(e) => addCategory(e)} className="add-menu__button">Добавить</button>
			<button onClick={(e) => addMenu(e)}className="add-menu__close"></button>
		</div>
	);
}