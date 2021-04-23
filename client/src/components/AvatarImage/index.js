// Core Components
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Avatar & outfits
import DefaultCostume from "../../images/costumes/base.png";
import RangerCostume from "../../images/costumes/ranger.png"
import FighterCostume from "../../images/costumes/fighter.png"
import RogueCostume from "../../images/costumes/rogue.png"


// Our main 
function AvatarImage({ newCharacter }) {

    console.log("Avatar image:", newCharacter);

    // Function that changes class... Classy.
    
    let classpick = "fighter"

    let AvatarCostume;

    if (classpick = "fighter") {

        AvatarCostume = FighterCostume;

    }

    else if (classpick = "rogue") {

        AvatarCostume = RogueCostume;

    }

    else if (classpick = "ranger") {

        AvatarCostume = RangerCostume;

    }

    else if (classpick = "wizard") {

        AvatarCostume = DefaultCostume;

    }

    else {

        AvatarCostume = DefaultCostume;

    }

    return (

        <div>

            <img

                className="avatar"

                src={AvatarCostume}

                alt="Character Avatar"

            ></img>

        </div>

    );

}

export default AvatarImage;