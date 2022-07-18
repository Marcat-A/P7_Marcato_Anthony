import React from "react";
import "./Auth.css";
import Logo from "../../img/icon-left-font.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction";
import { useIntl } from "react-intl";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const intl = useIntl();

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpass: "",
    username: "",
  });

  const [confirmPass, setConfirmPass] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  const resetForm = () => {
    setConfirmPass(true);
    const zone = document.getElementById("errors");
    zone.innerHTML = "";
    setData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpass: "",
      username: "",
    });
  };
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
      </div>
      <div className="a-right">
        <form action="" className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>
            {isSignUp
              ? intl.formatMessage({ id: "auth.signUp" })
              : intl.formatMessage({ id: "auth.logIn" })}
          </h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                name="firstname"
                placeholder={intl.formatMessage({ id: "auth.firstName" })}
                className="infoInput"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                name="lastname"
                placeholder={intl.formatMessage({ id: "auth.lastName" })}
                className="infoInput"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}

          <div>
            {isSignUp && (
              <input
                type="text"
                name="username"
                placeholder={intl.formatMessage({ id: "auth.username" })}
                className="infoInput"
                onChange={handleChange}
                value={data.username}
              />
            )}

            <input
              type="text"
              name="email"
              placeholder="Email"
              className="infoInput"
              onChange={handleChange}
              value={data.email}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              className="infoInput"
              placeholder={intl.formatMessage({ id: "auth.password" })}
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                name="confirmpass"
                className="infoInput"
                placeholder={intl.formatMessage({ id: "auth.confirmPass" })}
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "var(--primary-color)",
              fontSize: "13px",
            }}
          >
            * {intl.formatMessage({ id: "auth.error" })}
          </span>
          <div>
            <span
              className="alredy"
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? intl.formatMessage({ id: "auth.alredyAccount" })
                : intl.formatMessage({ id: "auth.dontHaveAccount" })}
            </span>
          </div>
          <div id="errors"></div>
          <button className="btn info-btn" type="submit" disabled={loading}>
            {loading
              ? "Loading..."
              : isSignUp
              ? intl.formatMessage({ id: "auth.signUp" })
              : intl.formatMessage({ id: "auth.logIn" })}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
