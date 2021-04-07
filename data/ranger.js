/* Starts on page 83/293 or 89 of Players Handbook
*Cheat Sheet
ranger
  description
  classFeatures
  pros
  fighterStyle
  abilities
  subClass
    -Champion
      name
      description
      abilites
    -Battle Master
      name
      description
      abilites
      maneuvers
    -Eldritch Knight
      name
      description
      abilites
*/

const ranger = [
    {
       description: "Warriors of the wilderness, rangers specialize in hunting the m onsters that threaten the edges of civilization—humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the w ilds and hiding themselves in brush and rubble. Rangers focus their com bat training on techniques that are particularly useful against their specific favored foes. Thanks to their familiarity with the wilds, rangers acquire the ability to cast spells that harness nature’s  power, much as a druid does. Their spells, like their combat abilities, em phasize speed, stealth, and the hunt. A ranger’s talents and abilities are honed with deadly focus on the grim task of protecting the borderlands.", 
    
    classFeatures: [
        {
            name: "Hitpoints",
            desc:
              "At 1st Level: 10 + your Constitution modifier. Hit Points at Higher Levels: 1d 10 (or 6) + your Constitution modifier per ranger level after 1st",
          },
          {
            name: "Hit Dice",
            desc: "1d10 per ranger level.",
          },
    ],
    pros: [
        {
          name: "Armor",
          desc: "Light Armor, Medium Armor, Sheilds",
        },
        {
          name: "Weapons",
          desc: "Simple weapons, martial weapons",
        },
        {
          name: "Tools",
          desc: "None",
        },
        {
          name: "Saving Throws",
          desc: "Strength, Dexterity",
        },
      ],
    abilities: [
        {
            name: "Favored Enemy",
            level: 1,
            desc: "Choose a type o f favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies. You have advantage on W isdom (Survival) checks to track your favored enem ies, as well as on Intelligence checks to recall information about them. You also learn one language of your choice that is spoken by your favored enemies, if they speak one at all. You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
        },
        {
            name: "Natural Explorer",
            level: 1,
            desc: "Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. W hen you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in."
        }
    ]

    
}

]