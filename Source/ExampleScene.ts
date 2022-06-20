namespace Endabgabe {
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
    await ƒS.Location.show(locations.home_table);

    await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);
    await ƒS.Location.show(locations.home_table);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.angry, ƒS.positions.bottomleft);

    await ƒS.update();

    await ƒS.Speech.tell(characters.tommy, text.Aisaka.T0001);
    ƒS.Speech.clear();
    await ƒS.update(3);
    await ƒS.Speech.tell(characters.tommy, text.Aisaka.T0002);
    await ƒS.Speech.tell(characters.tommy, text.Aisaka.T0003);

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
        await ƒS.Speech.tell(characters.tommy, "Okay.");
        ƒS.Speech.clear();
        break;

      case firstDialogueElementAnswers.iSayYes: 
        await ƒS.Speech.tell(characters.tommy, "Yes.");
        ƒS.Speech.clear();
        break;

      case firstDialogueElementAnswers.iSayCoolio: 
        await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
        await ƒS.Speech.tell(characters.tommy, "Coolio.🤠");
        ƒS.Speech.clear();
        break;

    }

  }
}