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

    let delay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);

    ƒS.Sound.fade(sound.forest_ambience_1, 0, 2, false);
    ƒS.Sound.play(sound.emotion, 0.5, false);
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.home_bedroom_night);
    await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);

    await delay();

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);

    await ƒS.Location.show(locations.blank);
    await ƒS.update(transitions.reverse_blink.duration, transitions.reverse_blink.alpha, transitions.reverse_blink.edge);

    await delay();

    ƒS.Speech.hide();
    if (ƒS.Inventory.getAmount(items.bag) > 0 && ƒS.Inventory.getAmount(items.rock) > 0) {
      await ƒS.Location.show(locations.ending_all);
      await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge); //TODO: Which looks better?
      await ƒS.update(0.5);
    }
    else if (ƒS.Inventory.getAmount(items.bag) > 0) {
      await ƒS.Location.show(locations.ending_bag);
      await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);
      await ƒS.update(0.5);
    }
    else if (ƒS.Inventory.getAmount(items.rock) > 0) {
      await ƒS.Location.show(locations.ending_rock);
      await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);
      await ƒS.update(0.5);
    }
    else {
      await ƒS.Location.show(locations.ending_none);
      await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);
      await ƒS.update(0.5);
    }

    await ƒS.Speech.tell(characters.narrator, "The Good Ending.");
    await ƒS.Speech.tell(characters.narrator, "You freed all animals.");
    await ƒS.Speech.tell(characters.narrator, "Thank you for playing! <3");

    return "Empty";
  }
}