namespace Endabgabe {
  export async function ForestWithCat(): ƒS.SceneReturn {
    console.log("- - - Scene 5.2: The Forest and its Friends - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "You reach the beginning of the forest. Large trees grow left and right of the small road that leads deeper into the forest.",
        T0002: "The large shadows that are casted from the treetops provide a cool shade despite the sun being high up in the sky.",
        T0003: "As you hear the birds singing you remember why you used to come here so often. This forest seems so magical, but you can't exactly explain why.",
        T0005: "As soon as those words were spoken, the cat already took off, chasing a squirrel up a tree.",
        T0006: "You continue walking, heading deeper into the forest. In the distance, you can see a deer, staring at you. As you get closer, it hurries away behind some bushes.",
        T0008: "It seems like Tommy got so distracted by the squirrel that you lost them.",
        T0009: "You stop and turn around. What would be the best place to look for a playful cat in this forest?",
        T0010: "As you crouch through some low hanging branches and stumble onto the fields, you realize just how hot it is already.",
        T0011: "You forgot to bring some water and you also don't have any sunglasses, which makes the search on the open field more difficult than you thought.",
        T0013: "Just shouting these words already made you sweat. Before any more words leave your mouth, you begin to realize, that a cat wouldn't be here.",
        T0014: "If cats enjoy one thing, then it is being comfortable, and a field with no shadows in 30°C is definitely not a place to be comfortable at, so you decide to head back."
      },
      Cat: {
        T0004: "It is so much colder here than back there, I love it! The past days have been so hot, I have just been hiding inside bushes and trees to avoid the heat."
      },
      Protagonist: {
        T0007: "Tommy, where are you?",
        T0012: "Tommy? Stop hiding!"
      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.forest_path_into);
    await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
  
    await ƒS.Character.hide(characters.tommy);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);

    await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.tommy, text.Cat.T0004);
    await ƒS.Character.hide(characters.tommy);
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0007);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0008);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0009);

    let lookForCatAnswer = {
      forest: "Deeper in the forest",
      field: "On the open fields behind the trees",
      bush: "Underneath some bushes next to the path"
    };
    
    let lookForCat = await ƒS.Menu.getInput(lookForCatAnswer, "decision");
 // delete lookForCatAnswer.forest löscht die sachen aus der decision
    switch (lookForCat) {
      case lookForCatAnswer.forest:
        return "IntoDeepForest";

      case lookForCatAnswer.field:
        await ƒS.Location.show(locations.cat_search_field);
        await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0011);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0012);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0013);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0014);

        let lookForCatAgainAnswer = {
          forest: "Deeper in the forest",
          bush: "Underneath some bushes next to the path"
        };
        
        let lookForCatAgain = await ƒS.Menu.getInput(lookForCatAgainAnswer, "decision");
        switch(lookForCatAgain) {
          case lookForCatAgainAnswer.forest:
            return "IntoDeepForest";

          case lookForCatAgainAnswer.bush:
            return "MeetFox";
        }


      case lookForCatAnswer.bush:
        return "MeetFox";
    }
    
  }
}