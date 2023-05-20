import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from 'axios';

export default function Register() {

	const {
		register,
		reset,
		handleSubmit,
		watch,
		formState: {errors}
	} = useForm({mode: 'onChange'});

	const registerUser = (data) => {
		console.log(data);
		/*axios.post(data)*/
	}

	return (
		<div className="register">
			<div className="register__inner">
				<h2 className="register__title">Sign up</h2>
				<form noValidate action="" className="form" onSubmit={handleSubmit(registerUser)}>
					<input
						{...register('login', {
							required: {
								message: 'Login is a required filed',
								value: true,
							},
							maxLength: {
								message: 'Max length 16 symbols',
								value: 16,
							},
							minLength: {
								message: 'Min length 6 symbols',
								value: 6,
							}
						})}
						className="form__input"
						type="text" placeholder="Login" />
					{errors.login && <div>{errors.login.message}</div>}
					<input
						{...register('email', {
							required: {
								message: 'Email is a required field',
								value: true,
							}
						})}
						className="form__input"
						type="email" placeholder="Email" />
					{errors.email && <div>{errors.email.message}</div>}
					<input
						{...register('password', {
							required: {
								message: 'Passwrod is a required field',
								value: true,
							},
							maxLength: {
								message: 'Password max length 16 symbols',
								value: 16,
							},
							minLength: {
								message: 'Password must have at least 6 characters',
								value: 6,
							}
						})}
						className="form__input"
						type="password" 
						placeholder="Password" />
					{errors.password && <div>{errors.password.message}</div>}
					<input
						{...register('passwordConfirm', {
							required: {
								message: 'Passwrod is a required field',
								value: true,
							},
							validate: (val: string) => {
						    	if (watch('password') !== val) {
						     		return "Your passwords do no match";
						    	}
						  	},
						})}
						className="form__input"
						type="password" 
						placeholder="Repeat Password" />
					{errors.passwordConfirm && <div>{errors.passwordConfirm.message}</div>}
					<div className="form__actions">
						<button class="register-btn">Sign up</button>
						<p>You already have an account? <Link to="/login">Sign in</Link></p>
					</div>				
				</form>
			</div>
		</div>
	)
}
