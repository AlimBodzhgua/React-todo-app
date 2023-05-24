import React from 'react';


export default function CategoryItem({category, selectedCategory, setSelectedCategory}) {
	return (
		<li 
			className={category.id === selectedCategory 
				? "categories__item selected"
				: "categories__item"
			} 
			onClick={() => setSelectedCategory(category.id)}
		>
			<span className="item__color"
				style={{background:category.color}}
			></span>
			<div className="item__text">{category.name}</div>
		</li>
	)
}