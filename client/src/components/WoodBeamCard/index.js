import React from "react";

// Close btn
import Xbtn from "../Xbtn";

// Pixel border stuff
import Corner from "../Corner";
import WoodBeamX from "../WoodBeamX";
import WoodBeamY from "../WoodBeamY";

// CSS
import "./style.css";

const WoodBeamCard = (props) => {
  return (
    <div className={`position-relative ${props.WoodBeamCardStyleClass}`}>
      <div className="wood-beam-card_container p-5">
        <WoodBeamX beamStyle={{ top: "-48px" }} />

        <WoodBeamY beamStyle={{ right: "0px", top: "0px" }} />
        <WoodBeamY beamStyle={{ left: "0px", top: "0px" }} />

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
        {props.xbtn ? (
          <Xbtn
            xBtnStyle={{
              width: "30px",
              height: "auto",
              right: "-45px",
              top: "-46px",
              zIndex: "2",
            }}
            xBtnFunc={props.xBtnFunc ? props.xBtnFunc : null}
            xBtnUrl="/"
          />
        ) : null}

        {props.children}

        <WoodBeamX beamStyle={{ bottom: "-48px" }} />
        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            right: "-48px",
            bottom: "-48px",
            transform: "rotate(180deg)",
          }}
        />
        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            left: "-48px",
            bottom: "-48px",
            transform: "rotate(270deg)",
          }}
        />
      </div>
    </div>
  );
};

export default WoodBeamCard;
