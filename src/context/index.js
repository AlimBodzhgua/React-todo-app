import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

import {useFetching} from '../hooks/useFetching.js';
import UserService from '../API/UserService';

export const UserContext = createContext();

export default function UserProvider({children}) {
	const [user, setUser] = useState({});
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	return (
		<UserContext.Provider value={{
			user, setUser,
			error, setError,
			isLoading, setIsLoading
		}}>
			{children}
		</UserContext.Provider>
	)
}