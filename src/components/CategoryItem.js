import React, {useContext, useEffect, useMemo} from 'react';
import UserService from '../API/UserService';
import {UserContext} from '../context/index';

export default function CategoryItem({category, selectedCategory, setSelectedCategory, setBorderColor}) {
	const {user, setUser} = useContext(UserContext);

	const selectCategory = (category) => {
		setSelectedCategory(category.id);
		setBorderColor(category.color);
	}

	const deleteItem = (e, toDeletecategory) => {
		e.preventDefault();
		const updatedCategories = user.categories
			.filter(category => category.id !== toDeletecategory)
			.map(category => 
				category.id > toDeletecategory ? {...category, id: category.id - 1} : category
			);
		const newUser = {...user, categories: updatedCategories};

		setSelectedCategory(1);
		setUser(newUser);

		UserService.updateUser(newUser);
	}

	return (
		<li 
			className={category.id === selectedCategory 
				? "categories__item selected"
				: "categories__item"
			} 
			onClick={() => selectCategory(category)}
		>
			<span className="item__color"
				style={{background:category.color}}
			></span>
			<div className="item__text">{category.name}</div>
			<button className="item__delete" onClick={(e) => deleteItem(e, category.id)}>x</button>
		</li>
	)
}