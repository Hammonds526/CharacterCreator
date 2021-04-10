import React from "react";
import "./style.css";
import Button from "../Button";
import Corner from "../Corner";
import WoodBeamX from "../WoodBeamX";
import WoodBeamY from "../WoodBeamY";

function CharInfoBox(props) {
  const CharacterInfo = {
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
neque id risus condimentum congue. Nam vitae condimentum libero, sed
pulvinar odio. Sed odio diam, rutrum vitae nibh ac, pellentesque commodo
enim. Cras nisl metus, iaculis eu urna eu, imperdiet porttitor nulla.
Mauris eleifend erat sed dolor eleifend tincidunt. Integer vitae magna
augue. Vestibulum diam nunc, eleifend eget nulla quis, mollis congue
libero. Donec ligula ipsum, ornare quis metus sit amet, bibendum blandit
leo. Quisque eu magna et mauris malesuada fringilla. Etiam sed faucibus
mauris. Praesent rhoncus risus at leo congue, in auctor quam molestie.
Cras eget magna magna. Donec blandit bibendum risus, non consectetur

`,
    race: [
      // "Dragonborn",
      "Dwarf",
      // "Gnome",
      "Elf",
      "Half-Elf",
      "Halfling",
      "Half-Orc",
      "Human",

      // "Tiefling",
    ],
  };

  return (
    <div class="char-info-box__container p-5 mt-2 text-white">
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

      <h6 className="text-white ml-5 mt-3">Choose a Race</h6>
      <div className="row">
        {CharacterInfo.race.map((item) => (
          <div className="col p-0 d-flex justify-content-center">
            <Button text={item} />
          </div>
        ))}
      </div>

      {CharacterInfo.description}

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
  );
}

export default CharInfoBox;
