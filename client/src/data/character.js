// Data
import fighter from "./fighter";
import ranger from "./ranger";
import rogue from "./rogue";
import wizard from "./wizard";
import race from "./race";
import spells from "./spells";
import feats from "./feats2";
import paladin from "./paladin";

const character = {
  race,
  class: [fighter, ranger, rogue, wizard, paladin],
  spells,
  feats,
};

export default character;
