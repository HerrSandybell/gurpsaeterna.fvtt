// Import Modules
import { GurpsAeternaActor } from "./actor/actor.js";
import { GurpsAeternaActorSheet } from "./actor/actor-sheet.js";
import { GurpsAeternaItem } from "./item/item.js";
import { GurpsAeternaItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.gurpsaeterna = {
    GurpsAeternaActor,
    GurpsAeternaItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 2
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = GurpsAeternaActor;
  CONFIG.Item.entityClass = GurpsAeternaItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("gurpsaeterna", GurpsAeternaActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("gurpsaeterna", GurpsAeternaItemSheet, { makeDefault: true });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
});