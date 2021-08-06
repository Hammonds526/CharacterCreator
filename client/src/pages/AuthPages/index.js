// Core Dependencies
import React from "react";
import SignUp from "../../components/SignUp";
import Login from "../../components/Login";

// CSS
import "./style.css";

import WoodBeamCard from "../../components/WoodBeamCard";

const AuthPages = ({ setUser, signIn, setSignIn }) => {
  return (
    <div className="row m-0">
      <div className="col-12 col-sm-8 offset-sm-2  col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-bisque vh-100 d-flex align-items-center">
        <WoodBeamCard>
          <div className="p-5">
            <h3>
              <span
                onClick={() => setSignIn(true)}
                className={
                  signIn ? " auth-page__active" : "auth-page__inactive"
                }
              >
                Login
              </span>
              <span className="text-g">&nbsp;</span>
              <span
                onClick={() => setSignIn(false)}
                className={
                  !signIn ? " auth-page__active" : "auth-page__inactive"
                }
              >
                Sign Up
              </span>
            </h3>

            {signIn ? (
              <Login setUser={setUser} />
            ) : (
              <SignUp setSignIn={setSignIn} />
            )}
          </div>
        </WoodBeamCard>
      </div>
    </div>
  );
};

export default AuthPages;
