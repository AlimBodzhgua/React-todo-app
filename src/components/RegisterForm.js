import React from "react";
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';

export default function RegisterForm({registerUser}) {
	const {
		register,
		handleSubmit,
		watch,
		formState: {errors}
	} = useForm({mode: 'onChange'});

	return (
		<form noValidate className="form" onSubmit={handleSubmit(registerUser)}>
			<input
				{...register("login", {
					required: {
						message: "Login is a required field",
						value: true,
					},
					maxLength: {
						message: "Login must have no more than 16 characters",
						value: 16,
					},
					minLength: {
						message: "Login must have at least 6 characters",
						value: 6,
					},
				})}
				className="form__input"
				type="text"
				placeholder="Login"
			/>
			{errors.login && <div>{errors.login.message}</div>}
			<input
				{...register("email", {
					required: {
						message: "Email is a required field",
						value: true,
					},
				})}
				className="form__input"
				type="email"
				placeholder="Email"
			/>
			{errors.email && <div>{errors.email.message}</div>}
			<input
				{...register("password", {
					required: {
						message: "Passwrod is a required field",
						value: true,
					},
					maxLength: {
						message:
							"Passwrod must have no more than 16 characters",
						value: 16,
					},
					minLength: {
						message: "Password must have at least 6 characters",
						value: 6,
					},
				})}
				className="form__input"
				type="password"
				placeholder="Password"
			/>
			{errors.password && <div>{errors.password.message}</div>}
			<input
				{...register("passwordConfirm", {
					required: {
						message: "Passwrod is a required field",
						value: true,
					},
					validate: (val: string) => {
						if (watch("password") !== val) {
							return "Your passwords do no match";
						}
					},
				})}
				className="form__input"
				type="password"
				placeholder="Repeat Password"
			/>
			{errors.passwordConfirm && <div>{errors.passwordConfirm.message}</div>}
			<div className="form__actions">
				<button class="register-btn">Sign up</button>
				<p>
					You already have an account?{" "}
					<Link to="/login">Sign in</Link>
				</p>
			</div>
		</form>
	);
}