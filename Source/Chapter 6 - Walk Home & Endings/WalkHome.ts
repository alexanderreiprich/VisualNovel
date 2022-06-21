namespace Endabgabe {
  export async function WalkHome(): ƒS.SceneReturn {
    console.log("- - - Scene 30.1: Coming Home - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "The sun has almost gone down completely, when you decide to head back home.",
        T0001a: "The sun has almost gone down completely, when you decide to head back home, with Tommy fast asleep on your shoulder.",
        T0006: "You laugh as you reach your home, unlock your front door and jump onto your bed, not knowing that this day might have just changed your life forever.",
        T0006a: "You laugh as you reach your home, unlock your front door and jump onto your bed, not knowing that you have just missed the most interesting day of your life."
      },
      Protagonist: {
        T0002a: "Wow, what a relaxing day. But… I feel like I missed something…",
        T0003a: "Well, must've been nothing.",
        T0002: "What a day, huh. What was I even doing? I guess I helped people…",
        T0003: "Were they even people? Were they animals?",
        T0004: "Where are they now? And why me?",
        T0005: "I have so many questions. Hopefully tomorrow is going to be a less stressful day. I mean, I just wanted to go for a walk…"
      }
    };

    if (dataForSave.freedAnimals == 0) {
      ƒS.Speech.hide();
      await ƒS.Location.show(locations.evening_walk);
      await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);

      if (dataForSave.travelWithCat)
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001a);
      else 
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);

      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0002a);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0003a);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006a);
      return "BadEnding";
    }
    else {
      ƒS.Speech.hide();
      await ƒS.Location.show(locations.evening_walk);
      await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);

      if (dataForSave.travelWithCat && !dataForSave.freedCat)
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001a);
      else 
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);

      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0002);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0003);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0004);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0005);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);
      if (dataForSave.freedAnimals == 4) {
        return "GoodEnding";
      }
      else {
        return "NeutralEnding";
      }
    }
  }
}