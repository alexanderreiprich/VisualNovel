namespace Endabgabe {
  export async function EnterLake(): ƒS.SceneReturn {
    console.log("- - - Scene 7: Refreshment - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "After a couple minutes of walking, you reach your destination. While everybody says it is a lake, it is actually more like a big pond.",
        T0002: "On the left side is a path that leads around the lake.",
        T0003: "On the right side you can find a short bridge, that leads to the courtyard of the so-called castle. Similar to the lake, it is actually just a rather big mansion.",
        T0005: "The cat jumps from your arms to the ground and runs towards the edge of the lake. From the distance you hear intense slurping."
      },
      Protagonist: {
        T0004: "Alright, there we are, get down and drink something!"
      }
    };

    ƒS.Speech.hide();

    await ƒS.Location.show(locations.lake_entrance);
    await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);

    if (dataForSave.travelWithCat) {
      // ƒS.Speech.setTickerDelays(150);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0004);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);
    }

    let examineAnswer = {
      water: "Check out the water",
      castle: "Check out the castle"
    };

    let examine = await ƒS.Menu.getInput(examineAnswer, "decision");

    switch (examine) {
      case examineAnswer.water:
        return "ExamineWater";
      case examineAnswer.castle:
        return "ExamineCastle";
    }

  }
}