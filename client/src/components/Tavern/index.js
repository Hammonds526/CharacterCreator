import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import TavernImage from "../../images/tavern/tavernx2.png";

// Pixel border stuff
import Corner from "../Corner";
import WoodBeamX from "../WoodBeamX";
import WoodBeamY from "../WoodBeamY";

//Character Images
import CharacterImage from "../CharacterImage";

const CharacterData = [
  {
    name: "Wizard",

    styles: { height: "32.5%", bottom: "19.6%", left: "43.5%", opacity: "0" },
  },
];

function Tavern() {
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
        {CharacterData.map((character, i) => (
          <CharacterImage character={character} key={i} />
        ))}

        <Link to="/character-creator/name">
          <img
            className="desktop-tavern__image-main"
            src={TavernImage}
            alt="A tavern filled with 12 interesting looking characters representing the 12 classes in the game DND"
          ></img>
        </Link>
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
