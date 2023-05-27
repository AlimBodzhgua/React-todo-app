import React, {useContext, useEffect, useMemo} from 'react';
import {UserContext} from '../context/index';
import axios from 'axios';

export default function CategoryItem({category, selectedCategory, setSelectedCategory, setBorderColor}) {
	const {user, setUser} = useContext(UserContext);

	const selectCategory = (e, category) => {
		setSelectedCategory(category.id);
		setBorderColor(category.color);
	}

	const deleteItem = (e, toDeletecategory) => {
		e.preventDefault();

		const result = user.categories
			.filter(category => category.id !== toDeletecategory)
			.map(category => 
				category.id > toDeletecategory ? {...category, id: category.id - 1} : category
			)
		//setUser(prev => ({...prev, categories: result}));
		//setUser(({...user, categories: result}));
		//axios.patch(`http://localhost:8080/users/${user.id}`, user);
	}

	/*useEffect(() => {
		console.log(user);
	}, [user])*/

	return (
		<li 
			className={category.id === selectedCategory 
				? "categories__item selected"
				: "categories__item"
			} 
			onClick={(e) => selectCategory(e, category)}
		>
			<span className="item__color"
				style={{background:category.color}}
			></span>
			<div className="item__text">{category.name}</div>
			<button className="item__delete" onClick={(e) => deleteItem(e, category.id)}>x</button>
		</li>
	)
}