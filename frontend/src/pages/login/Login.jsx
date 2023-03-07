import { useContext, useState, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import Loader from "../../components/microcomponents/loader/Loader";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { loginMutation, currentUser, emailError, passwordError } = useContext(AuthContext);
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleLogin = () => {
    const cred = { email: emailRef.current.value, password: passwordRef.current.value }
    loginMutation.mutate(cred)
  };

  return (
    <div className="login">
      <div className="container">
        <h1>Login</h1>
        <Link to="/auth/register">
          <span>Don't you have an account?</span>
        </Link>
        <input type="text" ref={emailRef} placeholder="Email"  style={emailError ? {border: "2px solid #D84646"} : {border: "none"}} />
        <input type="password" ref={passwordRef} placeholder="Password" style={passwordError ? {border: "2px solid #D84646"} : {border: "none"}} />
        <button disabled={loginMutation.isLoading} onClick={() => handleLogin()}>{loginMutation.isLoading ? <Loader /> : "Login"}</button>
        {emailError && <p className="err">{emailError}</p>}
        {passwordError && <p className="err">{passwordError}</p>}
        {currentUser && <Navigate to="/" replace={true} />}
      </div>
    </div>
  );
};

export default Login;