import React, { useState, useEffect } from "react";

// Bootstap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Listings(props) {
  // console.log(props.items);
  // const [firstItem, setFirstItem] = useState([]);

  return (
    <div>
      {props.items.map((listItem) => (
        <p className="mb-0" key={listItem.toString()}>
          {listItem}
        </p>
      ))}
    </div>
  );
}

export default Listings;
