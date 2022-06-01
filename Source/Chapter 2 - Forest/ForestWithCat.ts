namespace Endabgabe {
  export async function ForestWithCat(): ƒS.SceneReturn {
    console.log("- - - Scene 5.2: The Forest and its Friends - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {

      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.home_table);
    await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
  
    
  }
}