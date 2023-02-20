import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login, currentUser, error } = useContext(AuthContext);
  const [ cred, setCred ] = useState()

  const handleLogin = () => {
    login(cred);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCred({...cred,[e.target.name]:e.target.value})
  }
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          
            <input type="text" onChange={handleChange} placeholder="Email" name="email" />
            <input type="password" onChange={handleChange} placeholder="Password" name="password" />
            <button onClick={() => handleLogin()}>Login</button>
            {error && <p className="err">{error}</p>}
            {currentUser && <Navigate to="/" replace={true} />}
        </div>
      </div>
    </div>
  );
};

export default Login;