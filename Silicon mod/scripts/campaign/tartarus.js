// Just a little note to not forget Pixellandia :D
//I won't forget :)
const tartarus = extend(Planet, "tartarus", Planets.sun, 1, 0.5, {
    generator: new SerpuloPlanetGenerator(),
    bloom: true,
    radius: 1,
    accessible: true,
    hasAtmosphere: true,
    atmosphereColor: Color.valueOf("80ff00"),
    atmosphereRadIn: 0.02,
    atmosphereRadOut: 0.3,
    localizedName: "Tartarus"
});
tartarus.meshLoader = () => extend(HexMesh, tartarus, 6, {});

const silicon_base = extend(SectorPreset, "silicon_base", tartarus, 1, {
    localizedName: "silicon-base",
    difficulty: 1,
    alwaysUnlocked: true
});

const silicon_lands = extend(SectorPreset, "silicon_lands", tartarus, 0, {
    captureWave: 5,
    localizedName: "silicon-lands",
    difficulty: 1
});

const silicon_fields = extend(SectorPreset, "silicon_lands", tartarus, 50, {
    captureWave: 10,
    localizedName: "silicon-lands",
    difficulty: 2
});


module.exports = {
    tartarus: tartarus,
    silicon_base: silicon-base,
    silicon_lands: silicon-lands,
    silicon_fields: silicon-fields
}