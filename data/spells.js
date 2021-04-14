const spells = [
    {
        name: "Resistance",
        level: 7,
        type: "utility",
        tag: ("cleric", "druid"),
        description: {
          desc: "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after making the saving throw. The spell then ends.",
          higherLevel: null,
          school: "Abjuration",
          range: "touch",
          areaOfEffect: {
            type: null,
            size: null
          },
          dc: {
            type: null,
            onSuccess: null
          },
          castingTime: "1 action",
          duration: "Up to 1 minute",
          concentration: true,
          ritual: false
    
        },
        damage: {
          type: null,
          attackType: null
        }
      },
    {
    name: "Resurrection",
    level: 7,
    type: "healing",
    tag: ("cleric", "bard"),
    description: {
      desc: [
		"You touch a dead creature that has been dead for no more than a century, that didn't die of old age, and that isn't undead. If its soul is free and willing, the target returns to life with all its hit points.",
		"This spell neutralizes any poisons and cures normal diseases afflicting the creature when it died. It doesn't, however, remove magical diseases, curses, and the like; if such effects aren't removed prior to casting the spell, they afflict the target on its return to life.",
		"This spell closes all mortal wounds and restores any missing body parts.",
		"Coming back from the dead is an ordeal. The target takes a -4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears.",
		"Casting this spell to restore life to a creature that has been dead for one year or longer taxes you greatly. Until you finish a long rest, you can't cast spells again, and you have disadvantage on all attack rolls, ability checks, and saving throws."
	],
      higherLevel: null,
      school: "Necromancy",
      range: "touch",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 hour",
      duration: "instant",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Reverse Gravity",
    level: 7,
    type: "utility",
    tag: ("wizard", "sorcerer", "druid"),
    description: {
      desc: "This spell reverses gravity in a 50-foot-radius, 100-foot high cylinder centered on a point within range. All creatures and objects that aren't somehow anchored to the ground in the area fall upward and reach the top of the area when you cast this spell. A creature can make a dexterity saving throw to grab onto a fixed object it can reach, thus avoiding the fall. If some solid object (such as a ceiling) is encountered in this fall, falling objects and creatures strike it just as they would during a normal downward fall. If an object or creature reaches the top of the area without striking anything, it remains there, oscillating slightly, for the duration. At the end of the duration, affected objects and creatures fall back down.",
      higherLevel: null,
      school: "Transmutation",
      range: "100 feet",
      areaOfEffect: {
        type: "cylinder",
        size: 50
      },
      dc: {
        type: "dex",
        onSuccess: "A creature can make a dexterity saving throw to grab onto a fixed object it can reach, thus avoiding the fall."
      },
      castingTime: "1 action",
      duration: "Up to 1 minute",
      concentration: true,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Revivify",
    level: 3,
    type: "healing",
    tag: ("cleric", "paladin"),
    description: {
      desc: "You touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell can't return to life a creature that has died of old age, nor can it restore any missing body parts.",
      higherLevel: null,
      school: "Conjuration",
      range: "touch",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "instant",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Rope Trick",
    level: 2,
    type: "utility",
    tag: "wizard",
    description: {
      desc: [
		"You touch a length of rope that is up to 60 feet long. One end of the rope then rises into the air until the whole rope hangs perpendicular to the ground. At the upper end of the rope, an invisible entrance opens to an extradimensional space that lasts until the spell ends.",
		"The extradimensional space can be reached by climbing to the top of the rope. The space can hold as many as eight Medium or smaller creatures. The rope can be pulled into the space, making the rope disappear from view outside the space.",
		"Attacks and spells can't cross through the entrance into or out of the extradimensional space, but those inside can see out of it as if through a 3-foot-by-5-foot window centered on the rope.",
		"Anything inside the extradimensional space drops out when the spell ends."
	],
      higherLevel: null,
      school: "Transmutation",
      range: "touch",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "1 hour",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Sacred Flame",
    level: 0,
    type: "damage",
    tag: "cleric",
    description: {
      desc: "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.",
      higherLevel: "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
      school: "Evocation",
      range: "60 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: "dex",
        onSuccess: "none"
      },
      castingTime: "1 action",
      duration: "instant",
      concentration: false,
      ritual: false

    },
    damage: {
      type: "radiant",
      attackType: "ranged"
    }
  },
    {
    name: "Sanctuary",
    level: 1,
    type: "damage",
    tag: "cleric",
    description: {
      desc: "You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from area effects, such as the explosion of a fireball. If the warded creature makes an attack or casts a spell that affects an enemy creature, this spell ends.",
      higherLevel: null,
      school: "Abjuration",
      range: "30 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 bonus action",
      duration: "1 minute",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Scorching Ray",
    level: 2,
    type: "damage",
    tag: ("wizard", "sorcerer"),
    description: {
      desc: "You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage.",
      higherLevel: "When you cast this spell using a spell slot of 3rd level or higher, you create one additional ray for each slot level above 2nd.",
      school: "Evocation",
      range: "120 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "instant",
      concentration: false,
      ritual: false

    },
    damage: {
      type: "fire",
      attackType: "ranged"
    }
  },
    {
    name: "Scrying",
    level: 5,
    type: "utility",
    tag: ("wizard", "bard", "druid", "cleric", "warlock"),
    description: {
      desc: [
		"You can see and hear a particular creature you choose that is on the same plane of existence as you. The target must make a wisdom saving throw, which is modified by how well you know the target and the sort of physical connection you have to it. If a target knows you're casting this spell, it can fail the saving throw voluntarily if it wants to be observed.",
		"Knowledge & Save Modifier",
		"Secondhand (you have heard of the target) +5",
		"Firsthand (you have met the target) +0",
		"Familiar (you know the target well) -5",
		"Connection & Save Modifier",
		"Likeness or picture -2",
		"Possession or garment -4",
		"Body part, lock of hair, bit of nail, or the like -10",
		"On a successful save, the target isn't affected, and you can't use this spell against it again for 24 hours.",
		"On a failed save, the spell creates an invisible sensor within 10 feet of the target. You can see and hear through the sensor as if you were there. The sensor moves with the target, remaining within 10 feet of it for the duration. A creature that can see invisible objects sees the sensor as a luminous orb about the size of your fist.",
		"Instead of targeting a creature, you can choose a location you have seen before as the target of this spell. When you do, the sensor appears at that location and doesn't move."
	],
      higherLevel: null,
      school: "Divination",
      range: "self",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "10 minutes",
      duration: "Up to 10 minutes",
      concentration: true,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Secret Chest",
    level: 4,
    type: "utility",
    tag: "wizard",
    description: {
      desc: [
		"You hide a chest, and all its contents, on the Ethereal Plane. You must touch the chest and the miniature replica that serves as a material component for the spell. The chest can contain up to 12 cubic feet of nonliving material (3 feet by 2 feet by 2 feet).",
		"While the chest remains on the Ethereal Plane, you can use an action and touch the replica to recall the chest. It appears in an unoccupied space on the ground within 5 feet of you. You can send the chest back to the Ethereal Plane by using an action and touching both the chest and the replica.",
		"After 60 days, there is a cumulative 5 percent chance per day that the spell's effect ends. This effect ends if you cast this spell again, if the smaller replica chest is destroyed, or if you choose to end the spell as an action. If the spell ends and the larger chest is on the Ethereal Plane, it is irretrievably lost."
	],
      higherLevel: null,
      school: "Conjuration",
      range: "touch",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "instant",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "See Invisibility",
    level: 2,
    type: "damage",
    tag: ("wizard", "sorcerer", "bard"),
    description: {
      desc: "For the duration of the spell, you see invisible creatures and objects as if they were visible, and you can see through Ethereal. The ethereal objects and creatures appear ghostly translucent.",
      higherLevel: null,
      school: "Divination",
      range: "self",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "1 hour",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Seeming",
    level: 5,
    type: "utility",
    tag: ("wizard", "sorcerer", "bard"),
    description: {
      desc: [
		"This spell allows you to change the appearance of any number of creatures that you can see within range. You give each target you choose a new, illusory appearance. An unwilling target can make a charisma saving throw, and if it succeeds, it is unaffected by this spell.",
		"The spell disguises physical appearance as well as clothing, armor, weapons, and equipment. You can make each creature seem 1 foot shorter or taller and appear thin, fat, or in between. You can't change a target's body type, so you must choose a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The spell lasts for the duration, unless you use your action to dismiss it sooner.",
		"The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to a creature's outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel the creature's head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.",
		"A creature can use its action to inspect a target and make an Intelligence (Investigation) check against your spell save DC. If it succeeds, it becomes aware that the target is disguised."
	],
      higherLevel: null,
      school: "Illusion",
      range: "30 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "8 hours",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Sending",
    level: 3,
    type: "utility",
    tag: ("bard", "cleric", "wizard"),
    description: {
      desc: "You send a short message of twenty-five words or less to a creature with which you are familiar. The creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately. The spell enables creatures with Intelligence scores of at least 1 to understand the meaning of your message. You can send the message across any distance and even to other planes of existence, but if the target is on a different plane than you, there is a 5 percent chance that the message doesn't arrive.",
      higherLevel: null,
      school: "Evocation",
      range: "Unlimited",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "1 round",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Sequester",
    level: 7,
    type: "utility",
    tag: "wizard",
    description: {
      desc: [
		"By means of this spell, a willing creature or an object can be hidden away, safe from detection for the duration. When you cast the spell and touch the target, it becomes invisible and can't be targeted by divination spells or perceived through scrying sensors created by divination spells.",
		"If the target is a creature, it falls into a state of suspended animation. Time ceases to flow for it, and it doesn't grow older.",
		"You can set a condition for the spell to end early. The condition can be anything you choose, but it must occur or be visible within 1 mile of the target. Examples include \"after 1,000 years\" or \"when the tarrasque awakens.\" This spell also ends if the target takes any damage."
	],
      higherLevel: null,
      school: "Transmutation",
      range: "touch",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "Until dispelled",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
   
    {
    name: "Shapechange",
    level: 9,
    type: "buff",
    tag: ("wizard", "druid"),
    description: {
      desc: [
		"You assume the form of a different creature for the duration. The new form can be of any creature with a challenge rating equal to your level or lower. The creature can't be a construct or an undead, and you must have seen the sort of creature at least once. You transform into an average example of that creature, one without any class levels or the Spellcasting trait.",
		"Your game statistics are replaced by the statistics of the chosen creature, though you retain your alignment and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus listed in its statistics is higher than yours, use the creature's bonus in place of yours. You can't use any legendary actions or lair actions of the new form.",
		"You assume the hit points and Hit Dice of the new form. When you revert to your normal form, you return to the number of hit points you had before you transformed. If you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
		"You retain the benefit of any features from your class, race, or other source and can use them, provided that your new form is physically capable of doing so. You can't use any special senses you have (for example, darkvision) unless your new form also has that sense. You can only speak if the creature can normally speak.",
		"When you transform, you choose whether your equipment falls to the ground, merges into the new form, or is worn by it. Worn equipment functions as normal. The DM determines whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change shape or size to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge into your new form. Equipment that merges has no effect in that state.",
		"During this spell's duration, you can use your action to assume a different form following the same restrictions and rules for the original form, with one exception: if your new form has more hit points than your current one, your hit points remain at their current value."
	],
      higherLevel: null,
      school: "Transmutation",
      range: "self",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "Up to 1 hour",
      concentration: true,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Shatter",
    level: 2,
    type: "damage",
    tag: ("wizard", "sorcerer", "bard", "warlock"),
    description: {
      desc: "A strong resonant sound painfully intense sounds of a desired point in the range of the spell. Each creature has a sphere with a 10-foot-radius sphere centered on that point must make a constitution saving throw or it suffers 3d8 thunder damage. If successful, the damage is halved. A creature made of inorganic materials such as stone, crystal or metal, makes its saving throw with a disadvantage. A non-magical item that is not worn or carried also suffers damage if it is in the area of the spell.",
      higherLevel: "When you cast this spell using a 3 or higher level spell slot, the damage of the spell increases by 1d8 for each level of higher spell slot 2.",
      school: "Evocation",
      range: "60 feet",
      areaOfEffect: {
        type: "sphere",
        size: 10
      },
      dc: {
        type: "con",
        onSuccess: "half"
      },
      castingTime: "1 action",
      duration: "instant",
      concentration: false,
      ritual: false

    },
    damage: {
      type: "thunder",
      attackType: null
    }
  },
    {
    name: "Shield",
    level: 1,
    type: "buff",
    tag: ("wizard", "sorcerer"),
    description: {
      desc: "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile.",
      higherLevel: null,
      school: "Abjuration",
      range: "self",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 reaction",
      duration: "1 round",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Shield of Faith",
    level: 2,
    type: "buff",
    tag: ("cleric", "paladin"),
    description: {
      desc: "A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.",
      higherLevel: "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.",
      school: "Abjuration",
      range: "60 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 bonus action",
      duration: "Up to 10 minutes",
      concentration: true,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Shillelagh",
    level: 0,
    type: "buff",
    tag: "druid",
    description: {
      desc: "The wood of a club or a quarterstaff you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon.",
      higherLevel: null,
      school: "Transmutation",
      range: "touch",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 bonus action",
      duration: "1 minute",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Shocking Grasp",
    level: 0,
    type: "damage",
    tag: ("wizard", "sorcerer"),
    description: {
      desc: "Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn.",
      higherLevel: "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
      school: "Evocation",
      range: "touch",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "instant",
      concentration: false,
      ritual: false

    },
    damage: {
      type: "lightning",
      attackType: "melee"
    }
  },
    {
    name: "Silence",
    level: 2,
    type: "damage",
    tag: ("bard", "cleric", "ranger"),
    description: {
      desc: "For the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there.",
      higherLevel: "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.",
      school: "Illusion",
      range: "120 feet",
      areaOfEffect: {
        type: "sphere",
        size: 20
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "Up to 10 minutes",
      concentration: true,
      ritual: true

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Silent Image",
    level: 1,
    type: "utility",
    tag: ("wizard", "sorcerer", "bard"),
    description: {
      desc: [
		"You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn't accompanied by sound, smell, or other sensory effects.",
		"You can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.",
		"Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image."
	],
      higherLevel: null,
      school: "Illusion",
      range: "60 feet",
      areaOfEffect: {
        type: "cube",
        size: 15
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "Up to 10 minutes",
      concentration: true,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Simulacrum",
    level: 7,
    type: "utility",
    tag: "wizard",
    description: {
      desc: [
		"You shape an illusory duplicate of one beast or humanoid that is within range for the entire casting time of the spell. The duplicate is a creature, partially real and formed from ice or snow, and it can take actions and otherwise be affected as a normal creature. It appears to be the same as the original, but it has half the creature's hit point maximum and is formed without any equipment. Otherwise, the illusion uses all the statistics of the creature it duplicates.",
		"The simulacrum is friendly to you and creatures you designate. It obeys your spoken commands, moving and acting in accordance with your wishes and acting on your turn in combat. The simulacrum lacks the ability to learn or become more powerful, so it never increases its level or other abilities, nor can it regain expended spell slots.",
		"If the simulacrum is damaged, you can repair it in an alchemical laboratory, using rare herbs and minerals worth 100 gp per hit point it regains. The simulacrum lasts until it drops to 0 hit points, at which point it reverts to snow and melts instantly.",
		"If you cast this spell again, any currently active duplicates you created with this spell are instantly destroyed."
	],
      higherLevel: null,
      school: "Illusion",
      range: "touch",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "12 hours",
      duration: "Until dispelled",
      concentration: false,
      ritual: false

    },
    damage: {
      type: "acid",
      attackType: "ranged"
    }
  },
    {
    name: "Sleep",
    level: 1,
    type: "utility",
    tag: ("wizard", "sorcerer", "bard"),
    description: {
      desc: [
		"This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures).",
		"Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.",
		"Undead and creatures immune to being charmed aren't affected by this spell."
	],
      higherLevel: "When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st.",
      school: "Enchantment",
      range: "90 feet",
      areaOfEffect: {
        type: "sphere",
        size: 20
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "1 minute",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Sleet Storm",
    level: 3,
    type: "utility",
    tag: ("wizard", "sorcerer", "durid"),
    description: {
      desc: [
		"Until the spell ends, freezing rain and sleet fall in a 20-foot-tall cylinder with a 40-foot radius centered on a point you choose within range. The area is heavily obscured, and exposed flames in the area are doused.",
		"The ground in the area is covered with slick ice, making it difficult terrain. When a creature enters the spell's area for the first time on a turn or starts its turn there, it must make a dexterity saving throw. On a failed save, it falls prone.",
		"If a creature is concentrating in the spell's area, the creature must make a successful constitution saving throw against your spell save DC or lose concentration."
	],
      higherLevel: null,
      school: "Conjuration",
      range: "150 feet",
      areaOfEffect: {
        type: "cylinder",
        size: 40
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "Up to 1 minute",
      concentration: true,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Slow",
    level: 3,
    type: "utility",
    tag: ("wizard", "sorcerer"),
    description: {
      desc: [
		"You alter time around up to six creatures of your choice in a 40-foot cube within range. Each target must succeed on a wisdom saving throw or be affected by this spell for the duration.",
		"An affected target's speed is halved, it takes a -2 penalty to AC and dexterity saving throws, and it can't use reactions. On its turn, it can use either an action or a bonus action, not both. Regardless of the creature's abilities or magic items, it can't make more than one melee or ranged attack during its turn.",
		"If the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or higher, the spell doesn't take effect until the creature's next turn, and the creature must use its action on that turn to complete the spell. If it can't, the spell is wasted.",
		"A creature affected by this spell makes another wisdom saving throw at the end of its turn. On a successful save, the effect ends for it."
	],
      higherLevel: null,
      school: "Transmutation",
      range: "120 feet",
      areaOfEffect: {
        type: "cube",
        size: 40
      },
      dc: {
        type: wis,
        onSuccess: "none"
      },
      castingTime: "1 action",
      duration: "Up to 1 minute",
      concentration: true,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Spare the Dying",
    level: 0,
    type: "healing",
    tag: "cleric",
    description: {
      desc: "You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs.",
      higherLevel: null,
      school: "Necromancy",
      range: "touch",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "instant",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Speak with Animals",
    level: 1,
    type: "utility",
    tag: ("ranger", "bard", "druid"),
    description: {
      desc: "You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at a minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM's discretion.",
      higherLevel: null,
      school: "Divination",
      range: "self",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "10 minutes",
      concentration: false,
      ritual: true

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Speak with Dead",
    level: 3,
    type: "utility",
    tag: ("bard", "cleric"),
    description: {
      desc: [
		"You grant the semblance of life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a mouth and can't be undead. The spell fails if the corpse was the target of this spell within the last 10 days.",
		"Until the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are hostile to it or it recognizes you as an enemy. This spell doesn't return the creature's soul to its body, only its animating spirit. Thus, the corpse can't learn new information, doesn't comprehend anything that has happened since it died, and can't speculate about future events."
	],
      higherLevel: null,
      school: "Necromancy",
      range: "10 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "10 minutes",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Speak with Plants",
    level: 3,
    type: "utility",
    tag: ("bard", "druid", "ranger"),
    description: {
      desc: [
		"You imbue plants within 30 feet of you with limited sentience and animation, giving them the ability to communicate with you and follow your simple commands. You can question plants about events in the spell's area within the past day, gaining information about creatures that have passed, weather, and other circumstances.",
		"You can also turn difficult terrain caused by plant growth (such as thickets and undergrowth) into ordinary terrain that lasts for the duration. Or you can turn ordinary terrain where plants are present into difficult terrain that lasts for the duration, causing vines and branches to hinder pursuers, for example.",
		"Plants might be able to perform other tasks on your behalf, at the DM's discretion. The spell doesn't enable plants to uproot themselves and move about, but they can freely move branches, tendrils, and stalks.",
		"If a plant creature is in the area, you can communicate with it as if you shared a common language, but you gain no magical ability to influence it.",
		"This spell can cause the plants created by the entangle spell to release a restrained creature."
	],
      higherLevel: null,
      school: "Transmutation",
      range: "self",
      areaOfEffect: {
        type: "sphere",
        size: 30
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "10 minutes",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Spider Climb",
    level: 2,
    type: "utility",
    tag: ("wizard", "sorcerer", "warlock"),
    description: {
      desc: "Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free. The target also gains a climbing speed equal to its walking speed.",
      higherLevel: null,
      school: "Transmutation",
      range: "touch",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "Up to 1 hour",
      concentration: true,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Spike Growth",
    level: 2,
    type: "damage",
    tag: ("druid", "ranger"),
    description: {
      desc: [
		"The ground in a 20-foot radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels.",
		"The development of land is camouflaged to look natural. Any creature that does not see the area when the spell is spell casts must make a Wisdom (Perception) opposite the DD backup your fate or it does not recognize the dangerous nature of the ground before entering."
	],
      higherLevel: null,
      school: "Transmutation",
      range: "150 feet",
      areaOfEffect: {
        type: "cylinder",
        size: 20
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "Up to 10 minutes",
      concentration: true,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Spirit Guardians",
    level: 3,
    type: "utility",
    tag: "cleric",
    description: {
      desc: [
		"You call forth spirits to protect you. They flit around you to a distance of 15 feet for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish.",
		"When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. An affected creature's speed is halved in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a wisdom saving throw. On a failed save, the creature takes 3d8 radiant damage (if you are good or neutral) or 3d8 necrotic damage (if you are evil). On a successful save, the creature takes half as much damage."
	],
      higherLevel: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.",
      school: "Conjuration",
      range: "self",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "Up to 10 minutes",
      concentration: true,
      ritual: false

    },
    damage: {
      type: "acid",
      attackType: "ranged"
    }
  },
    {
    name: "Spiritual Weapon",
    level: 2,
    type: "damage",
    tag: "cleric",
    description: {
      desc: [
		"You create a floating, spectral weapon within range that lasts for the duration or until you cast this spell again. When you cast the spell, you can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes force damage equal to 1d8 + your spellcasting ability modifier.",
		"As a bonus action on your turn, you can move the weapon up to 20 feet and repeat the attack against a creature within 5 feet of it.",
		"The weapon can take whatever form you choose. Clerics of deities who are associated with a particular weapon (as St. Cuthbert is known for his mace and Thor for his hammer) make this spell's effect resemble that weapon."
	],
      higherLevel: "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for every two slot levels above the 2nd.",
      school: "Evocation",
      range: "60 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 bonus action",
      duration: "1 minute",
      concentration: false,
      ritual: false

    },
    damage: {
      type: "force",
      attackType: "melee"
    }
  },
    {
    name: "Stinking Cloud",
    level: 3,
    type: "utility",
    tag: ("wizard", "sorcerer", "bard"),
    description: {
      desc: [
		"You create a 20-foot-radius sphere of yellow, nauseating gas centered on a point within range. The cloud spreads around corners, and its area is heavily obscured. The cloud lingers in the air for the duration.",
		"Each creature that is completely within the cloud at the start of its turn must make a constitution saving throw against poison. On a failed save, the creature spends its action that turn retching and reeling. Creatures that don't need to breathe or are immune to poison automatically succeed on this saving throw.",
		"A moderate wind (at least 10 miles per hour) disperses the cloud after 4 rounds. A strong wind (at least 20 miles per hour) disperses it after 1 round."
	],
      higherLevel: null,
      school: "Conjuration",
      range: "90 feet",
      areaOfEffect: {
        type: "sphere",
        size: 20
      },
      dc: {
        type: "con",
        onSuccess: "none"
      },
      castingTime: "1 action",
      duration: "Up to 1 minute",
      concentration: true,
      ritual: false

    },
    damage: {
      type: "poison",
      attackType: null
    }
  },
    {
    name: "Stone Shape",
    level: 4,
    type: "utility",
    tag: ("wizard", "cleric", "druid"),
    description: {
      desc: "You touch a stone object of Medium size or smaller or a section of stone no more than 5 feet in any dimension and form it into any shape that suits your purpose. So, for example, you could shape a large rock into a weapon, idol, or coffer, or make a small passage through a wall, as long as the wall is less than 5 feet thick. You could also shape a stone door or its frame to seal the door shut. The object you create can have up to two hinges and a latch, but finer mechanical detail isn't possible.",
      higherLevel: null,
      school: "Transmutation",
      range: "touch",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "instant",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Stoneskin",
    level: 4,
    type: "buff",
    tag: ("wizard", "sorcerer", "ranger", "druid"),
    description: {
      desc: "This spell turns the flesh of a willing creature you touch as hard as stone. Until the spell ends, the target has resistance to nonmagical bludgeoning, piercing, and slashing damage.",
      higherLevel: null,
      school: "Abjuration",
      range: "touch",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "Up to 1 hour",
      concentration: true,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Storm of Vengeance",
    level: 9,
    type: "damage",
    tag: "druid",
    description: {
      desc: [
		"A churning storm cloud forms, centered on a point you can see and spreading to a radius of 360 feet. Lightning flashes in the area, thunder booms, and strong winds roar. Each creature under the cloud (no more than 5,000 feet beneath the cloud) when it appears must make a constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 5 minutes.",
		"Each round you maintain concentration on this spell, the storm produces additional effects on your turn.",
		"Round 2.",
		"Acidic rain falls from the cloud. Each creature and object under the cloud takes 1d6 acid damage.",
		"Round 3.",
		"You call six bolts of lightning from the cloud to strike six creatures or objects of your choice beneath the cloud. A given creature or object can't be struck by more than one bolt. A struck creature must make a dexterity saving throw. The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one.",
		"Round 4.",
		"Hailstones rain down from the cloud. Each creature under the cloud takes 2d6 bludgeoning damage.",
		"Round 5-10.",
		"Gusts and freezing rain assail the area under the cloud. The area becomes difficult terrain and is heavily obscured. Each creature there takes 1d6 cold damage. Ranged weapon attacks in the area are impossible. The wind and rain count as a severe distraction for the purposes of maintaining concentration on spells. Finally, gusts of strong wind (ranging from 20 to 50 miles per hour) automatically disperse fog, mists, and similar phenomena in the area, whether mundane or magical."
	],
      higherLevel: null,
      school: "Conjuration",
      range: "sight",
      areaOfEffect: {
        type: "sphere",
        size: 360
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "Up to 1 minute",
      concentration: true,
      ritual: false

    },
    damage: {
      type: "thunder",
      attackType: null
    }
  },
    {
    name: "Suggestion",
    level: 2,
    type: "utility",
    tag: ("wizard", "sorcerer", "bard", "warlock"),
    description: {
      desc: [
		"You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell.",
		"The target must make a wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.",
		"You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a knight give her warhorse to the first beggar she meets. If the condition isn't met before the spell expires, the activity isn't performed.",
		"If you or any of your companions damage the target, the spell ends."
	],
      higherLevel: null,
      school: "Enchantment",
      range: "30 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: "wis",
        onSuccess: "none"
      },
      castingTime: "1 action",
      duration: "Up to 8 hours",
      concentration: true,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Sunbeam",
    level: 2,
    type: "damage",
    tag: ("wizard", "sorcerer", "druid"),
    description: {
      desc: [
		"A beam of brilliant light flashes out from your hand in a 5-foot-wide, 60-foot-long line. Each creature in the line must make a constitution saving throw. On a failed save, a creature takes 6d8 radiant damage and is blinded until your next turn. On a successful save, it takes half as much damage and isn't blinded by this spell. Undead and oozes have disadvantage on this saving throw.",
		"You can create a new line of radiance as your action on any turn until the spell ends.",
		"For the duration, a mote of brilliant radiance shines in your hand. It sheds bright light in a 30-foot radius and dim light for an additional 30 feet. This light is sunlight."
	],
      higherLevel: null,
      school: "Evocation",
      range: "Self",
      areaOfEffect: {
        type: "line",
        size: 60
      },
      dc: {
        type: "con",
        onSuccess: "half"
      },
      castingTime: "1 action",
      duration: "Up to 1 minute",
      concentration: true,
      ritual: false

    },
    damage: {
      type: "radiant",
      attackType: null
    }
  },
    {
    name: "Sunburst",
    level: 8,
    type: "damage",
    tag: ("wizard", "sorcerer", "druid"),
    description: {
      desc: [
		"Brilliant sunlight flashes in a 60-foot radius centered on a point you choose within range. Each creature in that light must make a constitution saving throw. On a failed save, a creature takes 12d6 radiant damage and is blinded for 1 minute. On a successful save, it takes half as much damage and isn't blinded by this spell. Undead and oozes have disadvantage on this saving throw.",
		"A creature blinded by this spell makes another constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded.",
		"This spell dispels any darkness in its area that was created by a spell."
	],
      higherLevel: null,
      school: "Evocation",
      range: "150 feet",
      areaOfEffect: {
        type: "cylinder",
        size: 60
      },
      dc: {
        type: "con",
        onSuccess: "half"
      },
      castingTime: "1 action",
      duration: "instant",
      concentration: false,
      ritual: false

    },
    damage: {
      type: "radiant",
      attackType: null
    }
  },
    {
    name: "Symbol",
    level: 7,
    type: "utility",
    tag: ("bard", "cleric", "wizard"),
    description: {
      desc: [
		"When you cast this spell, you inscribe a harmful glyph either on a surface (such as a section of floor, a wall, or a table) or within an object that can be closed to conceal the glyph (such as a book, a scroll, or a treasure chest). If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place; if the object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.",
		"The glyph is nearly invisible, requiring an Intelligence (Investigation) check against your spell save DC to find it.",
		"You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or stepping on the glyph, removing another object covering it, approaching within a certain distance of it, or manipulating the object that holds it. For glyphs inscribed within an object, the most common triggers are opening the object, approaching within a certain distance of it, or seeing or reading the glyph.",
		"You can further refine the trigger so the spell is activated only under certain circumstances or according to a creature's physical characteristics (such as height or weight), or physical kind (for example, the ward could be set to affect hags or shapechangers). You can also specify creatures that don't trigger the glyph, such as those who say a certain password.",
		"When you inscribe the glyph, choose one of the options below for its effect. Once triggered, the glyph glows, filling a 60-foot-radius sphere with dim light for 10 minutes, after which time the spell ends. Each creature in the sphere when the glyph activates is targeted by its effect, as is a creature that enters the sphere for the first time on a turn or ends its turn there.",
		"Death.",
		"Each target must make a constitution saving throw, taking 10d 10 necrotic damage on a failed save, or half as much damage on a successful save.",
		"Discord.",
		"Each target must make a constitution saving throw. On a failed save, a target bickers and argues with other creatures for 1 minute. During this time, it is incapable of meaningful communication and has disadvantage on attack rolls and ability checks.",
		"Fear.",
		"Each target must make a wisdom saving throw and becomes frightened for 1 minute on a failed save. While frightened, the target drops whatever it is holding and must move at least 30 feet away from the glyph on each of its turns, if able.",
		"Hopelessness.",
		"Each target must make a charisma saving throw. On a failed save, the target is overwhelmed with despair for 1 minute. During this time, it can't attack or target any creature with harmful abilities, spells, or other magical effects.",
		"Insanity.",
		"Each target must make an intelligence saving throw. On a failed save, the target is driven insane for 1 minute. An insane creature can't take actions, can't understand what other creatures say, can't read, and speaks only in gibberish. The DM controls its movement, which is erratic.",
		"Pain.",
		"Each target must make a constitution saving throw and becomes incapacitated with excruciating pain for 1 minute on a failed save.",
		"Sleep.",
		"Each target must make a wisdom saving throw and falls unconscious for 10 minutes on a failed save. A creature awakens if it takes damage or if someone uses an action to shake or slap it awake.",
		"Stunning.",
		"Each target must make a wisdom saving throw and becomes stunned for 1 minute on a failed save."
	],
      higherLevel: null,
      school: "Abjuration",
      range: "touch",
      areaOfEffect: {
        type: "cube",
        size: 10
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 minute",
      duration: "Until dispelled",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Telekinesis",
    level: 5,
    type: "utility",
    tag: ("wizard", "sorcerer"),
    description: {
      desc: [
		"You gain the ability to move or manipulate creatures or objects by thought. When you cast the spell, and as your action each round for the duration, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round, or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell.",
		"Creature.",
		"You can try to move a Huge or smaller creature. Make an ability check with your spellcasting ability contested by the creature's Strength check. If you win the contest, you move the creature up to 30 feet in any direction, including upward but not beyond the range of this spell. Until the end of your next turn, the creature is restrained in your telekinetic grip. A creature lifted upward is suspended in mid-air.",
		"On subsequent rounds, you can use your action to attempt to maintain your telekinetic grip on the creature by repeating the contest.",
		"Object.",
		"You can try to move an object that weighs up to 1,000 pounds. If the object isn't being worn or carried, you automatically move it up to 30 feet in any direction, but not beyond the range of this spell.",
		"If the object is worn or carried by a creature, you must make an ability check with your spellcasting ability contested by that creature's Strength check. If you succeed, you pull the object away from that creature and can move it up to 30 feet in any direction but not beyond the range of this spell.",
		"You can exert fine control on objects with your telekinetic grip, such as manipulating a simple tool, opening a door or a container, stowing or retrieving an item from an open container, or pouring the contents from a vial."
	],
      higherLevel: null,
      school: "Transmutation",
      range: "60 feet",
      areaOfEffect: {
        type: "sphere",
        size: 30
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "Up to 10 minutes",
      concentration: true,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Telepathic Bond",
    level: 5,
    type: "utility",
    tag: "wizard",
    description: {
      desc: [
		"You forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Creatures with Intelligence scores of 2 or less aren't affected by this spell.",
		"Until the spell ends, the targets can communicate telepathically through the bond whether or not they have a common language. The communication is possible over any distance, though it can't extend to other planes of existence."
	],
      higherLevel: null,
      school: "Divination",
      range: "30 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "1 hour",
      concentration: false,
      ritual: true

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Teleport",
    level: 7,
    type: "movement",
    tag: ("wizard", "sorcerer", "bard"),
    description: {
      desc: [
		"This spell instantly transports you and up to eight willing creatures of your choice that you can see within range, or a single object that you can see within range, to a destination you select. If you target an object, it must be able to fit entirely inside a 10-foot cube, and it can't be held or carried by an unwilling creature.",
		"The destination you choose must be known to you, and it must be on the same plane of existence as you. Your familiarity with the destination determines whether you arrive there successfully. The DM rolls d100 and consults the table."],
      higherLevel: null,
      school: "Conjuration",
      range: "10 feet",
      areaOfEffect: {
        type: "cube",
        size: 10
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "instant",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Teleportation Circle",
    level: 5,
    type: "movement",
    tag: ("wizard", "sorcerer", "bard"),
    description: {
      desc: [
		"As you cast the spell, you draw a 10-foot-diameter circle on the ground inscribed with sigils that link your location to a permanent teleportation circle of your choice whose sigil sequence you know and that is on the same plane of existence as you. A shimmering portal opens within the circle you drew and remains open until the end of your next turn. Any creature that enters the portal instantly appears within 5 feet of the destination circle or in the nearest unoccupied space if that space is occupied.",
		"Many major temples, guilds, and other important places have permanent teleportation circles inscribed somewhere within their confines. Each such circle includes a unique sigil sequence--a string of magical runes arranged in a particular pattern. When you first gain the ability to cast this spell, you learn the sigil sequences for two destinations on the Material Plane, determined by the DM. You can learn additional sigil sequences during your adventures. You can commit a new sigil sequence to memory after studying it for 1 minute.",
		"You can create a permanent teleportation circle by casting this spell in the same location every day for one year. You need not use the circle to teleport when you cast the spell in this way."
	],
      higherLevel: null,
      school: "Conjuration",
      range: "10 feet",
      areaOfEffect: {
        type: sphere,
        size: 10
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 minute",
      duration: "1 round",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },


    {
    name: "Thaumaturgy",
    level: 0,
    type: "utility",
    tag: "cleric",
    description: {
      desc: [
		"You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range.",
		"- Your voice booms up to three times as loud as normal for 1 minute.",
		"- You cause flames to flicker, brighten, dim, or change color for 1 minute.",
		"- You cause harmless tremors in the ground for 1 minute.",
		"- You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.",
		"- You instantaneously cause an unlocked door or window to fly open or slam shut.",
		"- You alter the appearance of your eyes for 1 minute.",
		"If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action."
	],
      higherLevel: null,
      school: "Transmutation",
      range: "30 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "1 minute",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Thunderwave",
    level: 1,
    type: "damage",
    tag: ("wizard", "sorcerer", "bard", "druid"),
    description: {
      desc: [
		"A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed.",
		"In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet."
	],
      higherLevel: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
      school: "Evocation",
      range: "self",
      areaOfEffect: {
        type: "cube",
        size: 15
      },
      dc: {
        type: con,
        onSuccess: "half"
      },
      castingTime: "1 action",
      duration: "instant",
      concentration: false,
      ritual: false

    },
    damage: {
      type: "thunder",
      attackType: "ranged"
    }
  },
    {
    name: "Time Stop",
    level: 9,
    type: "utility",
    tag: ("wizard", "sorcerer"),
    description: {
      desc: [
		"You briefly stop the flow of time for everyone but yourself. No time passes for other creatures, while you take 1d4 + 1 turns in a row, during which you can use actions and move as normal.",
		"This spell ends if one of the actions you use during this period, or any effects that you create during this period, affects a creature other than you or an object being worn or carried by someone other than you. In addition, the spell ends if you move to a place more than 1,000 feet from the location where you cast it."
	],
      higherLevel: null,
      school: "Transmutation",
      range: "self",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "instant",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Tiny Hut",
    level: 3,
    type: "utility",
    tag: ("wizard", "bard"),
    description: {
      desc: [
		"A 10-foot-radius immobile dome of force springs into existence around and above you and remains stationary for the duration. The spell ends if you leave its area.",
		"Nine creatures of Medium size or smaller can fit inside the dome with you. The spell fails if its area includes a larger creature or more than nine creatures. Creatures and objects within the dome when you cast this spell can move through it freely. All other creatures and objects are barred from passing through it. Spells and other magical effects can't extend through the dome or be cast through it. The atmosphere inside the space is comfortable and dry, regardless of the weather outside.",
		"Until the spell ends, you can command the interior to become dimly lit or dark. The dome is opaque from the outside, of any color you choose, but it is transparent from the inside."
	],
      higherLevel: null,
      school: "Evocation",
      range: "self",
      areaOfEffect: {
        type: sphere,
        size: 10
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 minute",
      duration: "8 hours",
      concentration: false,
      ritual: true

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Tongues",
    level: 3,
    type: "utility",
    tag: ("wizard", "sorcerer", "bard", "cleric", "warlock"),
    description: {
      desc: "This spell grants the creature you touch the ability to understand any spoken language it hears. Moreover, when the target speaks, any creature that knows at least one language and can hear the target understands what it says.",
      higherLevel: null,
      school: "Divination",
      range: "touch",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "1 hour",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Transport via Plants",
    level: 6,
    type: "movement",
    tag: "druid",
    description: {
      desc: [
		"This spell creates a magical link between a Large or larger inanimate plant within range and another plant, at any distance, on the same plane of existence. You must have seen or touched the destination plant at least once before. For the duration, any creature can step into the target plant and exit from the destination plant by using 5 feet of movement."
	],
      higherLevel: null,
      school: "Evocation",
      range: "10 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "1 round",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Tree Stride",
    level: 5,
    type: "movement",
    tag: ("druid", "ranger"),
    description: {
      desc: [
		"You gain the ability to enter a tree and move from inside it to inside another tree of the same kind within 500 feet. Both trees must be living and at least the same size as you. You must use 5 feet of movement to enter a tree. You instantly know the location of all other trees of the same kind within 500 feet and, as part of the move used to enter the tree, can either pass into one of those trees or step out of the tree you're in. You appear in a spot of your choice within 5 feet of the destination tree, using another 5 feet of movement. If you have no movement left, you appear within 5 feet of the tree you entered.",
		"You can use this transportation ability once per round for the duration. You must end each turn outside a tree."
	],
      higherLevel: null,
      school: "Conjuration",
      range: "self",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "Up to 1 minute",
      concentration: true,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "True Polymorph",
    level: 9,
    type: "utility",
    tag: ("wizard", "bard", "warlock"),
    description: {
      desc: [
		"Choose one creature or nonmagical object that you can see within range. You transform the creature into a different creature, the creature into an object, or the object into a creature (the object must be neither worn nor carried by another creature). The transformation lasts for the duration, or until the target drops to 0 hit points or dies. If you concentrate on this spell for the full duration, the transformation becomes permanent.",
		"Shapechangers aren't affected by this spell. An unwilling creature can make a wisdom saving throw, and if it succeeds, it isn't affected by this spell.",
		"Creature into Creature.",
		"If you turn a creature into another kind of creature, the new form can be any kind you choose whose challenge rating is equal to or less than the target's (or its level, if the target doesn't have a challenge rating). The target's game statistics, including mental ability scores, are replaced by the statistics of the new form. It retains its alignment and personality.",
		"The target assumes the hit points of its new form, and when it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious.",
		"The creature is limited in the actions it can perform by the nature of its new form, and it can't speak, cast spells, or take any other action that requires hands or speech unless its new form is capable of such actions.",
		"The target's gear melds into the new form. The creature can't activate, use, wield, or otherwise benefit from any of its equipment.",
		"Object into Creature.",
		"You can turn an object into any kind of creature, as long as the creature's size is no larger than the object's size and the creature's challenge rating is 9 or lower. The creature is friendly to you and your companions. It acts on each of your turns. You decide what action it takes and how it moves. The DM has the creature's statistics and resolves all of its actions and movement.",
		"If the spell becomes permanent, you no longer control the creature. It might remain friendly to you, depending on how you have treated it.",
		"Creature into Object.",
		"If you turn a creature into an object, it transforms along with whatever it is wearing and carrying into that form. The creature's statistics become those of the object, and the creature has no memory of time spent in this form, after the spell ends and it returns to its normal form."
	],
      higherLevel: null,
      school: "Transmutation",
      range: "30 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "Up to 1 hour",
      concentration: true,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "True Resurrection",
    level: 9,
    type: "healing",
    tag: ("druid", "cleric"),
    description: {
      desc: "You touch a creature that has been dead for no longer than 200 years and that died for any reason except old age. If the creature's soul is free and willing, the creature is restored to life with all its hit points. This spell closes all wounds, neutralizes any poison, cures all diseases, and lifts any curses affecting the creature when it died. The spell replaces damaged or missing organs and limbs. The spell can even provide a new body if the original no longer exists, in which case you must speak the creature's name. The creature then appears in an unoccupied space you choose within 10 feet of you.",
      higherLevel: null,
      school: "Necromancy",
      range: "touch",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 hour",
      duration: "instant",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "True Seeing",
    level: 6,
    type: "buff",
    tag: ("wizard", "sorcerer", "warlock", "cleric", "bard"),
    description: {
      desc: "This spell gives the willing creature you touch the ability to see things as they actually are. For the duration, the creature has truesight, notices secret doors hidden by magic, and can see into the Ethereal Plane, all out to a range of 120 feet.",
      higherLevel: null,
      school: "Divination",
      range: "touch",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "1 hour",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "True Strike",
    level: 0,
    type: "buff",
    tag: ("wizard", "sorcerer", "bard", "warlock"),
    description: {
      desc: "You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended.",
      higherLevel: null,
      school: "Divination",
      range: null,
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "Up to 1 round",
      concentration: true,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Unseen Servant",
    level: 1,
    type: "utility",
    tag: ("wizard", "bard", "warlock"),
    description: {
      desc: "This spell creates an invisible, mindless, shapeless force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can't attack. If it drops to 0 hit points, the spell ends. Once on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring wine. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command. If you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends.",
      higherLevel: null,
      school: "Evocation",
      range: "60 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "1 hour",
      concentration: false,
      ritual: true

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Vampiric Touch",
    level: 3,
    type: "damage",
    tag: ("wizard", "warlock"),
    description: {
      desc: "The touch of your shadow-wreathed hand can siphon life force from others to heal your wounds. Make a melee spell attack against a creature within your reach. On a hit, the target takes 3d6 necrotic damage, and you regain hit points equal to half the amount of necrotic damage dealt. Until the spell ends, you can make the attack again on each of your turns as an action.",
      higherLevel: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
      school: "Necromancy",
      range: "90 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "Up to 1 minute",
      concentration: true,
      ritual: false

    },
    damage: {
      type: "necrotic",
      attackType: "melee"
    }
  },
    {
    name: "Vicious Mockery",
    level: 0,
    type: "damage",
    tag: "bard",
    description: {
      desc: "You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.",
      higherLevel: "This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).",
      school: "Evocation",
      range: "90 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "wis",
      duration: "instant",
      concentration: false,
      ritual: false

    },
    damage: {
      type: "psychic",
      attackType: "ranged"
    }
  },
    {
    name: "Wall of Fire",
    level: 4,
    type: "utility",
    tag: ("wizard", "sorcerer", "druid"),
    description: {
      desc: "You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration. When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 fire damage, or half as much damage on a successful save. One side of the wall, selected by you when you cast this spell, deals 5d8 fire damage to each creature that ends its turn within 10 feet of that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage.The other side of the wall deals no damage.",
      higherLevel: "When you cast this spell using a level spell slot 5 or more, the damage of the spell increases by 1d8 for each level of higher spell slot to 4.",
      school: "Evocation",
      range: "120 feet",
      areaOfEffect: {
        type: "line",
        size: 60
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "Up to 1 minute",
      concentration: true,
      ritual: false

    },
    damage: {
      type: "fire",
      attackType: "ranged"
    }
  },
    {
    name: "Wall of Force",
    level: 5,
    type: "utility",
    tag: "wizard",
    description: {
      desc: "An invisible wall of force springs into existence at a point you choose within range. The wall appears in any orientation you choose, as a horizontal or vertical barrier or at an angle. It can be free floating or resting on a solid surface. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-by-10-foot panels. Each panel must be contiguous with another panel. In any form, the wall is 1/4 inch thick. It lasts for the duration. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice which side). Nothing can physically pass through the wall. It is immune to all damage and can't be dispelled by dispel magic. A disintegrate spell destroys the wall instantly, however. The wall also extends into the Ethereal Plane, blocking ethereal travel through the wall.",
      higherLevel: null,
      school: "Evocation",
      range: "120 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "Up to 10 minutes",
      concentration: true,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Wall of Ice",
    level: 6,
    type: "utility",
    tag: "wizard",
    description: {
      desc: "You create a wall of ice on a solid surface within range. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-square panels. Each panel must be contiguous with another panel. In any form, the wall is 1 foot thick and lasts for the duration. If the wall cuts through a creature's space when it appears, the creature within its area is pushed to one side of the wall and must make a dexterity saving throw. On a failed save, the creature takes 10d6 cold damage, or half as much damage on a successful save. The wall is an object that can be damaged and thus breached. It has AC 12 and 30 hit points per 10-foot section, and it is vulnerable to fire damage. Reducing a 10-foot section of wall to 0 hit points destroys it and leaves behind a sheet of frigid air in the space the wall occupied. A creature moving through the sheet of frigid air for the first time on a turn must make a constitution saving throw. That creature takes 5d6 cold damage on a failed save, or half as much damage on a successful one.",
      higherLevel: "When you cast this spell using a spell slot of 7th level or higher, the damage the wall deals when it appears increases by 2d6, and the damage from passing through the sheet of frigid air increases by 1d6, for each slot level above 6th.",
      school: "Evocation",
      range: "120 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "Up to 10 Minutes",
      concentration: true,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Wall of Stone",
    level: 5,
    type: "Utility",
    tag: ("wizard", "sorcerer", "druid"),
    description: {
      desc: "A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with at least one other panel. Alternatively, you can create 10-foot-by-20-foot panels that are only 3 inches thick. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a dexterity saving throw. On a success, it can use its reaction to move up to its speed so that it is no longer enclosed by the wall. The wall can have any shape you desire, though it can't occupy the same space as a creature or object. The wall doesn't need to be vertical or rest on any firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus, you can use this spell to bridge a chasm or create a ramp. If you create a span greater than 20 feet in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create crenellations, battlements, and so on. The wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 30 hit points per inch of thickness. Reducing a panel to 0 hit points destroys it and might cause connected panels to collapse at the DM's discretion. If you maintain your concentration on this spell for its whole duration, the wall becomes permanent and can't be dispelled. Otherwise, the wall disappears when the spell ends.",
      higherLevel: null
      ,
      school: "Evocation",
      range: "120 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "Up to 10 minutes",
      concentration: true,
      ritual: false

    },
    damage: {
      type: "acid",
      attackType: "ranged"
    }
  },
    {
    name: "Wall of Thorns",
    level: 6,
    type: "damage",
    tag: "druid",
    description: {
      desc: "You create a wall of tough, pliable, tangled brush bristling with needle-sharp thorns. The wall appears within range on a solid surface and lasts for the duration. You choose to make the wall up to 60 feet long, 10 feet high, and 5 feet thick or a circle that has a 20-foot diameter and is up to 20 feet high and 5 feet thick. The wall blocks line of sight. When the wall appears, each creature within its area must make a dexterity saving throw. On a failed save, a creature takes 7d8 piercing damage, or half as much damage on a successful save. A creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature moves through the wall, it must spend 4 feet of movement. Furthermore, the first time a creature enters the wall on a turn or ends its turn there, the creature must make a dexterity saving throw. It takes 7d8 slashing damage on a failed save, or half as much damage on a successful one.",
      higherLevel: "When you cast this spell using a spell slot of 7th level or higher, both types of damage increase by 1d8 for each slot level above 6th",
      school: "Conjuration",
      range: "120 feet",
      areaOfEffect: {
        type: "line",
        size: 60
      },
      dc: {
        type: dex,
        onSuccess: "half"
      },
      castingTime: "1 action",
      duration: "Up to 10 minutes",
      concentration: true,
      ritual: false

    },
    damage: {
      type: "piercing",
      attackType: "ranged"
    }
  },
    {
    name: "Warding Bond",
    level: 2,
    type: "buff",
    tag: "cleric",
    description: {
      desc: "This spell wards a willing creature you touch and creates a mystic connection between you and the target until the spell ends. While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and it has resistance to all damage. Also, each time it takes damage, you take the same amount of damage. The spell ends if you drop to 0 hit points or if you and the target become separated by more than 60 feet. It also ends if the spell is cast again on either of the connected creatures. You can also dismiss the spell as an action.",
      higherLevel: null,
      school: "Abjuration",
      range: "touch",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "1 hour",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Water Breathing",
    level: 3,
    type: "utility",
    tag: ("wizard", "sorcerer", "ranger", "druid"),
    description: {
      desc: "This spell gives a maximum of ten willing creatures within range and you can see, the ability to breathe underwater until the end of its term. Affected creatures also retain their normal breathing pattern.",
      higherLevel: null,
      school: "Transmutation",
      range: "30 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "24 hours",
      concentration: false,
      ritual: true

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Water Walk",
    level: 3,
    type: "movement",
    tag: ("cleric", "druid", "ranger", "sorcerer"),
    description: {
      desc: "This spell grants the ability to move across any liquid surface--such as water, acid, mud, snow, quicksand, or lava--as if it were harmless solid ground (creatures crossing molten lava can still take damage from the heat). Up to ten willing creatures you can see within range gain this ability for the duration. If you target a creature submerged in a liquid, the spell carries the target to the surface of the liquid at a rate of 60 feet per round.",
      higherLevel: null,
      school: "Transmutation",
      range: "30 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "1 hour",
      concentration: false,
      ritual: true

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Web",
    level: 2,
    type: "utility",
    tag: ("wizard", "sorcerer"),
    description: {
      desc: "You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube from that point for the duration. The webs are difficult terrain and lightly obscure their area. If the webs aren't anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet. Each creature that starts its turn in the webs or that enters them during its turn must make a dexterity saving throw. On a failed save, the creature is restrained as long as it remains in the webs or until it breaks free. A creature restrained by the webs can use its action to make a Strength check against your spell save DC. If it succeeds, it is no longer restrained. ",
      higherLevel: null,
      school: "Conjuration",
      range: "60 feet",
      areaOfEffect: {
        type: "cube",
        size: 20
      },
      dc: {
        type: "str",
        onSuccess: "none"
      },
      castingTime: "1 action",
      duration: "Up to 1 hour",
      concentration: true,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Weird",
    level: 9,
    type: "damage",
    tag: "wizard",
    description: {
      desc: "Drawing on the deepest fears of a group of creatures, you create illusory creatures in their minds, visible only to them. Each creature in a 30-foot-radius sphere centered on a point of your choice within range must make a wisdom saving throw. On a failed save, a creature becomes frightened for the duration. The illusion calls on the creature's deepest fears, manifesting its worst nightmares as an implacable threat. At the start of each of the frightened creature's turns, it must succeed on a wisdom saving throw or take 4d10 psychic damage. On a successful save, the spell ends for that creature.",
      higherLevel: null,
      school: "Illusion",
      range: "120 feet",
      areaOfEffect: {
        type: "sphere",
        size: 30
      },
      dc: {
        type: wis,
        onSuccess: "none"
      },
      castingTime: "1 action",
      duration: "Up to 1 minute",
      concentration: true,
      ritual: false

    },
    damage: {
      type: "psychic",
      attackType: "ranged"
    }
  },
    {
    name: "Wind Walk",
    level: 6,
    type: "movement",
    tag: "druid",
    description: {
      desc: "You and up to ten willing creatures you can see within range assume a gaseous form for the duration, appearing as wisps of cloud. While in this cloud form, a creature has a flying speed of 300 feet and has resistance to damage from nonmagical weapons. The only actions a creature can take in this form are the Dash action or to revert to its normal form. Reverting takes 1 minute, during which time a creature is incapacitated and can't move. Until the spell ends, a creature can revert to cloud form, which also requires the 1-minute transformation. If a creature is in cloud form and flying when the effect ends, the creature descends 60 feet per round for 1 minute until it lands, which it does safely. If it can't land after 1 minute, the creature falls the remaining distance.",
      higherLevel: null,
      school: "Transmutation",
      range: "30 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 minute",
      duration: "8 hours",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Wind Wall",
    level: 3,
    type: "damage",
    tag: ("ranger", "druid"),
    description: {
      desc: "A wall of strong wind rises from the ground at a point you choose within range. You can make the wall up to 50 feet long, 15 feet high, and 1 foot thick. You can shape the wall in any way you choose so long as it makes one continuous path along the ground. The wall lasts for the duration. When the wall appears, each creature within its area must make a strength saving throw. A creature takes 3d8 bludgeoning damage on a failed save, or half as much damage on a successful one. The strong wind keeps fog, smoke, and other gases at bay. Small or smaller flying creatures or objects can't pass through the wall. Loose, lightweight materials brought into the wall fly upward. Arrows, bolts, and other ordinary projectiles launched at targets behind the wall are deflected upward and automatically miss. (Boulders hurled by giants or siege engines, and similar projectiles, are unaffected.) Creatures in gaseous form can't pass through it.",
      higherLevel: null,
      school: "Evocation",
      range: "120 feet",
      areaOfEffect: {
        type: "line",
        size: 50
      },
      dc: {
        type: "str",
        onSuccess: "half"
      },
      castingTime: "1 action",
      duration: "instant",
      concentration: false,
      ritual: false

    },
    damage: {
      type: "bludgeoning",
      attackType: "ranged"
    }
  },
    {
    name: "Wish",
    level: 9,
    type: "utility",
    tag: ("wizard", "sorcerer"),
    description: {
      desc: "Wish is the mightiest spell a mortal creature can cast. By simply speaking aloud, you can alter the very foundations of reality in accord with your desires. The basic use of this spell is to duplicate any other spell of 8th level or lower. You don't need to meet any requirements in that spell, including costly components. The spell simply takes effect. Alternatively, you can create one of the following effects of your choice: -You create one object of up to 25,000 gp in value that isn't a magic item. The object can be no more than 300 feet in any dimension, and it appears in an unoccupied space you can see on the ground. -You allow up to twenty creatures that you can see to regain all hit points, and you end all effects on them described in the greater restoration spell. -You grant up to ten creatures that you can see resistance to a damage type you choose. -You grant up to ten creatures you can see immunity to a single spell or other magical effect for 8 hours. For instance, you could make yourself and all your companions immune to a lich's life drain attack. -You undo a single recent event by forcing a reroll of any roll made within the last round (including your last turn). Reality reshapes itself to accommodate the new result. For example, a wish spell could undo an opponent's successful save, a foe's critical hit, or a friend's failed save. You can force the reroll to be made with advantage or disadvantage, and you can choose whether to use the reroll or the original roll.  You might be able to achieve something beyond the scope of the above examples. State your wish to the GM as precisely as possible. The GM has great latitude in ruling what occurs in such an instance; the greater the wish, the greater the likelihood that something goes wrong. This spell might simply fail, the effect you desire might only be partly achieved, or you might suffer some unforeseen consequence as a result of how you worded the wish. For example, wishing that a villain were dead might propel you forward in time to a period when that villain is no longer alive, effectively removing you from the game. Similarly, wishing for a legendary magic item or artifact might instantly transport you to the presence of the item's current owner. *The stress of casting this spell to produce any effect other than duplicating another spell weakens you. After enduring that stress, each time you cast a spell until you finish a long rest, you take 1d10 necrotic damage per level of that spell. This damage can't be reduced or prevented in any way. In addition, your Strength drops to 3, if it isn't 3 or lower already, for 2d4 days. For each of those days that you spend resting and doing nothing more than light activity, your remaining recovery time decreases by 2 days. Finally, there is a 33 percent chance that you are unable to cast wish ever again if you suffer this stress.",
      higherLevel: null,
      school: "Conjuration",
      range: null,
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "instant",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },
    {
    name: "Word of Recall",
    level: 6,
    type: "movement",
    tag: "cleric",
    description: {
      desc: "You and up to five willing creatures within 5 feet of you instantly teleport to a previously designated sanctuary. You and any creatures that teleport with you appear in the nearest unoccupied space to the spot you designated when you prepared your sanctuary (see below). If you cast this spell without first preparing a sanctuary, the spell has no effect. -You must designate a sanctuary by casting this spell within a location, such as a temple, dedicated to or strongly linked to your deity. If you attempt to cast the spell in this manner in an area that isn't dedicated to your deity, the spell has no effect.",
      higherLevel: null,
      school: "Conjuration",
      range: "5 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "instant",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  },

    {
    name: "Zone of Truth",
    level: 2,
    type: "utility",
    tag: ("bard", "cleric", "paladin"),
    description: {
      desc: "You create a magical zone that guards against deception in a 15-foot-radius sphere centered on a point of your choice within range. Until the spell ends, a creature that enters the spell's area for the first time on a turn or starts its turn there must make a Charisma saving throw. On a failed save, a creature can't speak a deliberate lie while in the radius. You know whether each creature succeeds or fails on its saving throw. -An affected creature is aware of the fate and can avoid answering questions she would normally have responded with a lie. Such a creature can remain evasive in his answers as they remain within the limits of truth.",
      higherLevel: null,
      school: "Enchantment",
      range: "60 feet",
      areaOfEffect: {
        type: "sphere",
        size: 15
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "10 minutes",
      concentration: false,
      ritual: false

    },
    damage: {
      type: null,
      attackType: null
    }
  }
],