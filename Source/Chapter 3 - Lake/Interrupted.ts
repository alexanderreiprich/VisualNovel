namespace Endabgabe {
  export async function Interrupted(): ƒS.SceneReturn {
    console.log("- - - Scene 10.2: Interrupted - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0004: "You put the turtle down on the ground and without continuing his story any further, the turtle turned around and swam away.",
        T0005: "Feeling a bit guilty and confused, you call for your cat and continue your walk along the path next to the lake, leading deeper into the forest.",
        T0006: "Feeling a bit guilty and confused, you continue your walk along the path next to the lake, leading deeper into the forest."
      },
      Protagonist: {
        T0001: "Hey, uh, that's a great story, but I kinda have to get going now…",
        T0003: "Wait, I'm sorry…"
      },
      Turtle: {
        T0002: "Huh, you young people are all so stressed and entitled. Back in my days we listened to the elderly… So rude… Let me down, right now."
      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.lake_rocks);
    await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);

    ƒS.Speech.setTickerDelays(50);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0001);
    ƒS.Speech.setTickerDelays(150);
    await ƒS.Speech.tell(characters.richard, text.Turtle.T0002);
    ƒS.Speech.setTickerDelays(50);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0003);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);

    return "";
  }
}