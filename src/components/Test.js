import React, {useState, useEffect} from 'react';


export default function Test() {

	const [count, setCount] = useState(0);
	//const [sum, setSum] = useState(0)

	console.log('render');

	const increment = () => {
		//setCount(count + 1)
		setCount((prev) => prev + 1)
		//setSum((prev) => count * 10);

		console.log('count:', count);
		//console.log('sum:', sum)
	}

	const decrement = () => {
		//setCount(count - 1)
		setCount((prev) => prev - 1)

		console.log(count);
	}

	return (
		<div>
			<h2>Test component</h2>
			<div>count: {count}</div>
  			<button onClick={decrement}>-</button>
			<button onClick={increment}>+</button>
		</div>
	)
}