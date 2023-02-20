import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login, currentUser, error } = useContext(AuthContext);
  const [cred, setCred] = useState()

  const handleLogin = () => {
    login(cred);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCred({ ...cred, [e.target.name]: e.target.value })
  }
  return (
    <div className="login">
      <div className="container">
        <h1>Login</h1>
        <Link to="/auth/register">
          <span>Don't you have an account?</span>
        </Link>
        <input type="text" onChange={handleChange} placeholder="Email" name="email" />
        <input type="password" onChange={handleChange} placeholder="Password" name="password" />
        <button onClick={() => handleLogin()}>Login</button>
        {error && <p className="err">{error}</p>}
        {currentUser && <Navigate to="/" replace={true} />}
      </div>
    </div>
  );
};

export default Login;