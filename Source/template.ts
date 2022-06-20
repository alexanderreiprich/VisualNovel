namespace Endabgabe {
  export async function Template(): ƒS.SceneReturn {
    console.log("- - - Scene X: Scenetitle - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: ""
      }
    };
    ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.home_table);
    await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);
  
    
  }
}