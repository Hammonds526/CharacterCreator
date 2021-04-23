import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import TavernImage from "../../images/tavern/tavernx2.png";

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
    isActive: true,
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
    isActive: true,
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
    isActive: true,
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
    isActive: true,
    styles: {
      height: "15.4%",
      width: "7.3%",
      bottom: "39.2%",
      left: "65.7%",
    },
  },
  {
    text: "Warlock Coming Soon",
    name: "warlock",
    isActive: false,
    styles: {
      height: "15.4%",
      width: "6.3%",
      bottom: "40.2%",
      left: "76.7%",
    },
  },
  {
    text: "Monk Coming Soon",
    name: "monk",
    isActive: false,
    styles: {
      height: "24.4%",
      width: "7.3%",
      bottom: "40.2%",
      left: "91.7%",
    },
  },
  {
    text: "Barbarian Coming Soon",
    name: "barbarian",
    isActive: false,
    styles: {
      height: "28.4%",
      width: "8.3%",
      bottom: "15.2%",
      left: "85.7%",
    },
  },
  {
    text: "Paladin Coming Soon",
    name: "paladin",
    isActive: false,
    styles: {
      height: "28.4%",
      width: "8.3%",
      bottom: "15.2%",
      left: "59.7%",
    },
  },
  {
    text: "Sorceror Coming Soon",
    name: "sorcerer",
    isActive: false,
    styles: {
      height: "28.4%",
      width: "8.3%",
      bottom: "28.2%",
      left: "52.7%",
    },
  },
  {
    text: "Druid Coming Soon",
    name: "druid",
    isActive: false,
    styles: {
      height: "33.4%",
      width: "8.3%",
      bottom: "8.2%",
      left: "28.7%",
    },
  },
  {
    text: "Cleric Coming Soon",
    name: "cleric",
    isActive: false,
    styles: {
      height: "28.4%",
      width: "9.3%",
      bottom: "8.2%",
      left: "3.7%",
    },
  },
  {
    text: "Bard Coming Soon",
    name: "bard",
    isActive: false,
    styles: {
      height: "31.4%",
      width: "9.3%",
      bottom: "27.2%",
      left: "13.7%",
    },
  },
];

function Tavern(props) {
  return (
    <div className="tavern-background">
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
