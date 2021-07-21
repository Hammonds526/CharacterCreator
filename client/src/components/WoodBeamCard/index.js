import React from "react";

// Close btn
import Xbtn from "../Xbtn";

// Pixel border stuff
import Corner from "../Corner";
import WoodBeamX from "../WoodBeamX";
import WoodBeamY from "../WoodBeamY";

const WoodBeamCard = (props) => {
  return (
    <div className="char-info-box__container p-5 mt-2">
      <WoodBeamX beamStyle={{ top: "-48px" }} />

      <WoodBeamY beamStyle={{ right: "15px", top: "9px" }} />
      <WoodBeamY beamStyle={{ left: "15px", top: "9px" }} />

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
      <Xbtn
        xBtnStyle={{
          width: "30px",
          height: "auto",
          right: "-45px",
          top: "-46px",
          zIndex: "2",
        }}
        xBtnUrl="/"
      />

      {props.children}

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
  );
};

export default WoodBeamCard;
