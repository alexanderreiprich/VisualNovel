namespace Endabgabe {
  export async function ArrivalClearing(): ƒS.SceneReturn {
    console.log("- - - Scene 22: Place of Origin - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "The path is dark and surrounded by tall pine trees, which let little to no sunlight come through.",
        T0002: "After a few minutes, you reach a wide-open area of the forest.",
        T0003: "The trees seem to be burnt, as they are ash-grey and have no leaves. The grass in this area looks brown and dead.",
        T0004: "In the middle of this clearing is a strange dark object that you can't really identify."
      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.clearing_center);
    await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);
    ƒS.Character.hideAll();
    ƒS.update(0.2);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);

    let scaredDeer: boolean = false;
    let inspectedTrees: boolean = false;
    let clearingChoiceAnswer = {
      ground: "Analyze the ground",
      object: "Check out the object",
      trees: "Investigate the surrounding trees"
    };

    do {
      let clearingChoice = await ƒS.Menu.getInput(clearingChoiceAnswer, "decision");
      await ƒS.Character.hideAll();
      switch (clearingChoice) {
        case clearingChoiceAnswer.ground:
          console.log("- - - Scene 23: Burnt - - -");
          delete clearingChoiceAnswer.ground;
          let text1 = {
            Narrator: {
              T0001: "You bow down and take a look at the ground.",
              T0002: "The dirt is dry, and it seems that everything that ever lived in there, whether it was flora or fauna, has perished.",
              T0003: "The closer you get to the middle of the clearing, the more burnt the ground looks."
            },
            Protagonist: {
              T0005: "Do you want to climb on it?",
              T0007: "What, why?"
            },
            Cat: {
              T0004: "Oh, look! This branch is GIGANTIC!",
              T0006: "Hmmm… no. You should break it.",
              T0008: "It's fun. I love breaking stuff. I'm a cat, remember?"
            }
          };

          ƒS.Speech.hide();
          await ƒS.Location.show(locations.clearing_ground);
          await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

          await ƒS.Speech.tell(characters.narrator, text1.Narrator.T0001);
          await ƒS.Speech.tell(characters.narrator, text1.Narrator.T0002);
          await ƒS.Speech.tell(characters.narrator, text1.Narrator.T0003);

          await ƒS.Character.hide(characters.tommy);
          await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
          await ƒS.update(0.2);

          await ƒS.Speech.tell(characters.tommy, text1.Cat.T0004);
          await ƒS.Speech.tell(characters.protagonist, text1.Protagonist.T0005);

          await ƒS.Character.hide(characters.tommy);
          await ƒS.Character.show(characters.tommy, characters.tommy.pose.angry, ƒS.positions.bottomcenter);
          await ƒS.update(0.2);

          await ƒS.Speech.tell(characters.tommy, text1.Cat.T0006);
          await ƒS.Speech.tell(characters.protagonist, text1.Protagonist.T0007);

          await ƒS.Character.hide(characters.tommy);
          await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
          await ƒS.update(0.2);

          await ƒS.Speech.tell(characters.tommy, text1.Cat.T0008);

          let breakBranchAnswer = {
            break: "Jump on the branch to break it",
            dontBreak: "Don't break the branch"
          };

          let breakBranch = await ƒS.Menu.getInput(breakBranchAnswer, "decision");
          if (breakBranch == breakBranchAnswer.break) {
            console.log("- - - Scene 23.1: Breaking the Branch - - -");
            let text1a = {
              Narrator: {
                T0002: "You step a bit back to take a small run up and proceed to jump on the branch.",
                T0003: "With a loud crack, it break in two.",
                T0004: "In the corner of your eye you can see a deer running away, scared by the loud noise."
              },
              Protagonist: {
                T0001: "Alright, here we go.",
                T0006: "Okay, enough playing around. This place is weird, I want to know what happened here."
              },
              Cat: {
                T0005: "YES! That was fun!"
              }
            };
            await ƒS.Speech.tell(characters.protagonist, text1a.Protagonist.T0001);
            await ƒS.Character.hide(characters.tommy);

            await ƒS.Speech.tell(characters.narrator, text1a.Narrator.T0002);
            await ƒS.Speech.tell(characters.narrator, text1a.Narrator.T0003);
            await ƒS.Speech.tell(characters.narrator, text1a.Narrator.T0004);

            await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
            await ƒS.update(0.2);

            await ƒS.Speech.tell(characters.tommy, text1a.Cat.T0005);
            await ƒS.Speech.tell(characters.protagonist, text1a.Protagonist.T0006);
            scaredDeer = true;
          }
          else {
            console.log("- - - Scene 23.2: Not breaking the Branch - - -");
            let text1b = {
              Protagonist: {
                T0001: "Tommy, I think you played around enough today. Also, I really don't want to get a splinter or something."
              },
              Cat: {
                T0002: "Aww, you are no fun…"
              }
            };
            await ƒS.Speech.tell(characters.protagonist, text1b.Protagonist.T0001);

            await ƒS.Character.hide(characters.tommy);
            await ƒS.Character.show(characters.tommy, characters.tommy.pose.sad, ƒS.positions.bottomcenter);
            await ƒS.update(0.2);

            await ƒS.Speech.tell(characters.tommy, text1b.Cat.T0002);
          }

          break;
        case clearingChoiceAnswer.object: 
          console.log("- - - Scene 24: The sky is falling, the wind is calling - - -");
          delete clearingChoiceAnswer.object;
          let text2 = {
            Narrator: {
              T0001: "You step closer to the ominous looking object in the middle. It appears to be a giant rock.",
              T0006: "It seems like there are small cracks in the rock. Some parts of it chipped off."
            },
            Protagonist: {
              T0003: "Why did you touch it?!",
              T0005: "I don't know… Perhaps because it was out in the sun all day? Hmm…"
            },
            Cat: {
              T0002: "Ohh, a rock! Hehe… OUCH!",
              T0004: "Why not?! But why is it hot?? My paws hurt!"
            }
          };

          ƒS.Speech.hide();
          await ƒS.Location.show(locations.clearing_center);
          await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);
  
          await ƒS.Speech.tell(characters.narrator, text2.Narrator.T0001);

          await ƒS.Character.hide(characters.tommy);
          await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
          await ƒS.update(0.2);

          await ƒS.Speech.tell(characters.tommy, text2.Cat.T0002);

          await ƒS.Character.hide(characters.tommy);
          await ƒS.Character.show(characters.tommy, characters.tommy.pose.surprised, ƒS.positions.bottomcenter);
          await ƒS.update(0.2);

          await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0003);

          await ƒS.Character.hide(characters.tommy);
          await ƒS.Character.show(characters.tommy, characters.tommy.pose.sad, ƒS.positions.bottomcenter);
          await ƒS.update(0.2);

          await ƒS.Speech.tell(characters.tommy, text2.Cat.T0004);
          await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0005);
          await ƒS.Speech.tell(characters.narrator, text2.Narrator.T0006);
  
          let pickUpAnswer = {
            yes: "Take a part of the rock with you",
            no: "Don't touch the rock, as it is too hot"
          };
  
          let pickUp = await ƒS.Menu.getInput(pickUpAnswer, "decision");
          if (pickUp == pickUpAnswer.yes)
            ƒS.Inventory.add(items.rock);
          break;

        case clearingChoiceAnswer.trees:
          ƒS.Character.hideAll();
          if (scaredDeer)
            return "DontEncounterDeer";
          else 
            return "EncounterDeer";
      }
    }
    while (!inspectedTrees);
  }
}