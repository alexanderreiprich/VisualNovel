namespace Endabgabe {
  export async function TravelWithoutCat(): ƒS.SceneReturn {
    console.log("- - - Scene 4.2: No Company - - -");
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