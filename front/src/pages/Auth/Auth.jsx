import React from "react";
import "./Auth.css";
import Logo from "../../img/icon-left-font.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
      </div>
      <LogIn />
    </div>
  );
};

function LogIn() {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Log In</h3>
        <div>
          <input
            type="text"
            name="username"
            className="infoInput"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            className="infoInput"
            placeholder="Password"
          />
        </div>
        <div>
          <span className="alredy"> Don't have an account ?? </span>
        </div>

        <button className="btn info-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
function Signup() {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Sign Up</h3>
        <div>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            className="infoInput"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            className="infoInput"
          />
        </div>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="infoInput"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            className="infoInput"
            placeholder="Password"
          />
          <input
            type="password"
            name="confirmpass"
            className="infoInput"
            placeholder="Confirm Password"
          />
        </div>
        <div>
          <span className="alredy"> Alredy have an account ?? </span>
        </div>
        <button className="btn info-btn" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;
