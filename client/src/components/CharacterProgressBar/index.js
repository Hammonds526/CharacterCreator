import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./style.css";
import SelectionTab from "../SelectionTab";

// This adds a start cap to the list.


const tabTitles = [
  { title: "Name/Lvl", tabUrl: "name" },
  { title: "Race", tabUrl: "race" },
  { title: "Class", tabUrl: "class" },
  { title: "Subclass", tabUrl: "subclass" },
  { title: "Spells", tabUrl: "spells" },
  { title: "Feats", tabUrl: "feats" },
];

function CharacterProgressBar(props) {
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
