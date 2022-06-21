namespace Endabgabe {
  export async function DeepForestAlone(): ƒS.SceneReturn {
    console.log("- - - Scene 12.2: What's up with myself? - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "As you walk deeper and deeper into the forest, you start to be more and more curious.",
        T0002: "What is happening today?",
        T0003: "Why is today such a weird day?",
        T0004: "There are so many questions but you simply do not know the answers.",
        T0005: "You reach the end of the path.",
        T0006: "To your left is a small bridge leading over a small river. It leads to the edge of the forest.",
        T0007: "To your right is an even smaller path, surrounded by tall trees. While it seems like there is no sunlight, you can see a clearing at the end of the path."
      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.deep_forest_entrance);
    await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0007);

    let splitPathForestAnswer = {
      bridge: "Cross the bridge",
      path: "Follow the dirt path"
    };

    let splitPathForest = await ƒS.Menu.getInput(splitPathForestAnswer, "decision");

    switch (splitPathForest) {
      case splitPathForestAnswer.bridge:
        return "BridgeAlone";
      case splitPathForestAnswer.path:
        return "ArrivalClearing";
    }
  }
}