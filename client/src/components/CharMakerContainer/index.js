// Core Dependencies
import React from "react";
import { Switch, Route, Link } from "react-router-dom";

// CSS
import "./style.css";

// Components
import RacePage from "../TabRace";
import ClassPage from "../TabClass";
import SubclassPage from "../TabSubclass";
import SpellsPage from "../TabSpells";
import FeatsPage from "../TabFeats";
import StatPage from "../TabStats";
import NameLevelPage from "../TabNameLevel";
import WoodBeamCard from "../WoodBeamCard";

const CharMakerContainer = (props) => {
  return (
    <WoodBeamCard xbtn={true}>
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
        <Route exact path={"/character-creator/stats"}>
          <StatPage {...props} />
        </Route>
      </Switch>
    </WoodBeamCard>
  );
};

export default CharMakerContainer;
