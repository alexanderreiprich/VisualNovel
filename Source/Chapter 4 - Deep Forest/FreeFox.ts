namespace Endabgabe {

  export async function FreeFox(): ƒS.SceneReturn {

    if (dataForSave.travelWithCat) {
      console.log("- - - Scene 15: Music makes you feel free - - -");
      let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
      gameMenu.open();
  
      let text = {
        Narrator: {
          T0002: "You pull out the bag with the Walkman and the cassette tapes.",
          T0005: "The otherwise calm and collected fox seems really happy and excited all of a sudden.",
          T0006: "You spread all tapes out on the ground, with the fox looking at every single one of them carefully.",
          T0008: "Suddenly the fox stops in front of one tape with an almost completely burgundy red cover image.",
          T0011: "You lay the tape into the player and put the headphones over the fox's ears.",
          T0013: "You get no response. Instead you see the fox staring blankly at nothing, completely sunken into the sounds coming from the headphones. Slowly, the previously bright shining blue eyes fade into black.",
          T0014: "After around 10 seconds, the fox seems surprised, as if it doesn't recognize you, shakes the head, and runs away into the forest.",
          T0019: "You start running deeper into the forest, in the hopes of catching up.",
          T0020: "After a few minutes, you cross the bridge again and reach the dirt path."
        },
        Protagonist: {
          T0001: "Look what I found! Why would anybody throw this away?",
          T0010: "I think so.",
          T0012: "…so, is it working?",
          T0015: "Well… I guess it did work after all…",
          T0017: "I have no idea. Come on, let's go into the direction that they went, maybe we can find them again?"
        },
        Fox: {
          T0004: "Oh wow, I love cassettes, let me take a look!",
          T0007: "Ohh… I remember this one. This one is also a classic… and this one, wow, I haven't heard this in ages… Look at all of the-",
          T0009: "Hey, does the Walkman still work?"
        },
        Cat: {
          T0003: "I remember these things, my mom told me she had one back when she was younger!",
          T0016: "What was that?",
          T0018: "I doubt that, but yes, let's go."
        }
      };

      ƒS.Sound.fade(sound.forest_ambience_1, 0, 3, false);
      ƒS.Sound.play(sound.lake, 0.6);
      ƒS.Sound.play(sound.crickets, 0.4);

      ƒS.Speech.hide();
      await ƒS.Location.show(locations.lake_polluted_water);
      await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0001);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);

      await ƒS.Character.hide(characters.tommy);
      await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, newPositions.bottomleft);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.tommy, text.Cat.T0003);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.happy, newPositions.bottomright);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.june, text.Fox.T0004);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);
      await ƒS.Speech.tell(characters.june, text.Fox.T0007);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.surprised, newPositions.bottomright);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0008);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.happy, newPositions.bottomright);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.june, text.Fox.T0009);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0010);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0011);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0012);

      ƒS.Sound.play(sound.spacesong, 0.5);

      ƒS.Character.hideAll();
      await ƒS.Character.show(characters.june, characters.june.pose.neutral, newPositions.bottomright);
      await ƒS.Character.show(characters.tommy, characters.tommy.pose.sad, newPositions.bottomleft);
      await ƒS.update(0.3);


      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0013);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.empty, newPositions.bottomright);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0014);
      await ƒS.Character.hide(characters.june);
      await ƒS.Character.animate(characters.june, characters.june.pose.empty, animate("rightOut"));
      await ƒS.Character.hide(characters.tommy);
      await ƒS.Character.animate(characters.tommy, characters.tommy.pose.sad, animate("leftToMid"));
      await ƒS.Character.hide(characters.june);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0015);
      await ƒS.Speech.tell(characters.tommy, text.Cat.T0016);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0017);
      await ƒS.Speech.tell(characters.tommy, text.Cat.T0018);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0019);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0020);

      await ƒS.Character.hide(characters.tommy);
      ƒS.Sound.fade(sound.spacesong, 0, 2, false);

      if (ƒS.Inventory.getAmount(items.bag) == 0)
        ƒS.Inventory.add(items.bag);

      dataForSave.freedFox = true;
      dataForSave.freedAnimals++;

      return "ArrivalClearing";
    }

    else {
      console.log("- - - Scene 19: Music sounds better with you - - -");
      let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
      gameMenu.open();
  
      let text = {
        Narrator: {
          T0002: "You pull out the bag with the Walkman and the cassette tapes.",
          T0004: "The otherwise calm and collected fox seems really happy and excited all of a sudden.",
          T0005: "You spread all tapes out on the ground, with the fox looking at every single one of them carefully.",
          T0007: "Suddenly the fox stops in front of one tape with an almost completely burgundy red cover image.",
          T0010: "You lay the tape into the player and put the headphones over the fox's ears.",
          T0012: "You get no response. Instead you see the fox staring blankly at nothing, completely sunken into the sounds coming from the headphones. Slowly, the previously bright shining blue eyes fade into black.",
          T0013: "After around 10 seconds, the fox seems surprised, as if it doesn't recognize you, shakes the head, and runs away into the forest.",
          T0015: "You decide to head back into to forest. Soon after, you cross the bridge and reach the dirt path you came across earlier."
        },
        Protagonist: {
          T0001: "Look what I found! Why would anybody throw this away?",
          T0009: "Well, I haven't tried it, but let's give it a go.",
          T0011: "…so, is it working?",
          T0014: "Well… I guess it did work after all…"
        },
        Fox: {
          T0003: "Oh wow, I love cassettes, let me take a look!",
          T0006: "Ohh… I remember this one. This one is also a classic… and this one, wow, I haven't heard this in ages… Look at all of the-",
          T0008: "Hey, does the Walkman still work?"
        }
      };

      ƒS.Sound.fade(sound.forest_ambience_1, 0, 3, false);
      ƒS.Sound.play(sound.lake, 0.6);
      ƒS.Sound.play(sound.crickets, 0.4);

      ƒS.Speech.hide();
      await ƒS.Location.show(locations.lake_polluted_water);
      await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0001);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.happy, newPositions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.june, text.Fox.T0003);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);
      await ƒS.Speech.tell(characters.june, text.Fox.T0006);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.surprised, newPositions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0007);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.neutral, newPositions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.june, text.Fox.T0008);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0009);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0011);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0012);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.empty, newPositions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0013);

      await ƒS.Character.animate(characters.june, characters.june.pose.empty, animate("centerRightOut"));
      await ƒS.Character.hide(characters.june);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0014);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0015);

      dataForSave.freedFox = true;
      dataForSave.freedAnimals++;

      return "ArrivalClearing";
    }
  }
}