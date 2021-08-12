/* Starts on page 76/293 or 82 of Players Handbook
*Cheat Sheet
Paladin
  desc
  classFeatures
  pros
  abilities
  subClass
    -Oath of Devotion 
      name
      desc
      abilites
    -Oath of the Ancients
      name
      desc
      abilites
    -Oath of Vengeance
      name
      desc
      abilites  
    
*/

const paladin = {
  name: "Paladin",
  desc:
    // ----- Used a break here ----
    "A paladin swears to uphold justice and righteousness, to stand with the good things of the world against the encroaching darkness, and to hunt the forces of evil wherever they lurk.<br />Different paladins focus on various aspects of the cause of righteousness, but all are bound by the oaths that grant them power to do their sacred work. Although many paladins are devoted to gods of good, a paladin’s pow er com es as much from a commitment to justice itself as it does from a god.",
  cantripsKnown: null,
  spellsKnown: [
    0, 2, 3, 3, 6, 6, 7, 7, 9, 9, 10, 10, 11, 11, 12, 12, 14, 14, 15, 15,
  ],
  classFeatures: [
    {
      name: "Hitpoints",
      desc: "At 1st Level: 10 + your Constitution modifier. Hit Points at Higher Levels: 1d 10 (or 6) + your Constitution modifier per paladin level after 1st",
    },
    {
      name: "Hit Dice",
      desc: "1d10 per paladin level.",
    },
  ],
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
      desc: "Wisdom, Charisma",
    },
  ],
  abilities: [
    {
      name: "Divine Sense",
      level: 1,
      desc:
        // ----- Used breaks here ----
        "Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.<br /> You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.",
    },
    {
      name: "Lay on Hands",
      level: 1,
      desc: "Your blessed touch can heal wounds. You have a pool of healing pow er that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5.<br /> Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one",
    },
    {
      name: "Fighting Style",
      level: 2,
      types: [
        {
          name: "Defense",
          desc: "While you are wearing armor, you gain a +1 bonus to AC",
        },
        {
          name: "Dueling",
          desc: "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.",
        },
        {
          name: "Great Weapon Fighting",
          desc: "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll. The weapon must have the two-handed or versatile property for you to gain this benefit.",
        },
        {
          name: "Protection",
          desc: "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.",
        },
      ],
    },
    {
      name: "Divine Smite",
      level: 2,
      desc: "When you hit a creature with a melee weapon attack, you can expend one paladin spell slot to deal radiant damage to the target, in addition to the weapon’s damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend",
    },
    {
      name: "Divine Health",
      level: 3,
      desc: "The divine magic flowing through you makes you immune to disease.",
    },
    {
      name: "Extra Attack",
      level: 5,
      desc: "Can attack twice, instead of once, whenever you take the Attack action on your turn",
    },
    {
      name: "Aura of Protection",
      level: 6,
      desc: "Whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.<br /><br /> At 18th level, the range of this aura increases to 30 feet",
    },
    {
      name: "Aura of Courage",
      level: 10,
      desc: "You and friendly creatures within 10 feet of you can’t be frightened while you are conscious.<br /><br /> At 18th level, the range of this aura increases to 30 feet.",
    },
    {
      name: "Improved Divine Smite",
      level: 11,
      desc: "Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage. If you also use your Divine Smite with an attack, you add this damage to the extra damage of your Divine Smite.",
    },
    {
      name: "Cleansing Touch",
      level: 14,
      desc: "You can use your action to end one spell on yourself or on one willing creature that you touch.<br /> You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest.",
    },
  ],
  // ----- Start of Subclasses -----
  subClass: [
    {
      name: "Oath of Devotion",
      desc: "The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Sometimes called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor acting with honor in pursuit of justice and the greater good",
      abilities: [
        {
          name: "Sacred Weapon",
          level: 3,
          desc: "As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minim um bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration",
        },
        {
          name: "Turn the Unholy",
          level: 3,
          desc: "As an action, you present your holy symbol and speak a prayer censuring fiends and undead. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.<br /> A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you.",
        },
        {
          name: "Aura of Devotion",
          level: 7,
          desc: "You and friendly creatures within 10 feet of you can’t be charmed while you are conscious. At 18th level, the range of this aura increases to 30 feet.",
        },
        {
          name: "Purity of Spirit",
          level: 15,
          desc: "You are always under the effects of a protection from evil and good spell",
        },
        {
          name: "Holy Nimbus",
          level: 20,
          desc: "As an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that.<br /> Whenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage. In addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead. Once you use this feature, you can’t use it again until you finish a long rest.",
        },
      ],
    },

    // ----- Start of Class 2 -----
    {
      name: "Oath of the Ancients",
      desc: "The Oath of the Ancients is as old as the race of elves and the rituals of the druids. Sometimes called fey knights, green knights, or horned knights, paladins who swear this oath cast their lot with the side of the light in the cosmic struggle against darkness because theylove the beautiful and life-giving things of the world, not necessarily because they believe in principles of honor, courage, and justice. They adorn their arm or and clothing with images of grow ing things—leaves, antlers, or flowers—to reflect their commitment to preserving life and light in the world.",
      abilities: [
        {
          name: "Nature's Wrath",
          level: 3,
          desc: "As an action, you can cause spectral vines to spring up and reach for a creature within 10 feet of you that you can see. The creature must succeed on a Strength or Dexterity saving throw (its choice) or be restrained. While restrained by the vines, the creature repeats the saving throw at the end of each of its turns. On a success, it frees itself and the vines vanish.",
        },
        {
          name: "Turn the Faithless",
          level: 3,
          desc: "As an action, you present your holy symbol, and each fey or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage. A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action. If the creature’s true form is concealed by an illusion, shapeshifting, or other effect, that form is revealed while it is turned.",
        },
        {
          name: "Aura of Warding",
          level: 7,
          desc: "Ancient magic lies so heavily upon you that it forms an eldritch ward. You and friendly creatures within 10 feet of you have resistance to damage from spells.<br /><br /> At 18th level, the range of this aura increases to 30 feet.",
        },
        {
          name: "Undying Sentinel",
          level: 15,
          desc: "When you are reduced to 0 hit points and are not killed outright, you can choose to drop to 1 hit point instead. Once you use this ability, you can’t use it again until you finish a long rest.<br /> Additionally, you suffer none of the drawbacks of old age, and you can’t be aged magically.",
        },
        {
          name: "Elder Champion",
          level: 20,
          desc: "You can assume the form of an ancient force of nature, taking on an appearance you choose. For example, your skin might turn green or take on a bark-like texture, your hair might become leafy or moss-like, or you might sprout antlers or a lion-like mane. Using your action, you undergo a transformation. For 1 minute, you gain the following benefits:<br /><br /> -At the start of each of your turns, you regain 10 hit points.<br /><br /> -Whenever you cast a paladin spell that has a casting time of 1 action, you can cast it using a bonus action instead.<br /><br /> -Enemy creatures within 10 feet of you have disadvantage on saving throws against your paladin spells and Channel Divinity options.<br /><br /> Once you use this feature, you can’t use it again until you finish a long rest.",
        },
      ],
    },
    // ----- Start of Class 3 -----
    {
      name: "Oath of Vengeance",
      desc: "The Oath of Vengeance is a solemn commitment to punish those who have committed a grievous sin. When evil forces slaughter helpless villagers, when an entire people turns against the will of the gods, when a thieves’ guild grows too violent and powerful, when a dragon rampages through the countryside—at times like these, paladins arise and swear an Oath of Vengeance to set right that which has gone wrong. To these paladins— sometimes called avengers or dark knights—their own  purity is not as important as delivering justice",
      abilities: [
        {
          name: "Abjure Enemy",
          level: 3,
          desc: "As an action, you present your holy symbol and speak a prayer of denunciation, using your Channel Divinity. Choose one creature within 60 feet of you that you can see. That creature must make a Wisdom saving throw, unless it is immune to being frightened. Fiends and undead have disadvantage on this saving throw.<br /> On a failed save, the creature is frightened for 1 minute or until it takes any damage. While frightened, the creature’s speed is 0, and it can’t benefit from any bonus to its speed.<br /> On a successful save, the creature’s speed is halved for 1 minute or until the creature takes any damage",
        },
        {
          name: "Vow of Enmity",
          level: 3,
          desc: "As a bonus action, you can utter a vow of enmity against a creature you can see within 10 feet of you, using your Channel Divinity. You gain advantage on attack rolls against the creature for 1 minute or until it drops to 0 hit points or falls unconscious.",
        },
        {
          name: "Relentless Avenger",
          level: 7,
          desc: "When you hit a creature with an opportunity attack, you can move up to half your speed immediately after the attack and as part of the same reaction. This movement doesn’t provoke opportunity attacks.",
        },
        {
          name: "Soul of Vengeance",
          level: 15,
          desc: "When a creature under the effect of your Vow of Enmity makes an attack, you can use your reaction to make a melee weapon attack against that creature if it is within range.",
        },
        {
          name: "Avenging Angel",
          level: 20,
          desc: "You can assume the form of an angelic avenger. Using your action, you undergo a transformation. For 1 hour, you gain the following benefits:<br /><br /> -Wings sprout from your back and grant you a flying speed of 60 feet.<br /><br /> -You emanate an aura of menace in a 30-foot radius. The first time any enemy creature enters the aura or starts its turn there during a battle, the creature must succeed on a Wisdom saving throw or become frightened of you for 1 minute or until it takes any damage. Attack rolls against the frightened creature have advantage",
        },
      ],
    },
  ],
};

// I'm back bb
export default paladin;
