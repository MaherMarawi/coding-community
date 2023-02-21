import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Loader from "../../components/microcomponents/loader/Loader";
import { AuthContext } from "../../context/authContext";
import "./register.scss";

const Register = () => {
  const { error, currentUser, registerMutation } = useContext(AuthContext)
  const [cred, setCred] = useState()

  const handleClick = () => {
    registerMutation.mutate(cred)
  }
  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value })
  }

  return (
    <div className="register">
      <div className="container">
        <h1>Register</h1>
        <Link to="/auth/login">
        <span>Do you have an account?</span>
        </Link>
        <input onChange={handleChange} name="username" type="text" placeholder="Username" />
        <input onChange={handleChange} name="email" type="email" placeholder="Email" />
        <input onChange={handleChange} name="password" type="password" placeholder="Password" />
        <input onChange={handleChange} name="repassword" type="password" placeholder="Repassword" />
        <button disabled={registerMutation.isLoading} onClick={() => handleClick()}>{registerMutation.isLoading ? <Loader /> :  "Register"}</button>
        {error && <p className="err">error</p>}
        {currentUser && <Navigate to="/" replace={true} />}

      </div>
    </div>
  );
};

export default Register;