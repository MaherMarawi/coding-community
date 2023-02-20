import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./register.scss";

const Register = () => {
  const { error, currentUser, register } = useContext(AuthContext)
  const [ cred, setCred ] = useState()
  const handleClick = () => {
    register(cred)
  }
  const handleChange = (e) => {
    setCred({...cred,[e.target.name]:e.target.value})
  }
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>coding Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
            <input onChange={handleChange} name="username" type="text" placeholder="Username" />
            <input onChange={handleChange} name="email" type="email" placeholder="Email" />
            <input onChange={handleChange} name="password" type="password" placeholder="Password" />
            <input onChange={handleChange} name="repassword" type="text" placeholder="Name" />
            <button onClick={() => handleClick()}>Register</button>
            {error && <p className="err">error</p>}
            {currentUser && <Navigate to="/" replace={true} />}
        </div>
      </div>
    </div>
  );
};

export default Register;