import { useContext, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import Loader from "../../components/microcomponents/loader/Loader";
import { AuthContext } from "../../context/authContext";
import "./register.scss";

const Register = () => {
  const { emailError, passwordError, currentUser, registerMutation } = useContext(AuthContext)

  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const rePasswordRef = useRef()

  const handleClick = () => {
    const cred = {username: usernameRef.current.value, email: emailRef.current.value, password: passwordRef.current.value, repassword: rePasswordRef.current.value}
    registerMutation.mutate(cred)
  }

  return (
    <div className="register">
      <div className="container">
        <h1>Register</h1>
        <Link to="/auth/login">
        <span>Do you have an account?</span>
        </Link>
        <input ref={usernameRef} type="text" placeholder="Username" />
        <input ref={emailRef} style={emailError ? {border: "2px solid #D84646"} : {border: "none"}} type="email" placeholder="Email" />
        <input ref={passwordRef} style={emailError ? {border: "2px solid #D84646"} : {border: "none"}} type="password" placeholder="Password" />
        <input ref={rePasswordRef} type="password" placeholder="Repassword" />
        <button disabled={registerMutation.isLoading} onClick={() => handleClick()}>{registerMutation.isLoading ? <Loader /> :  "Register"}</button>
        {emailError && <p className="err">{emailError}</p>}
        {passwordError && <p className="err">{passwordError}</p>}
        {currentUser && <Navigate to="/" replace={true} />}
      </div>
    </div>
  );
};

export default Register;