namespace Endabgabe {
  export async function WalkHome(): ƒS.SceneReturn {
    console.log("- - - Scene 30.1: Coming Home - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "The sun has almost gone down completely, when you decide to head back home.",
        T0001a: "The sun has almost gone down completely, when you decide to head back home, with Tommy fast asleep on your shoulder.",
        T0006: "You laugh as you reach your home, unlock your front door and jump onto your bed, not knowing that this day might have just changed your life forever.",
        T0006a: "You laugh as you reach your home, unlock your front door and jump onto your bed, not knowing that you have just missed the most interesting day of your life."
      },
      Protagonist: {
        T0002a: "Wow, what a relaxing day. But… I feel like I missed something…",
        T0003a: "Well, must've been nothing.",
        T0002: "What a day, huh. What was I even doing? I guess I helped people…",
        T0003: "Were they even people? Were they animals?",
        T0004: "Where are they now? And why me?",
        T0005: "I have so many questions. Hopefully tomorrow is going to be a less stressful day. I mean, I just wanted to go for a walk…"
      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.evening_walk);
    await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

    ƒS.Sound.fade(sound.forest_ambience_1, 0, 2, false);
    ƒS.Sound.fade(sound.clearing_ambience, 0, 2, false);
    ƒS.Sound.fade(sound.lake, 0, 2, false);

    if (dataForSave.travelWithCat && !dataForSave.freedCat) {
      let text2 = {
        Protagonist: {
          T0002: "Hey, Tommy, do you want to come with me? I think I still have some space in my room for a cat.",
          T0005: "Yep, sounds like just the thing you need. I'll visit you though!",
          T0007: "I will definitely do that. But I think I will go home now. See you soon!",
          T0010: "And be careful out there!"
        },
        Cat: {
          T0003: "*yawns*",
          T0004: "Thank you very much, but I think I like it more outside. There is just so much more to explore!",
          T0006: "Yes please! That would be so cool!",
          T0008: "Goodbye! Love you!",
          T0011: "Yes, yes, of course!"
        },
        Narrator: {
          T0009: "As a sign of farewell, the cat licks a couple of times over your face and jumps to the ground.",
          T0012: "And with these words, the cat vanished in one of the nearby bushes. You are now alone again."
        }
      };

      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001a);
      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0002);

      await ƒS.Character.show(characters.tommy, characters.tommy.pose.yawning, ƒS.positions.bottomcenter);
      await ƒS.update(0.2);

      await ƒS.Speech.tell(characters.tommy, text2.Cat.T0003);

      await ƒS.Character.hide(characters.tommy);
      await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
      await ƒS.update(0.2);

      await ƒS.Speech.tell(characters.tommy, text2.Cat.T0004);

      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0005);
      await ƒS.Speech.tell(characters.tommy, text2.Cat.T0006);
      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0007);
      await ƒS.Speech.tell(characters.tommy, text2.Cat.T0008);
      await ƒS.Speech.tell(characters.narrator, text2.Narrator.T0009);
      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0010);
      await ƒS.Speech.tell(characters.tommy, text2.Cat.T0011);

      await ƒS.Character.hide(characters.tommy);
      await ƒS.Character.animate(characters.tommy, characters.tommy.pose.happy, animate(animations.centerRightOut));
      await ƒS.update(0.2);


      ƒS.Sound.play(sound.rustle_2, 0.4);
      await ƒS.Speech.tell(characters.narrator, text2.Narrator.T0012);
    }

    if (dataForSave.freedAnimals == 0) {
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0002a);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0003a);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006a);
      ƒS.Sound.fade(sound.crickets, 0, 2, false);
      return "BadEnding";
    }
    else {
      if (dataForSave.travelWithCat && !dataForSave.freedCat)
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001a);
      else 
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);

      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0002);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0003);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0004);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0005);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);
      ƒS.Sound.fade(sound.crickets, 0, 2, false);
      if (dataForSave.freedAnimals == 4) {
        return "GoodEnding";
      }
      else {
        return "NeutralEndings";
      }
    }
  }
}