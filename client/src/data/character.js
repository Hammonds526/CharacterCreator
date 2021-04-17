// Data
import fighter from "./fighter";
import ranger from "./ranger";
import rogue from "./rogue";
import wizard from "./wizard";
import race from "./race";

const character = {
  race,
  class: [fighter, ranger, rogue, wizard],
};

export default character;
