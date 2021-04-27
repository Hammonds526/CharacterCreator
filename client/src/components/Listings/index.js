import React from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Listings(props) {
  // console.log(props.items);
  return (
    <Row>
      <Col xs={10}>
        <ul>
          {props.items.map((listItem) => (
            <ol key={listItem.toString()}>{listItem}</ol>
          ))}
        </ul>
      </Col>
      <Col></Col>
    </Row>
  );
}

export default Listings;
