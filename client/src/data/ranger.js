/* Starts on page 83/293 or 89 of Players Handbook
*Cheat Sheet
ranger
  desc
  classFeatures
  pros
  abilities
  subClass
    -Hunter
      name
      desc
      abilites
    -Beast Master
      name
      desc
      abilites
      
    
*/

const ranger = [
  {
    desc:
      "Warriors of the wilderness, rangers specialize in hunting the m onsters that threaten the edges of civilization—humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their com bat training on techniques that are particularly useful against their specific favored foes. Thanks to their familiarity with the wilds, rangers acquire the ability to cast spells that harness nature’s  power, much as a druid does. Their spells, like their combat abilities, emphasize speed, stealth, and the hunt. A ranger’s talents and abilities are honed with deadly focus on the grim task of protecting the borderlands.",

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
        desc:
          "Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies. You have advantage on Wisdom (Survival) checks to track your favored enem ies, as well as on Intelligence checks to recall information about them. You also learn one language of your choice that is spoken by your favored enemies, if they speak one at all. You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.",
      },
      // *----- This will require a selector and slight modification -----*
      {
        name: "Natural Explorer",
        level: 1,
        desc:
          "Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. W hen you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in. While traveling for an hour or more in your favored terrain, you gain the following benefits: Difficult terrain doesn’t slow your group’s travel. Your group can’t become lost except by magical means. Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger. If you are traveling alone, you can move stealthily at a normal pace. When you forage, you find tw ice as much food as you normally would.W hile tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area. You choose additional favored terrain types at 6th and 10th level.",
      },
      {
        name: "Fighter Style",
        level: 2,
        types: [
          {
            name: "Archery",
            desc:
              "You gain a +2 bonus to attack rolls you make with ranged weapons.",
          },
          {
            name: "Defense",
            desc: "While you are wearing armor, you gain a +1 bonus to AC",
          },
          {
            name: "Dueling",
            desc:
              "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.",
          },
          {
            name: "Two-Weapon Fighting",
            desc:
              "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.",
          },
        ],
      },
      {
        name: "Primeval Awareness",
        level: 3,
        desc:
          "Can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn’t reveal the creatures’ location or number.",
      },
      {
        name: "Extra Attack",
        level: 5,
        desc:
          "You can attack twice, instead of once, whenever you take the Attack action on your turn.",
      },
      {
        name: "Land's Stride",
        level: 8,
        desc:
          "Moving through non-magical difficult terrain costs you no extramovement. You can also pass through non-magical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard. In addition, you have advantage on saving throws against plants that are magically created or manipulated to im pede movement, such those created by the entangle spell.",
      },
      {
        name: "Hide in Plain Sight",
        level: 10,
        desc:
          "You can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage. Once you are cam ouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must cam ouflage yourself again to gain this benefit.",
      },
      {
        name: "Vanish",
        level: 14,
        desc:
          "You can use the Hide action as a bonus action on your turn. Also, you can’t be tracked by non-magical means, unless you choose to leave a trail.",
      },
      {
        name: "Feral Senses",
        level: 18,
        desc:
          "When you attack a creature you can’t see, your inability to see it doesn’t impose disadvantage on your attack rolls against it.You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn’t hidden from you and you aren’t blinded or deafened.",
      },
      {
        name: "Foe Slayer",
        level: 20,
        desc:
          "Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.",
      },
    ],
    subClass: [
      {
        name: "Hunter",
        desc:
          "As you walk the Hunter’s path, you learn specialized techniques for fighting the threats you face, from rampaging ogres and hordes of orcs to towering giants and terrifying dragons.",
        abilities: [
          {
            name: "Hunter's Prey",
            level: 3,
            desc: "You gain one of the following features.",
            choices: [
              {
                name: "Colossus Slayer",
                desc:
                  "Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it’s below its hit point maximum. You can deal this extra damage only once per turn.",
              },
              {
                name: "Giant Killer",
                desc:
                  "When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature.",  
              },
              {
                name: "Horde Breaker",
                desc:
                  "Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon.",
              },
            ],
          },
          {
            name: "Defensive Tactics",
            level: 7,
            desc: "You gain one of the following features.",
            choices: [
              {
                name: "Escape the Horde",
                desc:
                  "Opportunity attacks against you are made with disadvantage.",
              },
              {
                name: "Multi-attack Defense",
                desc:
                  "When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn",
              },
              {
                name: "Steel Will",
                desc:
                  "You have advantage on saving throws against being frightened.",
              },
            ],
          },
          {
            name: "Multi-Attack",
            level: 11,
            desc: "You gain one of the following features.",
            choices: [
              {
                name: "Volley",
                desc:
                  "You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon’s range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target.",
              },
              {
                name: "Whirlwind Attack",
                desc:
                  "You can use your action to make a melee attack against any number of creatures within 5 feet of you, with a separate attack roll for each target.",
              },
            ],
          },
          {
            name: "Superior Hunter's Defense",
            level: 15,
            desc: "You gain one of the following features.",
            choices: [
              {
                name: "Evasion",
                desc:
                  "You can nimbly dodge out of the way of certain area effects, such as a red dragon’s fiery breath or a lightning bolt spell. W hen you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
              },
              {
                name: "Stand Against the Tide",
                desc:
                  "When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the sam e attack against another creature (other than itself) of your choice.",
              },
              {
                name: "Uncanny Dodge",
                desc:
                  "When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack’s damage against you.",
              },
            ],
          },
        ],
      },

      // ----- Start of Class 2 -----
      {
        name: "Beast Master",
        desc:
          "The Beast Master archetype embodies a friendship between the civilized races and the beasts of the world. United in focus, beast and ranger work as one to fight the monstrous foes that threaten civilization and the wilderness alike. Emulating the Beast Master archetype means committing yourself to this ideal, working in partnership with an animal as its companion and friend.",
        abilities: [
          {
            name: "Ranger's Companion",
            level: 3,
            desc:
              "Choose a beast that is no larger than Medium and that has a challenge rating of 1/4 or lower (appendix D presents statistics for the hawk, mastiff, and panther as examples). Add your proficiency bonus to the beast’s AC, attack rolls, and damage rolls, as well as to any saving throws and skills it is proficient in. Its hit point maximum equals its normal maximum or 4x your ranger level, whichever is higher. The beast obeys your commands as best as it can. -It takes its turn on your initiative, though it doesn’t take an action unless you command it to. On your turn, you can verbally command the beast where to move (no action required by you). You can use your action to verbally command it to take the Attack, Dash, Disengage, Dodge, or Help action. Once you have the Extra Attack feature, you can make one weapon attack yourself when you command the beast to take the Attack action. While traveling through your favored terrain with only the beast, you can move stealthily at a normal pace. If the beast dies, you can obtain another one by spending 8 hours magically bonding with another beast that isn’t hostile to you, either the same type of beast as before or a different one.",
          },
          {
            name: "Exceptional Training",
            level: 7,
            desc:
              "On any of your turns when your beast companion doesn’t attack, you can use a bonus action to command the beast to take the Dash, Disengage, Dodge, or Help action on its turn. ",
          },
          {
            name: "Bestial Fury",
            level: 11,
            desc:
              "Your beast companion can make two attacks when you command it to use the Attack action.",
          },
          {
            name: "Share Spells",
            level: 15,
            desc:
              "When you cast a spell targeting yourself, you can also affect your beast companion with the spell if the beast is within 30 feet of you.",
          },
        ],
      },
    ],
  },
];

// kill me...so much writing and reading :'(
export default ranger;
