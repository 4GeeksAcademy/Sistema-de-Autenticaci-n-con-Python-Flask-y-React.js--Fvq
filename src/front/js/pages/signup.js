import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Signup = () => {
	const { store, actions } = useContext(Context);

	// Estados para los campos del formulario
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// Función para manejar el envío del formulario
	const add = async (e) => {
		e.preventDefault();
		let newUser = {
			name: name,
			email: email,
			password: password,
		};

		let resp = await actions.signup(newUser);
		console.log(resp);

		// Limpiar campos si la respuesta fue exitosa
		if (resp) {
			setName("");
			setEmail("");
			setPassword("");
		} else {
			alert("Error al registrar el usuario");
		}
	};

	return (
		<div className="container text-primary">
			<h1>Signup</h1>
			<form onSubmit={add}>
				<div className="mb-3">
					<label htmlFor="signupName" className="form-label">
						Name
					</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="form-control"
						id="signupName"
						placeholder="Enter your name"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="signupEmail" className="form-label">
						Email address
					</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="form-control"
						id="signupEmail"
						placeholder="Enter your email"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="signupPassword" className="form-label">
						Password
					</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="form-control"
						id="signupPassword"
						placeholder="Enter your password"
					/>
				</div>
				<button type="submit" className="btn btn-primary m-2">
					Submit
				</button>
				<Link to="/login" className="btn btn-link">
					Already have an account? Login
				</Link>
			</form>
		</div>
	);
};
