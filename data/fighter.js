/* Starts on page 64/293 or 70 of Players Handbook
*Cheat Sheet
fighter
  desc
  classFeatures
  pros
  fighterStyle
  abilities
  subClass
    -Champion
      name
      desc
      abilites
    -Battle Master
      name
      desc
      abilites
      maneuvers
    -Eldritch Knight
      name
      desc
      abilites
*/

const fighter = [
  {
    desc:
      "Fighters learn the basics of all combat styles. Every fighter can swing an axe, fence with a rapier, wield a longsword or a greatsword, use a bow, and even trap foes in a net with some degree of skill. Likewise, a fighter is adept with shields and every form of armor. Beyond that basic degree of familiarity, each fighter specializes in a certain style of combat. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic. This combination of broad general ability and extensive specialization makes fighters superior combatants on battlefields and in dungeons alike.",

    // -- Dont know if this will be used but it's here --
    classFeatures: [
      {
        name: "Hitpoints",
        desc:
          "At 1st Level: 10 + your Constitution modifier. Hit Points at Higher Levels: 1d 10 (or 6) + your Constitution modifier per fighter level after 1st",
      },
      {
        name: "Hit Dice",
        desc: "1d10 per fighter level.",
      },
    ],

    // -- Dont know if this will be used but it's here --
    pros: [
      {
        name: "Armor",
        desc: "All Armor, Sheilds",
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
        desc: "Strength, Constitution",
      },
    ],

    // *---- Should be a dropdown choice option after class is chosen. ----*
    // Champion  has option for 2 at level 10 
    fighterStyle: [
      {
        name: "Archery",
        desc:
          "You gain a +2 bonus to attack rolls you make with ranged weapons.",
      },
      {
        name: "Defense",
        desc: "While you are wearing armor, you gain a +1 bonus to AC.",
      },
      {
        name: "Dueling",
        desc:
          "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.",
      },
      {
        name: "Great Weapon Fighting",
        desc:
          "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.",
      },
      {
        name: "Protection",
        desc:
          "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.",
      },
      {
        name: "Two-Weapon Fighting",
        desc:
          "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.",
      },
    ],
    abilities: [
      {
        name: "Second Wind",
        level: 1,
        desc:
          "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d 10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.",
      },
      {
        name: "Action Surge",
        level: 2,
        desc:
          "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.",
      },
      {
        name: "Ability Score Improvement",
        level: 4,
        desc:
          "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.",
      },
      {
        name: "Extra Attack",
        level: 5,
        desc:
          "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.",
      },
      {
        name: "Indomitable",
        level: 9,
        desc:
          "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can’t use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.",
      },
    ],

    // ---- Start of Sub-Classes ----
    subClass: [
      {
        name: "Champion",
        desc:
          "The archetypal Champion focuses on the development of raw physical pow er honed to deadly perfection.Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows.",
        abilities: [
          {
            name: "Improved Critical",
            level: 3,
            desc:
              "Beginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20. Beginning when you ch oose this archetype at 3rd level, your w eapon attacks score a critical hit on a roll of 19 or 20.",
          },
          {
            name: "Remarkable Athlete",
            level: 7,
            desc:
              "You can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn’t already use your proficiency bonus. In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier.",
          },
          {
            // *----- This may need to be an if statement -----*
            name: "Additional Fighting Style",
            level: 10,
            desc:
              "You can choose a second option from the Fighting Style class feature.",
          },
          {
            name: "Superior Critical",
            level: 15,
            desc:
              "Your weapon attacks score a critical hit on a roll of 18-20.",
          },
          {
            name: "Survivor",
            level: 18,
            desc:
              "At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don’t gain this benefit if you have 0 hit points.",
          },
        ],
      },

      //   --- Start of Class 2 ---
      {
        name: "Battle Master",
        desc:
          "Those who emulate the archetypal Battle Master employ martial techniques passed down through generations. To a Battle Master, combat is an academic field, sometimes including subjects beyond battle such as weaponsmithing and calligraphy. Not every fighter absorbs the lessons of history, theory, and artistry that are reflected in the Battle Master archetype, but those who do are well-rounded fighters of great skill and knowledge.",
        abilities: [
          {
            // *----- This might need a selector option ----*
            name: "Maneuvers",
            level: 3,
            desc:
              "You learn 3 maneuvers of your choice, which are detailed under “Maneuvers” below. Many maneuvers enhance an attack in some way. You can use only one maneuver per attack. You learn two additional maneuvers of your choice at 7th, 10th, and 15th level. Each time you learn new maneuvers, you can also replace one maneuver you know with a different one. -You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest. You gain another superiority die at 7th level and one more at 15th level.",
          },
          {
            name: "Know Your Enemy",
            level: 7,
            desc:
              "If you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice: Strength score, Dexterity score, Constitution score, Armor Class, Current hit points, Total class levels (if any), Fighter class levels (if any)",
          },
          {
            name: "Improved Combat Superiority",
            level: 10,
            desc:
              "Your superiority dice turn into d10s. At 18th level, they turn into d12's.",
          },
          {
            name: "Relentless",
            level: 15,
            desc:
              "When you roll initiative and have no superiority dice remaining, you regain 1 superiority die.",
          },
          {
            name: "Survivor",
            level: 18,
            desc:
              "At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don’t gain this benefit if you have 0 hit points.",
          },
        ],
        // ---- Start of Maneuvers ----
        maneuvers: [
          {
            name: "Commander's Strike",
            desc:
              "When you take the Attack action on your turn, you can forgo one of your attacks and use a bonus action to direct one of your com panions to strike. When you do so, choose a friendly creature who can see or hear you and expend one superiority die. That creature can immediately use its reaction to make one weapon attack, adding the superiority die to the attack’s damage roll.",
          },
          {
            name: "Disarming Attack",
            desc:
              "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to disarm the target, forcing it to drop one item of your choice that it’s holding. You add the superiority die to the attack’s damage roll, and the target must make a Strength saving throw. On a failed save, it drops  the object you choose. The object lands at its feet.",
          },
          {
            name: "Distracting Strike",
            desc:
              "When you hit a creature with a weapon attack, you can expend one superiority die to distract the creature, giving your allies an opening. You add the superiority die to the attack’s damage roll. The next attack roll against the target by an attacker other than you has advantage if the attack is made before the start of your next turn.",
          },
          {
            name: "Evasive Footwork",
            desc:
              "When you move, you can expend one superiority die, rolling the die and adding the number rolled to your AC until you stop moving.",
          },
          {
            name: "Feinting Attack",
            desc:
              "You can expend one superiority die and use a bonus action on your turn to feint, choosing one creature within 5 feet of you as your target. You have advantage on your next attack roll against that creature. If that attack hits, add the superiority die to the attack’s damage roll.",
          },
          {
            name: "Goading Attack",
            desc:
              "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to goad the target into attacking you. You add the superiority die to the attack’s damage roll, and the target must make a Wisdom saving throw. On a failed save, the target has disadvantage on all attack rolls against targets other than you until the end of your next turn.",
          },
          {
            name: "Lunging Attack",
            desc:
              "When you make a melee weapon attack on your turn, you can expend one superiority die to increase your reach for that attack by 5 feet. If you hit, you add the superiority die to the attack’s damage roll.",
          },
          {
            name: "Disarming Attack",
            desc:
              "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to disarm the target, forcing it to drop one item of your choice that it’s holding. You add the superiority die to the attack’s damage roll, and the target must make a Strength saving throw. On a failed save, it drops  the object you choose. The object lands at its feet.",
          },
          {
            name: "Maneuvering Attack",
            desc:
              "W hen you hit a creature with a weapon attack, you can expend one superiority die to maneuver one of your com rades into a more advantageous position. You add the superiority die to the attack’s damage roll, and you choose a friendly creature who can see or hear you. That creature can use its reaction to move up to half its speed without provoking opportunity attacks from the target of your attack.",
          },
          {
            name: "Menacing Attack",
            desc:
              "W hen you hit a creature with a weapon attack, you can expend one superiority die to attempt to frighten the target. You add the superiority die to the attack’s damage roll, and the target must make a Wisdom saving throw. On a failed save, it is frightened of you until the end of your next turn.",
          },
          {
            name: "Parry",
            desc:
              "When another creature dam ages you with a melee attack, you can use your reaction and expend one superiority die to reduce the damage by the number you roll on your superiority die + your Dexterity modifier.",
          },
          {
            name: "Precision Attack",
            desc:
              "When you make a weapon attack roll against a creature, you can expend one superiority die to add it to the roll. You can use this maneuver before or after making the attack roll, but before any effects of the attack are applied.",
          },
          {
            name: "Pushing Attack",
            desc:
              "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to drive the target back. You add the superiority die to the attack's dam age roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you push the target up to 15 feet away from you",
          },
          {
            name: "Rally",
            desc:
              "On your turn, you can use a bonus action andexpend one superiority die to bolster the resolve of one of your com panions. When you do so, choose a friendly creature who can see or hear you. That creature gains temporary hit points equal to the superiority die roll + your Charisma modifier.",
          },
          {
            name: "Riposte",
            desc:
              "When a creature m isses you with a melee attack, you can use your reaction and expend one superiority die to make a melee weapon attack against the creature. If you hit, you add the superiority die to the attack's damage roll.",
          },
          {
            name: "Sweeping Attack",
            desc:
              "When you hit a creature with a melee weapon attack, you can expend one superiority die to attempt to damage another creature with the same attack. Choose another creature within 5 feet of the original target and within your reach. If the original attack roll would hit the second creature, it takes damage equal to the number you roll on your superiority die. The damage is of the same type dealt by the original attack.",
          },
          {
            name: "Trip Attack",
            desc:
              "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to knock the target down. You add the superiority die to the attack’s damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you knock the target prone.",
          },
        ],
      },

      //   ----- Start of class 3 -----
      // *---- Class should include spell choices. See page 69/293 of Players Handbook ----*
      {
        name: "Eldritch Knight",
        desc:
          "The archetypal Eldritch Knight com bines the martial mastery common to all fighters with a careful study of magic. Eldritch Knights use magical techniques similar to those practiced by wizards. They focus their studyon two of the eight schools of magic: abjuration and evocation. Abjuration spells grant an Eldritch Knight additional protection in battle, and evocation spells deal damage to many foes at once, extending the fighter’s reach in combat. These knights learn a comparatively small number of spells, committing them to memory instead of keeping them in a spellbook",
        abilities: [
          {
            //   ---- Will need spell choice functionality. See page 69/293 of player handbook ----
            name: "Spellcasting",
            level: 3,
            desc:
              "You augment your martial prowess with the ability to cast spells. You Learn 2 cantrips of your choice. See general rules of spellcasting and chapter 11 for the wizard spell list.",
          },
          {
            name: "Weapon Bond",
            level: 3,
            desc:
              "You perform the ritual over the course of 1 hour, which can be done during a short rest. The weapon must be within your reach throughout the ritual. Once you have bonded a w eapon to yourself, you can’t be disarm ed of that weapon unless you are incapacitated. If it is on the same plane of existence, you can sum m on that weapon as a bonus action on your turn, causing it to teleport instantly to your hand. You can have up to two bonded w eapons, but can summon only one at a time with your bonus action. If you attempt to bond with a third weapon, you must break the bond with one of the other two",
          },
          {
            name: "War Magic",
            level: 7,
            desc:
              "When you use your action to cast a cantrip, you can make one weapon attack as a bonus action.",
          },
          {
            name: "Eldritch Strike",
            level: 10,
            desc:
              "When you hit a creature with a weapon attack, that creature has disadvantage on the next saving throw it makes against a spell you cast before the end of your next turn.",
          },
          {
            name: "Arcane Charge",
            level: 15,
            desc:
              "Ability to teleport up to 30 feet to an unoccupied space you can see when you use your Action Surge. You can teleport before or after the additional action.",
          },
          {
            name: "Improved War Magic",
            level: 18,
            desc:
              "When you use your action to cast a spell, you can make one weapon attack as a bonus action.",
          },
        ],
      },
    ],
    //  ("Champion", "Battle Master", "Eldritch Knight")
  },
];

export default fighter;
