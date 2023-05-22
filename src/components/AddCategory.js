import React, {useContext, useState, useEffect} from 'react';
import {colors} from '../utils/colorsData';
import {UserContext} from '../context/index';
import ColorItem from './ColorItem';


export default function AddCategory({addWindow}) {
	const {user, setUser} = useContext(UserContext);

	const [value, setValue] = useState('')
	const [selectedColor, setSelectedColor] = useState(null);

	const addCategory = (e) => {
		e.preventDefault();

		if (value.length) {
			const id = user.categories.length + 1;
			const newCategory = {
				id: id,
				name: value, 
				color: selectedColor,
				tasks: [],
			}
			setUser({...user, categories: [...user.categories, newCategory]});		
			setSelectedColor(null);
		}
	}

	return (
		<div className="add">
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className="add__input"
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
			<button onClick={(e) => addCategory(e)} className="add__button">Добавить</button>
			<button onClick={(e) => addWindow(e)}className="add__close">x</button>
		</div>
	);
}