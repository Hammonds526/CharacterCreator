import React, { useState, useEffect } from "react";

// Bootstap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Listings(props) {
  // console.log(props.items);
  return (
    <div>
      {props.items.map((listItem, i) => (
        <p
          name={listItem.name ? listItem.name : listItem}
          className="mb-0"
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
