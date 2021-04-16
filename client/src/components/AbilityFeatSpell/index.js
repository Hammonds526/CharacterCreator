import React from "react";
import "./style.css";
import Button from "../Button";

// Pixel border stuff
import Corner from "../Corner";
import WoodBeamX from "../WoodBeamX";
import WoodBeamY from "../WoodBeamY";


function AbilityFeatSpell(props) {
  return (
    <div className="col p-0 char-info-box__container">
      <div
        className="char-info-box__container p-4 mt-2 text-whites"
        style={{ height: "100%" }}
      >
        <WoodBeamX beamStyle={{ top: "-24px" }} />

        <WoodBeamY beamStyle={{ right: "0px", top: "0px" }} />
        <WoodBeamY beamStyle={{ left: "0px", top: "0px" }} />

        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            left: "-24px",
            top: "-24px",
          }}
        />
        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            right: "-24px",
            top: "-24px",
            transform: "rotate(90deg)",
          }}
        />

        <h6 className="text-white ml-5 mt-3">Abilities</h6>

        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
          neque id risus condimentum congue. Nam vitae condimentum libero, sed
          pulvinar odio. Sed odio diam, rutrum vitae nibh ac, pellentesque
          commodo enim. Cras nisl metus, iaculis eu urna eu, imperdiet porttitor
          nulla. Mauris eleifend erat sed dolor eleifend tincidunt. Integer
          vitae magna Cras eget magna magna. Donec blandit bibendum risus, non
          consectetur
        </p>

        <WoodBeamX beamStyle={{ bottom: "-24px" }} />
        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            right: "-24px",
            bottom: "-24px",
            transform: "rotate(180deg)",
          }}
        />
        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            left: "-24px",
            bottom: "-24px",
            transform: "rotate(270deg)",
          }}
        />
      </div>
    </div>
  );
}

export default AbilityFeatSpell;
