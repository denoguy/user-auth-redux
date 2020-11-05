import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => error.message);
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
          alt=""
        />
        <button onClick={signIn}>Login with Google</button>
      </div>
    </div>
  );
}

export default Login;
