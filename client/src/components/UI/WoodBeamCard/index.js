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
      <div className="wood-beam-card_container">
        <WoodBeamX beamStyle={{ top: "0px" }} />

        <WoodBeamY beamStyle={{ right: "0px", top: "0px" }} />
        <WoodBeamY beamStyle={{ left: "0px", top: "0px" }} />

        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            left: "0px",
            top: "0px",
          }}
        />
        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            right: "0px",
            top: "0px",
            transform: "rotate(90deg)",
          }}
        />
        {props.xbtn ? (
          <Xbtn
            xBtnStyle={{
              width: "30px",
              height: "auto",
              right: "5px",
              top: "5px",
              zIndex: "2",
            }}
            xBtnFunc={props.xBtnFunc ? props.xBtnFunc : null}
            xBtnUrl="/"
          />
        ) : null}

        {props.children}

        <WoodBeamX beamStyle={{ bottom: "0px" }} />
        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            right: "0px",
            bottom: "0px",
            transform: "rotate(180deg)",
          }}
        />
        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            left: "0px",
            bottom: "0px",
            transform: "rotate(270deg)",
          }}
        />
      </div>
    </div>
  );
};

export default WoodBeamCard;
