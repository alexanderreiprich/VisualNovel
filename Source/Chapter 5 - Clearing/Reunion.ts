namespace Endabgabe {
  export async function Reunion(): ƒS.SceneReturn {
    console.log("- - - Scene 28: Reunion - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0004: "The cat fell asleep next to the mysterious rock in the sun.",
        T0006: "You can see the cat stretching and yawning before slowly getting up and trotting over to you.",
        T0009: "Both, the cat and the deer freeze and look at each other.",
        T0021: "Both, the cat and the deer are now cuddled up underneath a big tree. You don’t know how happy deer look like, but this is probably what comes closest to it.",
        T0025: "You couldn’t finish your sentence, as you see the bright purple and green eyes fade into black.",
        T0026: "After another second, both seem surprised to see you.",
        T0027: "The previously very talkative animals seem to not recognize you anymore.",
        T0028: "Surprise turns into fright, and both take off into the forest, never to be seen again. It seems like their souls are finally free.",
        T0029: "Suddenly, you are alone in the forest."
      },
      Protagonist: {
        T0001: "Where is Tommy?",
        T0003: "Yes, he is a cat that I found this morning. He has been travelling with me the whole day.",
        T0005: "Hey, Tommy, can you come here for a second?",
        T0008: "Tommy, meet Olivia.",
        T0013: "…have you already met?",
        T0018: "Oh, it all makes sense now… the bright light you told me about when we first met… that was the car crash…",
        T0024: "Well, I’m not going anywhere, so feel free to come visit-"
      },
      Cat: {
        T0007: "Hmm?",
        T0011: "Mom?!",
        T0017: "Mom, I missed you too… Why are you here?",
        T0023: "Thank you, " + dataForSave.nameProtagonist + "! I’m going to miss you…"
      },
      Deer: {
        T0002: "Tommy?",
        T0010: "Tommy, is that you?",
        T0012: "Oh, Tommy, I missed you so much…",
        T0014: "No… this is my son, Tommy…",
        T0015: "He died a couple of weeks ago in a car crash. Somebody crashed into our car when we stopped at a red light.",
        T0016: "I couldn’t sleep after that… my life has been a mess…",
        T0019: "Ever since he passed away, I couldn’t shut my eyes, I just kept seeing the accident in front of me…",
        T0020: "I never really coped with all of this. I just… worked more. It just might have been too much…",
        T0022: "Thank you so much, " + dataForSave.nameProtagonist + ". I haven’t been so happy in a long time…"
      }
    };

    await ƒS.Location.show(locations.clearing_trees);
    await ƒS.update();

    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0001);

    await ƒS.Character.hide(characters.olivia);
    await ƒS.Character.show(characters.olivia, characters.olivia.pose.curious, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.olivia, text.Deer.T0002);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0003);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0005);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);

    await ƒS.Character.hide(characters.olivia);
    await ƒS.Character.animate(characters.olivia, characters.olivia.pose.curious, animate("midToRight"));
    await ƒS.Character.animate(characters.tommy, characters.tommy.pose.yawning, animate("outToLeft"));
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.tommy, text.Cat.T0007);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0008);

    await ƒS.Character.hide(characters.olivia);
    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.olivia, characters.olivia.pose.surprised, newPositions.bottomright);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.surprised, newPositions.bottomleft);
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0009);
    await ƒS.Speech.tell(characters.olivia, text.Deer.T0010);
    await ƒS.Speech.tell(characters.tommy, text.Cat.T0011);

    await ƒS.Character.hide(characters.olivia);
    await ƒS.Character.show(characters.olivia, characters.olivia.pose.sad, newPositions.bottomright);
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.olivia, text.Deer.T0012);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0013);
    await ƒS.Speech.tell(characters.olivia, text.Deer.T0014);
    await ƒS.Speech.tell(characters.olivia, text.Deer.T0015);
    await ƒS.Speech.tell(characters.olivia, text.Deer.T0016);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.sad, newPositions.bottomleft);
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.tommy, text.Cat.T0017);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0018);

    await ƒS.Character.hide(characters.olivia);
    await ƒS.Character.show(characters.olivia, characters.olivia.pose.crying, newPositions.bottomright);
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.olivia, text.Deer.T0019);
    await ƒS.Speech.tell(characters.olivia, text.Deer.T0020);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0021);
    await ƒS.Speech.tell(characters.olivia, text.Deer.T0022);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, newPositions.bottomleft);
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.tommy, text.Cat.T0023);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0024);


    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0025);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.hide(characters.olivia);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.empty, newPositions.bottomleft);
    await ƒS.Character.show(characters.olivia, characters.olivia.pose.empty, newPositions.bottomright);
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0026);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0027);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0028);

    await ƒS.Character.animate(characters.olivia, characters.olivia.pose.empty, animate("rightOut"));
    await ƒS.Character.animate(characters.tommy, characters.tommy.pose.empty, animate("leftOut"));
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0029);

    dataForSave.freedDeer = true;
    dataForSave.freedCat = true;
    dataForSave.freedAnimals += 2;

    return "WalkHome";

  }
}