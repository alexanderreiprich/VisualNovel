namespace Endabgabe {
  export async function BadEnding(): ƒS.SceneReturn {
    console.log("- - - Scene 32: The Bad Ending - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "As you close your eyes, you hear a quiet meow from outside your window.",
        T0002: "You have the feeling that you did something wrong, but you can't put the finger on it.",
        T0003: "The feeling starts to grow and grow, as you drift more and more to sleep, not knowing the nightmares of the forest you are about to have."
      }
    };

    let delay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(4)]);

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.home_bedroom_night);
    await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.blank);
    await ƒS.update(transitions.reverse_blink.duration, transitions.reverse_blink.alpha, transitions.reverse_blink.edge);
   
    await delay();
    await ƒS.Speech.tell(characters.narrator, "The Bad Ending\nYou freed no animals.");

    return "Empty";
  }
}