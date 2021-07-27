import React, { useState, useEffect } from "react";

import "./style.css";

function Listings(props) {
  // console.log(props.items);
  return (
    <div>
      {props.items.map((listItem, i) => (
        <p
          data-type={props.type}
          name={listItem.name ? listItem.name : listItem}
          className="mb-0 character-sheet__listings-p"
          onClick={props.clickFunction}
          key={i}
        >
          {listItem.name ? listItem.name : listItem}
        </p>
      ))}
    </div>
  );
}

export default Listings;
