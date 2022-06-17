namespace Endabgabe {
  export async function GoodEnding(): ƒS.SceneReturn {
    console.log("- - - Scene 31: The Good Ending - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "As you head to bed, you remember all the animals you met today.",
        T0002: "All of them with different stories, problems, fears and passions.",
        T0003: "You wonder where they are now.",
        T0004: "But you are certain about one thing:",
        T0005: "Where ever they are now, they are in a better place."
      }
    };

    let delay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(4)]);

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.evening_walk); // TODO: Add bed location
    await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);

    await delay();

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);

    await delay();

    ƒS.Speech.hide();
    if (ƒS.Inventory.getAmount(items.bag) > 0 && ƒS.Inventory.getAmount(items.rock) > 0) {
      await ƒS.Location.show(locations.ending_all);
      await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
    }
    else if (ƒS.Inventory.getAmount(items.bag) > 0) {
      await ƒS.Location.show(locations.ending_bag);
      await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
    }
    else if (ƒS.Inventory.getAmount(items.rock) > 0) {
      await ƒS.Location.show(locations.ending_rock);
      await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
    }
    else {
      await ƒS.Location.show(locations.ending_none);
      await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
    }

    await ƒS.Speech.tell(characters.narrator, "The Good Ending\nYou freed all animals.");

    return "Empty";
  }
}