const ssectors = require('campaign/serpulo');
const zsectors = require('campaign/zuila');
const csectors = require('campaign/cori');

const blocks = require('blocks');
const items = require('items');
const liquids = require('liquids');
const units = require('units');

function newNode(parent, content, req, objectives){
  var parnode = TechTree.get(parent);
  var node = new TechTree.TechNode(parnode, content, req != null ? req : content.researchRequirements());
  var used = new ObjectSet();
  
  if (objectives != null){
    node.objectives.addAll(objectives);
  }
}
//region blocks
newNode(Blocks.surgeSmelter, blocks.sa_smelter, null, Seq.with(new Objectives.SectorComplete(ssectors.reignLair)));
newNode(Blocks.oilExtractor, blocks.drillStation, null, Seq.with(new Objectives.Research(liquids.moltenGold)));
//endregion
//region items & liquids
newNode(Items.thorium, items.goldOre, null, Seq.with(new Objectives.Produce(items.goldOre)));
newNode(items.goldOre, liquids.moltenGold, null, Seq.with(new Objectives.Produce(liquids.moltenGold)));
newNode(liquids.moltenGold, items.goldIngot, null, Seq.with(new Objectives.Produce(items.goldIngot)));
newNode(items.goldIngot, items.shinyAlloy, null, Seq.with(new Objectives.Produce(items.shinyAlloy)));
newNode(items.shinyAlloy, items.palladium, null, Seq.with(new Objectives.Produce(items.palladium)));
//endregion
//region sectors
newNode(SectorPresets.stainedMountains, ssectors.goldMountains, null, Seq.with(new Objectives.SectorComplete(SectorPresets.stainedMountains), new Objectives.Research(Blocks.laserDrill), new Objectives.Research(blocks.crucible), new Objectives.Research(blocks.forge)));
newNode(ssectors.goldMountains, ssectors.goldMines, null, Seq.with(new Objectives.SectorComplete(ssectors.goldMountains), new Objectives.Research(units.gDagger)));
newNode(SectorPresets.saltFlats, ssectors.abandonedDesert, null, Seq.with(new Objectives.SectorComplete(SectorPresets.saltFlats), new Objectives.Research(blocks.scatter), new Objectives.Research(blocks.crusher)));
newNode(SectorPresets.planetaryTerminal, ssectors.siliconbase, null, Seq.with(new Objectives.SectorComplete(SectorPresets.planetaryTerminal), new Objectives.SectorComplete(SectorPresets.nuclearComplex), new Objectives.SectorComplete(ssectors.goldMines), new Objectives.SectorComplete(ssectors.abandonedDesert)));

newNode(tsectors.siliconfields, tsectors.siliconlands , null, Seq.with(new Objectives.SectorComplete(tsectors.siliconfields), new Objectives.Produce(items.hardenedsilicon)));
//endregion