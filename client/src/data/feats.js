const feats = [
    {
        name: "Alert",
        desc: "Always on the lookout for danger, you gain the following benefits: -Gain a +5 bonus to initiative. -Can’t be surprised while you are conscious. -Other creatures don’t gain advantage on attack rolls against you as a result of being hidden from you."
    },
    {
        name: "Athlete",
        desc: "You have undergone extensive physical training to gain the following benefits: -Increase your Strength or Dexterity score by 1, to a maximum of 20. -When you are prone, standing up uses only 5 feet of your movement. -Climbing doesn’t halve your speed. -Can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet."
    },
    {
        name: "Actor",
        desc: "Skilled at mimicry and dramatics, you gain the following benefits: -Increase your Charisma score by 1, to a maximum of 20. -Have advantage on Charisma (Deception) and Charisma (Performance) checks when trying to pass yourself off as a different person. -Can mimic the speech of another person or the sounds made by other creatures.You must have heard the person speaking, or heard the creature make the sound, for at least 1 minute. A successful Wisdom (Insight) check contested by your Charisma (Deception) check allows a listener to determine that the effect is faked."
    },
    {
        name: "Charger",
        desc: "When you use your action to Dash, you can use a bonus action to make one melee weapon attack or to shove a creature. If you move at least 10 feet in a straight line immediately before taking this bonus action, you either gain a +5 bonus to the attack’s damage roll (if you chose to make a melee attack and hit) or push the target up to 10 feet away from you (if you chose to shove and you succeed)."
    },
    {
        name: "Crossbow Expert",
        desc: "Thanks to extensive practice with the crossbow, you gain the following benefits: -Ignore the loading quality of crossbows with which you are proficient. -Being within 5 feet of a hostile creature doesn’t impose disadvantage on your ranged attack rolls. -When you use the Attack action and attack with a one-handed weapon, you can use a bonus action to attack with a loaded hand-crossbow you are holding."
    },
    {
        name: "Defensive Duelist",
        desc: "Prerequisite: Dexterity 13 or higher. When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to miss you."
    },
    {
        name: "Dual Wielder",
        desc: "You master fighting with two weapons, gaining the following benefits: -Gain a +1 bonus to AC while you are wielding a separate melee weapon in each hand. -Can use two-weapon fighting even when the one-handed melee weapons you are wielding aren’t light. -Can draw or stow two one-handed weapons when you would normally be able to draw or stow only one."
    },
    {
        name: "Dungeon Delver",
        desc: "Alert to the hidden traps and secret doors found in many dungeons, you gain the following benefits: -Have advantage on Wisdom (Perception) and Intelligence (Investigation) checks made to detect the presence of secret doors. -Have advantage on saving throws made to avoid or resist traps. -Have resistance to the damage dealt by traps. -can search for traps while traveling at a normal pace, instead of only at a slow pace."
    },
    {
        name: "Durable",
        desc: "Hardy and resilient, you gain the following benefits: -Increase your Constitution score by 1, to a maximum of 20. -When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2)."
    },
    {
        name: "Elemental Adept",
        desc: "Prerequisite: The ability to cast at least one spell. When you gain this feat, choose one of the following damage types: acid, cold, fire, lightning, or thunder. Spells you cast ignore resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2. You can select this feat multiple times. Each time you do so, you must choose a different damage type."
    },
    {
        name: "Grappler",
        desc: "Prerequisite: Strength 13 or higher. You’ve developed the skills necessary to hold your own in close-quarters grappling. You gain the following benefits: -Have advantage on attack rolls against a creature you are grappling. -Can use your action to try to pin a creature grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both restrained until the grapple ends. -Creatures that are one size larger than you don’t automatically succeed on checks to escape your grapple."
    },
    {
        name: "Great Weapon Master",
        desc: "You’ve learned to put the weight of a weapon to your advantage, letting its momentum empower your strikes. You gain the following benefits: -On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action. -Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack’s damage."
    },
    {
        name: "Healer",
        desc: "You are an able physician, allowing you to mend wounds quickly and get your allies back in the fight. You gain the following benefits: -When you use a healer’s kit to stabilize a dying creature, that creature also regains 1 hit point. -As an action, you can spend one use of a healer’s kit to tend to a creature and restore 1d6 + 4 hit points to it, plus additional hit points equal to the creature’s maximum number of Hit Dice. The creature can’t regain hit points from this feat again until it finishes a short or long rest."
    },
    {
        name: "Heavily Armored",
        desc: "Prerequisite: Proficiency with medium armor. You have trained to master the use of heavy armor, gaining the following benefits: -Increase your Strength score by 1, to a maximum of 20. -Gain proficiency with heavy armor."
    },
    {
        name: "Heavy Armor Master",
        desc: "Prerequisite: Proficiency with heavy armor. You can use your armor to deflect strikes that would kill others. You gain the following benefits: -Increase your Strength score by 1, to a maximum of 20. -While you are wearing heavy armor, bludgeoning, piercing, and slashing damage that you take from non-magical weapons is reduced by 3."
    },
    {
        name: "Inspiring Leader",
        desc: "Prerequisite: Charisma 13 or higher. You can spend 10 minutes inspiring your companions, shoring up their resolve to fight. When you do so, choose up to six friendly creatures (which can include yourself) within 30 feet of you who can see or hear you and who can understand you. Each creature can gain temporary hit points equal to your level + your Charisma modifier. A creature can’t gain temporary hit points from this feat again until it has finished a short or long rest."
    },
    {
        name: "Keen Mind",
        desc: "You have a mind that can track time, direction, and detail with uncanny precision. You gain the following benefits: -Increase your Intelligence score by 1, to a maximum of 20. -Always know which way is north. -Always know the number of hours left before the next sunrise or sunset. -Can accurately recall anything you have seen or heard within the past month."
    },
    {
        name: "Lightly Armored",
        desc: "You have trained to master the use of light armor, gaining the following benefits: -Increase your Strength or Dexterity score by 1, to a maximum of 20. -Gain proficiency with light armor."
    },
    {
        name: "Linguist",
        desc: "You have studied languages and codes, gaining the following benefits: -Increase your Intelligence score by 1, to a maximum of 20. -Learn three languages of your choice. -Can ably create written ciphers. Others can’t decipher a code you create unless you teach them, they succeed on an Intelligence check (DC equal to your Intelligence score + your proficiency bonus), or they use magic to decipher it."
    },
    {
        name: "Lucky",
        desc: "You have inexplicable luck that seems to kick in at just the right moment. You have 3 luck points. Whenever you make an attack roll, an ability check, or a saving throw, you can spend one luck point to roll an additional d20. You can choose to spend one of your luck points after you roll the die, but before the outcome is determined. You choose which of the d20s is used for the attack roll, ability check, or saving throw. You can also spend one luck point when an attack roll is made against you. Roll a d20, and then choose whether the attack uses the attacker’s roll or yours. If more than one creature spends a luck point to influence the outcome of a roll, the points cancel each other out; no additional dice are rolled. You regain your expended luck points when you finish a long rest."
    },
    {
        name: "Mage Slayer",
        desc: "You have practiced techniques useful in melee combat against spellcasters, gaining the following benefits: -When a creature within 5 feet of you casts a spell, you can use your reaction to make a melee weapon attack against that creature. -When you damage a creature that is concentrating on a spell, that creature has disadvantage on the saving throw it makes to maintain its concentration. -Have advantage on saving throws against spells cast by creatures within 5 feet of you."
    },
    {
        name: "Magic Initiate",
        desc: "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. You learn two cantrips of your choice from that class’s spell list. In addition, choose one 1st-level spell from that same list. You learn that spell and can cast it at its lowest level. Once you cast it, you must finish a long rest before you can cast it again. Your spellcasting ability for these spells depends on the class you chose: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid: or Intelligence for wizard."
    },
    {
        name: "Martial Adept",
        desc: "You have martial training that allows you to perform special combat maneuvers. You gain the following benefits: -learn two maneuvers of your choice from among those available to the Battle Master archetype in the fighter class. If a maneuver you use requires your target to make a saving throw to resist the maneuver’s effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice). -If you already have superiority dice, you gain one more; otherwise, you have one superiority die, which is a d6. This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest."
    },
    {
        name: "Medium Armor Master",
        desc: "Prerequisite: Proficiency with medium armor. You have practiced moving in medium armor to gain the following benefits: -Wearing medium armor doesn’t impose disadvantage on your Dexterity (Stealth) checks. -When you wear medium armor, you can add 3, rather than 2, to your AC if you have a Dexterity of 16 or highter."
    },
    {
        name: "Mobile",
        desc: "You are exceptionally speedy and agile. You gain the following benefits: -Your speed increases by 10 feet. -When you use the Dash action, difficult terrain doesn’t cost you extra movement on that turn. -When you make a melee attack against a creature, you don’t provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not."
    },
    {
        name: "Moderately Armored",
        desc: "Prerequisite: Proficiency with light armor. You have trained to master the use of medium armor and shields, gaining the following benefits: -Increase your Strength or Dexterity score by 1, to a maximum of 20. -You gain proficiency with medium armor and shields."
    },
    {
        name: "Mounted Combatant",
        desc: "You are a dangerous foe to face while mounted. While you are mounted and aren’t incapacitated, you gain the following benefits: -You have advantage on melee attack rolls against any unmounted creature that is smaller than your mount. -You can force an attack targeted at your mount to target you instead. -If your mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
    },
    {
        name: "Observant",
        desc: "Quick to notice details of your environment, you gain the following benefits: -Increase your Intelligence or Wisdom score by 1, to a maximum of 20. -If you can see a creature’s mouth while it is speaking a language you understand, you can interpret what it’s saying by reading its lips. -You have a +5 bonus to your passive Wisdom (Perception) and passive Intelligence (Investigation) scores."
    },
    {
        name: "Polearm Master",
        desc: "You can keep your enemies at bay with reach weapons. You gain the following benefits: -When you take the Attack action and attack with only a glaive, halberd, or quarterstaff, you can use a bonus action to make a melee attack with the opposite end of the weapon. The weapon’s damage die for this attack is a d4, and the attack deals bludgeoning damage. -While you are wielding a glaive, halberd, pike, or quarterstaff, other creatures provoke an opportunity attack from you when they enter your reach."
    },
    {
        name: "Resilient",
        desc: "Choose one ability score. You gain the following benefits: -Increase the chosen ability score by 1, to a maximum of 20. -You gain proficiency in saving throws using the chosen ability."
    },
    {
        name: "Ritual Caster",
        desc: "Prerequisite: Intelligence or Wisdom 13 or higher You have learned a number of spells that you can cast as rituals. These spells are written in a ritual book, which you must have in hand while casting one of them. When you choose this feat, you acquire a ritual book holding two 1st-level spells of your choice. Choose one of the following classes: bard, cleric, druid, sorcerer, warlock, or wizard. You must choose your spells from that class’s spell list, and the spells you choose must have the ritual tag. The class you choose also determines your spellcasting ability for these spells: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard. If you come across a spell in written form, such as a magical spell scroll or a wizard’s spellbook, you might be able to add it to your ritual book. The spell must be on the spell list for the class you chose, the spell’s level can be no higher than half your level (rounded up), and it must have the ritual tag. The process of copying the spell into your ritual book takes 2 hours per level of the spell, and costs 50 gp per level. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it."
    },
    {
        name: "Savage Attacker",
        desc: "Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon’s damage dice and use either total."
    },
    {
        name: "Sentinel",
        desc: "You have mastered techniques to take advantage of every drop in any enemy’s guard, gaining the following benefits: -When you hit a creature with an opportunity attack, the creature’s speed becomes 0 for the rest of the turn. -Creatures within 5 feet of you provoke opportunity attacks from you even if they take the Disengage action before leaving your reach. -When a creature within 5 feet of you makes an attack against a target other than you (and that target doesn’t have this feat), you can use your reaction to make a melee weapon attack against the attacking creature"
    },
    {
        name: "Sharpshooter",
        desc: "You have mastered ranged weapons and can make shots that others find impossible. You gain the following benefits: -Attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls. -Your ranged weapon attacks ignore half cover and three-quarters cover. -Before you make an attack with a ranged weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack’s damage."
    },
    {
        name: "Shield Master",
        desc: "You use shields not just for protection but also for offense. You gain the following benefits while you are wielding a shield: -If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you with your shield. -If you aren’t incapacitated, you can add your shield’s AC bonus to any Dexterity saving throw you make against a spell or other harmful effect that targets only you. -If you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you can use your reaction to take no damage if you succeed on the saving throw, interposing your shield between yourself and the source of the effect."
    },
    {
        name: "Skilled",
        desc: "You gain proficiency in any combination of three skills or tools of your choice."
    },
    {
        name: "Skulker",
        desc: "Prerequisite: Dexterity 13 or higher You are expert at slinking through shadows. You gain the following benefits: -You can try to hide when you are lightly obscured from the creature from which you are hiding. -When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn't reveal your position. -Dim light doesn’t impose disadvantage on your Wisdom (Perception) checks relying on sight."
    },
    {
        name: "Spell Sniper",
        desc: "Prerequisite: The ability to cast at least one spell You have learned techniques to enhance your attacks with certain kinds of spells, gaining the following benefits: -When you cast a spell that requires you to make an attack roll, the spell’s range is doubled. -Your ranged spell attacks ignore half cover and three-quarters cover. -You learn one cantrip that requires an attack roll. Choose the cantrip from the bard, cleric, druid, sorcerer, warlock, or wizard spell list. Your spellcasting ability for this cantrip depends on the spell list you chose from: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard."
    },
    {
        name: "Tavern Brawler",
        desc: "Accustomed to rough-and-tumble fighting using whatever weapons happen to be at hand, you gain the following benefits: -Increase your Strength or Constitution score by 1, to a maximum of 20. -You are proficient with improvised weapons and unarmed strikes.-Your unarmed strike uses a d4 for damage. -When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a bonus action to attempt to grapple the target."
    },
    {
        name: "Tough",
        desc: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points."
    },
    {
        name: "War Caster",
        desc: "Prerequisite: The ability to cast at least one spell You have practiced casting spells in the midst of combat, learning techniques that grant you the following benefits: -You have advantage on Constitution saving throws that you make to maintain your concentration on a spell when you take damage. -You can perform the somatic components of spells even when you have weapons or a shield in one or both hands. -When a hostile creature’s movement provokes an opportunity attack from you, you can use your reaction to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature."
    },
    {
        name: "Weapon Master",
        desc: "You have practiced extensively with a variety of weapons, gaining the following benefits: -Increase your Strength or Dexterity score by 1, to a maximum of 20. -You gain proficiency with four weapons of your choice."
    },
]

export default feats
