import React from "react";
import "./style.css";
import Avatar from "../../images/man2.png";

// Pixel border stuff
import Corner from "../Corner";
import WoodBeamX from "../WoodBeamX";
import WoodBeamY from "../WoodBeamY";


function AvatarContainer(props) {
  return (
    <div>
      <div className="avatar__container text-center">
      <WoodBeamX beamStyle={{ top: "-48px" }} />


<WoodBeamY beamStyle={{ right: "15px", top: "19px" }} />

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
        <img
          className=""
          src={Avatar}
          style={{ height: "180px", marginTop: "10px" }}
          alt="Character Avatar"
        ></img>
        
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

export default AvatarContainer;
