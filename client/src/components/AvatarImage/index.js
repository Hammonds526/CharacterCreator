// Core Components
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Avatar & outfits
import DefaultCostume from "../../images/costumes/base.png";
import RangerCostume from "../../images/costumes/ranger.png";
import FighterCostume from "../../images/costumes/fighter.png";
import RogueCostume from "../../images/costumes/rogue.png";


// Our main 
function AvatarImage({ newCharacter }) {

    console.log("Avatar image:", newCharacter);
    // let AvatarCostume = FighterCostume;

    // Function that changes class... Classy.
    // let classpick = "rogue"
    // let AvatarCostume;
    const [AvatarCostume, setAvatarCostume] = useState(DefaultCostume);

    useEffect(() => {

        switch (newCharacter.class) {
            case "Fighter":
            case "fighter":
                setAvatarCostume(FighterCostume)
                break;

            case "Ranger":
            case "ranger":
                setAvatarCostume(RangerCostume)
                break;

            case "Rogue":
            case "rogue":
                setAvatarCostume(RogueCostume)
                break;

            default:
                setAvatarCostume(DefaultCostume);
                break;
        }

    }, [newCharacter.class]);


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