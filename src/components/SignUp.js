import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const SignUp = ({setName,setEmail,setPassword,submit}) => {

  return (
    <div>
      <main className="form-page">
        <div className="img-section" id="signup"></div>
        <div className="form-section">
          <img src={logo} alt="lilies" className="logo" />
          <h3 className="form-header">Welcome to Hunger-Junction!</h3>
          <form id="signup__form" onSubmit={submit}>
            <input placeholder="Your First Name" onChange={(e)=>{
              setName(e.target.value);
            }}/>
            <input placeholder="Your Email address" onChange={(e)=>{
              setEmail(e.target.value);
            }} />
            <input placeholder="Your Password" type="password" onChange={(e)=>{
              setPassword(e.target.value);
            }}/>
            <button className="submit-button"><Link to={"/Dashboard"} className="link-tag">
                <li className="nav-link" id="login-link">
                  Submit
                </li>
              </Link></button>
          </form>
          <div className="form-footer signup__footer">
            <p>
              Already have an account?
              <Link to={"/login"}>
                <span>LOGIN</span>
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
