namespace Endabgabe {
  export async function IgnoreTheCat(): ƒS.SceneReturn {
    console.log("- - - Scene 2.2: Ignoring the Cat - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "You continue your trip. Grooving with the sound of the music coming through your headphones, you carry on – your destination: a forest, roughly two kilometers away from your home."
      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.home_door);
    await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
  
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);

    return "MeetingAgain";
    
  }
}