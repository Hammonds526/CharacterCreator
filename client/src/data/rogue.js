/* Starts on page 88/293 or 94 of Players Handbook
*Cheat Sheet
rogue
  desc
  classFeatures
  pros
  abilities
  subClass
    -Thief
      name
      desc
      abilites
    -Assassin
      name
      desc
      abilites
    -Arcane Trickster
      name
      desc
      abilites 
*/

const rogue = {
  name: "Rogue",
  desc:
    "Rogues devote as much effort to mastering the use of a variety of skills as they do to perfecting their combat abilities, giving them a broad expertise that few other characters can match. Many rogues focus on stealth and deception, while others refine the skills that help them in a dungeon environment, such as climbing, finding and disarming traps, and opening locks. When it comes to combat, rogues prioritize cunning over brute strength. A rogue would rather make one precise strike, placing it exactly where the attack will hurt the target most, than wear an opponent down with a barrage of attacks. Rogues have an almost supernatural knack for avoiding danger, and a few learn magical tricks to supplement their other abilities.",

  classFeatures: [
    {
      name: "Hitpoints",
      desc:
        "At 1st Level: 8 + your Constitution modifier. Hit Points at Higher Levels: 1d 10 (or 5) + your Constitution modifier per rogue level after 1st",
    },
    {
      name: "Hit Dice",
      desc: "1d8 per rogue level.",
    },
  ],
  pros: [
    {
      name: "Armor",
      desc: "Light Armor",
    },
    {
      name: "Weapons",
      desc: "Simple weapons, hand crossbows, longswords, rapiers, shortswords",
    },
    {
      name: "Tools",
      desc: "Thieves' tools",
    },
    {
      name: "Saving Throws",
      desc: "Dexterity, Intelligence",
    },
  ],
  //  --- abilities will not need any choice options ---
  abilities: [
    {
      name: "Expertise",
      level: 1,
      desc:
        "Choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 6th level, you can choose two more of your proficiencies (in skills or with thieves’ tools) to gain this benefit.",
    },
    {
      name: "Sneak Attack",
      level: 1,
      desc:
        "You know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with  an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll. The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.",
    },
    {
      name: "Thieves' Cant",
      level: 1,
      desc:
        "During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly. In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.",
    },
    {
      name: "Cunning Action",
      level: 2,
      desc:
        "Your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage,  or Hide action.",
    },
    {
      name: "Evasion",
      level: 7,
      desc:
        "You can nimbly dodge out o f the way of certain area effects, such as a red dragon’s fiery breath or an ice storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
    },
    {
      name: "Reliable Talent",
      level: 11,
      desc:
        "You have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.",
    },
    {
      name: "Blindsense",
      level: 14,
      desc:
        "If you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.",
    },
    {
      name: "Slippery Mind",
      level: 15,
      desc:
        "You have acquired greater mental strength. You gain proficiency in Wisdom saving throws.",
    },
    {
      name: "Elusive",
      level: 18,
      desc:
        "You are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren’t incapacitated.",
    },
    {
      name: "Stroke of Luck",
      level: 20,
      desc:
        "You have an uncanny knack for succeeding when you need to. If your attack misses a target within  range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20. Once you use this feature, you can’t use it again until you finish a short or long rest.",
    },
  ],
  subClass: [
    {
      name: "Thief",
      desc:
        " Burglars, bandits, cutpurses, and other criminals typically follow this archetype, but so do rogues who prefer to think of themselves as professional treasure seekers, explorers, delvers, and investigators. In addition to improving your agility and stealth, you learn skills useful for delving into ancient ruins, reading unfamiliar languages, and using magic items you normally couldn’t employ",
      abilities: [
        {
          name: "Fast Hands",
          level: 3,
          desc:
            "You can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves’ tools to disarm a trap or open a lock, or take the Use an Object action.",
        },
        {
          name: "Second-Story Work",
          level: 3,
          desc:
            "You gain the ability to climb faster than normal; climbing no longer costs you extra movement. In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier.",
        },
        {
          name: "Supreme Sneak",
          level: 9,
          desc:
            "You have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn.",
        },
        {
          name: "Use Magic Device",
          level: 13,
          desc:
            "You have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you. You ignore all class, race, and level requirements on the use of magic items.",
        },
        {
          name: "Thief's Reflexes",
          level: 17,
          desc:
            "You have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can't use this feature when you are surprised.",
        },
      ],
    },
    // ----- Start of subclass 2 -----
    {
      name: "Assassin",
      desc: "",
      abilities: [
        {
          name: "Bonus Proficiencies",
          level: 3,
          desc:
            "You gain proficiency with the disguise kit and the poisoner’s kit.",
        },
        {
          name: "Assassinate",
          level: 3,
          desc:
            "You are at your deadliest when you get the drop on your enemies. You have advantage on attack rolls against any creature that hasn’t taken a turn in the combat yet. In addition, any hit you score against a creature that is surprised is a critical hit.",
        },
        {
          name: "Infiltration Expertise",
          level: 9,
          desc:
            "You can unfailingly create false identities for yourself. You must spend seven days and 25gp to establish the history, profession, and affiliations for an identity. You can’t establish an identity that belongs to someone else. For example, you might acquire appropriate clothing, letters of introduction, and officiallooking certification to establish yourself as a member of a trading house from a remote city so you can insinuate yourself into the company of other wealthy merchants. Thereafter, if you adopt the new identity as a disguise, other creatures believe you to be that person until given an obvious reason not to.",
        },
        {
          name: "Imposter",
          level: 13,
          desc:
            "You gain the ability to unerringly mimic another person’s speech, writing, and behavior. You must spend at least three hours studying these three components of the person’s behavior, listening to speech, examining handwriting, and observing mannerisms. Your ruse is indiscernible to the casual observer. If a wary creature suspects something is amiss, you have advantage on any Charisma (Deception) check you make to avoid detection.",
        },
        {
          name: "Death Strike",
          level: 17,
          desc:
            "You become a master of instant death. When you attack and hit a creature that is surprised, it must make a Constitution saving throw (DC 8 + your Dexterity modifier + your proficiency bonus). On a failed save, double the damage of your attack against the creature.",
        },
      ],
    },
    {
      // ----- Start of subclass 3 -----
      // *----- This class has spells ----*
      name: "Arcane Trickster",
      desc:
        "Some rogues enhance their fine-honed skills of stealth and agility with magic, learning tricks of enchantment and illusion. These rogues include pickpockets and burglars, but also pranksters, mischief-makers, and a significant number of adventurers.",
      abilities: [
        {
          name: "Mage Hand Legerdemain",
          level: 3,
          desc:
            "When you cast mage hand, you can make the spectral hand invisible, and you can perform the following additional tasks with it: -You can stow one object the hand is holding in a container worn or carried by another creature. -You can retrieve an object in a container worn or carried by another creature. -You can use thieves’ tools to pick locks and disarm traps at range. *You can perform one of these tasks without being noticed by a creature if you succeed on a Dexterity (Sleight of Hand) check contested by the creature’s Wisdom (Perception) check. In addition, you can use the bonus action granted by your Cunning Action to control the hand.",
        },
        {
          name: "Magical Ambush",
          level: 9,
          desc:
            "If you are hidden from a creature when you cast a spell on it, the creature has disadvantage on any saving throw it makes against the spell this turn.",
        },
        {
          name: "Versatile Trickster",
          level: 13,
          desc:
            "You gain the ability to distract targets with your mage hand. As a bonus action on your turn, you can designate a creature within 5 feet of the spectral hand created by the spell. Doing so gives you advantage on attack rolls against that creature until the end of the turn.",
        },
        {
          name: "Spell Thief",
          level: 17,
          desc:
            "you gain the ability to magically steal the knowledge of how to cast a spell from another spellcaster. Immediately after a creature casts a spell that targets you or includes you in its area of effect, you can use your reaction to force the creature to make a saving throw with its spellcasting ability modifier. The DC equals your spell save DC. On a failed save, you negate the spell’s effect against you, and you steal the knowledge of the spell if it is at least 1st level and of a level you can cast (it doesn’t need to be a wizard spell). For the next 8 hours, you know the spell and can cast it using your spell slots. The creature can’t cast that spell until the 8 hours have passed. Once you use this feature, you can’t use it again until you finish a long rest.",
        },
      ],
    },
  ],
};

export default rogue;
