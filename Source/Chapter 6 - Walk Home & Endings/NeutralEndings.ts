namespace Endabgabe {
  export async function NeutralEndings(): ƒS.SceneReturn {

    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "As you close your eyes, you hear a quiet meow from outside your window.",
        T0002: "You have the feeling that you missed something, but you can't quite put the finger on it.",
        T0003: "You start to think back to the things you have experienced today.",
        T0004a: "Tommy and Olivia, who are finally back together. You can't imagine how happy both of them must be now.",
        T0004b: "Olivia, who finally found peace after a life of stress and crushing responsiblity.",
        T0005: "June, who got to experience their favorite passion once more before being gone forever.",
        T0006: "As well as the peace of knowing, that they don't have to live with the depressing nature of humankind anymore.",
        T0007: "Richard, somebody who is finally together with his beloved wife.",
        T0008: "Everybody, ultimately at a better place now.",
        T0009: "Slowly drifting to sleep, you can see something in front of your inner eye.",
        T0010a: "A small cat, wandering around the paths and roads of your hometown aimlessly.",
        T0010b: "A cute fox, hiding under bushes and leaves, feeling like it is destined for something bigger.",
        T0010c: "An old turtle, sitting near a lake, yearning for something that it can't have.",
        T0010d: "A scared deer, stressing and worrying about everything and everyone.",
        T0011: "You don't know what all of this means, but you are too tired to worry.",
        T0012: "Maybe you will think about all of this tomorrow."
      }
    };

    let delay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

    ƒS.Sound.play(sound.emotion, 0.5, false);
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.home_bedroom_night);
    await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);

    if (dataForSave.freedCat && dataForSave.freedDeer) {
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004a);
    }
    else if (dataForSave.freedDeer) {
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004b);
    }
    if (dataForSave.freedFox) {
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);
    }
    if (dataForSave.freedTurtle) {
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0007);
    }
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0008);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0009);

    if (!dataForSave.freedCat) {
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010a);
    }
    if (!dataForSave.freedFox) {
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010b);
    }
    if (!dataForSave.freedTurtle) {
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010c);
    }
    if (!dataForSave.freedDeer) {
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010d);
    }

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0011);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0012);

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.blank);
    await ƒS.update(transitions.reverse_blink.duration, transitions.reverse_blink.alpha, transitions.reverse_blink.edge);

    await delay();

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

    await ƒS.Speech.tell(characters.narrator, "The Neutral Ending.");
    await ƒS.Speech.tell(characters.narrator, "You freed " + dataForSave.freedAnimals + " animals.");
    await ƒS.Speech.tell(characters.narrator, "Thank you for playing! <3");

    return "Empty";
  }
}