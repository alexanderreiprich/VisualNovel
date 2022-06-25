namespace Endabgabe {
  export async function PetTheCat(): ƒS.SceneReturn {
    console.log("- - - Scene 2.1: Petting the Cat - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "You bend down to pet the cat, which now lays with its belly up in front of you. The first thing you notice however are the bright green eyes of the cat. They are so shiny, they look almost fake. It must be a special breed or something.",
        T0002: "After giving the cat a few belly rubs, you continue your trip. At last, you didn't even get three meters away from your front door. Grooving with the sound of the music coming through your headphones, you carry on – your destination: a forest, roughly one kilometer away from your home."
      }
    };
  
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);

    return "MeetingAgain";
    
  }
}