import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import TavernImage from "../../images/tavern/tavernx2.png";
import Logout from "../../components/Logout";

// Pixel border stuff
import Corner from "../Corner";
import WoodBeamX from "../WoodBeamX";
import WoodBeamY from "../WoodBeamY";

//Character Images
import CharacterHover from "../CharacterHover";

const CharacterData = [
  {
    text: "Create Wizard",
    name: "Wizard",
    styles: {
      height: "32.4%",
      width: "8.3%",
      bottom: "19.6%",
      left: "43.5%",
    },
  },
  {
    text: "Create Rogue",
    name: "Rogue",
    styles: {
      height: "11.4%",
      width: "9.3%",
      bottom: "27.6%",
      left: "71.5%",
    },
  },
  {
    text: "Create Ranger",
    name: "Ranger",
    styles: {
      height: "15.4%",
      width: "10.7%",
      bottom: "42.2%",
      left: "32%",
    },
  },
  {
    text: "Create Fighter",
    name: "Fighter",
    styles: {
      height: "15.4%",
      width: "7.3%",
      bottom: "39.2%",
      left: "65.7%",
    },
  },
];

function Tavern(props) {
  return (
    <div className="tavern-background">
      <Logout></Logout>
      <WoodBeamX beamStyle={{ top: "0px" }} />

      <WoodBeamY beamStyle={{ left: "0px", top: "0px" }} />
      <WoodBeamY beamStyle={{ right: "0px", top: "0px" }} />

      <Corner
        cornerStyle={{
          width: "40px",
          height: "auto",
          left: "-16px",
          top: "0px",
        }}
      />
      <Corner
        cornerStyle={{
          width: "40px",
          height: "auto",
          right: "-16px",
          top: "0px",
          transform: "rotate(90deg)",
        }}
      />
      {/*  - Nothing goes above this line. - */}
      <div className="position-relative">
        {CharacterData.map((data, i) => (
          <CharacterHover data={data} key={i} {...props} />
        ))}

        <img
          className="desktop-tavern__image-main"
          src={TavernImage}
          alt="A tavern filled with 12 interesting looking characters representing the 12 classes in the game DND"
        ></img>
      </div>
      {/* - Nothing goes below this line - */}
      <WoodBeamX beamStyle={{ bottom: "0px" }} />
      <Corner
        cornerStyle={{
          width: "40px",
          height: "auto",
          right: "-16px",
          bottom: "-1px",
          transform: "rotate(180deg)",
        }}
      />
      <Corner
        cornerStyle={{
          width: "40px",
          height: "auto",
          left: "-16px",
          bottom: "-1px",
          transform: "rotate(270deg)",
        }}
      />
    </div>
  );
}

export default Tavern;
