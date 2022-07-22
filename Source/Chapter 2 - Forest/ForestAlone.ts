namespace Endabgabe {
  export async function ForestAlone(): ƒS.SceneReturn {
    console.log("- - - Scene 5.2: The Forest and You - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "You reach the beginning of the forest. Large trees grow left and right of the small road that leads deeper into the forest.",
        T0002: "The large shadows that are casted from the treetops provide a cool shade despite the sun being high up in the sky.",
        T0003: "As you hear the birds singing you remember why you used to come here so often. This forest seems so magical, but you can't exactly explain why.",
        T0004: "You can see a squirrel, peacefully collecting some nuts near an old tree stump. As soon as it sees you, it freezes and watches you carefully.",
        T0005: "You continue walking, heading deeper into the forest. In the distance, you can see a deer, staring at you. As you get closer, it hurries away behind some bushes.",
        T0006: "After a few hundred meters, you reach a fork in the road.",
        T0007: "The left path leads further into the forest. The right path seems to lead towards a small castle, near a little lake. Where do you want to go?"        
      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.forest_path_into);
    await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);
    ƒS.Sound.fade(sound.forest_ambience_2, 0, 2, false);
    ƒS.Sound.fade(sound.forest_bird, 0, 2, true);
    ƒS.Sound.play(sound.forest_ambience_1, 0.3, true);
  
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);

    await ƒS.Location.show(locations.split_castle_forest);
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0007);

    let forestSplitAnswer = {
      forest: "Left Path, into the forest",
      lake: "Right path, towards the castle"
    };

    let forestSplit = await ƒS.Menu.getInput(forestSplitAnswer, "decision");
    ƒS.Sound.play(sound.click, 0.2);

    switch (forestSplit) {
      case forestSplitAnswer.forest:
        return "MeetFox";
      case forestSplitAnswer.lake:
        return "EnterLake";
    }
    
  }
}