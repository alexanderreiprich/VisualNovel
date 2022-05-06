namespace Template {
    export async function BeachScene(): ƒS.SceneReturn {
        let text: {

        };

        ƒS.Sound.fade(sound.beach, 0.1, 2, true);
        ƒS.Sound.fade(sound.music, 0.1, 5, true);
        ƒS.Sound.fade(sound.seagull, 0.02, 5, true);
        ƒS.Sound.fade(sound.swimming, 0.08, 5, true);
        await ƒS.Location.show(locations.beach);
        await ƒS.update();
    }
}