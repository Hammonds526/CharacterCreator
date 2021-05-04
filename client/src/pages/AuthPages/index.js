// Core Dependencies
import React from "react";
import SignUp from "../../components/SignUp";
import Login from "../../components/Login";

// CSS
import "./style.css";

// Pixel border stuff
import Corner from "../../components/Corner";
import WoodBeamX from "../../components/WoodBeamX";
import WoodBeamY from "../../components/WoodBeamY";
import { NavItem } from "react-bootstrap";

function AuthPages({ setUser, signIn, setSignIn, ...props }) {
  return (
    <div className="row m-0">
      <div className="col-12 col-sm-8 offset-sm-2  col-md-6 offset-md-3 col-lg-4 offset-lg-4 p-5 mt-5 text-bisque">
        <WoodBeamX beamStyle={{ top: "-48px" }} />

        <WoodBeamY beamStyle={{ right: "1px", top: "9px" }} />
        <WoodBeamY beamStyle={{ left: "1px", top: "9px" }} />

        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            left: "-48px",
            top: "-48px",
          }}
        />
        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            right: "-48px",
            top: "-48px",
            transform: "rotate(90deg)",
          }}
        />
        {/* This this button below is supposed to close the creator */}

        <h3>
          <span
            onClick={() => setSignIn(true)}
            className={signIn ? " auth-page__active" : "auth-page__inactive"}
          >
            Login
          </span>
          <span className="text-g">&nbsp;</span>
          <span
            onClick={() => setSignIn(false)}
            className={!signIn ? " auth-page__active" : "auth-page__inactive"}
          >
            Sign Up
          </span>
        </h3>

        {signIn ? (
          <Login setUser={setUser} />
        ) : (
          <SignUp setSignIn={setSignIn} />
        )}
        {/* Nothing below here */}
        <WoodBeamX beamStyle={{ bottom: "-57px" }} />
        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            right: "-48px",
            bottom: "-57px",
            transform: "rotate(180deg)",
          }}
        />
        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            left: "-48px",
            bottom: "-57px",
            transform: "rotate(270deg)",
          }}
        />
      </div>
    </div>
  );
}

export default AuthPages;
