import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

// Selection Tab component
import SelectionTab from "../SelectionTab";

// Starting CSS
import "./style.css";


// This is our list of tabs that appears across the top of the creator
const tabTitles = [
  { title: "Name & Lvl", tabUrl: "name" },
  { title: "Race", tabUrl: "race" },
  // { title: "Stats", tabUrl: "stats" },
  { title: "Class", tabUrl: "class" },
  { title: "Subclass", tabUrl: "subclass" },
  { title: "Spells", tabUrl: "spells" },
  { title: "Feats", tabUrl: "feats" },
];

// Important main function
function CharacterProgressBar(props) {

// This is what set up the actual url links. Fancy.
  let { url } = useRouteMatch();

  return (
    <div className="character-progress-bar__container">
      <div className="d-flex justify-content-center flex-wrap">
        {tabTitles.map(({ title, tabUrl }, i) => {


          return (
            <Link key={title} to={`${url}/${tabUrl}`}>
              <div>
                <SelectionTab
                  charProperty={title}
                  tabStyle={{
                    zIndex: `-${i}`,
                  }}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CharacterProgressBar;
