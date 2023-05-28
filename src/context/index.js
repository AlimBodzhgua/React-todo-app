import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export default function UserProvider({children}) {
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	//const [error, setError] = useState('')

	async function fetchUser(token) {
		try {
			const response = await axios.get('http://localhost:8080/users', {token});
			setUser(...response.data);
		} catch (e) {
			throw new Error('Error fetching user:', e.message);
		}
	}
	
	return (
		<UserContext.Provider value={{user, setUser, fetchUser}}>
			{children}
		</UserContext.Provider>
	)
}