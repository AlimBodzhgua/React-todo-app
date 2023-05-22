import React from 'react';

export default function ColorItem({ clr, selectedColor, setSelectedColor }) {
	return (
		<div
			onClick={() => setSelectedColor(clr)}
			className="colors__item"
			style={ clr === selectedColor
				? { backgroundColor: clr, border: "1.5px solid black" }
				: { backgroundColor: clr }
			}
		></div>
	);
}