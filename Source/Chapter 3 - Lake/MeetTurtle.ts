namespace Endabgabe {
  export async function MeetTurtle(): ƒS.SceneReturn {
    console.log("- - - Scene 10: It's not just a boulder - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0002: "Slowly starting to sweat in the heat, you begin gathering the stones and stacking them on top of each other again.",
        T0003: "In the corner of your eye you notice a bigger, oddly shaped stone. Has it been there before?",
        T0005: "As you lift it up, you notice how heavy it is, when suddenly…",
        T0008: "You freeze. Have you gone insane or did this rock just talk to you?",
        T0010: "You turn the stone around and you see a small head with bright yellow eyes poking out of the presumed rock. You just picked up a turtle.",

      },
      Protagonist: {
        T0001: "Well, there is nobody that cleans up nature, so I guess, I have to do this.",
        T0004: "Okay, this is the last one, here we go…",
        T0007: "What?",
        T0011: "Well… you really did scare me. I'm sorry, I didn't want to… take you?",
        T0013: "Nice to meet you too, my name is " + dataForSave.nameProtagonist + ". Have you been lying there all this time?"
      },
      Turtle: {
        T0006: "Well, hello there.",
        T0009: "Oh, apologies, I didn't want to scare you. People tend to overlook me, hahaha.",
        T0012: "Haha, no problem youngling. I've seen a lot of rude people in my life and you are certainly not one of them. My name is Richard, pleased to meet you."
      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.lake_rocks);
    await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0004);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);
    
    ƒS.Speech.setTickerDelays(150);
    await ƒS.Speech.tell(characters.questionmark, text.Turtle.T0006);
    ƒS.Speech.setTickerDelays(50);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0007);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0008);
    ƒS.Speech.setTickerDelays(150);
    await ƒS.Speech.tell(characters.questionmark, text.Turtle.T0009);
    ƒS.Speech.setTickerDelays(50);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010);

    await ƒS.Character.show(characters.richard, characters.richard.pose.neutral, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0011);
    ƒS.Speech.setTickerDelays(150);
    await ƒS.Speech.tell(characters.questionmark, text.Turtle.T0012);
    
    if (dataForSave.nameProtagonist == "") {
      await ƒS.Speech.tell(characters.narrator, "What is your name?");
      let scene: HTMLElement = document.getElementById("append");
      let overlay: HTMLDivElement = document.createElement("div");
      overlay.id = "overlay";
      scene.appendChild(overlay);
  
      let name: string = await ƒS.Speech.getInput();
      dataForSave.nameProtagonist = name;
  
      document.getElementById("append").children[0].remove();
    }

    ƒS.Speech.setTickerDelays(50);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0013);

    return "TurtleStory";
  }
}