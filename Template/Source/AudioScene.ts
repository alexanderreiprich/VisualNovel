namespace Template {
    export async function BeachScene(): ƒS.SceneReturn {
        ƒS.Sound.fade(sound.beach, 0.04, 2, true);
        ƒS.Sound.fade(sound.music, 0.1, 5, true);
        ƒS.Sound.play(sound.seagull, 0.05, false);
        ƒS.Sound.fade(sound.swimming, 0.2, 5, true);
        await ƒS.Location.show(locations.beach);
        await ƒS.update();
    }
}