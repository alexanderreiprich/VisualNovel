namespace Template {
  export async function ExampleScene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");
    
    let text = {
      Aisaka: {
        T0001: "toller text",
        T0002: "noch tollerer text",
        T0003: "yay"
      },
      Protagonist: {
        T0001: "wheeee"
      }
    };
    await ƒS.Location.show(locations.nightcity);
    await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positions.bottomcenter);
    await ƒS.update();
    await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0001);
    await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0002);
    await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0003);
  }
}