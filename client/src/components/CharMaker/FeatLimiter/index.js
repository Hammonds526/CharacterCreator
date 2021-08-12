import React, { useState, useEffect } from "react";

// CSS
import "./style.css";

// import getSpellAmount from "../../utils/getSpellAmount";

function FeatLimiter({
  feats,
  setFeats,
  activeFeat,
  newCharacter,
  character,
  ...props
}) {
  return (
    <div className="row">
      <div className="col p-0">
        <h3 className="text-bisque">
          <span>{feats.totalFeatsSelected}</span>
          <span> / </span>
          <span>{feats.totalFeatsAvailable}</span>
        </h3>
      </div>
    </div>
  );
}

export default FeatLimiter;
