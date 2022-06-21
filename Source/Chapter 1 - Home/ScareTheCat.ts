namespace Endabgabe {
  export async function ScareTheCat(): ƒS.SceneReturn {

    console.log("- - - Scene 2.3: Scaring the Cat - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "With a “hush” and a sudden move of your hands, the cat gets scared and scurries away. With the cat gone, you continue your trip.",
        T0002: "Grooving with the sound of the music coming through your headphones, you carry on – your destination: a forest, roughly two kilometers away from your home."
      }
    };

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);

    return "ForestAlone";    
  }
}