import React, { useState } from "react";
import "./AuthPage.scss";

function AuthPage() {
  const [hasAccount, setHasAccount] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeView = () => {
    setHasAccount(!hasAccount);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="auth-page">
      <svg
        className="svg-background"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="bg">
            <stop offset="0%" stopColor="#00A8E8"></stop>
            <stop offset="50%" stopColor="#00C896"></stop>
            <stop offset="100%" stopColor="#0098D3"></stop>
          </linearGradient>
          <path
            id="wave"
            fill="url(#bg)"
            d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
          />
        </defs>
        <g>
          <use xlinkHref="#wave" opacity=".3">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="10s"
              calcMode="spline"
              values="270 230; -334 180; 270 230"
              keyTimes="0; .5; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use xlinkHref="#wave" opacity=".6">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="8s"
              calcMode="spline"
              values="-270 230;243 220;-270 230"
              keyTimes="0; .6; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use xlinkHref="#wave" opacity=".9">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="6s"
              calcMode="spline"
              values="0 230;-140 200;0 230"
              keyTimes="0; .4; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
        </g>
      </svg>

      <div className="auth-pane">
        <div className="auth-title">WELCOME</div>

        {/* INPUT */}
        <div className="inputbox">
          <span>Email</span>
          <input required type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <i></i>
        </div>
        <div className="inputbox">
          <span>Password</span>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i></i>
        </div>

        {/* LOG IN */}
        <div className={`login ${hasAccount ? "" : "disabled"}`}>
          <div className="login-button">LOG IN</div>
          <div className="login-google">
            <svg
              className="svg-google"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
            </svg>
            LOG IN WITH GOOGLE
          </div>
          <div className="transfer-to-signup">
            <div className="signup-text">Need an account?</div>
            <div className="signup-link" onClick={changeView}>
              SIGN UP
            </div>
          </div>
        </div>

        {/* SING UP */}
        <div className={`signup ${hasAccount ? "disabled" : ""}`}>
          <div className="signup-button">SIGN UP</div>
          <div className="transfer-to-login">
            <div className="login-text">Already have an account?</div>
            <div className="login-link" onClick={changeView}>
              LOG IN
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
