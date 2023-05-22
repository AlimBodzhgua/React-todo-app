import React, {useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import RegisterForm from '../components/RegisterForm';
import {UserContext} from '../context/index';

export default function Register() {
	const navigate = useNavigate();
	const {user, setUser} = useContext(UserContext);

	const registerUser = async(data) => {
		delete data['passwordConfirm'];
		try {
			const response = await axios.post('http://localhost:8080/users', {
				...data,
				categories: []
			})
			console.log(response);
			if (response.status === 201) {
				setUser({...response.data.user, token: response.data.accessToken});
				localStorage.setItem('token', JSON.stringify(response.data.accessToken));
				navigate('/');
			}
		} catch (error) {
			throw new Error('Register error:', error.message);
		}
	}

	return (
		<div className="register">
			<div className="register__inner">
				<h2 className="register__title">Sign up</h2>
				<RegisterForm registerUser={registerUser}/>
			</div>
		</div>
	)
}
