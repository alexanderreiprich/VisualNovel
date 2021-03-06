namespace Endabgabe {
  export async function RevisitLake(): ƒS.SceneReturn {

    if (dataForSave.travelWithCat) {
      console.log("- - - Scene 17: Pollution never sounded that good - - -");
      let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
      gameMenu.open();

      let text = {
        Narrator: {
          T0002: "You stand in front of a heavily polluted area of the lake. A lot of trash floats around in the river – empty bottles, various electronic devices, or just regular trash.",
          T0005: "You grab a bag, which wasn't fully submerged in water and open it up. Inside is a Walkman and a couple of cassettes.",
          T0009: "The otherwise calm and collected fox seems really happy and excited all of a sudden.",
          T0010: "You spread all tapes out on the ground, with the fox looking at every single one of them carefully.",
          T0012: "Suddenly the fox stops in front of one tape with an almost completely burgundy red cover image.",
          T0015: "You lay the tape into the player and put the headphones over the fox's ears.",
          T0017: "You get no response. Instead you see the fox staring blankly at nothing, completely sunken into the sounds coming from the headphones. Slowly, the previously bright shining blue eyes fade into black.",
          T0018: "After around 10 seconds, the fox seems surprised, as if it doesn't recognize you, shakes the head, and runs away into the forest."

        },
        Protagonist: {
          T0004: "Yeah, you are right… This is disgusting. It's been so long in here that I can barely tell what all of these things are… What even is this…",
          T0006: "A music player? And… a ton of albums…? Why would somebody throw this away?",
          T0014: "Well, I don't know, but let's give it a go.",
          T0016: "…so, is it working?",
          T0019: "Well… I guess it did work after all…",
          T0021: "I have no idea. Come on, let's go into the direction that they went, maybe we can find them again?"

        },
        Cat: {
          T0003: "Eww, this smells horrible…",
          T0007: "I remember these things, my mom told me she had one back when she was younger!",
          T0020: "What was that?",
          T0022: "I doubt that, but yes, let's go."
        },
        Fox: {
          T0001: "Look at this. Who throws all of this away?",
          T0008: "Oh wow, I love cassettes, let me take a look!",
          T0011: "Ohh… I remember this one. This one is also a classic… and this one, wow, I haven't heard this in ages… Look at all of the-",
          T0013: "Hey, does the Walkman still work?"
        }
      };
      ƒS.Sound.fade(sound.forest_ambience_1, 0, 3, false);
      ƒS.Sound.play(sound.lake, 0.6);
      ƒS.Sound.play(sound.crickets, 0.4);

      ƒS.Speech.hide();
      await ƒS.Location.show(locations.lake_polluted_water);
      await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

      await ƒS.Character.hideAll();
      await ƒS.Character.animate(characters.june, characters.june.pose.angry, animate(animations.midToRight));

      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.june, text.Fox.T0001);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);

      await ƒS.Character.animate(characters.tommy, characters.tommy.pose.sad, animate(animations.midToLeft));
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.tommy, text.Cat.T0003);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0004);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0006);

      await ƒS.Character.hide(characters.tommy);
      await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, newPositions.bottomleft);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.tommy, text.Cat.T0007);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.happy, newPositions.bottomright);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.june, text.Fox.T0008);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0009);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010);
      await ƒS.Speech.tell(characters.june, text.Fox.T0011);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.surprised, newPositions.bottomright);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0012);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.happy, newPositions.bottomright);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.june, text.Fox.T0013);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0014);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0015);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0016);

      ƒS.Sound.play(sound.spacesong, 0.5, true);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.hide(characters.tommy);
      await ƒS.Character.show(characters.june, characters.june.pose.neutral, newPositions.bottomright);
      await ƒS.Character.show(characters.tommy, characters.tommy.pose.sad, newPositions.bottomleft);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0017);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.empty, newPositions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0018);
      await ƒS.Character.animate(characters.june, characters.june.pose.empty, animate("rightOut"));
      await ƒS.Character.animate(characters.tommy, characters.tommy.pose.sad, animate("leftToMid"));
      await ƒS.Character.hide(characters.june);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0019);
      await ƒS.Speech.tell(characters.tommy, text.Cat.T0020);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0021);
      await ƒS.Speech.tell(characters.tommy, text.Cat.T0022);

      dataForSave.freedFox = true;
      dataForSave.freedAnimals++;
      ƒS.Inventory.add(items.bag);
      ƒS.Sound.fade(sound.spacesong, 0, 2, false);
      ƒS.Speech.hide();
      await ƒS.Progress.delay(2);
      await ƒS.Speech.tell(characters.narrator, "You picked up the bag with the walkman. Listen to the cassettes by pressing 'M'.");
      
      await ƒS.Character.hide(characters.tommy);
      return "ArrivalClearing";
    }

    else {
      console.log("- - - Scene 21: Pollution never sounded that good [no cat] - - -");
      let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
      gameMenu.open();

      let text = {
        Narrator: {
          T0002: "You stand in front of a heavily polluted area of the lake. A lot of trash floats around in the river – empty bottles, various electronic devices, or just regular trash.",
          T0004: "You grab a bag, which wasn't fully submerged in water and open it up. Inside is a Walkman and a couple of cassettes.",
          T0007: "The otherwise calm and collected fox seems really happy and excited all of a sudden.",
          T0008: "You spread all tapes out on the ground, with the fox looking at every single one of them carefully.",
          T0010: "Suddenly the fox stops in front of one tape with an almost completely burgundy red cover image.",
          T0013: "You lay the tape into the player and put the headphones over the fox's ears.",
          T0015: "You get no response. Instead you see the fox staring blankly at nothing, completely sunken into the sounds coming from the headphones. Slowly, the previously bright shining blue eyes fade into black.",
          T0016: "After around 10 seconds, the fox seems surprised, as if it doesn't recognize you, shakes the head, and runs away into the forest.",
          T0019: "You make your way through the forest, trying to keep up with the fox, when you arrive at a small path."
        },
        Protagonist: {
          T0003: "Yeah, you are right… This is disgusting. It's been so long in here that I can barely tell what all of these things are… What even is this…",
          T0005: "A music player? And… a ton of albums…? Why would somebody throw this away?",
          T0012: "Well, I don't know, but let's give it a go.",
          T0014: "…so, is it working?",
          T0017: "Well… I guess it did work after all…",
          T0018: "I hope we meet again. Maybe I should follow them and make sure everything is okay..."
        },
        Fox: {
          T0001: "Look at this. Who throws all of this away?",
          T0006: "Oh wow, I love cassettes, let me take a look!",
          T0009: "Ohh… I remember this one. This one is also a classic… and this one, wow, I haven't heard this in ages… Look at all of the-",
          T0011: "Hey, does the Walkman still work?"
        }
      };

      ƒS.Sound.fade(sound.forest_ambience_1, 0, 3, false);
      ƒS.Sound.play(sound.lake, 0.6);
      ƒS.Sound.play(sound.crickets, 0.4);

      ƒS.Speech.hide();
      await ƒS.Location.show(locations.lake_polluted_water);
      await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

      await ƒS.Character.show(characters.june, characters.june.pose.angry, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.june, text.Fox.T0001);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0003);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0005);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.happy, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.june, text.Fox.T0006);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0007);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0008);
      await ƒS.Speech.tell(characters.june, text.Fox.T0009);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.surprised, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.happy, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.june, text.Fox.T0011);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0012);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0013);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0014);

      ƒS.Sound.play(sound.spacesong, 0.5, true);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.neutral, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0015);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.empty, newPositions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0016);

      await ƒS.Character.animate(characters.june, characters.june.pose.empty, animate("centerRightOut"));

      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0017);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0018);

      dataForSave.freedFox = true;
      dataForSave.freedAnimals++;
      ƒS.Inventory.add(items.bag);
      ƒS.Sound.fade(sound.spacesong, 0, 2, false);
      ƒS.Speech.hide();
      await ƒS.Progress.delay(2);
      await ƒS.Speech.tell(characters.narrator, "You picked up the bag with the walkman. Listen to the cassettes by pressing 'M'.");

      return "ArrivalClearing";

    }

  }
}