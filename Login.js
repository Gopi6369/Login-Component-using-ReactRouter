import React from "react";
import { useNavigate } from "react-router-dom";  // Use react-router-dom (instead of just react-router)

function Login() {
  const navigate = useNavigate();

  function onSubmit() {
    navigate('/Dashboard');
  }

  return (
    <>
      <h1>Login page</h1>
      <button onClick={onSubmit}>Login</button>
    </>
  );
}

export default Login;

