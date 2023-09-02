var lib = require('silicon-mod/lib');
var gammoJs = require('silicon-mod/gammo');

const Core = extendContent(CoreBlock, "core", {
    canBreak(tile) { return Vars.state.teams.cores(tile.team()).size > 1; },
    canReplace(other) { return other.alwaysReplace; },
    canPlaceOn(tile, team) { return true; },
    placeBegan(tile, previous) {},
    beforePlaceBegan(tile, previous) {},

    drawPlace(x, y, rotation, valid) {},
});
lib.setBuildingSimple(Core, CoreBlock.CoreBuild, {
    damage(damage) {  },
    handleDamage(tile, amount) { return 0; },
});
Core.unitType = gammoJs.gammo;
