import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useTranslation} from "react-i18next";
import { AuthContext } from '../../store/AuthContext';

function AuthForm(props) {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const rememberMeRef = useRef();
    const [message, setMessage] = useState("");
    const {t} = useTranslation();
    const {setLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const url = "https://identitytoolkit.googleapis.com/v1/accounts:" + props.url + "?key=" + process.env.REACT_APP_API_KEY;
    
    const submit = () => {
        if (confirmPasswordRef.current !== undefined && 
                passwordRef.current.value !== confirmPasswordRef.current.value) {
            console.log("ei ühti, lõpeta")
            setMessage(t("error.passwords-do-not-match"));
            return;
        }
        console.log("teen api päringut...")
        //API PÄRING.... -> registreerub või logib sisse
        
        
    

    const payload = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        returnSecureToken: true
    }

    fetch(url, {
        method: "POST", 
        body: JSON.stringify(payload), 
        headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(body => {
            if (body.error) {
                console.log(body.error);
                setMessage(body.error.message);
            } else {
              if (rememberMeRef.current !== undefined &&
                rememberMeRef.current.checked === true
              ) {
                localStorage.setItem("email", emailRef.current.value);
              }
                // setMessage("Edukalt sisselogitud/registreerutud");
                setLoggedIn(true);
                navigate("/admin");
                sessionStorage.setItem("token", body.idToken);
            }
        })
}

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h4>{props.headerText}</h4>
            </div>
            <div className="card-body">
              {/* <form> */}
              {props.isUsername &&
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    ref={usernameRef}
                  />
                </div>}
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    ref={emailRef}
                    defaultValue={props.isRememberMe === true ? localStorage.getItem("email") : undefined}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    ref={passwordRef}
                  />
                </div>
                {props.isConfirmPassword &&
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    ref={confirmPasswordRef}
                  />
                </div>}
                {props.isRememberMe && 
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    ref={rememberMeRef}
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>}
                <div>{message}</div>
                <button onClick={submit} type="submit" className="btn btn-primary btn-block">
                  {props.headerText}
                </button>
              {/* </form> */}
            </div>
            <div className="card-footer text-center">
              <small>
              {props.footerText} 
                <Link to={props.linkUrl}>
                {props.linkText}
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm