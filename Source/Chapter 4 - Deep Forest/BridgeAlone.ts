namespace Endabgabe {
  export async function BridgeAlone(): ƒS.SceneReturn {

    console.log("- - - Scene 18: Watch your step! - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "You cross the bridge. After a couple of meters, more light shines through the trees, until you step out of the forest.",
        T0002: "You are now on the side of the field, on a gravel path, at the edge of the forest. The sun is still shining, but it isn't as hot as when you entered the forest.",
        T0003: "Gazing over the fields, you realize how far you can actually see. You could run for hours and see nothing but grass, some trees and the occasional animal.",
        T0004: "You start walking along the path, lost in your thoughts, not noticing the huge tree root sticking out of the ground.",
        T0005: "Well, that is until you trip over it, resulting in you falling face first on the ground.",
        T0007: "As you lift your head to look around, you notice two blue eyes staring at you from inside the bush you just landed next to.",
        T0009: "The eyes come closer, still staring at you, until a fox appears out of the bush."
      },
      Protagonist: {
        T0006: "Ugh… what was that?",
        T0008: "…hello?"
      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.deep_forest_split_bridge);
    await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0006);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0007);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0008);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0009);

    return "EncounterFoxAgainNoCat";
  }
}