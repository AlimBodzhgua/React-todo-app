import React from 'react';
import CategoryItem from './CategoryItem';
import { CSSTransition,TransitionGroup} from 'react-transition-group';


export default function CategoryList({user, selectedCategory, setSelectedCategory, setBorderColor}) {

	return (
		<ul className="categories">
				{user?.categories?.length > 0 
					?   user.categories.map(category => 
							<CategoryItem
								key={category.id}
								setBorderColor={setBorderColor}
								category={category}
								selectedCategory={selectedCategory}
								setSelectedCategory={setSelectedCategory}
						
							/>
						)
					:   <h4>You have no categories yet</h4>
				}
		</ul>
	)
}