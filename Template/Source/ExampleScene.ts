namespace Template {
  export async function ExampleScene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    let text = {
      Aisaka: {
        T0001: "toller text",
        T0002: "noch tollerer text",
        T0003: "yay"
      },
      Protagonist: {
        T0001: "wheeee"
      }
    };
    ƒS.Sound.fade(sound.nightclub, 0.2, 5, true);
    await ƒS.Location.show(locations.nightcity);

    await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
    await ƒS.Location.show(locations.nightcity);
    await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positions.bottomleft);

    await ƒS.update();

    await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0001);
    ƒS.Speech.clear();
    await ƒS.update(3);
    await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0002);
    await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0003);

    ƒS.Speech.hide();
    // ƒS.Character.hide(characters.aisaka);
    ƒS.Character.hideAll();
    await ƒS.update();

    let firstDialogueElementAnswers = {
      iSayOk: "Okay.",
      iSayYes: "Yes.",
      iSayCoolio: "Coolio.🤠"
    };

    let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "individualCSSClass");
    
    switch (firstDialogueElement) {
      case firstDialogueElementAnswers.iSayOk: 
        // continue path here
        await ƒS.Speech.tell(characters.aisaka, "Okay.");
        ƒS.Speech.clear();
        break;

      case firstDialogueElementAnswers.iSayYes: 
        await ƒS.Speech.tell(characters.aisaka, "Yes.");
        ƒS.Speech.clear();
        break;

      case firstDialogueElementAnswers.iSayCoolio: 
        await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        await ƒS.Speech.tell(characters.aisaka, "Coolio.🤠");
        ƒS.Speech.clear();
        break;

    }

  }
}