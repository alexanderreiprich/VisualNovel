namespace Endabgabe {
  export async function ExamineWater(): ƒS.SceneReturn {
    console.log("- - - Scene 8: Think of the turtles! - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "You walk along the edge of the lake. Since it has been this warm for a couple of days already, you can see and hear the mosquitos buzzing everywhere.",
        T0002: "Of course, you forgot the bring any kind of protection.",
        T0003: "You spot a pile of indistinguishable things a few meters away in a shallower spot of the lake. A strong smell comes from there that really messes with your head.",
        T0004: "As you step closer to the origin of the smell, you see where it comes from.",
        T0005: "Somebody has dumped a ton of garbage into the lake. You see a lot of things floating around, all of which definitely do not belong into a body of water.",
        T0006: "Some things peak your curiosity.",
        T0007: "The bag is heavier than you thought. Surprisingly, it hasn't been in the water at all. Whoever dumped everything here, was probably too stupid to litter correctly.",
        T0008: "Inside the bag is an old Walkman, as well as a couple of old cassette tapes. You remember most of them from your childhood.",
        T0010: "You fish one of the bottles out of the water.",
        T0011: "As soon as you hold it in your hand, you realize that this is where the horrible smell came from. Out of reflex, you throw the disgusting bottle back into the water.",
        T0012: "Some things are better left untouched.",
        T0013: "With the horrid smell still stuck in your nose, you make your way back to the castle."
     
      },
      Protagonist: {
        T0009: "Oh wow, these albums look pretty new, some are still sealed. This is too cool to throw away. But… would it be stealing if I just took it?"
      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.lake);
    await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);

    let examineLakeSmellAnswer = {
      examineSmell: "Examine the smell",
      goBack: "Go back, since it might be dangerous"
    };

    let examineLakeSmell = await ƒS.Menu.getInput(examineLakeSmellAnswer, "decision");

    if (examineLakeSmell == examineLakeSmellAnswer.examineSmell) {

      await ƒS.Location.show(locations.lake_polluted_water);
      await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);

      let examineLakeItemsAnswer = {
        grabBag: "Grab a small bag lying next to the water",
        inspectBottle: "Inspect one of the bottles floating on the surface",
        dontTouch: "Don't touch anything, as it is unhygenic"
      };

      let examineLakeItems = await ƒS.Menu.getInput(examineLakeItemsAnswer);
      switch (examineLakeItems) {
        case examineLakeItemsAnswer.grabBag:
          await ƒS.Speech.tell(characters.narrator, text.Narrator.T0007);
          await ƒS.Speech.tell(characters.narrator, text.Narrator.T0008);
          await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0009);

          let takeBagAnswer = {
            takeBag: "Take the bag with you",
            leaveBag: "Leave it there, you are no thief"
          };

          let takeBag = await ƒS.Menu.getInput(takeBagAnswer);
          if (takeBag == takeBagAnswer.takeBag) {
              ƒS.Inventory.add(items.bag);
              await ƒS.Speech.tell(characters.narrator, text.Narrator.T0013);
          }
          else {
            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0013);
          }
          return "ExamineCastle";
        
        case examineLakeItemsAnswer.inspectBottle:
          await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010);
          await ƒS.Speech.tell(characters.narrator, text.Narrator.T0011);
          await ƒS.Speech.tell(characters.narrator, text.Narrator.T0012);
          await ƒS.Speech.tell(characters.narrator, text.Narrator.T0013);
          return "ExamineCastle";

        case examineLakeItemsAnswer.dontTouch: 
          await ƒS.Speech.tell(characters.narrator, text.Narrator.T0013);
          return "ExamineCastle";
      }
    }
    else {
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0013);
      return "ExamineCastle";
    }
  }
}