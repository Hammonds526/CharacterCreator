import React from "react"

// Avatar & outfits
import NoCostume from "../../images/costumes/base.png";
import RangerCostume from "../../images/costumes/ranger.png"
import FighterCostume from "../../images/costumes/fighter.png"

function AvatarImage({ newCharacter }) {

    return (
        <div>
            <img
                className="avatar"
                src={AvatarOutfit}
                alt="Character Avatar"
            ></img>
        </div>

    );

}

export default AvatarImage;