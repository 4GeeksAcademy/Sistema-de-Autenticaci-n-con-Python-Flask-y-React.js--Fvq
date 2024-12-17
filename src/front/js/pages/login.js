import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario
        let userNew = {
            email: email,
            password: password,
        };
        let response = await actions.login(userNew);

        if (response) {
            navigate("/"); // Redirige si el login es exitoso
        } else {
            alert("Error al hacer login");
        }
        console.log(response);

        // Limpia los campos después de enviar (opcional)
        setEmail("");
        setPassword("");
    };

    return (
        <div className="container text-primary">
            <h1>Iniciar Sesión</h1>
            <form onSubmit={login}>
                <div className="mb-3">
                    <label htmlFor="loginEmail" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        id="loginEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="loginPassword" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        id="loginPassword"
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit" className="btn btn-primary m-2">
                    Submit
                </button>
                <Link to="/signup" className="btn btn-link">
                    Register
                </Link>
            </form>
        </div>
    );
};
