import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import LoginForm from '../components/LoginForm';

export default function Login() {
	const navigate = useNavigate();

	const loginUser = async(data) => {
		console.log(data);
		try {
			const response = await axios.post('http://localhost:8080/users', {...data});
			console.log(response);
			if (response.status === 201) {
				console.log('user logged in');
				navigate('/');
			}
		} catch (error) {
			throw new Error("Login error:", error.message);
		}
	}

	return (
		<div className="login">
			<div className="login__inner">
				<h1 className="login__title">Login page</h1>
					<LoginForm loginUser={loginUser} />
			</div>
		</div>
	)
}
