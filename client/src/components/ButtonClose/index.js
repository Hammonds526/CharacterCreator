import React from "react";

// Btn image
import Xbtn from "../../images/xbtn.png";

// Our X-btn function, should close the main page when clicked.
function ButtonClose(props) {

    return (
        <div className="position-relative" onClick={props.selectButtonOnClick}>
            <Xbtn
                arrowStyle={{
                    width: "18px",
                    height: "auto",
                    left: "68px",
                    top: "6px",
                    zIndex: "1",
                }}
            />
            <div className="position-relative button-image-background">
                <p className="font-weight-bold select-button__text">{props.text}</p>
            </div>
        </div>
    )
};

export default ButtonClose;