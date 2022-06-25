namespace Endabgabe {
  export async function WakingUp(): ƒS.SceneReturn {
    console.log("- - - Scene 1: Waking Up - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "You open your eyes. The sun is already up and shining through your window. It is warm outside and not a single cloud obstructs the beautiful blue sky on this summer morning.",
        T0002: "As you hear the birds chirping outside of your window, you begin to realize: the school year is over, all exams are behind you and you don't have any responsibilities for the next three months.",
        T0003: "Slowly you start getting out of bed and begin to think about breakfast. As you arrive in the kitchen, you face the inevitable question: What am I going to eat?",
        T0004: "As you crunch on your breakfast, you read a bit through the news of today. Besides the boring sports stuff and questionable claims of politicians, one headline caught your eye.",
        T0005: "“Mysterious dust raining on earth”",
        T0006: "“Huh, I guess the aliens started with their chemical warfare” you thought to yourself, before skimming through the article.",
        T0007: "Well, it might not have been a good idea to keep the window open all night, but well, it is what it is. It is summer after all, and the temperature is rising every day.",
        T0008: "Since the weather hasn't been this good in days, you decide to go for a little walk after eating. After all, you spent the last 4 weeks doing nothing but studying all day. Some fresh air after all this time should be refreshing.",
        T0009: "It’s also a great opportunity to use the new Bluetooth headphones you bought a while ago. I hope you remembered to charge them!",
        T0010: "As you put your shoes on, you notice a small cat through the small window in your front door. It seems to be snooping around in your front yard, which is nothing out of the ordinary. Cats aren't exactly a rare sight in this part of your town.",
        T0011: "You shut the door, turn around and see the cat curling up at your feet."
      }
    };

    let pages: string[] = [" - - - NEWSPAPER - - -", "- all the news you need for the day -", "", "", "Mysterious dust raining on earth", "", 
    "Small particles raining from the sky this night…", "… scientists are not sure where if comes from…", "… no explanation what it is or what it does…",
   "… citizens are advised to keep windows closed…"];

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.home_bedroom);
    await ƒS.update(transitions.blink.duration, transitions.blink.alpha, transitions.blink.edge);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.home_table);
    await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);

    let breakfastAnswer = {
      cereal: "Cereal with Milk",
      toast: "Toast",
      eggs: "Scrambled Eggs with Bacon"
    };

    await ƒS.Menu.getInput(breakfastAnswer, "decision");
    ƒS.Sound.play(sound.click, 0.2);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);
    
    let newspaper: string = "";
    for (let i: number = 0; i < pages.length; i++) {
      newspaper += pages[i] + "\n";
    }
    await ƒS.Text.print(newspaper);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0007);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0008);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0009);

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.home_door);
    await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);
    
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0011);

    let catAnswer = {
      pet: "Pet the Cat",
      scare: "Scare it away",
      ignore: "Ignore the Cat"
    };

    let cat = await ƒS.Menu.getInput(catAnswer, "decision");
    ƒS.Sound.play(sound.click, 0.2);
    
    switch (cat) {
      case catAnswer.pet:
        return "PetTheCat";
      case catAnswer.scare:
        return "ScareTheCat";
      case catAnswer.ignore:
        return "IgnoreTheCat";
    }
  }
}