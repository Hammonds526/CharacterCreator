import React from "react";
import "./style.css";
// import getSpellAmount from "../../utils/getSpellAmount";

function SpellLimiter({ spells }) {
  return (
    <div className="">
      {/* <NavArrow
        arrowStyle={{
          width: "25px",
          height: "auto",
          left: "68px",
          top: "6px",
          zIndex: "1",
        }}
      /> */}
      <div className="row">
        <div className="col p-0">
          <h4 className="text-bisque">Cantrips</h4>
          <h3 className="text-bisque">
            <span>{spells.totalCantripsSelected}</span>
            <span> / </span>
            <span>{spells.totalCantripsAvailable}</span>
          </h3>
        </div>
        <div className="col p-0">
          <h4 className="text-bisque">Spells</h4>
          <h3 className="text-bisque">
            <span>{spells.totalSpellsSelected}</span>
            <span> / </span>
            <span>{spells.totalSpellsAvailable}</span>
          </h3>
        </div>
      </div>

      {/* <NavArrow
        arrowStyle={{
          width: "25px",
          height: "auto",
          left: "68px",
          top: "6px",
          zIndex: "1",
        }}
      /> */}
    </div>
  );
}

export default SpellLimiter;
