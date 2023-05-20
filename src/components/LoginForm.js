import React from 'react';
import {useForm} from 'react-hook-form';

export default function LoginForm({loginUser}) {

	const {register, handleSubmit} = useForm()

	return (
		<form className='form' onSubmit={handleSubmit(loginUser)}>
			<input
				{...register("email", {
					required: {
						message: "email required",
						value: true,
					},
				})}
				className="form__input"
				type="email"
			/>
			<input
				{...register("password", {
					required: {
						message: "password required",
						value: true,
					},
				})}
				className="form__input"
				type="password"
			/>
			<button type="submit">login</button>
		</form>
	);
}