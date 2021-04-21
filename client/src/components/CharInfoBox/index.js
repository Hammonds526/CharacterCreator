import React from "react";

import { Switch, Route, Link } from "react-router-dom";
import RacePage from "../TabRace";
import ClassPage from "../TabClass";
import SubclassPage from "../TabSubclass";
import SpellsPage from "../TabSpells";
import FeatsPage from "../TabFeats";
import NameLevelPage from "../TabNameLevel";

// CSS
import "./style.css";

// Close btn
import ButtonClose from "../ButtonClose";

// Pixel border stuff
import Corner from "../Corner";
import WoodBeamX from "../WoodBeamX";
import WoodBeamY from "../WoodBeamY";

function CharInfoBox(props) {
  return (
    <div className="char-info-box__container p-5 mt-2 text-white">
      <WoodBeamX beamStyle={{ top: "-48px" }} />

      <WoodBeamY beamStyle={{ right: "13px", top: "9px" }} />
      <WoodBeamY beamStyle={{ left: "13px", top: "9px" }} />

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
{/* This this button below is supposed to close the creator */}

            {/* <Link to={"/"}>
          <ButtonClose
            text={"Finish"}
            selectButtonOnClick={selectButtonOnClick}
          />
        </Link> */}


      <Switch>
        <Route exact path={"/character-creator/name"}>
          <NameLevelPage {...props} />
        </Route>
        <Route exact path={"/character-creator/race"}>
          <RacePage {...props} />
        </Route>
        <Route exact path={"/character-creator/class"}>
          <ClassPage {...props} />
        </Route>
        <Route exact path={"/character-creator/subclass"}>
          <SubclassPage {...props} />
        </Route>
        <Route exact path={"/character-creator/spells"}>
          <SpellsPage {...props} />
        </Route>
        <Route exact path={"/character-creator/feats"}>
          <FeatsPage {...props} />
        </Route>
      </Switch>

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
