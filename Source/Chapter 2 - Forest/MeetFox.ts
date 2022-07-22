namespace Endabgabe {
  export async function MeetFox(): ƒS.SceneReturn {

    if (!dataForSave.travelWithCat) {
      console.log("- - - Scene 6.3.2: Cold Blue Eyes [No Cat] - - -");
      let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
      gameMenu.open();
  
      let text = {
        Narrator: {
          T0001: "As you turn the corner, you notice a pair of bright blue eyes in one of the bushes a few meters away from you.",
          T0003: "You crouch down and lift up a few branches. The blue eyes, that you saw earlier, watching your every move.",
          T0004: "As you stretch out your arm to brush away some leaves, you suddenly hear a scream right in front of you.",
          T0005: "Reflexively, you flinch and step back.",
          T0010: "Thoroughly confused, you stand up. Suddenly you remember the eyes. The cat also had those shiny eyes, but were they blue?",
          T0013: "You hear the sound of cracking of branches and rustling of leaves.",
          T0014: "Slowly, you can see the eyes moving closer, and a scared fox appears from underneath the bush."
        },
        Protagonist: {
          T0002: "Huh, is this the cat that I saw earlier?",
          T0006: "Sorry, I didn't mean to…",
          T0008: "What? What are you talking about?",
          T0012: "I won't hurt you, I promise. Why would I even do that?"
        },
        Fox: {
          T0007: "Don't come closer, or else I will bite you!",
          T0009: "I said what I said, don't come closer. Step back!",
          T0011: "I will come out, but only if you swear that you will not hurt me."
        }
      };

      ƒS.Speech.hide();
      await ƒS.Location.show(locations.cat_search_bush);
      await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0002);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);
      ƒS.Sound.play(sound.fox_scream, 0.3);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0006);
      await ƒS.Speech.tell(characters.questionmark, text.Fox.T0007);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0008);
      await ƒS.Speech.tell(characters.questionmark, text.Fox.T0009);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010);
      await ƒS.Speech.tell(characters.questionmark, text.Fox.T0011);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0012);
      ƒS.Sound.play(sound.rustle_1, 0.3);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0013);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0014);
      
      if (!dataForSave.encounteredCat) {
        return "BefriendFoxFirstEncounter";
      }
      else {
        return "BefriendFox";
      }

    }
    
    else {
      console.log("- - - Scene 6.3.1: Cold Blue Eyes - - -");
      let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
      gameMenu.open();

      let text = {
        Narrator: {
          T0001: "As you turn the corner, you notice a pair of bright blue eyes in one of the bushes a few meters away from you.",
          T0003: "You crouch down and lift up a few branches. The blue eyes, that you saw earlier, watching your every move.",
          T0004: "As you stretch out your arm to brush away some leaves, you suddenly hear a scream right in front of you.",
          T0005: "Reflexively, you flinch and step back.",
          T0010: "Thoroughly confused, you stand up. Suddenly you remember the eyes. The cat also had those shiny eyes, but were they blue?",
          T0013: "You hear the sound of cracking of branches and rustling of leaves.",
          T0014: "Slowly, you can see the eyes moving closer, and a scared fox appears from underneath the bush."
        },
        Protagonist: {
          T0002: "Oh, there are you. Why did you want to come with me if you just disappear instantly?",
          T0006: "Sorry, I didn't mean to…",
          T0008: "What? It's me, " + dataForSave.nameProtagonist + ". What are you talking about Tommy?",
          T0012: "I won't hurt you, I promise. Why would I even do that?",
          T0015: "Oh, you really aren't Tommy. Uhh… nice to meet you…?"
        },
        Fox: {
          T0007: "Don't come closer, or else I will bite you!",
          T0009: "I don't know what you mean, I don't know anybody named Tommy.",
          T0011: "I will come out, but only if you swear that you will not hurt me.",
          T0016: "Don't step closer. Who is Tommy?"
        }
      };

      ƒS.Speech.hide();
      await ƒS.Location.show(locations.cat_search_bush);
      await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0002);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);
      ƒS.Sound.play(sound.fox_scream, 0.3);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0006);
      await ƒS.Speech.tell(characters.questionmark, text.Fox.T0007);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0008);
      await ƒS.Speech.tell(characters.questionmark, text.Fox.T0009);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010);
      await ƒS.Speech.tell(characters.questionmark, text.Fox.T0011);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0012);
      ƒS.Sound.play(sound.rustle_1, 0.3);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0013);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0014);

      let tellFoxAboutCatAnswer = {
        tellFox: "Tell the fox about your encounter with the cat",
        dontTellFox: "Keep the cat a secret for now"
      };
      let tellFoxAboutCat = await ƒS.Menu.getInput(tellFoxAboutCatAnswer, "decision");
      ƒS.Sound.play(sound.click, 0.2);
      switch (tellFoxAboutCat) {
        case tellFoxAboutCatAnswer.tellFox:
          return "BefriendFox";
        case tellFoxAboutCatAnswer.dontTellFox:
          return "DontBefriendFox";
      }

    }
  }
}