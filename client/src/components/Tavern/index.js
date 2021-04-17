import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import TavernImage from "../../images/tavern/tavernx2.png";

// Pixel border stuff
import Corner from "../Corner";
import WoodBeamX from "../WoodBeamX";
import WoodBeamY from "../WoodBeamY";

function Tavern() {
  return (
    <div>
      <WoodBeamX beamStyle={{ top: "-15px" }} />

      <WoodBeamY beamStyle={{ left: "-3px", top: "13px" }} />
      <WoodBeamY beamStyle={{ right: "-3px", top: "13px" }} />

      <Corner
        cornerStyle={{
          width: "40px",
          height: "auto",
          left: "-18px",
          top: "-15px",
        }}
      />
      <Corner
        cornerStyle={{
          width: "40px",
          height: "auto",
          right: "-18px",
          top: "-15px",
          transform: "rotate(90deg)",
        }}
      />
      {/*  - Nothing goes above this line. - */}
      <div className="">
        <Link to="/character-creator/name">
          <img
            className="desktop-tavern__image-main"
            src={TavernImage}
            alt="A tavern filled with 12 interesting looking characters representing the 12 classes in the game DND"
          ></img>
        </Link>
      </div>
      {/* - Nothing goes below this line - */}
      <WoodBeamX beamStyle={{ bottom: "-17px" }} />
      <Corner
        cornerStyle={{
          width: "40px",
          height: "auto",
          right: "-18px",
          bottom: "-17px",
          transform: "rotate(180deg)",
        }}
      />
      <Corner
        cornerStyle={{
          width: "40px",
          height: "auto",
          left: "-18px",
          bottom: "-17px",
          transform: "rotate(270deg)",
        }}
      />
    </div>
  );
}

export default Tavern;
