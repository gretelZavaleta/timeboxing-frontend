import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validarEmail = (correo) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
};

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!email || !password) {
    setError("Todos los campos son obligatorios");
    return;
  }

  if (!validarEmail(email)) {
    setError("El correo no tiene un formato válido");
    return;
  }

  setError("");
  navigate("/dashboard");
};

  return (
    <div className="login-container">
      <h1>TimeBox</h1>
      <p>By GZavaleta</p>

    {error && (
        <div className="error-card">
            {error}
        </div>
    )}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;