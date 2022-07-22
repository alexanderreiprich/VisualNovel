namespace Endabgabe {
  export async function BadEnding(): ƒS.SceneReturn {
    console.log("- - - Scene 32: The Bad Ending - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "As you close your eyes, you hear a quiet meow from outside your window.",
        T0002: "You have the feeling that you did something wrong, but you can't put the finger on it.",
        T0003: "The feeling starts to grow and grow, as you drift more and more to sleep, unaware of the nightmares of the forest you are about to have."
      }
    };

    let delay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);
    
    ƒS.Sound.fade(sound.clearing_ambience, 0, 2, false);
    ƒS.Sound.fade(sound.forest_ambience_1, 0, 2, false);
    ƒS.Sound.play(sound.emotion, 0.5, false);
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.home_bedroom_night);
    await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

    ƒS.Sound.play(sound.meow, 0.3);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);

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

    await ƒS.Speech.tell(characters.narrator, "The Bad Ending.");
    await ƒS.Speech.tell(characters.narrator, "You freed no animals.");
    if (dataForSave.encounteredAnyAnimal == false)
      await ƒS.Speech.tell(characters.narrator, "You didn't even meet any animals...");
    await ƒS.Speech.tell(characters.narrator, "Thank you for playing! <3");

    return "Empty";
  }
}