import React from "react"

// Avatar & outfits
import NoCostume from "../../images/man2.png";
import RangerCostume from "../../images/ranger.png"

function AvatarImage({ newCharacter }) {
    console.log("Avatar:", newCharacter)
    let AvatarOutfit = NoCostume;

    if (newCharacter.class === "ranger") {
        AvatarOutfit = RangerCostume;
    } else {
        AvatarOutfit = NoCostume
    }
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