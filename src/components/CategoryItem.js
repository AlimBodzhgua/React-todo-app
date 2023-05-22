import React from 'react';


export default function CategoryItem({category}) {
	return (
		<li className="categories__item">
			<span className="item__color" style={{background:category.color}}></span>
			<div className="item__text">{category.name}</div>
		</li>
	)
}