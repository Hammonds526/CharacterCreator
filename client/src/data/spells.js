const spells = [
  {
    name: "Acid Arrow",
    level: 2,
    type: "damage",
    tag: ("wizard", "sorcerer"),
    description: {
      desc: "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.",
      higherLevel: "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.",
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
      castingTime: "1 action",
      duration: "instant",
      concentration: false,
      ritual: false
    },
    damage: {
      type: "acid",
      attackType: "ranged"
    }
  },
  {
    name: "Acid Splash",
    level: 0,
    type: "damage",
    tag: ("wizard", "sorcerer"),
    description: {
      desc: "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a dexterity saving throw or take 1d6 acid damage.",
      higherLevel: "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
      school: "Conjuration",
      range: "60 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: {name: "DEX"},
        onSuccess: "none"
      },
      castingTime: "1 action",
      duration: "instant",
      concentration: false,
      ritual: false
    },
    damage: {
      type: "acid",
      attackType: "ranged"
    }
  },
  {
    name: "Aid",
    level: 2,
    type: "buff",
    tag: ("cleric","paladin"),
    description: {
      desc: "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.",
      higherLevel: "When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd.",
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
    name: "Alarm",
    level: 1,
    type: "buff",
    tag: ("ranger","wizard"),
    description: {
      desc: "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.",
      higherLevel: null,
      school: "Abjuration",
      range: "30 feet",
      areaOfEffect: {
        type: "cube",
        size: 20
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
    name: "Alter Self",
    level: 2,
    type: "buff",
    tag: ("sorcerer","wizard"),
    description: {
      desc: 
		"You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one. <br /><br />-Aquatic Adaptation. <br />You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed. <br /><br />-Change Appearance. <br /> You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You also can't appear as a creature of a different size than you, and your basic shape stays the same; if you're bipedal, you can't use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again.<br /><br />-Natural Weapons.<br />You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it.",
	
      higherLevel: null,
      school: "Transmutation",
      range: "Self",
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
      concentration: true,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Animal Friendship",
    level: 1,
    type: "utility",
    tag: ("bard","cleric","druid","ranger"),
    description: {
      desc: "This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spells ends.",
      higherLevel: null,
      school: "Enchantment",
      range: "30 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: "WIS",
        onSuccess: "none"
      },
      castingTime: "1 action",
      duration: "24 hours",
      concentration: false,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Animal Shapes",
    level: 8,
    type: "utility",
    tag: ("druid"),
    description: {
      desc: "Your magic turns others into beasts. Choose any number of willing creatures that you can see within range. You transform each target into the form of a Large or smaller beast with a challenge rating of 4 or lower. On subsequent turns, you can use your action to transform affected creatures into new forms. <br /><br />The transformation lasts for the duration for each target, or until the target drops to 0 hit points or dies. You can choose a different form for each target. A target's game statistics are replaced by the statistics of the chosen beast, though the target retains its alignment and Intelligence, Wisdom, and Charisma scores. The target assumes the hit points of its new form, and when it reverts to its normal form, it returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can't speak or cast spells. <br /><br />The target's gear melds into the new form. The target can't activate, wield, or otherwise benefit from any of its equipment.",
      higherLevel: null,
      school: "Tansmutation",
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
      concentration: true,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Animate Dead",
    level: 3,
    type: "utility",
    tag: ("cleric", "wizard"),
    description: {
      desc: "This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the DM has the creature's game statistics).<br />On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.<br />The creature is under your control for 24 hours, after which it stops obeying any command you've given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one.",
      higherLevel: "When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot level above 3rd. Each of the creatures must come from a different corpse or pile of bones.",
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
      castingTime: "1 minute",
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
    name: "Animate Objects",
    level: 5,
    type: "utility",
    tag: ("sorcerer", "wizard"),
    description: {
      desc: 
		"Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can't animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points.<br />As a bonus action, you can mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.<br />An animated object is a construct with AC, hit points, attacks, Strength, and Dexterity determined by its size. Its Constitution is 10 and its Intelligence and Wisdom are 3, and its Charisma is 1. Its speed is 30 feet; if the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or a larger object, such as a chain bolted to a wall, its speed is 0. It has blindsight with a radius of 30 feet and is blind beyond that distance. When the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form.<br />If you command an object to attack, it can make a single melee attack against a creature within 5 feet of it. It makes a slam attack with an attack bonus and bludgeoning damage determined by its size. The DM might rule that a specific object inflicts slashing or piercing damage based on its form.",
        higherLevel: 
            "If you cast this spell using a spell slot of 6th level or higher, you can animate two additional objects for each slot level above 5th.",
      school: "Transmutation",
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
      duration: "1 minute",
      concentration: true,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Antilife Shell",
    level: 5,
    type: "utility",
    tag: ("druid"),
    description: {
      desc: 
        "A shimmering barrier extends out from you in a 10-foot radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs. The barrier lasts for the duration.<br />The barrier prevents an affected creature from passing or reaching through. An affected creature can cast spells or make attacks with ranged or reach weapons through the barrier.<br />If you move so that an affected creature is forced to pass through the barrier, the spell ends.",
      higherLevel: null,
      school: "abjuration",
      range: "self",
      areaOfEffect: {
        type: "sphere",
        size: 10
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "1 hour",
      concentration: true,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Antimagic Field",
    level: 8,
    type: "utility",
    tag: ("cleric","wizard"),
    description: {
      desc: 
        "A 10-foot-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells can't be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you.<br /><br />Spells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and can't protrude into it. A slot expended to cast a suppressed spell is consumed. While an effect is suppressed, it doesn't function, but the time it spends suppressed counts against its duration.<br /><br />-Targeted Effects.<br />Spells and other magical effects, such as magic missile and charm person, that target a creature or an object in the sphere have no effect on that target.<br /><br />-Areas of Magic.<br />The area of another spell or magical effect, such as fireball, can't extend into the sphere. If the sphere overlaps an area of magic, the part of the area that is covered by the sphere is suppressed. For example, the flames created by a wall of fire are suppressed within the sphere, creating a gap in the wall if the overlap is large enough.<br /><br />-Spells.<br />Any active spell or other magical effect on a creature or an object in the sphere is suppressed while the creature or object is in it.<br /><br />-Magic Items.<br />The properties and powers of magic items are suppressed in the sphere. For example, a +1 longsword in the sphere functions as a nonmagical longsword.<br />A magic weapon's properties and powers are suppressed if it is used against a target in the sphere or wielded by an attacker in the sphere. If a magic weapon or a piece of magic ammunition fully leaves the sphere (for example, if you fire a magic arrow or throw a magic spear at a target outside the sphere), the magic of the item ceases to be suppressed as soon as it exits.<br /><br />-Magical Travel.<br />Teleportation and planar travel fail to work in the sphere, whether the sphere is the destination or the departure point for such magical travel. A portal to another location, world, or plane of existence, as well as an opening to an extradimensional space such as that created by the rope trick spell, temporarily closes while in the sphere.<br /><br />-Creatures and Objects.<br />A creature or object summoned or created by magic temporarily winks out of existence in the sphere. Such a creature instantly reappears once the space the creature occupied is no longer within the sphere.<br /><br />-Dispel Magic.<br />Spells and magical effects such as dispel magic have no effect on the sphere. Likewise, the spheres created by different antimagic field spells don't nullify each other.",
      higherLevel: null,
      school: "abjuration",
      range: "self",
      areaOfEffect: {
        type: "sphere",
        size: 10
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "1 hour",
      concentration: true,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Antipathy Sympathy",
    level: 8,
    type: "utility",
    tag: ("druid","wizard"),
    description: {
      desc: "This spell attracts or repels creatures of your choice. You target something within range, either a Huge or smaller object or creature or an area that is no larger than a 200-foot cube. Then specify a kind of intelligent creature, such as red dragons, goblins, or vampires. You invest the target with an aura that either attracts or repels the specified creatures for the duration. Choose antipathy or sympathy as the aura's effect.<br /><br />-Antipathy.<br />The enchantment causes creatures of the kind you designated to feel an intense urge to leave the area and avoid the target. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a wisdom saving throw or become frightened. The creature remains frightened while it can see the target or is within 60 feet of it. While frightened by the target, the creature must use its movement to move to the nearest safe spot from which it can't see the target. If the creature moves more than 60 feet from the target and can't see it, the creature is no longer frightened, but the creature becomes frightened again if it regains sight of the target or moves within 60 feet of it.<br /><br />-Sympathy.<br />The enchantment causes the specified creatures to feel an intense urge to approach the target while within 60 feet of it or able to see it. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a wisdom saving throw or use its movement on each of its turns to enter the area or move within reach of the target. When the creature has done so, it can't willingly move away from the target. If the target damages or otherwise harms an affected creature, the affected creature can make a wisdom saving throw to end the effect, as described below.<br /><br />-Ending the Effect.<br />If an affected creature ends its turn while not within 60 feet of the target or able to see it, the creature makes a wisdom saving throw. On a successful save, the creature is no longer affected by the target and recognizes the feeling of repugnance or attraction as magical. In addition, a creature affected by the spell is allowed another wisdom saving throw every 24 hours while the spell persists.<br />A creature that successfully saves against this effect is immune to it for 1 minute, after which time it can be affected again.",
      higherLevel: null,
      school: "enchantment",
      range: "60 feet",
      areaOfEffect: {
        type: "cube",
        size: 200
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 hour",
      duration: "10 days",
      concentration: true,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Arcane Eye",
    level: 4,
    type: "utility",
    tag: ("cleric","wizard"),
    description: {
      desc: "You create an invisible, magical eye within range that hovers in the air for the duration. <br />You mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. The eye can look in every direction.",
        "As an action, you can move the eye up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it can't enter another plane of existence. A solid barrier blocks the eye's movement, but the eye can pass through an opening as small as 1 inch in diameter.",
      higherLevel: null,
      school: "divination",
      range: "30 feet",
      areaOfEffect: {
        type: "sphere",
        size: 30
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "1 hour",
      concentration: true,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Arcane Hand",
    level: 5,
    type: "summon",
    tag: ("wizard"),
    description: {
      desc: 
        "You create a Large hand of shimmering, translucent force in an unoccupied space that you can see within range. The hand lasts for the spell's duration, and it moves at your command, mimicking the movements of your own hand.<br />The hand is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has a Strength of 26 (+8) and a Dexterity of 10 (+0). The hand doesn't fill its space.<br />When you cast the spell and as a bonus action on your subsequent turns, you can move the hand up to 60 feet and then cause one of the following effects with it.<br /><br />-Clenched Fist.<br />The hand strikes one creature or object within 5 feet of it. Make a melee spell attack for the hand using your game statistics. On a hit, the target takes 4d8 force damage.<br /><br />-Forceful Hand.<br />The hand attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the hand's Strength contested by the Strength (Athletics) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the hand pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target to remain within 5 feet of it.<br /><br />-Grasping Hand.<br />The hand attempts to grapple a Huge or smaller creature within 5 feet of it. You use the hand's Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the hand is grappling the target, you can use a bonus action to have the hand crush it. When you do so, the target takes bludgeoning damage equal to 2d6 + your spellcasting ability modifier.<br /><br />-Interposing Hand.<br /><br />The hand interposes itself between you and a creature you choose until you give the hand a different command. The hand moves to stay between you and the target, providing you with half cover against the target. The target can't move through the hand's space if its Strength score is less than or equal to the hand's Strength score. If its Strength score is higher than the hand's Strength score, the target can move toward you through the hand's space, but that space is difficult terrain for the target.",
      higher_level:
        "When you cast this spell using a spell slot of 6th level or higher, the damage from the clenched fist option increases by 2d8 and the damage from the grasping hand increases by 2d6 for each slot level above 5th.",
      school: "evocation",
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
      duration: "1 minute",
      concentration: true,
      ritual: false
    },
    damage: {
      type: "force",
      attackType: "summon"
    }
  },
  {
    name: "Arcane Lock",
    level: 2,
    type: "utility",
    tag: ("wizard", "bard"),
    description: {
      desc: "You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise, it is impassable until it is broken or the spell is dispelled or suppressed. Casting knock on the object suppresses arcane lock for 10 minutes.<br /><br />While affected by this spell, the object is more difficult to break or force open; the DC to break it or pick any locks on it increases by 10.",
      higher_level: null,
      school: "abjuration",
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
    name: "Arcane Sword",
    level: 7,
    type: "utility",
    tag: ("bard", "wizard"),
    description: {
      desc: "You create a sword-shaped plane of force that hovers within range. It lasts for the duration.<br /><br />When the sword appears, you make a melee spell attack against a target of your choice within 5 feet of the sword. On a hit, the target takes 3d10 force damage. Until the spell ends, you can use a bonus action on each of your turns to move the sword up to 20 feet to a spot you can see and repeat this attack against the same target or a different one.",
      higher_level: null,
      school: "evocation",
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
      duration: "1 minute",
      concentration: true,
      ritual: false
    },
    damage: {
      type: "force",
      attackType: "melee"
    }
  },
  {
    name: "Arcanist's Magic Aura",
    level: 2,
    type: "utility",
    tag: ("bard", "wizard"),
    description: {
      desc: 
        "You place an illusion on a creature or an object you touch so that divination spells reveal false information about it. The target can be a willing creature or an object that isn't being carried or worn by another creature.<br /><br />When you cast the spell, choose one or both of the following effects. The effect lasts for the duration. If you cast this spell on the same creature or object every day for 30 days, placing the same effect on it each time, the illusion lasts until it is dispelled.<br /><br />-False Aura.<br />You change the way the target appears to spells and magical effects, such as detect magic, that detect magical auras. You can make a nonmagical object appear magical, a magical object appear nonmagical, or change the object's magical aura so that it appears to belong to a specific school of magic that you choose. When you use this effect on an object, you can make the false magic apparent to any creature that handles the item.<br /><br />-Mask.<br />You change the way the target appears to spells and magical effects that detect creature types, such as a paladin's Divine Sense or the trigger of a symbol spell. You choose a creature type and other spells and magical effects treat the target as if it were a creature of that type or of that alignment.",
      higher_level: null,
      school: "illusion",
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
      duration: "24 hours",
      concentration: true,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Astral Projection",
    level: 9,
    type: "utility",
    tag: ("cleric", "warlock", "wizard"),
    description: {
      desc: "You and up to eight willing creatures within range project your astral bodies into the Astral Plane (the spell fails and the casting is wasted if you are already on that plane). The material body you leave behind is unconscious and in a state of suspended animation; it doesn't need food or air and doesn't age.<br /><br />Your astral body resembles your mortal form in almost every way, replicating your game statistics and possessions. The principal difference is the addition of a silvery cord that extends from between your shoulder blades and trails behind you, fading to invisibility after 1 foot. This cord is your tether to your material body. As long as the tether remains intact, you can find your way home. If the cord is cut--something that can happen only when an effect specifically states that it does--your soul and body are separated, killing you instantly.<br />Your astral form can freely travel through the Astral Plane and can pass through portals there leading to any other plane. If you enter a new plane or return to the plane you were on when casting this spell, your body and possessions are transported along the silver cord, allowing you to re-enter your body as you enter the new plane. Your astral form is a separate incarnation. Any damage or other effects that apply to it have no effect on your physical body, nor do they persist when you return to it.<br /><br />The spell ends for you and your companions when you use your action to dismiss it. When the spell ends, the affected creature returns to its physical body, and it awakens.<br /><br />The spell might also end early for you or one of your companions. A successful dispel magic spell used against an astral or physical body ends the spell for that creature. If a creature's original body or its astral form drops to 0 hit points, the spell ends for that creature. If the spell ends and the silver cord is intact, the cord pulls the creature's astral form back to its body, ending its state of suspended animation.<br /><br />If you are returned to your body prematurely, your companions remain in their astral forms and must find their own way back to their bodies, usually by dropping to 0 hit points.",
      higher_level: null,
      school: "necromancy",
      range: "10 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 hour",
      duration: "Special",
      concentration: false,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Augury",
    level: 2,
    type: "utility",
    tag: ("cleric", "bard"),
    description: {
      desc: "By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing some other divining tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes. The DM chooses from the following possible omens:<br />- Weal, for good results<br />- Woe, for bad results<br />- Weal and woe, for both good and bad results<br />- Nothing, for results that aren't especially good or bad<br />The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion.<br />If you cast the spell two or more times before completing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret.",
      higher_level: null,
      school: "divination",
      range: "5 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 minutes",
      duration: "Instantaneous",
      concentration: false,
      ritual: true
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Awaken",
    level: 5,
    type: "utility",
    tag: ("bard", "druid"),
    description: {
      desc: "After spending the casting time tracing magical pathways within a precious gemstone, you touch a Huge or smaller beast or plant. The target must have either no Intelligence score or an Intelligence of 3 or less. The target gains an Intelligence of 10. The target also gains the ability to speak one language you know. If the target is a plant, it gains the ability to move its limbs, roots, vines, creepers, and so forth, and it gains senses similar to a human's. Your DM chooses statistics appropriate for the awakened plant, such as the statistics for the awakened shrub or the awakened tree.<br /><br />The awakened beast or plant is charmed by you for 30 days or until you or your companions do anything harmful to it. When the charmed condition ends, the awakened creature chooses whether to remain friendly to you, based on how you treated it while it was charmed.",
      higher_level: null,
      school: "transmutation",
      range: "5 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "8 hours",
      duration: "Instantaneous",
      concentration: false,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Bane",
    level: 1,
    type: "debuff",
    tag: ("bard", "cleric"),
    description: {
      desc: "Up to three creatures of your choice that you can see within range must make charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw.",
      higher_level:
        "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
      school: "enchantment",
      range: "30 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: "cha",
        onSuccess: "none"
      },
      castingTime: "1 Action",
      duration: "1 Minute",
      concentration: true,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Banishment",
    level: 4,
    type: "debuff",
    tag: ("bard", "cleric", "paladin", "sorcerer","warlock","wizard"),
    description: {
      desc:
        "You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a charisma saving throw or be banished.<br /><br />If the target is native to the plane of existence you're on, you banish the target to a harmless demiplane. While there, the target is incapacitated. The target remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied.<br /><br />If the target is native to a different plane of existence than the one you're on, the target is banished with a faint popping noise, returning to its home plane. If the spell ends before 1 minute has passed, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. Otherwise, the target doesn't return.",
      higher_level:
        "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th.",
      school: "abjuration",
      range: "60 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: "cha",
        onSuccess: "none"
      },
      castingTime: "1 Action",
      duration: "1 Minute",
      concentration: true,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Barkskin",
    level: 2,
    type: "buff",
    tag: ("bard","druid", "ranger"),
    description: {
      desc: "You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance, and the target's AC can't be less than 16, regardless of what kind of armor it is wearing.",
      higher_level: null,
      school: "transmutation",
      range: "5 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 Action",
      duration: "1 Hour",
      concentration: true,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Beacon of Hope",
    level: 3,
    type: "buff",
    tag: ("bard","cleric"),
    description: {
      desc: 
        "This spell bestows hope and vitality. Choose any number of creatures within range. For the duration, each target has advantage on wisdom saving throws and death saving throws, and regains the maximum number of hit points possible from any healing.",
      higher_level: null,
      school: "abjuration",
      range: "30 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 Action",
      duration: "1 Minute",
      concentration: true,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Bestow Curse",
    level: 3,
    type: "debuff",
    tag: ("bard","cleric","wizard"),
    description: {
      desc: "You touch a creature, and that creature must succeed on a wisdom saving throw or become cursed for the duration of the spell. When you cast this spell, choose the nature of the curse from the following options:<br />- Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score.<br />- While cursed, the target has disadvantage on attack rolls against you.<br />- While cursed, the target must make a wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing.<br />- While the target is cursed, your attacks and spells deal an extra 1d8 necrotic damage to the target.<br /><br />A remove curse spell ends this effect. At the DM's option, you may choose an alternative curse effect, but it should be no more powerful than those described above. The DM has final say on such a curse's effect.",
      higher_level: 
        "If you cast this spell using a spell slot of 4th level or higher, the duration is concentration, up to 10 minutes. If you use a spell slot of 5th level or higher, the duration is 8 hours. If you use a spell slot of 7th level or higher, the duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a duration that doesn't require concentration.",
      school: "necromancy",
      range: "5 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: "wis",
        onSuccess: "none"
      },
      castingTime: "1 Action",
      duration: "1 Minute",
      concentration: true,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Black Tentacles",
    level: 4,
    type: "damage",
    tag: ("wizard"),
    description: {
      desc: 
        "Squirming, ebony tentacles fill a 20-foot square on ground that you can see within range. For the duration, these tentacles turn the ground in the area into difficult terrain.<br /><br />When a creature enters the affected area for the first time on a turn or starts its turn there, the creature must succeed on a Dexterity saving throw or take 3d6 bludgeoning damage and be restrained by the tentacles until the spell ends. A creature that starts its turn in the area and is already restrained by the tentacles takes 3d6 bludgeoning damage.<br /><br />A creature restrained by the tentacles can use its action to make a Strength or Dexterity check (its choice) against your spell save DC. On a success, it frees itself.",
      higher_level: null,
      school: "conjuration",
      range: "90 feet",
      areaOfEffect: {
        type: "cube",
        size: 20
      },
      dc: {
        type: "dex",
        onSuccess: "none"
      },
      castingTime: "1 Action",
      duration: "1 Minute",
      concentration: true,
      ritual: false
    },
    damage: {
      type: "bludgeoning",
      attackType: "summon"
    }
  },
  {
    name: "Blade Barrier",
    level: 6,
    type: "damage",
    tag: ("cleric"),
    description: {
      desc: "You create a vertical wall of whirling, razor-sharp blades made of magical energy. The wall appears within range and lasts for the duration. You can make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and 5 feet thick. The wall provides three-quarters cover to creatures behind it, and its space is difficult terrain.<br /><br />When a creature enters the wall's area for the first time on a turn or starts its turn there, the creature must make a dexterity saving throw. On a failed save, the creature takes 6d10 slashing damage. On a successful save, the creature takes half as much damage.",
      higher_level: null,
      school: "conjuration",
      range: "90 feet",
      areaOfEffect: {
        type: "line",
        size: 100
      },
      dc: {
        type: "dex",
        onSuccess: "none"
      },
      castingTime: "1 Action",
      duration: "10 Minutes",
      concentration: true,
      ritual: false
    },
    damage: {
      type: "slashing",
      attackType: "summon"
    }
  },
  {
    name: "Bless",
    level: 1,
    type: "buff",
    tag: ("Bard","Cleric","Paladin"),
    description: {
      desc: "You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.",
      higher_level: 
        "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
      school: "enchantment",
      range: "30 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 Action",
      duration: "1 Minute",
      concentration: true,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Blight",
    level: 4,
    type: "damage",
    tag: ("Druid","Sorcerer","Warlock", "wizard"),
    description: {
      desc: "Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a constitution saving throw. The target takes 8d8 necrotic damage on a failed save, or half as much damage on a successful one. The spell has no effect on undead or constructs.<br /><br />If you target a plant creature or a magical plant, it makes the saving throw with disadvantage, and the spell deals maximum damage to it.<br /><br />If you target a nonmagical plant that isn't a creature, such as a tree or shrub, it doesn't make a saving throw; it simply withers and dies.",
      higher_level: "When you cast this spell using a spell slot of 5th level of higher, the damage increases by 1d8 for each slot level above 4th.",
      school: "necromancy",
      range: "30 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: "con",
        onSuccess: "half"
      },
      castingTime: "1 Action",
      duration: "1 Minute",
      concentration: false,
      ritual: false
    },
    damage: {
      type: "necrotic",
      attackType: "ranged"
    }
  },
  {
    name: "Blindness/Deafness",
    level: 2,
    type: "debuff",
    tag: ("Druid","Sorcerer","Cleric", "wizard"),
    description: {
      desc: "You can blind or deafen a foe. Choose one creature that you can see within range to make a constitution saving throw. If it fails, the target is either blinded or deafened (your choice) for the duration. At the end of each of its turns, the target can make a constitution saving throw. On a success, the spell ends.",
      higher_level: "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
      school: "necromancy",
      range: "30 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: "con",
        onSuccess: "none"
      },
      castingTime: "1 Action",
      duration: "1 Minute",
      concentration: false,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Blink",
    level: 3,
    type: "utility",
    tag: ("Bard","Sorcerer","wizard"),
    description: {
      desc: "Roll a d20 at the end of each of your turns for the duration of the spell. On a roll of 11 or higher, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell fails and the casting is wasted if you were already on that plane). At the start of your next turn, and when the spell ends if you are on the Ethereal Plane, you return to an unoccupied space of your choice that you can see within 10 feet of the space you vanished from. If no unoccupied space is available within that range, you appear in the nearest unoccupied space (chosen at random if more than one space is equally near). You can dismiss this spell as an action.<br /><br />While on the Ethereal Plane, you can see and hear the plane you originated from, which is cast in shades of gray, and you can't see anything there more than 60 feet away. You can only affect and be affected by other creatures on the Ethereal Plane. Creatures that aren't there can't perceive you or interact with you, unless they have the ability to do so.",
      higher_level: null,
      school: "transmutation",
      range: "5 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 Action",
      duration: "1 Minute",
      concentration: false,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Blur",
    level: 2,
    type: "buff",
    tag: ("Bard","Druid","Sorcerer","wizard"),
    description: {
      desc: "Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn't rely on sight, as with blindsight, or can see through illusions, as with truesight.",
      higher_level: null,
      school: "illusion",
      range: "5 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 Action",
      duration: "1 Minute",
      concentration: true,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Branding Smite",
    level: 2,
    type: "damage",
    tag: ("Paladin"),
    description: {
      desc: "The next time you hit a creature with a weapon attack before this spell ends, the weapon gleams with astral radiance as you strike. The attack deals an extra 2d6 radiant damage to the target, which becomes visible if it's invisible, and the target sheds dim light in a 5-foot radius and can't become invisible until the spell ends.",
      higher_level: null,
      school: "evocation",
      range: "5 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 Bonus Action",
      duration: "1 Minute",
      concentration: true,
      ritual: false
    },
    damage: {
      type: "radient",
      attackType: "melee"
    }
  },
  {
    name: "Burning Hands",
    level: 1,
    type: "damage",
    tag: ("Sorcerer", "wizard"),
    description: {
      desc: "As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.<br /><br />The fire ignites any flammable objects in the area that aren't being worn or carried.",
      higher_level: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
      school: "evocation",
      range: "5 feet",
      areaOfEffect: {
        type: "cone",
        size: 15
      },
      dc: {
        type: "dex",
        onSuccess: "half"
      },
      castingTime: "1 Action",
      duration: "Instantaneous",
      concentration: false,
      ritual: false
    },
    damage: {
      type: "fire",
      attackType: "ranged"
    }
  },
  {
    name: "Call Lightning",
    level: 3,
    type: "damage",
    tag: ("Bard","Druid"),
    description: {
      desc: "A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see 100 feet directly above you. The spell fails if you can't see a point in the air where the storm cloud could appear (for example, if you are in a room that can't accommodate the cloud).<br /><br />When you cast the spell, choose a point you can see within range. A bolt of lightning flashes down from the cloud to that point. Each creature within 5 feet of that point must make a dexterity saving throw. A creature takes 3d10 lightning damage on a failed save, or half as much damage on a successful one. On each of your turns until the spell ends, you can use your action to call down lightning in this way again, targeting the same point or a different one.<br /><br />If you are outdoors in stormy conditions when you cast this spell, the spell gives you control over the existing storm instead of creating a new one. Under such conditions, the spell's damage increases by 1d10.",
      higher_level: 
        "When you cast this spell using a spell slot of 4th or higher level, the damage increases by 1d10 for each slot level above 3rd.",
      school: "conjuration",
      range: "120 feet",
      areaOfEffect: {
        type: "sphere",
        size: 5
      },
      dc: {
        type: "dex",
        onSuccess: "half"
      },
      castingTime: "1 Action",
      duration: "10 Minutes",
      concentration: true,
      ritual: false
    },
    damage: {
      type: "lightning",
      attackType: "ranged"
    }
  },
  {
    name: "Calm Emotions",
    level: 2,
    type: "utility",
    tag: ("Bard","Cleric"),
    description: {
      desc: "You attempt to suppress strong emotions in a group of people. Each humanoid in a 20-foot-radius sphere centered on a point you choose within range must make a charisma saving throw; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects. You can suppress any effect causing a target to be charmed or frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime.<br /><br />Alternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the DM rules otherwise.",
      higher_level: null,
      school: "enchantment",
      range: "60 feet",
      areaOfEffect: {
        type: "sphere",
        size: 20
      },
      dc: {
        type: "cha",
        onSuccess: "none"
      },
      castingTime: "1 Action",
      duration: "1 Minute",
      concentration: true,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Chain Lightning",
    level: 6,
    type: "utility",
    tag: ("Sorcerer","wizard"),
    description: {
      desc: "You create a bolt of lightning that arcs toward a target of your choice that you can see within range. Three bolts then leap from that target to as many as three other targets, each of which must be within 30 feet of the first target. A target can be a creature or an object and can be targeted by only one of the bolts.<br /><br />A target must make a dexterity saving throw. The target takes 10d8 lightning damage on a failed save, or half as much damage on a successful one.",
      higher_level:
        "When you cast this spell using a spell slot of 7th level or higher, one additional bolt leaps from the first target to another target for each slot level above 6th.",
      school: "evocation",
      range: "150 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: "dex",
        onSuccess: "half"
      },
      castingTime: "1 Action",
      duration: "Instantaneous",
      concentration: false,
      ritual: false
    },
    damage: {
      type: "lightning",
      attackType: "ranged"
    }
  },
  {
    name: "Charm Person",
    level: 1,
    type: "utility",
    tag: ("Bard","Druid"),
    description: {
      desc: "You attempt to charm a humanoid you can see within range. It must make a wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.",
      higher_level:
        "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.",
      school: "enchantment",
      range: "30 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: "wis",
        onSuccess: "none"
      },
      castingTime: "1 Action",
      duration: "1 Hour",
      concentration: false,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Chill Touch",
    level: 0,
    type: "damage",
    tag: ("Bard","Sorcerer","Warlock","wizard"),
    description: {
      desc:
        "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target.<br /><br />If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn.<br />This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
      higher_level: null,
      school: "necromancy",
      range: "120 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 Action",
      duration: "1 round",
      concentration: false,
      ritual: false
    },
    damage: {
      type: "necrotic",
      attackType: "ranged"
    }
  },
  {
    name: "Circle of Death",
    level: 6,
    type: "damage",
    tag: ("Sorcerer","Warlock","wizard"),
    description: {
      desc: "A sphere of negative energy ripples out in a 60-foot radius sphere from a point within range. Each creature in that area must make a constitution saving throw. A target takes 8d6 necrotic damage on a failed save, or half as much damage on a successful one.",
      higher_level: 
        "When you cast this spell using a spell slot of 7th level or higher, the damage increases by 2d6 for each slot level above 6th.",
      school: "necromancy",
      range: "150 feet",
      areaOfEffect: {
        type: "sphere",
        size: 60
      },
      dc: {
        type: "con",
        onSuccess: "half"
      },
      castingTime: "1 Action",
      duration: "Instantaneous",
      concentration: false,
      ritual: false
    },
    damage: {
      type: "necrotic",
      attackType: "ranged"
    }
  },
  {
    name: "Clairvoyance",
    level: 3,
    type: "utility",
    tag: ("Bard","Cleric","Sorcerer", "wizard"),
    description: {
      desc: "You create an invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The sensor remains in place for the duration, and it can't be attacked or otherwise interacted with.<br /><br />When you cast the spell, you choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space. As your action, you can switch between seeing and hearing.<br /><br />A creature that can see the sensor (such as a creature benefiting from see invisibility or truesight) sees a luminous, intangible orb about the size of your fist.",
      higher_level: null,
      school: "divination",
      range: "1 mile",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "10 Minutes",
      duration: "10 Minutes",
      concentration: true,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Clone",
    level: 8,
    type: "utility",
    tag: ("Bard","Cleric","Sorcerer", "wizard"),
    description: {
      desc: 
        "This spell grows an inert duplicate of a living creature as a safeguard against death. This clone forms inside a sealed vessel and grows to full size and maturity after 120 days; you can also choose to have the clone be a younger version of the same creature. It remains inert and endures indefinitely, as long as its vessel remains undisturbed.<br /><br />At any time after the clone matures, if the original creature dies, its soul transfers to the clone, provided that the soul is free and willing to return. The clone is physically identical to the original and has the same personality, memories, and abilities, but none of the original's equipment. The original creature's physical remains, if they still exist, become inert and can't thereafter be restored to life, since the creature's soul is elsewhere.",
      higher_level: null,
      school: "necromancy",
      range: "5 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 Hour",
      duration: "Instantaneous",
      concentration: false,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Cloudkill",
    level: 5,
    type: "utility",
    tag: ("Druid","Sorcerer", "wizard"),
    description: {
      desc: 
        "You create a 20-foot-radius sphere of poisonous, yellow-green fog centered on a point you choose within range. The fog spreads around corners. It lasts for the duration or until strong wind disperses the fog, ending the spell. Its area is heavily obscured.<br /><br />When a creature enters the spell's area for the first time on a turn or starts its turn there, that creature must make a constitution saving throw. The creature takes 5d8 poison damage on a failed save, or half as much damage on a successful one. Creatures are affected even if they hold their breath or don't need to breathe.<br /><br />The fog moves 10 feet away from you at the start of each of your turns, rolling along the surface of the ground. The vapors, being heavier than air, sink to the lowest level of the land, even pouring down openings.",
      higher_level: 
        "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.",
      school: "conjuration",
      range: "120 feet",
      areaOfEffect: {
        type: "sphere",
        size: 20
      },
      dc: {
        type: "con",
        onSuccess: "half"
      },
      castingTime: "1 action",
      duration: "10 Minutes",
      concentration: true,
      ritual: false
    },
    damage: {
      type: "poison",
      attackType: "ranged"
    }
  },
  {
    name: "Color Spray",
    level: 1,
    type: "debuff",
    tag: ("Sorcerer", "wizard"),
    description: {
      desc: 
        "A dazzling array of flashing, colored light springs from your hand. Roll 6d10; the total is how many hit points of creatures this spell can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can't see).<br /><br />Starting with the creature that has the lowest current hit points, each creature affected by this spell is blinded until the spell ends. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.",
      higher_level: 
        "When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d10 for each slot level above 1st.",
      school: "illusion",
      range: "5 feet",
      areaOfEffect: {
        type: "cone",
        size: 15
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 action",
      duration: "1 Round",
      concentration: false,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Command",
    level: 1,
    type: "debuff",
    tag: ("Bard","Cleric", "Paladin", "Warlock"),
    description: {
      desc: 
        "You speak a one-word command to a creature you can see within range. The target must succeed on a wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is undead, if it doesn't understand your language, or if your command is directly harmful to it.<br /><br />Some typical commands and their effects follow. You might issue a command other than one described here. If you do so, the DM determines how the target behaves. If the target can't follow your command, the spell ends.<br /><br />-Approach.<br />The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you.<br /><br />-Drop<br />The target drops whatever it is holding and then ends its turn.<br /><br />-Flee.<br />The target spends its turn moving away from you by the fastest available means.<br /><br />-Grovel.<br />The target falls prone and then ends its turn.<br /><br />-Halt.<br />The target doesn't move and takes no actions. A flying creature stays aloft, provided that it is able to do so. If it must move to stay aloft, it flies the minimum distance needed to remain in the air.",
      higher_level: 
        "When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.",
      school: "enchantment",
      range: "60 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: "wis",
        onSuccess: "none"
      },
      castingTime: "1 action",
      duration: "1 Round",
      concentration: false,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Commune",
    level: 5,
    type: "utility",
    tag: ("Cleric"),
    description: {
      desc: "You contact your deity or a divine proxy and ask up to three questions that can be answered with a yes or no. You must ask your questions before the spell ends. You receive a correct answer for each question.<br /><br />Divine beings aren't necessarily omniscient, so you might receive \"unclear\" as an answer if a question pertains to information that lies beyond the deity's knowledge. In a case where a one-word answer could be misleading or contrary to the deity's interests, the DM might offer a short phrase as an answer instead.<br /><br />If you cast the spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get no answer. The DM makes this roll in secret.",
      higher_level: null,
      school: "devotion",
      range: "5 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 Minute",
      duration: "1 Minute",
      concentration: false,
      ritual: true
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Commune with Nature",
    level: 5,
    type: "utility",
    tag: ("Druid", "Bard"),
    description: {
      desc: "You briefly become one with nature and gain knowledge of the surrounding territory. In the outdoors, the spell gives you knowledge of the land within 3 miles of you. In caves and other natural underground settings, the radius is limited to 300 feet. The spell doesn't function where nature has been replaced by construction, such as in dungeons and towns.<br /><br />You instantly gain knowledge of up to three facts of your choice about any of the following subjects as they relate to the area:<br />- terrain and bodies of water<br />- prevalent plants, minerals, animals, or peoples<br />- powerful celestials, fey, fiends, elementals, or undead<br />- influence from other planes of existence<br />- buildings<br />For example, you could determine the location of powerful undead in the area, the location of major sources of safe drinking water, and the location of any nearby towns.",
      higher_level: null,
      school: "divination",
      range: "5 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 Minute",
      duration: "1 Minute",
      concentration: false,
      ritual: true
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Comprehend Languages",
    level: 1,
    type: "utility",
    tag: ("Bard", "Sorcerer", "Warlock", "wizard"),
    description: {
      desc: 
        "For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text.<br /><br />This spell doesn't decode secret messages in a text or a glyph, such as an arcane sigil, that isn't part of a written language.",
      higher_level: null,
      school: "divination",
      range: "5 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: null,
        onSuccess: null
      },
      castingTime: "1 Action",
      duration: "1 Hour",
      concentration: false,
      ritual: true
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Compulsion",
    level: 4,
    type: "utility",
    tag: ("Bard"),
    description: {
      desc: 
        "Creatures of your choice that you can see within range and that can hear you must make a wisdom saving throw. A target automatically succeeds on this saving throw if it can't be charmed. On a failed save, a target is affected by this spell. Until the spell ends, you can use a bonus action on each of your turns to designate a direction that is horizontal to you. Each affected target must use as much of its movement as possible to move in that direction on its next turn. It can take any action before it moves. After moving in this way, it can make another Wisdom save to try to end the effect.<br /><br />A target isn't compelled to move into an obviously deadly hazard, such as a fire or a pit, but it will provoke opportunity attacks to move in the designated direction.",
      higher_level: null,
      school: "enchantment",
      range: "30 feet",
      areaOfEffect: {
        type: null,
        size: null
      },
      dc: {
        type: "wis",
        onSuccess: "none"
      },
      castingTime: "1 Action",
      duration: "1 Minute",
      concentration: true,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },
  {
    name: "Cone of Cold",
    level: 5,
    type: "damage",
    tag: ("Druid","Sorcerer", "wizard"),
    description: {
      desc: 
        "A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one.<br /><br />A creature killed by this spell becomes a frozen statue until it thaws.",
      higher_level: 
        "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.",
      school: "evocation",
      range: "5 feet",
      areaOfEffect: {
        type: "cone",
        size: 60
      },
      dc: {
        type: "con",
        onSuccess: "half"
      },
      castingTime: "1 Action",
      duration: "Instantaneous",
      concentration: false,
      ritual: false
    },
    damage: {
      type: "cold",
      attackType: "ranged"
    }
  },
  {
    name: "Confusion",
    level: 4,
    type: "debuff",
    tag: ("Bard","Druid","Sorcerer", "wizard"),
    description: {
      desc: 
        "This spell assails and distorts the minds of creatures, generating illusions and causing uncontrolled actions. Each creature in a sphere of 10-foot-radius centered on a point chosen in the range of the spell must make a wisdom saving throw otherwise it will be affected by the spell.<br /><br />An affected target can react and it must start at the beginning of 1d10 each of his game rounds to determine its behavior for that round.<br />At the end of each turn, an affected creature can make a saving throw of Wisdom. If successful, the effect of the spell ends for this target.",
      "higher_level": 
        "When you cast this spell using a level spell slot 5 or more, the radius of the sphere increases by 5 feet for each level of higher spell slot to 4.",
      school: "enchantment",
      range: "90 feet",
      areaOfEffect: {
        type: "sphere",
        size: 10
      },
      dc: {
        type: "wis",
        onSuccess: "none"
      },
      castingTime: "1 Action",
      duration: "1 Minute",
      concentration: true,
      ritual: false
    },
    damage: {
      type: null,
      attackType: null
    }
  },

    {
        name: "Conjure Animals",
        level: 3,
        type: "utility",
        tag: ("ranger", "druid"),
        description: {
          desc: 
            "You summon fey spirits that take the form of beasts and appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears:<br />- One beast of challenge rating 2 or lower<br />- Two beasts of challenge rating 1 or lower<br />- Four beasts of challenge rating 1/2 or lower<br />- Eight beasts of challenge rating 1/4 or lower<br />- Each beast is also considered fey, and it disappears when it drops to 0 hit points or when the spell ends.<br />The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.<br />The DM has the creatures' statistics.",
          higherLevel: "When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 5th-level slot, three times as many with a 7th-level.",
          school: "Conjuration",
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
        name: "Conjure Celestial",
        level: 7,
        type: "utility",
        tag: ("cleric"),
        description: {
          desc: 
            "You summon a celestial of challenge rating 4 or lower, which appears in an unoccupied space that you can see within range. The celestial disappears when it drops to 0 hit points or when the spell ends.<br />The celestial is friendly to you and your companions for the duration. Roll initiative for the celestial, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don't violate its alignment. If you don't issue any commands to the celestial, it defends itself from hostile creatures but otherwise takes no actions.<br />The DM has the celestial's statistics.",
          higherLevel: "When you cast this spell using a 9th-level spell slot, you summon a celestial of challenge rating 5 or lower.",
          school: "Conjuration",
          range: "90 feet",
          areaOfEffect: {
            type: null,
            size: null
          },
          dc: {
            type: null,
            onSuccess: null
          },
          castingTime: "1 minute",
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
        name: "Conjure Elemental",
        level: 5,
        type: "utility",
        tag: ("wizard", "druid"),
        description: {
          desc: 
            "You call forth an elemental servant. Choose an area of air, earth, fire, or water that fills a 10-foot cube within range. An elemental of challenge rating 5 or lower appropriate to the area you chose appears in an unoccupied space within 10 feet of it. For example, a fire elemental emerges from a bonfire, and an earth elemental rises up from the ground. The elemental disappears when it drops to 0 hit points or when the spell ends.<br />The elemental is friendly to you and your companions for the duration. Roll initiative for the elemental, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you don't issue any commands to the elemental, it defends itself from hostile creatures but otherwise takes no actions.<br /><br />If your concentration is broken, the elemental doesn't disappear. Instead, you lose control of the elemental, it becomes hostile toward you and your companions, and it might attack. An uncontrolled elemental can't be dismissed by you, and it disappears 1 hour after you summoned it.<br /><br />The DM has the elemental's statistics.",
          higherLevel: "When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th.",
          school: "Conjuration",
          range: "90 feet",
          areaOfEffect: {
            type: "cube",
            size: 10
          },
          dc: {
            type: null,
            onSuccess: null
          },
          castingTime: "1 minute",
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
        name: "Conjure Fey",
        level: 6,
        type: "utility",
        tag: ("druid", "warlock"),
        description: {
          desc: 
            "You summon a fey creature of challenge rating 6 or lower, or a fey spirit that takes the form of a beast of challenge rating 6 or lower. It appears in an unoccupied space that you can see within range. The fey creature disappears when it drops to 0 hit points or when the spell ends.<br /><br />The fey creature is friendly to you and your companions for the duration. Roll initiative for the creature, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don't violate its alignment. If you don't issue any commands to the fey creature, it defends itself from hostile creatures but otherwise takes no actions.<br /><br />If your concentration is broken, the fey creature doesn't disappear. Instead, you lose control of the fey creature, it becomes hostile toward you and your companions, and it might attack. An uncontrolled fey creature can't be dismissed by you, and it disappears 1 hour after you summoned it.<br /><br />The DM has the fey creature's statistics.",
          higherLevel: "When you cast this spell using a spell slot of 7th level or higher, the challenge rating increases by 1 for each slot level above 6th.",
          school: "Conjuration",
          range: "90 feet",
          areaOfEffect: {
            type: null,
            size: null
          },
          dc: {
            type: null,
            onSuccess: null
          },
          castingTime: "1 minute",
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
        name: "Conjure Minor Elementals",
        level: 4,
        type: "utility",
        tag: ("wizard", "druid"),
        description: {
          desc: 
            "You summon elementals that appear in unoccupied spaces that you can see within range. You choose one the following options for what appears:<br />- One elemental of challenge rating 2 or lower<br />- Two elementals of challenge rating 1 or lower<br />- Four elementals of challenge rating 1/2 or lower<br />- Eight elementals of challenge rating 1/4 or lower.<br />An elemental summoned by this spell disappears when it drops to 0 hit points or when the spell ends.<br /><br />The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.<br /><br />The DM has the creatures' statistics.",
          higherLevel: "When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot and three times as many with an 8th-level slot.",
          school: "Conjuration",
          range: "90 feet",
          areaOfEffect: {
            type: null,
            size: null
          },
          dc: {
            type: null,
            onSuccess: null
          },
          castingTime: "1 minute",
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
        name: "Conjure Woodland Beings",
        level: 4,
        type: "utility",
        tag: ("cleric", "ranger"),
        description: {
          desc: 
            "You summon fey creatures that appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears:<br />- One fey creature of challenge rating 2 or lower<br />- Two fey creatures of challenge rating 1 or lower<br />- Four fey creatures of challenge rating 1/2 or lower<br />- Eight fey creatures of challenge rating 1/4 or lower<br /><br />A summoned creature disappears when it drops to 0 hit points or when the spell ends.<br /><br />The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which have their own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.<br /><br />The DM has the creatures' statistics.",
          higherLevel: "When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot and three times as many with an 8th-level slot.",
          school: "Conjuration",
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
        name: "Contact Other Plane",
        level: 5,
        type: "utility",
        tag: ("warlock", "wizard"),
        description: {
          desc: 
            "You mentally contact a demigod, the spirit of a long-dead sage, or some other mysterious entity from another plane. Contacting this extraplanar intelligence can strain or even break your mind. When you cast this spell, make a DC 15 intelligence saving throw. On a failure, you take 6d6 psychic damage and are insane until you finish a long rest. While insane, you can't take actions, can't understand what other creatures say, can't read, and speak only in gibberish. A greater restoration spell cast on you ends this effect.<br /><br />On a successful save, you can ask the entity up to five questions. You must ask your questions before the spell ends. The DM answers each question with one word, such as \"yes,\" \"no,\" \"maybe,\" \"never,\" \"irrelevant,\" or \"unclear\" (if the entity doesn't know the answer to the question). If a one-word answer would be misleading, the DM might instead offer a short phrase as an answer.",
          higherLevel: null,
          school: "divination",
          range: "Self",
          areaOfEffect: {
            type: null,
            size: null
          },
          dc: {
            type: "int",
            onSuccess: "On a failure, you take 6d6 psychic damage and are insane until you finish a long rest."
          },
          castingTime: "1 minute",
          duration: "1 minute",
          concentration: false,
          ritual: true
    
        },
        damage: {
          type: null,
          attackType: null
        }
      },
    {
        name: "Contagion",
        level: 5,
        type: "damage",
        tag: ("cleric", "druid"),
        description: {
          desc: 
            "Your touch inflicts disease. Make a melee spell attack against a creature within your reach. On a hit, you afflict the creature with a disease of your choice from any of the ones described below.<br /><br />At the end of each of the target's turns, it must make a constitution saving throw. After failing three of these saving throws, the disease's effects last for the duration, and the creature stops making these saves. After succeeding on three of these saving throws, the creature recovers from the disease, and the spell ends.<br /><br />Since this spell induces a natural disease in its target, any effect that removes a disease or otherwise ameliorates a disease's effects apply to it.<br /><br />Blinding Sickness.<br />Pain grips the creature's mind, and its eyes turn milky white. The creature has disadvantage on wisdom checks and wisdom saving throws and is blinded.<br /><br />Filth Fever.<br />A raging fever sweeps through the creature's body. The creature has disadvantage on strength checks, strength saving throws, and attack rolls that use Strength.<br /><br />Flesh Rot.<br />The creature's flesh decays. The creature has disadvantage on Charisma checks and vulnerability to all damage.<br /><br />Mindfire.<br />The creature's mind becomes feverish. The creature has disadvantage on intelligence checks and intelligence saving throws, and the creature behaves as if under the effects of the confusion spell during combat.<br /><br />Seizure.<br />The creature is overcome with shaking. The creature has disadvantage on dexterity checks, dexterity saving throws, and attack rolls that use Dexterity.<br /><br />Slimy Doom.<br />The creature begins to bleed uncontrollably. The creature has disadvantage on constitution checks and constitution saving throws. In addition, whenever the creature takes damage, it is stunned until the end of its next turn.",
          higherLevel: null,
          school: "Necromancy",
          range: "touch",
          areaOfEffect: {
            type: null,
            size: null
          },
          dc: {
            type: "con",
            onSuccess: "After succeeding on three of these saving throws, the creature recovers from the disease, and the spell ends."
          },
          castingTime: "1 action",
          duration: "7 days",
          concentration: false,
          ritual: false
    
        },
        damage: {
          type: "Poison",
          attackType: "melee"
        }
      },
    {
        name: "Contingency",
        level: 6,
        type: "utility",
        tag: ("cwizard"),
        description: {
          desc: 
            "Choose a spell of 5th level or lower that you can cast, that has a casting time of 1 action, and that can target you. You cast that spell--called the contingent spell--as part of casting contingency, expending spell slots for both, but the contingent spell doesn't come into effect. Instead, it takes effect when a certain circumstance occurs. You describe that circumstance when you cast the two spells. For example, a contingency cast with water breathing might stipulate that water breathing comes into effect when you are engulfed in water or a similar liquid.<br /><br />The contingent spell takes effect immediately after the circumstance is met for the first time, whether or not you want it to. and then contingency ends.<br /><br />The contingent spell takes effect only on you, even if it can normally target others. You can use only one contingency spell at a time. If you cast this spell again, the effect of another contingency spell on you ends. Also, contingency ends on you if its material component is ever not on your person.",
          higherLevel: null,
          school: "Evocation",
          range: "Self",
          areaOfEffect: {
            type: null,
            size: null
          },
          dc: {
            type: null,
            onSuccess: null
          },
          castingTime: "10 minutes",
          duration: "10 days",
          concentration: false,
          ritual: false
    
        },
        damage: {
          type: null,
          attackType: null
        }
      },
    {
        name: "Continual Flame",
        level: 2,
        type: "utility",
        tag: ("cleric", "wizard"),
        description: {
          desc:  [
            "A flame, equivalent in brightness to a torch, springs forth from an object that you touch. The effect looks like a regular flame, but it creates no heat and doesn't use oxygen. A continual flame can be covered or hidden but not smothered or quenched."
          ],
          higherLevel: null,
          school: "Evocation",
          range: "Touch",
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
        name: "Control Water",
        level: 4,
        type: "damage",
        tag: ("cleric", "druid", "wizard"),
        description: {
          desc: 
            "Until the spell ends, you control any freestanding water inside an area you choose that is a cube up to 100 feet on a side. You can choose from any of the following effects when you cast this spell. As an action on your turn, you can repeat the same effect or choose a different one.<br /><br />Flood.<br />You cause the water level of all standing water in the area to rise by as much as 20 feet. If the area includes a shore, the flooding water spills over onto dry land.<br />Instead create a 20-foot tall wave that travels from one side of the area to the other and then crashes down. Any Huge or smaller vehicles in the wave's path are carried with it to the other side. Any Huge or smaller vehicles struck by the wave have a 25 percent chance of capsizing.<br /><br />The water level remains elevated until the spell ends or you choose a different effect. If this effect produced a wave, the wave repeats on the start of your next turn while the flood effect lasts.<br /><br />Part Water<br />You cause water in the area to move apart and create a trench. The trench extends across the spell's area, and the separated water forms a wall to either side. The trench remains until the spell ends or you choose a different effect. The water then slowly fills in the trench over the course of the next round until the normal water level is restored.<br /><br />Redirect Flow.<br />You cause flowing water in the area to move in a direction you choose, even if the water has to flow over obstacles, up walls, or in other unlikely directions. The water in the area moves as you direct it, but once it moves beyond the spell's area, it resumes its flow based on the terrain conditions. The water continues to move in the direction you chose until the spell ends or you choose a different effect.<br /><br />Whirlpool.<br />This effect requires a body of water at least 50 feet square and 25 feet deep. You cause a whirlpool to form in the center of the area. The whirlpool forms a vortex that is 5 feet wide at the base, up to 50 feet wide at the top, and 25 feet tall. Any creature or object in the water and within 25 feet of the vortex is pulled 10 feet toward it. A creature can swim away from the vortex by making a Strength (Athletics) check against your spell save DC.<br /><br />When a creature enters the vortex for the first time on a turn or starts its turn there, it must make a strength saving throw. On a failed save, the creature takes 2d8 bludgeoning damage and is caught in the vortex until the spell ends. On a successful save, the creature takes half damage, and isn't caught in the vortex. A creature caught in the vortex can use its action to try to swim away from the vortex as described above, but has disadvantage on the Strength (Athletics) check to do so.<br /><br />The first time each turn that an object enters the vortex, the object takes 2d8 bludgeoning damage; this damage occurs each round it remains in the vortex.",
          higherLevel: null,
          school: "Transmutation",
          range: "300 feet",
          areaOfEffect: {
            type: "cube",
            size: 100
          },
          dc: {
            type: "STR",
            onSuccess: "half"
          },
          castingTime: "1 action",
          duration: "Up to 10 minutes",
          concentration: true,
          ritual: false
    
        },
        damage: {
          type: "Bludgeoning",
          attackType: "bludgeoning"
        }
      },
      {
        name: "Control Weather",
        level: 8,
        type: "utility",
        tag: ("cleric", "wizard", "druid"),
        description: {
          desc:  [
            "You take control of the weather within 5 miles of you for the duration. You must be outdoors to cast this spell. Moving to a place where you don't have a clear path to the sky ends the spell early.",
            "When you cast the spell, you change the current weather conditions, which are determined by the DM based on the climate and season. You can change precipitation, temperature, and wind. It takes 1d4 x 10 minutes for the new conditions to take effect. Once they do so, you can change the conditions again. When the spell ends, the weather gradually returns to normal.",
            "When you change the weather conditions, find a current condition on the following tables and change its stage by one, up or down. When changing the wind, you can change its direction."
          ],
          higherLevel: null,
          school: "Transmutation",
          range: "Self",
          areaOfEffect: {
            type: null,
            size: null
          },
          dc: {
            type: null,
            onSuccess: null
          },
          castingTime: "10 minutes",
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
        name: "Counterspell",
        level: 3,
        type: "utility",
        tag: ("sorcerer", "wizard", "warlock"),
        description: {
          desc: 
            "You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a success, the creature's spell fails and has no effect.",
          higherLevel: "When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used.",
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
          castingTime: "1 reaction",
          duration: "Instantaneous",
          concentration: true,
          ritual: false
    
        },
        damage: {
          type: null,
          attackType: null
        }
      },
      {
        name: "Create or Destroy Water",
        level: 1,
        type: "utility",
        tag: ("cleric", "druid"),
        description: {
          desc: 
            "You either create or destroy water.<br /><br />Create Water.<br />You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 30-foot cube within range.<br /><br />Destroy Water.<br />You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 30-foot cube within range.",
          higherLevel: "When you cast this spell using a spell slot of 2nd level or higher, you create or destroy 10 additional gallons of water, or the size of the cube increases by 5 feet, for each slot level above 1st.",
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
          duration: "Instantaneous",
          concentration: false,
          ritual: false
    
        },
        damage: {
          type: null,
          attackType: null
        }
      },




























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
      desc: 
		"You touch a dead creature that has been dead for no more than a century, that didn't die of old age, and that isn't undead. If its soul is free and willing, the target returns to life with all its hit points.<br /><br />This spell neutralizes any poisons and cures normal diseases afflicting the creature when it died. It doesn't, however, remove magical diseases, curses, and the like; if such effects aren't removed prior to casting the spell, they afflict the target on its return to life.<br /><br />This spell closes all mortal wounds and restores any missing body parts.<br /><br />Coming back from the dead is an ordeal. The target takes a -4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears.<br /><br />Casting this spell to restore life to a creature that has been dead for one year or longer taxes you greatly. Until you finish a long rest, you can't cast spells again, and you have disadvantage on all attack rolls, ability checks, and saving throws.",
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
      desc: 
		"You touch a length of rope that is up to 60 feet long. One end of the rope then rises into the air until the whole rope hangs perpendicular to the ground. At the upper end of the rope, an invisible entrance opens to an extradimensional space that lasts until the spell ends.<br /><br />The extradimensional space can be reached by climbing to the top of the rope. The space can hold as many as eight Medium or smaller creatures. The rope can be pulled into the space, making the rope disappear from view outside the space.<br /><br />Attacks and spells can't cross through the entrance into or out of the extradimensional space, but those inside can see out of it as if through a 3-foot-by-5-foot window centered on the rope.<br /><br />Anything inside the extradimensional space drops out when the spell ends.",
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
      desc: 
		"You can see and hear a particular creature you choose that is on the same plane of existence as you. The target must make a wisdom saving throw, which is modified by how well you know the target and the sort of physical connection you have to it. If a target knows you're casting this spell, it can fail the saving throw voluntarily if it wants to be observed.<br /><br />Knowledge & Save Modifier<br /><br />Secondhand (you have heard of the target) +5<br />Firsthand (you have met the target) +0<br />Familiar (you know the target well) -5<br />Connection & Save Modifier<br />Likeness or picture -2<br />Possession or garment -4<br />Body part, lock of hair, bit of nail, or the like -10<br />On a successful save, the target isn't affected, and you can't use this spell against it again for 24 hours.<br />On a failed save, the spell creates an invisible sensor within 10 feet of the target. You can see and hear through the sensor as if you were there. The sensor moves with the target, remaining within 10 feet of it for the duration. A creature that can see invisible objects sees the sensor as a luminous orb about the size of your fist.<br /><br />Instead of targeting a creature, you can choose a location you have seen before as the target of this spell. When you do, the sensor appears at that location and doesn't move.",
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
      desc: 
		"You hide a chest, and all its contents, on the Ethereal Plane. You must touch the chest and the miniature replica that serves as a material component for the spell. The chest can contain up to 12 cubic feet of nonliving material (3 feet by 2 feet by 2 feet).<br /><br />While the chest remains on the Ethereal Plane, you can use an action and touch the replica to recall the chest. It appears in an unoccupied space on the ground within 5 feet of you. You can send the chest back to the Ethereal Plane by using an action and touching both the chest and the replica.<br /><br />After 60 days, there is a cumulative 5 percent chance per day that the spell's effect ends. This effect ends if you cast this spell again, if the smaller replica chest is destroyed, or if you choose to end the spell as an action. If the spell ends and the larger chest is on the Ethereal Plane, it is irretrievably lost.",
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
      desc:
		"This spell allows you to change the appearance of any number of creatures that you can see within range. You give each target you choose a new, illusory appearance. An unwilling target can make a charisma saving throw, and if it succeeds, it is unaffected by this spell.<br /><br />The spell disguises physical appearance as well as clothing, armor, weapons, and equipment. You can make each creature seem 1 foot shorter or taller and appear thin, fat, or in between. You can't change a target's body type, so you must choose a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The spell lasts for the duration, unless you use your action to dismiss it sooner.<br /><br />The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to a creature's outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel the creature's head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.<br /><br />A creature can use its action to inspect a target and make an Intelligence (Investigation) check against your spell save DC. If it succeeds, it becomes aware that the target is disguised.",
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
      desc: 
		"By means of this spell, a willing creature or an object can be hidden away, safe from detection for the duration. When you cast the spell and touch the target, it becomes invisible and can't be targeted by divination spells or perceived through scrying sensors created by divination spells.<br /><br />If the target is a creature, it falls into a state of suspended animation. Time ceases to flow for it, and it doesn't grow older.<br /><br />You can set a condition for the spell to end early. The condition can be anything you choose, but it must occur or be visible within 1 mile of the target. Examples include \"after 1,000 years\" or \"when the tarrasque awakens.\" This spell also ends if the target takes any damage.",
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
      desc: 
		"You assume the form of a different creature for the duration. The new form can be of any creature with a challenge rating equal to your level or lower. The creature can't be a construct or an undead, and you must have seen the sort of creature at least once. You transform into an average example of that creature, one without any class levels or the Spellcasting trait.<br /><br />Your game statistics are replaced by the statistics of the chosen creature, though you retain your alignment and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus listed in its statistics is higher than yours, use the creature's bonus in place of yours. You can't use any legendary actions or lair actions of the new form.<br /><br />You assume the hit points and Hit Dice of the new form. When you revert to your normal form, you return to the number of hit points you had before you transformed. If you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.<br /><br />You retain the benefit of any features from your class, race, or other source and can use them, provided that your new form is physically capable of doing so. You can't use any special senses you have (for example, darkvision) unless your new form also has that sense. You can only speak if the creature can normally speak.<br /><br />When you transform, you choose whether your equipment falls to the ground, merges into the new form, or is worn by it. Worn equipment functions as normal. The DM determines whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change shape or size to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge into your new form. Equipment that merges has no effect in that state.<br /><br />During this spell's duration, you can use your action to assume a different form following the same restrictions and rules for the original form, with one exception: if your new form has more hit points than your current one, your hit points remain at their current value.",
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
      desc: 
		"You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn't accompanied by sound, smell, or other sensory effects.<br /><br />You can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.<br /><br />Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image.",
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
      desc: 
		"You shape an illusory duplicate of one beast or humanoid that is within range for the entire casting time of the spell. The duplicate is a creature, partially real and formed from ice or snow, and it can take actions and otherwise be affected as a normal creature. It appears to be the same as the original, but it has half the creature's hit point maximum and is formed without any equipment. Otherwise, the illusion uses all the statistics of the creature it duplicates.<br /><br />The simulacrum is friendly to you and creatures you designate. It obeys your spoken commands, moving and acting in accordance with your wishes and acting on your turn in combat. The simulacrum lacks the ability to learn or become more powerful, so it never increases its level or other abilities, nor can it regain expended spell slots.<br /><br />If the simulacrum is damaged, you can repair it in an alchemical laboratory, using rare herbs and minerals worth 100 gp per hit point it regains. The simulacrum lasts until it drops to 0 hit points, at which point it reverts to snow and melts instantly.<br /><br />If you cast this spell again, any currently active duplicates you created with this spell are instantly destroyed.",
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
      desc: 
		"This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures).<br /><br />Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.<br /><br />Undead and creatures immune to being charmed aren't affected by this spell.",
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
      desc: 
		"Until the spell ends, freezing rain and sleet fall in a 20-foot-tall cylinder with a 40-foot radius centered on a point you choose within range. The area is heavily obscured, and exposed flames in the area are doused.<br /><br />The ground in the area is covered with slick ice, making it difficult terrain. When a creature enters the spell's area for the first time on a turn or starts its turn there, it must make a dexterity saving throw. On a failed save, it falls prone.<br /><br />If a creature is concentrating in the spell's area, the creature must make a successful constitution saving throw against your spell save DC or lose concentration.",
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
      desc: 
		"You alter time around up to six creatures of your choice in a 40-foot cube within range. Each target must succeed on a wisdom saving throw or be affected by this spell for the duration.<br /><br />An affected target's speed is halved, it takes a -2 penalty to AC and dexterity saving throws, and it can't use reactions. On its turn, it can use either an action or a bonus action, not both. Regardless of the creature's abilities or magic items, it can't make more than one melee or ranged attack during its turn.<br /><br />If the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or higher, the spell doesn't take effect until the creature's next turn, and the creature must use its action on that turn to complete the spell. If it can't, the spell is wasted.<br /><br />A creature affected by this spell makes another wisdom saving throw at the end of its turn. On a successful save, the effect ends for it.",
      higherLevel: null,
      school: "Transmutation",
      range: "120 feet",
      areaOfEffect: {
        type: "cube",
        size: 40
      },
      dc: {
        type: "wis",
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
      desc: 
		"You grant the semblance of life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a mouth and can't be undead. The spell fails if the corpse was the target of this spell within the last 10 days.<br /><br />Until the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are hostile to it or it recognizes you as an enemy. This spell doesn't return the creature's soul to its body, only its animating spirit. Thus, the corpse can't learn new information, doesn't comprehend anything that has happened since it died, and can't speculate about future events.",
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
      desc: 
		"You imbue plants within 30 feet of you with limited sentience and animation, giving them the ability to communicate with you and follow your simple commands. You can question plants about events in the spell's area within the past day, gaining information about creatures that have passed, weather, and other circumstances.<br /><br />You can also turn difficult terrain caused by plant growth (such as thickets and undergrowth) into ordinary terrain that lasts for the duration. Or you can turn ordinary terrain where plants are present into difficult terrain that lasts for the duration, causing vines and branches to hinder pursuers, for example.<br /><br />Plants might be able to perform other tasks on your behalf, at the DM's discretion. The spell doesn't enable plants to uproot themselves and move about, but they can freely move branches, tendrils, and stalks.<br /><br />If a plant creature is in the area, you can communicate with it as if you shared a common language, but you gain no magical ability to influence it.<br /><br />This spell can cause the plants created by the entangle spell to release a restrained creature.",
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
      desc: 
		"The ground in a 20-foot radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels.<br /><br />The development of land is camouflaged to look natural. Any creature that does not see the area when the spell is spell casts must make a Wisdom (Perception) opposite the DD backup your fate or it does not recognize the dangerous nature of the ground before entering.",
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
      desc: 
		"You call forth spirits to protect you. They flit around you to a distance of 15 feet for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish.<br /><br />When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. An affected creature's speed is halved in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a wisdom saving throw. On a failed save, the creature takes 3d8 radiant damage (if you are good or neutral) or 3d8 necrotic damage (if you are evil). On a successful save, the creature takes half as much damage.",
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
      desc: 
		"You create a floating, spectral weapon within range that lasts for the duration or until you cast this spell again. When you cast the spell, you can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes force damage equal to 1d8 + your spellcasting ability modifier.<br /><br />As a bonus action on your turn, you can move the weapon up to 20 feet and repeat the attack against a creature within 5 feet of it.<br /><br />The weapon can take whatever form you choose. Clerics of deities who are associated with a particular weapon (as St. Cuthbert is known for his mace and Thor for his hammer) make this spell's effect resemble that weapon.",
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
      desc: 
		"You create a 20-foot-radius sphere of yellow, nauseating gas centered on a point within range. The cloud spreads around corners, and its area is heavily obscured. The cloud lingers in the air for the duration.<br /><br />Each creature that is completely within the cloud at the start of its turn must make a constitution saving throw against poison. On a failed save, the creature spends its action that turn retching and reeling. Creatures that don't need to breathe or are immune to poison automatically succeed on this saving throw.<br /><br />A moderate wind (at least 10 miles per hour) disperses the cloud after 4 rounds. A strong wind (at least 20 miles per hour) disperses it after 1 round.",
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
      desc: 
		"A churning storm cloud forms, centered on a point you can see and spreading to a radius of 360 feet. Lightning flashes in the area, thunder booms, and strong winds roar. Each creature under the cloud (no more than 5,000 feet beneath the cloud) when it appears must make a constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 5 minutes.<br /><br />Each round you maintain concentration on this spell, the storm produces additional effects on your turn.<br /><br />Round 2.<br />Acidic rain falls from the cloud. Each creature and object under the cloud takes 1d6 acid damage.<br /><br />Round 3.<br />You call six bolts of lightning from the cloud to strike six creatures or objects of your choice beneath the cloud. A given creature or object can't be struck by more than one bolt. A struck creature must make a dexterity saving throw. The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one.<br /><br />Round 4.<br />Hailstones rain down from the cloud. Each creature under the cloud takes 2d6 bludgeoning damage.<br /><br />Round 5-10.<br />Gusts and freezing rain assail the area under the cloud. The area becomes difficult terrain and is heavily obscured. Each creature there takes 1d6 cold damage. Ranged weapon attacks in the area are impossible. The wind and rain count as a severe distraction for the purposes of maintaining concentration on spells. Finally, gusts of strong wind (ranging from 20 to 50 miles per hour) automatically disperse fog, mists, and similar phenomena in the area, whether mundane or magical.",
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
      desc: 
		"You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell.<br /><br />The target must make a wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.<br /><br />You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a knight give her warhorse to the first beggar she meets. If the condition isn't met before the spell expires, the activity isn't performed.<br /><br />If you or any of your companions damage the target, the spell ends.",
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
      desc: 
		"A beam of brilliant light flashes out from your hand in a 5-foot-wide, 60-foot-long line. Each creature in the line must make a constitution saving throw. On a failed save, a creature takes 6d8 radiant damage and is blinded until your next turn. On a successful save, it takes half as much damage and isn't blinded by this spell. Undead and oozes have disadvantage on this saving throw.<br /><br />You can create a new line of radiance as your action on any turn until the spell ends.<br /><br />For the duration, a mote of brilliant radiance shines in your hand. It sheds bright light in a 30-foot radius and dim light for an additional 30 feet. This light is sunlight.",
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
      desc: 
		"Brilliant sunlight flashes in a 60-foot radius centered on a point you choose within range. Each creature in that light must make a constitution saving throw. On a failed save, a creature takes 12d6 radiant damage and is blinded for 1 minute. On a successful save, it takes half as much damage and isn't blinded by this spell. Undead and oozes have disadvantage on this saving throw.<br /><br />A creature blinded by this spell makes another constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded.<br /><br />This spell dispels any darkness in its area that was created by a spell.",
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
      desc: 
		"When you cast this spell, you inscribe a harmful glyph either on a surface (such as a section of floor, a wall, or a table) or within an object that can be closed to conceal the glyph (such as a book, a scroll, or a treasure chest). If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place; if the object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.<br /><br />The glyph is nearly invisible, requiring an Intelligence (Investigation) check against your spell save DC to find it.<br /><br />You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or stepping on the glyph, removing another object covering it, approaching within a certain distance of it, or manipulating the object that holds it. For glyphs inscribed within an object, the most common triggers are opening the object, approaching within a certain distance of it, or seeing or reading the glyph.<br /><br />You can further refine the trigger so the spell is activated only under certain circumstances or according to a creature's physical characteristics (such as height or weight), or physical kind (for example, the ward could be set to affect hags or shapechangers). You can also specify creatures that don't trigger the glyph, such as those who say a certain password.<br /><br />When you inscribe the glyph, choose one of the options below for its effect. Once triggered, the glyph glows, filling a 60-foot-radius sphere with dim light for 10 minutes, after which time the spell ends. Each creature in the sphere when the glyph activates is targeted by its effect, as is a creature that enters the sphere for the first time on a turn or ends its turn there.<br /><br />Death.<br />Each target must make a constitution saving throw, taking 10d 10 necrotic damage on a failed save, or half as much damage on a successful save.<br /><br />Discord.<br />Each target must make a constitution saving throw. On a failed save, a target bickers and argues with other creatures for 1 minute. During this time, it is incapable of meaningful communication and has disadvantage on attack rolls and ability checks.<br /><br />Fear.<br />Each target must make a wisdom saving throw and becomes frightened for 1 minute on a failed save. While frightened, the target drops whatever it is holding and must move at least 30 feet away from the glyph on each of its turns, if able.<br /><br />Hopelessness.<br />Each target must make a charisma saving throw. On a failed save, the target is overwhelmed with despair for 1 minute. During this time, it can't attack or target any creature with harmful abilities, spells, or other magical effects.<br /><br />Insanity.<br />Each target must make an intelligence saving throw. On a failed save, the target is driven insane for 1 minute. An insane creature can't take actions, can't understand what other creatures say, can't read, and speaks only in gibberish. The DM controls its movement, which is erratic.<br /><br />Pain.<br />Each target must make a constitution saving throw and becomes incapacitated with excruciating pain for 1 minute on a failed save.<br /><br />Sleep.<br />Each target must make a wisdom saving throw and falls unconscious for 10 minutes on a failed save. A creature awakens if it takes damage or if someone uses an action to shake or slap it awake.<br /><br />Stunning.<br />Each target must make a wisdom saving throw and becomes stunned for 1 minute on a failed save.",
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
      desc: 
		"You gain the ability to move or manipulate creatures or objects by thought. When you cast the spell, and as your action each round for the duration, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round, or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell.<br /><br />Creature.<br />You can try to move a Huge or smaller creature. Make an ability check with your spellcasting ability contested by the creature's Strength check. If you win the contest, you move the creature up to 30 feet in any direction, including upward but not beyond the range of this spell. Until the end of your next turn, the creature is restrained in your telekinetic grip. A creature lifted upward is suspended in mid-air.<br />On subsequent rounds, you can use your action to attempt to maintain your telekinetic grip on the creature by repeating the contest.<br /><br />Object.<br />You can try to move an object that weighs up to 1,000 pounds. If the object isn't being worn or carried, you automatically move it up to 30 feet in any direction, but not beyond the range of this spell.<br /><br />If the object is worn or carried by a creature, you must make an ability check with your spellcasting ability contested by that creature's Strength check. If you succeed, you pull the object away from that creature and can move it up to 30 feet in any direction but not beyond the range of this spell.<br /><br />You can exert fine control on objects with your telekinetic grip, such as manipulating a simple tool, opening a door or a container, stowing or retrieving an item from an open container, or pouring the contents from a vial.",
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
      desc: 
		"You forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Creatures with Intelligence scores of 2 or less aren't affected by this spell.<br /><br />Until the spell ends, the targets can communicate telepathically through the bond whether or not they have a common language. The communication is possible over any distance, though it can't extend to other planes of existence.",
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
      desc: 
		"This spell instantly transports you and up to eight willing creatures of your choice that you can see within range, or a single object that you can see within range, to a destination you select. If you target an object, it must be able to fit entirely inside a 10-foot cube, and it can't be held or carried by an unwilling creature.<br /><br />The destination you choose must be known to you, and it must be on the same plane of existence as you. Your familiarity with the destination determines whether you arrive there successfully. The DM rolls d100 and consults the table.",
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
      desc: 
		"As you cast the spell, you draw a 10-foot-diameter circle on the ground inscribed with sigils that link your location to a permanent teleportation circle of your choice whose sigil sequence you know and that is on the same plane of existence as you. A shimmering portal opens within the circle you drew and remains open until the end of your next turn. Any creature that enters the portal instantly appears within 5 feet of the destination circle or in the nearest unoccupied space if that space is occupied.<br /><br />Many major temples, guilds, and other important places have permanent teleportation circles inscribed somewhere within their confines. Each such circle includes a unique sigil sequence--a string of magical runes arranged in a particular pattern. When you first gain the ability to cast this spell, you learn the sigil sequences for two destinations on the Material Plane, determined by the DM. You can learn additional sigil sequences during your adventures. You can commit a new sigil sequence to memory after studying it for 1 minute.<br /><br />You can create a permanent teleportation circle by casting this spell in the same location every day for one year. You need not use the circle to teleport when you cast the spell in this way.",
      higherLevel: null,
      school: "Conjuration",
      range: "10 feet",
      areaOfEffect: {
        type: "sphere",
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
      desc: 
		"You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range.<br />- Your voice booms up to three times as loud as normal for 1 minute.<br />- You cause flames to flicker, brighten, dim, or change color for 1 minute.<br />- You cause harmless tremors in the ground for 1 minute.<br />- You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.<br />- You instantaneously cause an unlocked door or window to fly open or slam shut.<br />- You alter the appearance of your eyes for 1 minute.<br /><br />If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action.",
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
      desc: 
		"A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed.<br /><br />In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet.",
      higherLevel: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
      school: "Evocation",
      range: "self",
      areaOfEffect: {
        type: "cube",
        size: 15
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
      attackType: "ranged"
    }
  },
    {
    name: "Time Stop",
    level: 9,
    type: "utility",
    tag: ("wizard", "sorcerer"),
    description: {
      desc: 
		"You briefly stop the flow of time for everyone but yourself. No time passes for other creatures, while you take 1d4 + 1 turns in a row, during which you can use actions and move as normal.<br /><br />This spell ends if one of the actions you use during this period, or any effects that you create during this period, affects a creature other than you or an object being worn or carried by someone other than you. In addition, the spell ends if you move to a place more than 1,000 feet from the location where you cast it.",
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
      desc: 
		"A 10-foot-radius immobile dome of force springs into existence around and above you and remains stationary for the duration. The spell ends if you leave its area.<br /><br />Nine creatures of Medium size or smaller can fit inside the dome with you. The spell fails if its area includes a larger creature or more than nine creatures. Creatures and objects within the dome when you cast this spell can move through it freely. All other creatures and objects are barred from passing through it. Spells and other magical effects can't extend through the dome or be cast through it. The atmosphere inside the space is comfortable and dry, regardless of the weather outside.<br /><br />Until the spell ends, you can command the interior to become dimly lit or dark. The dome is opaque from the outside, of any color you choose, but it is transparent from the inside.",
      higherLevel: null,
      school: "Evocation",
      range: "self",
      areaOfEffect: {
        type: "sphere",
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
      desc: 
		"This spell creates a magical link between a Large or larger inanimate plant within range and another plant, at any distance, on the same plane of existence. You must have seen or touched the destination plant at least once before. For the duration, any creature can step into the target plant and exit from the destination plant by using 5 feet of movement.",
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
      desc: 
		"You gain the ability to enter a tree and move from inside it to inside another tree of the same kind within 500 feet. Both trees must be living and at least the same size as you. You must use 5 feet of movement to enter a tree. You instantly know the location of all other trees of the same kind within 500 feet and, as part of the move used to enter the tree, can either pass into one of those trees or step out of the tree you're in. You appear in a spot of your choice within 5 feet of the destination tree, using another 5 feet of movement. If you have no movement left, you appear within 5 feet of the tree you entered.<br /><br />You can use this transportation ability once per round for the duration. You must end each turn outside a tree.",
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
      desc: "Choose one creature or nonmagical object that you can see within range. You transform the creature into a different creature, the creature into an object, or the object into a creature (the object must be neither worn nor carried by another creature). The transformation lasts for the duration, or until the target drops to 0 hit points or dies. If you concentrate on this spell for the full duration, the transformation becomes permanent.<br /><br />Shapechangers aren't affected by this spell. An unwilling creature can make a wisdom saving throw, and if it succeeds, it isn't affected by this spell.<br /><br />-Creature into Creature.<br />If you turn a creature into another kind of creature, the new form can be any kind you choose whose challenge rating is equal to or less than the target's (or its level, if the target doesn't have a challenge rating). The target's game statistics, including mental ability scores, are replaced by the statistics of the new form. It retains its alignment and personality.<br />The target assumes the hit points of its new form, and when it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious.<br />The creature is limited in the actions it can perform by the nature of its new form, and it can't speak, cast spells, or take any other action that requires hands or speech unless its new form is capable of such actions.<br />The target's gear melds into the new form. The creature can't activate, use, wield, or otherwise benefit from any of its equipment.<br /><br />-Object into Creature.<br />You can turn an object into any kind of creature, as long as the creature's size is no larger than the object's size and the creature's challenge rating is 9 or lower. The creature is friendly to you and your companions. It acts on each of your turns. You decide what action it takes and how it moves. The DM has the creature's statistics and resolves all of its actions and movement.<br />If the spell becomes permanent, you no longer control the creature. It might remain friendly to you, depending on how you have treated it.<br /><br />-Creature into Object.<br />If you turn a creature into an object, it transforms along with whatever it is wearing and carrying into that form. The creature's statistics become those of the object, and the creature has no memory of time spent in this form, after the spell ends and it returns to its normal form.",
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
        type: "dex",
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
        type: "wis",
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
]