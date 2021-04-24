/* Starts on page 106/293 or 112 of Players Handbook
*Cheat Sheet
Wizard
  desc
  classFeatures
  pros
  abilities
  subClass
    -a lot of stuff
*/

const wizard = {
  name: "Wizard",
  desc:
    "Wild and enigmatic, varied in form and function, the power of magic draws students who seek to master its mysteries. Some aspire to become like the gods, shaping reality itself. Though the casting of a typical spell requires merely the utterance of a few strange words, fleeting gestures, and sometimes a pinch or clump of exotic materials, these surface components barely hint at the expertise attained after years of apprenticeship and countless hours of study. Wizards live and die by their spells. Everything else is secondary. They learn new spells as they experiment and grow in experience. They can also learn them from other wizards, from ancient tomes or inscriptions, and from ancient creatures (such as the fey) that are steeped in magic.",

  classFeatures: [
    {
      name: "Hitpoints",
      desc:
        "At 1st Level: 6 + your Constitution modifier. Hit Points at Higher Levels: 1d 6 (or 4) + your Constitution modifier per wizard level after 1st",
    },
    {
      name: "Hit Dice",
      desc: "1d6 per wizard level.",
    },
  ],
  pros: [
    {
      name: "Armor",
      desc: "None",
    },
    {
      name: "Weapons",
      desc: "Daggers, darts, slings, quarterstaffs, light crossbows",
    },
    {
      name: "Tools",
      desc: "None",
    },
    {
      name: "Saving Throws",
      desc: "Intelligence, Wisdom",
    },
  ],
  abilities: [
    {
      name: "Arcane Recovery",
      level: 1,
      desc:
        "Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher. For example, if you’re a 4th-level wizard, you can recover up to two levels worth o f spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots.",
    },
    {
      name: "Ritual Casting",
      level: 1,
      desc:
        "You can cast a wizard spell as a ritual if that spell has the ritual tag and you havve the spell in your spellbook. You don't need to have the spell prepared.",
    },
    {
      name: "Learning Spells of 1st Level and Higher",
      level: 1,
      desc:
        "Each time you gain a wizard level, you can add two wizard spells of your choice to your spellbook. Each of these spells must be of a level for which you have spell slots, as shown on the Wizard table. On your adventures, you might find other spells that you can add to your spellbook (see the “Your Spellbook” sidebar.)",
    },
    {
      name: "Spell Mastery",
      level: 18,
      desc:
        "You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal. By spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels.",
    },
    {
      name: "Signature Spells",
      level: 20,
      desc:
        "You gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don’t count against the number of spells you have prepared, and you can cast each of them once at 3rd you can’t do so again until you finish a short or long rest. If you want to cast either spell at a higher level, you must expend a spell slot as normal.",
    },
  ],
  subClass: [
    {
      name: "Abjuration",
      desc:
        "Emphasizes magic that blocks, banishes, or protects. Detractors of this school say that its tradition is about denial, negation rather than positive assertion. You understand, however, that ending harmful effects, protecting the weak, and banishing evil influences is anything but a philosophical void. It is a proud and respected vocation. Called abjurers, members of this school are sought when baleful spirits require exorcism, when important locations must be guarded against magical spying, and when portals to other planes of existence must be closed.",
      abilities: [
        {
          name: "Abjuration Savant",
          level: 2,
          desc:
            "The gold and time you must spend to copy an abjuration  spell into your spellbook is halved.",
        },
        {
          name: "Arcane Ward",
          level: 2,
          desc:
            "You can weave magic around yourself for protection. When you cast an abjuration spell of 1st level or higher, you can simultaneously use a strand of the spell’s magic to create a magical ward on yourself that lasts until you finish a long rest. The ward has hit points equal to twice your wizard level + your Intelligence modifier. Whenever you take damage, the ward takes the damage instead. If this damage reduces the ward to 0 hit points, you take any remaining damage. While the ward has 0 hit points, it can’t absorb damage, but its magic remains. Whenever you cast an abjuration spell of 1st level or higher, the ward regains a number of hit points equal to twice the level of the spell. Once you create the ward, you can't create it again until you finish a long rest.",
        },
        {
          name: "Projected Ward",
          level: 6,
          desc:
            "When a creature that you can see within 30 feet of you takes damage, you can use your reaction to cause your Arcane Ward to absorb that  damage. If this damage reduces the ward to 0 hit points, the warded creature takes any remaining damage.",
        },
        {
          name: "Improved Abjuration",
          level: 10,
          desc:
            "When you cast an abjuration spell that requires you to make an ability check as a part of casting that spell (as in counterspell and dispel magic), you add your proficiency bonus to that ability check.",
        },
        {
          name: "Spell Resistance",
          level: 14,
          desc:
            "You have advantage on saving throws against spells. Furthermore, you have resistance against the damage of spells.",
        },
      ],
    },
    {
      name: "Conjuration",
      desc:
        "As a conjurer, you favor spells that produce objects and creatures out of thin air. You can conjure billowing clouds of killing fog or summon creatures from elsewhere to fight on your behalf. As your mastery grows, you learn spells of transportation and can teleport yourself across vast distances, even to other planes of existence, in an instant.",
      abilities: [
        {
          name: "Conjuraton Savant",
          level: 2,
          desc:
            "The gold and time you must spend to copy a conjuration spell into your spellbook is halved.",
        },
        {
          name: "Minor Conjuration",
          level: 2,
          desc:
            "You can use your action to conjure up an inanimate object in your hand or on the ground in an unoccupied space that you can see within 10 feet of you. This object can be no larger than 3 feet on a side and weigh no more than 10 pounds, and its form must be that of a non-magical object that you have seen. The object is visibly magical, radiating dim-light out to 5 feet. The object disappears after 1 hour, when you use this feature again, or if it takes any damage.",
        },
        {
          name: "Benign Transposition",
          level: 6,
          desc:
            "You can use your action to teleport up to 30 feet to an unoccupied space that you can see. Alternatively, you can choose a space within range that is occupied by a Small or Medium creature. If that creature is willing, you both teleport, swapping places. Once you use this feature, you can’t use it again until you finish a long rest or you cast a conjuration spell of 1st level or higher.",
        },
        {
          name: "Focused Conjuration",
          level: 10,
          desc:
            "While you are concentrating on a conjuration spell, your concentration can’t be broken as a result of taking damage.",
        },
        {
          name: "Durable Summons",
          level: 14,
          desc:
            "Any creature that you summon or create with a conjuration spell has 30 temporary hit points.",
        },
      ],
    },
    {
      name: "Divination",
      desc:
        "The counsel of a diviner is sought by royalty and commoners alike, for all seek a clearer understanding of the past, present, and future. As a diviner, you strive to part the veils of space, time, and consciousness so that you can see clearly. You work to master spells of discernment, remote viewing, supernatural knowledge, and foresight.",
      abilities: [
        {
          name: "Divination Savant",
          level: 2,
          desc:
            "The gold and time you must spend to copy a divination spell into your spellbook is halved.",
        },
        {
          name: "Potent",
          level: 2,
          desc:
            "When you finish a long rest, roll two d20s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn. Each finish a long rest, you lose any unused foretelling rolls.",
        },
        {
          name: "Expert Divination",
          level: 6,
          desc:
            "When you cast a divination spell of 2nd level or higher using a spell slot, you regain one expended spell slot. The slot you regain must be of a level lower than the spell you cast and can’t be higher than 5th level.",
        },
        {
          name: "The Third Eye",
          level: 10,
          desc:
            "Choose one of the following benefits, which lasts until you are incapacitated or you take a short or long rest. You can’t use the feature again until you finish a rest. -Darkvision: You gain darkvision out to a range of 60 feet. -Ethereal Sight: You can see into the Ethereal Plane within 60 feet of you. -Greater Comprehension: You can read any language. -See Invisibility: You can see invisible creatures and objects within 10 feet of you that are within line of site.",
        },
        {
          name: "Greater Portent",
          level: 14,
          desc:
            "The visions in your dreams intensify and paint a more accurate picture in your mind of what is to come. You roll three d20s for your Portent feature, rather than two.",
        },
      ],
    },
    {
      name: "Enchantment",
      desc:
        "As a member of the Enchantment, you have honed your ability to magically entrance and beguile other people and monsters. Some enchanters are peacemakers who bewitch the violent to lay down their arms and charm the cruel into showing mercy. Others are tyrants who magically bind the unwilling into their service. Most enchanters fall somewhere in between.",
      abilities: [
        {
          name: "Enchantment Savant",
          level: 2,
          desc:
            "The gold and time you must spend to copy a enchantment spell into your spellbook is halved.",
        },
        {
          name: "Hypnotic Gaze",
          level: 2,
          desc:
            "As an action, choose one creature that you can see within 5 feet of you. If the target can see or hear you, it must succeed on a Wisdom saving throw against your wizard spell save DC or be charmed by you until the end of your next turn. The charmed creature’s speed drops to 0, and the creature is incapacitated and visibly dazed. On subsequent turns, you can use your action to maintain this effect, extending its duration until the end of your next turn. However, the effect ends if you move more than 5 feet away from the creature, if the creature can neither see nor hear you, or if the creature takes damage. Once the effect ends, or if the creature succeeds on its initial saving throw against this effect, you can’t use this feature on that creature again until you finish a long rest.",
        },
        {
          name: "Instinctive Charm",
          level: 6,
          desc:
            "When a creature you can see within 30 feet of you makes an attack roll against you, you can use your reaction to divert the attack, provided that another creature is within the attack’s range. The attacker must make a Wisdom saving throw against your wizard spell save DC. On a failed save, the attacker must target the creature that is closest to it, not including you or itself. If multiple creatures are closest, the attacker chooses which one to target. On a successful save, you can’t use this feature on the attacker again until you finish a long rest. You must choose to use this feature before knowing whether the attack hits or misses. Creatures that can’t be charmed are immune to this effect. On a successful save, you can’t use this feature on the attacker again until you finish a long rest. You must choose to use this feature before knowing whether the attack hits or misses. Creatures that can’t be charmed are immune to this effect.",
        },
        {
          name: "Split Enchantment",
          level: 10,
          desc:
            "When you cast an enchantment spell of 1st level or higher that targets only one creature, you can have it target a second creature.",
        },
        {
          name: "Alter Memories",
          level: 14,
          desc:
            "You gain the ability to make a creature unaware of your magical influence on it. When you cast an enchantment spell to charm one or more creatures, you can alter one creature’s understanding so that it remains unaware of being charmed. Additionally, once before the spell expires, you can use your action to try to make the chosen creature forget some of the time it spent charmed. The creature must succeed on an Intelligence saving throw against your wizard spell save DC or lose a number of hours of its memories equal to 1 + your Charisma modifier (minimum 1). You can make the creature forget less time, and the amount of time can’t exceed the duration of your enchantment spell.",
        },
      ],
    },

    {
      name: "Evocation",
      desc:
        "You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak, while some seek their own gain as bandits, adventurers, or aspiring tyrants.",
      abilities: [
        {
          name: "Evocation Savant",
          level: 2,
          desc:
            "The gold and time you must spend to copy a evocation spell into your spellbook is halved.",
        },
        {
          name: "Sculpt Spells",
          level: 2,
          desc:
            "You can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell’s level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save.",
        },
        {
          name: "Potent Cantrip",
          level: 6,
          desc:
            "Your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip’s damage (if any) but suffers no additional effect from the cantrip.",
        },
        {
          name: "Empowered Evocation",
          level: 10,
          desc:
            "You can add your Intelligence modifier to the damage roll of any wizard evocation spell you cast.",
        },
        {
          name: "Overchannel",
          level: 14,
          desc:
            "You can increase the power of your simpler spells. When you cast a wizard spell of 5th level or lower that deals damage, you can deal maximum damage with that spell. The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d 12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity",
        },
      ],
    },
    {
      name: "Illusion",
      desc:
        "You focus your studies on magic that dazzles the senses, befuddles the mind, and tricks even the wisest folk. Your magic is subtle, but the illusions crafted by your keen mind make the impossible seem real. Some illusionists—including many gnome wizards—are benign tricksters who use their spells to entertain. Others are more sinister masters of deception, using their illusions to frighten and fool others for their personal gain.",
      abilities: [
        {
          name: "Illusion Savant",
          level: 2,
          desc:
            "The gold and time you must spend to copy a illusion spell into your spellbook is halved.",
        },
        {
          name: "Improved Minor Illusion",
          level: 2,
          desc:
            "You learn the minor illusion cantrip. If you already know this cantrip, you learn a different wizard cantrip of your choice. The cantrip doesn’t count against your number of cantrips known. When you cast minor illusion, you can create both a sound and an image with a single casting of the spell.",
        },
        {
          name: "Malleable Illusions",
          level: 6,
          desc:
            "When you cast an illusion spell that has a duration of 1 minute or longer, you can use your action to change the nature of that illusion (using the spell’s normal parameters for the illusion), provided that you can see the illusion.",
        },
        {
          name: "Illusory Self",
          level: 10,
          desc:
            "You can create an illusory duplicate of yourself as an instant, almost instinctual reaction to danger. When a creature makes an attack roll against you, you can use your reaction to interpose the illusory duplicate between the attacker and yourself. The attack automatically misses you, then the illusion dissipates. Once you use this feature, you can’t use it again until you finish a short or long rest",
        },
        {
          name: "Illusory Reality",
          level: 14,
          desc:
            "You have learned the secret of weaving shadow magic into your illusions to give them a semi-reality. When you cast an illusion spell of 1st level or higher, you can choose one inanimate, non-magical object that is part of the illusion and make that object real. You can do this on your turn as a bonus action while the spell is ongoing. The object remains real for 1 minute. For example, you can create an illusion of a bridge over a chasm and then make it real long enough for your allies to cross. The object can’t deal damage or otherwise directly harm anyone.",
        },
      ],
    },
    {
      name: "Necromancy",
      desc:
        "The Necromancy explores the cosmic forces of life, death, and undeath. As you focus your studies in this tradition, you learn to manipulate the energy that animates all living things. As you progress, you learn to sap the life force from a creature as your magic destroys its body, transforming that vital energy into magical power you can manipulate. Most people see necromancers as menacing, or even villainous, due to the close association with death. Not all necromancers are evil, but the forces they manipulate are considered taboo by many societies.",
      abilities: [
        {
          name: "Necromancy Savant",
          level: 2,
          desc:
            "The gold and time you must spend to copy a necromancy spell into your spellbook is halved.",
        },
        {
          name: "Grim Harvest",
          level: 2,
          desc:
            "You gain the ability to reap life energy from  creatures you kill with your spells. Once per turn when you kill one or more creatures with a spell of 1st level or higher, you regain hit points equal to twice the spell’s level, or three times its level if the spell belongs to the Necromancy. You don’t gain this benefit for killing constructs or undead.",
        },
        {
          name: "Undead Thralls",
          level: 6,
          desc:
            "You add the animate dead spell to your spellbook if it is not there already. When you cast animate dead, you can target one additional corpse or pile of bones, creating another zombie or skeleton, as appropriate. Whenever you create an undead using a necromancy spell, it has additional benefits: -The creature’s hit point maximum is increased by an amount equal to your wizard level. -The creature adds your proficiency bonus to its weapon damage rolls.",
        },
        {
          name: "Inured to Undeath",
          level: 10,
          desc:
            "You have resistance to necrotic damage, and your hit point maximum can't be reduced. You have spent so much time dealing with undead and the forces that animate them that you have become inured to some of their worst effects.",
        },
        {
          name: "Command Undead",
          level: 14,
          desc:
            "You can use magic to bring undead under your control, even those created by other wizards. As an action, you can choose one undead that you can see within 60 feet of you. That creature must make a Charisma saving throw against your wizard spell save DC. If it succeeds, you can’t use this feature on it again. If it fails, it becomes friendly to you and obeys your commands until you use this feature again. Intelligent undead are harder to control in this way. If the target has an Intelligence of 8 or higher, it has advantage on the saving throw. If it fails the saving throw and has an Intelligence of 12 or higher, it can repeat the saving throw at the end of every hour until it succeeds and breaks free.",
        },
      ],
    },
    {
      name: "Transmutation",
      desc:
        "You are a student of spells that modify energy and matter. To you, the world is not a fixed thing, but eminently mutable, and you delight in being an agent of change. You wield the raw stuff of creation and learn to alter both physical forms and mental qualities. Your magic gives you the tools to become a smith on reality’s forge. Some transmuters are tinkerers and pranksters, turning people into toads and transforming copper into silver for fun and occasional profit. Others pursue their magical studies with deadly seriousness, seeking the power of the gods to make and destroy worlds.",
      abilities: [
        {
          name: "Transmutation Savant",
          level: 2,
          desc:
            "The gold and time you must spend to copy a transmutation spell into your spellbook is halved.",
        },
        {
          name: "Minor Alchemy",
          level: 2,
          desc:
            "When you select this school, you can temporarily alter the physical properties of one non-magical object, changing it from one substance into another. You perform a special alchemical procedure on one object composed entirely of wood, stone (but not a gemstone), iron, copper, or silver, transforming it into a different one of those materials. For each 10 minutes you spend performing the procedure, you can transform up to 1 cubic foot of material. After 1 hour, or until you lose your concentration (as if you were concentrating on a spell), the material reverts to its original substance.",
        },
        {
          name: "Transmuter's Stone",
          level: 6,
          desc:
            "You can spend 8 hours creating a transmuter’s stone that stores transmutation magic. You can benefit from the stone yourself or give it to another creature. A creature gains a benefit of your choice as long as the stone is in the creature’s possession. When you create the stone, choose the benefit from the following options: -Darkvision out to a of 60ft. -An increase to speed of 10 feet while the creature is unencumbered. -Proficiency in Constitution saving throws. -Resistance to acid, cold, fire, lightning, or thunder damage (your choice whenever you choose this benefit).<br />*Each time you cast a transmutation spell of 1st level or higher, you can change the effect of your stone if the stone is on your person. If you create a new transmuter’s stone, the previous one ceases to function.",
        },
        {
          name: "Shapechanger",
          level: 10,
          desc:
            "You add the polymorph spell to your spellbook, if it is not there already. You can cast polymorph without expending a spell slot. When you do so, you can target only yourself and transform into a beast whose challenge rating is 1 or lower. Once you cast polymorph in this way, you can’t do so again until you finish a short or long rest, though you can still cast it normally using an available spell slot.",
        },
        {
          name: "Master Transmuter",
          level: 14,
          desc:
            "You can use your action to consume the reserve of transmutation magic stored within your transmuter’s stone in a single burst. When you do so, choose one of the following effects. Your transmuter’s stone is destroyed and can’t be remade until you finish a long rest. -Major Transformation: You can transmute one non-magical object—no larger than a 5-foot cube—into another non-magical object of similar size and mass and of equal or lesser value. You must spend 10 minutes handling the object to transform it. -Panacea: You remove all curses, diseases, and poisons affecting a creature that you touch with the transmuter’s stone. The creature also regains all its hit points. -Restore Life: You cast the raise dead spell on a creature you touch with the transmuter’s stone, without expending a spell slot or needing to have the spell in your spellbook. -Restore Youth: You touch the transmuter’s stone to  a willing creature, and that creature’s apparent age is reduced by 3d10 years, to a minimum of 13 years. This effect doesn’t extend the creature’s lifespan.",
        },
      ],
    },
  ],
};

export default wizard;
