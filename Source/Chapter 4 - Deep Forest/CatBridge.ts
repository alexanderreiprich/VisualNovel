namespace Endabgabe {
  export async function CatBridge(): ƒS.SceneReturn {
    console.log("- - - Scene 13: What the cat? - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "You cross the bridge and reach a dirt path. After a couple of meters, more light shines through the trees, until you step out of the forest.",
        T0002: "You are now on the side of the field, at the edge of the forest. The sun is still shining, but it isn't as hot as when you entered the forest.",
        T0006: "The cat jumps from your shoulder onto the ground."

      },
      Cat: {
        T0003: "Wow! You can see so far!",
        T0005: "Well, not at this height of course.",
        T0007: "Okay, and what do we do now?",
        T0009: "Yes. Very."
      },
      Protagonist: {
        T0004: "I mean, yes, this is a field and there is no town or anything in sight. Have you never been here before?",
        T0008: "Are you bored or what?",
        T0010: "Hmm, okay…"
      }
    };

    await ƒS.Character.hide(characters.tommy);

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.deep_forest_split_bridge);
    await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.surprised, ƒS.positions.bottomcenter);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.tommy, text.Cat.T0003);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0004);
    await ƒS.Speech.tell(characters.tommy, text.Cat.T0005);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.tommy, text.Cat.T0007);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0008);
    await ƒS.Speech.tell(characters.tommy, text.Cat.T0009);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.neutral, ƒS.positions.bottomcenter);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0010);

    let playWithCatAnswer = {
      stick: "Use a stick with a leaf on it as a cat toy",
      iSpy: "Play 'I spy with my little eye'",
      hideAndSeek: "Play 'Hide and Seek'"
    };

    let playWithCat = await ƒS.Menu.getInput(playWithCatAnswer, "decision");

    if (playWithCat == playWithCatAnswer.stick) {
      console.log("- - - Scene 13.1: DIY Toys - - -");

      let text2 = {
        Narrator: {
          T0004: "You grab a long stick with a couple of leaves at the end of it. As you pluck every single leaf off the branch, aside from one, the cats eyes begin to light up.",
          T0008: "You play with the cat for a couple of minutes until suddenly…",
          T0010: "The cat is crouching beneath a nearby bush. It seems to have spotted something interesting.",
          T0014: "Abruptly, the cat jumps back, and you can see a fox crawling out of the bush."
        },
        Cat: {
          T0002: "What are you doing?",
          T0005: "Ah, I see where this is going!",
          T0007: "Yes! Come on, come on, let's play!!",
          T0009: "Whoa, what is that?",
          T0012: "…eyes."
        },
        Protagonist: {
          T0001: "Well, this could work…",
          T0003: "Just wait.",
          T0006: "Aaaand, we're done. Enjoy your new DIY cat toy. It's like one of these rods with a feather at the end, but… with more nature.",
          T0011: "What is it?",
          T0013: "Huh?"
        }
      };

      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0001);
      await ƒS.Speech.tell(characters.tommy, text2.Cat.T0002);

      await ƒS.Character.hide(characters.tommy);
      await ƒS.Character.show(characters.tommy, characters.tommy.pose.curious, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0003);
      await ƒS.Speech.tell(characters.narrator, text2.Narrator.T0004);

      await ƒS.Character.hide(characters.tommy);
      await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.tommy, text2.Cat.T0005);
      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0006);
      await ƒS.Speech.tell(characters.tommy, text2.Cat.T0007);
      await ƒS.Speech.tell(characters.narrator, text2.Narrator.T0008);

      await ƒS.Character.hide(characters.tommy);
      await ƒS.Character.show(characters.tommy, characters.tommy.pose.curious, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.tommy, text2.Cat.T0009);
      await ƒS.Speech.tell(characters.narrator, text2.Narrator.T0010);
      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0011);

      await ƒS.Character.hide(characters.tommy);
      await ƒS.Character.show(characters.tommy, characters.tommy.pose.neutral, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.tommy, text2.Cat.T0012);
      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0013);
      await ƒS.Speech.tell(characters.narrator, text2.Narrator.T0014);

      return "EncounterFoxAgain";

    }

    else if (playWithCat == playWithCatAnswer.iSpy) {
      console.log("- - - Scene 13.2: I spy... - - -");
      let text2 = {
        Narrator: {
          T0003: "The cat points to a couple of red roses growing at the side.",
          T0007: "Half a minute passes with the cat walking up and down the path, looking around.",
          T0010: "The cat wasn't even close to the bright blue bottle opener that somebody lost a few meters away.",
          T0011: "Suddenly, you hear a loud scream.",
          T0014: "As the cat jumps back, a fox comes crawling out of the bush, it's blue eyes shining bright in the sunlight."
        },
        Protagonist: {
          T0001: "Alright Tommy, I spy with my little eye… something red.",
          T0004: "Yep, that's it. Okay…",
          T0005: "I spy with my little eye… something bright blue.",
          T0009: "Uh, what did you find?",
          T0013: "What, are you okay?"
        },
        Cat: {
          T0002: "Hmm, okay… ah, yes, it's one of these flowers!",
          T0006: "Oh… okay… let me see…",
          T0008: "Oh, I found it! Crazy how you saw that from up there!",
          T0012: "AHHH!"
        }
      };

      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0001);
      await ƒS.Speech.tell(characters.tommy, text2.Cat.T0002);

      await ƒS.Character.hide(characters.tommy);
      await ƒS.Character.show(characters.tommy, characters.tommy.pose.curious, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.narrator, text2.Narrator.T0003);
      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0004);
      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0005);
      await ƒS.Speech.tell(characters.tommy, text2.Cat.T0006);

      await ƒS.Character.hide(characters.tommy);
      await ƒS.Character.show(characters.tommy, characters.tommy.pose.neutral, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.narrator, text2.Narrator.T0007);
      await ƒS.Speech.tell(characters.tommy, text2.Cat.T0008);

      await ƒS.Character.hide(characters.tommy);
      await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0009);
      await ƒS.Speech.tell(characters.narrator, text2.Narrator.T0010);
      await ƒS.Speech.tell(characters.narrator, text2.Narrator.T0011);
      await ƒS.Speech.tell(characters.tommy, text2.Cat.T0012);

      await ƒS.Character.hide(characters.tommy);
      await ƒS.Character.show(characters.tommy, characters.tommy.pose.surprised, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0013);
      await ƒS.Speech.tell(characters.narrator, text2.Narrator.T0014);

      return "EncounterFoxAgain";

    }

    else {
      console.log("- - - Scene 13.3: Hide, Seek and Find - - -");

      let text2 = {
        Narrator: {
          T0003: "You turn around.",
          T0005: "Ten seconds pass, and you hear the rustling of leaves behind you. It couldn't be hard to figure out where the cat has hidden.",
          T0008: "The cat is halfway crouched underneath a bush - The first half is visible; the other half isn't.",
          T0010: "The cat slowly backs away from the bush, with their eyes fixated on whatever still hides in the bush.",
          T0012: "Before the cat could answer, you can see a fox crawling out of the bush."
        },
        Protagonist: {
          T0001: "Alright, I'll count to 10 and you have to hide. Ready?",
          T0004: "Perfect. Let's go! 10… 9… 8…",
          T0006: "Zero! Come out, come out, where ever you a-.",
          T0007: "Okay, wow, Tommy, you had plent of time to hide.",
          T0011: "What did you find?"
        },
        Cat: {
          T0002: "Yes! I love hide and seek!",
          T0009: "Uh, I think I found something… or rather, someone."
        }
      };

      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0001);
      await ƒS.Speech.tell(characters.tommy, text2.Cat.T0002);

      await ƒS.Character.hide(characters.tommy);
      await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.narrator, text2.Narrator.T0003);

      await ƒS.Character.hide(characters.tommy);

      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0004);
      await ƒS.Speech.tell(characters.narrator, text2.Narrator.T0005);
      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0006);
      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0007);
      await ƒS.Speech.tell(characters.narrator, text2.Narrator.T0008);
      await ƒS.Speech.tell(characters.tommy, text2.Cat.T0009);

      await ƒS.Character.hide(characters.tommy);
      await ƒS.Character.show(characters.tommy, characters.tommy.pose.neutral, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.narrator, text2.Narrator.T0010);
      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0011);
      await ƒS.Speech.tell(characters.narrator, text2.Narrator.T0012);

      return "EncounterFoxAgain";

    }
  }
}