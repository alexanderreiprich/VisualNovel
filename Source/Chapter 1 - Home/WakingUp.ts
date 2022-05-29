namespace Endabgabe {
  export async function WakingUp(): ƒS.SceneReturn {
    console.log ("- - - Scene 1: Waking Up - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();
    let text = {
      Narrator: {
        T0001: "You open your eyes. The sun is already up and shining through your window. It is warm outside and not a single cloud obstructs the beautiful blue sky on this summer morning.",
        T0002: "As you hear the birds chirping outside of your window, you begin to realize: the school year is over, all exams are behind you and you don't have any responsibilities for the next three months.",
        T0003: "Slowly you start getting out of bed and begin thinking about breakfast. As you arrive in the kitchen, you face the inevitable question: What am I going to eat?",
        T0004: "As you crunch away on your breakfast, you read a bit through the news of today. Besides the boring sports stuff and questionable claims of politicians, one headline caught your eye.",
        T0005: "“Mysterious dust raining on earth”",
        T0006: "“Huh, I guess the aliens started with their chemical warfare” you thought to yourself, before skimming through the article.",
        T0007: "“Small particles raining from the sky this night…”",
        T0008: "“… scientists are not sure where if comes from…”",
        T0009: "“… no explanation what it is or what it does…”",
        T0010: "“… citizens are advised to keep windows closed…”",
        T0011: "Well, it might not have been a good idea to keep the window open all night, but well, what can you do. It is summer after all, and the temperature is getting higher every day.",
        T0012: "Since the weather hasn't been this good in days, you decide to go for a little walk after eating. After all, you spent the last 4 weeks doing nothing but studying all day. Some fresh air after all this time should be refreshing."
      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.home_table);
    await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
    
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);

    return WakingUp(); // Nächste Szene aufrufen
  }
}