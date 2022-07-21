namespace Endabgabe {
  export async function EncounterFoxAgain(): ƒS.SceneReturn {

    let text = {
      Narrator: {
        T0002: "The fox turns around and looks at you with their shiny blue eyes.",
        T0012: "It seems like this topic is a bit sensitive, as the fox ducks around and wants to avoid the question."

      },
      Protagonist: {
        T0001: "Oh is that you June?",
        T0005: "Yes, it is. June, meet Tommy.",
        T0006: "I feel like half of my friends are animals now.",
        T0009: "I don't think you have to envy somebody because of the animal they became. I mean you are a cute cat, that is also cool!",
        T0014: "It's okay if you don't talk about it, no pressure.",
        T0018: "I totally understand. Have you seen the lake? There is so much garbage in it…"

      },
      Cat: {
        T0004: "Is that the fox you told me about?",
        T0008: "Nice to meet you too! Why did you turn into a fox and I turned into a cat? Foxes are so much cooler…",
        T0010: "Yeah, I guess you are right. Anyways, do you know why you turned into a fox?"

      },
      Fox: {
        T0003: "Oh, it's you! I knew we would meet again.",
        T0003a: "Oh, it's you. And... that's your friend you were playing with earlier I assume?",
        T0007: "Nice to meet you, Tommy.",
        T0011: "…",
        T0013: "Well, I… um…",
        T0015: "No, it's okay… Well, honestly, I never liked my life as a human. Humans aren't accepting people, and if you don't fit into certain criteria, you get excluded.",
        T0016: "It sucks. And you can't do anything about it. Of course, there are people that stand up for you, but it doesn't change anything in the long run. It's a systemic problem.",
        T0017: "And it is just really… frustrating and sad. That, in addition to the disregard in terms of the planet and its resources is just depressing.",
        T0019a: "Oh, really? What kind of garbage?",
        T0019b: "I mean, have you seen the lake? It was so beautiful but now there is nothing but garbage in it."
      }
    };

    // Depending on a previous encounter, the dialogue starts differently
    if (!dataForSave.encounteredFox) {
      let text2 = {
        Protagonist: {
          T0001: "Tommy, come here, stay away from the fox!",
          T0003: "What?",
          T0006: "I can hear you. Can you understand me?",
          T0008: "Uh, to be honest, I have no idea.",
          T0011: "Me too. Well… my name is " + dataForSave.nameProtagonist + ", and this is Tommy. I found him this morning and I can also talk to him."

        },
        Cat: {
          T0004: "Huh?",
          T0009: "He can also talk to me! Can we be friends?"
        },
        Fox: {
          T0002: "Hey, I don't want to hurt you, I'm just curious.",
          T0005: "…what?",
          T0007: "Oh… yes, I can. What, how can you hear me?",
          T0010: "I… think so? I am a bit confused.",
          T0012: "Well, looks like you unlocked a new talent or something overnight. My name is June, nice to meet you."
        }
      };

      console.log("- - - Scene 14.2: What does the fox say? - - -");
      let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
      gameMenu.open();

      ƒS.Speech.hide();
      await ƒS.Location.show(locations.deep_forest_split_bridge);
      await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0001);
      await ƒS.Character.hide(characters.tommy);
      await ƒS.Character.animate(characters.tommy, characters.tommy.pose.surprised, animate(animations.midToRight));
      await ƒS.Character.animate(characters.june, characters.june.pose.uncomfortable, animate(animations.midToLeft));
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.fox, text2.Fox.T0002);
      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0003);
      await ƒS.Speech.tell(characters.tommy, text2.Cat.T0004);

      await ƒS.Character.hide(characters.tommy);
      await ƒS.Character.show(characters.tommy, characters.tommy.pose.curious, newPositions.bottomright);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.fox, text2.Fox.T0005);
      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0006);
      await ƒS.Speech.tell(characters.fox, text2.Fox.T0007);
      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0008);
      await ƒS.Speech.tell(characters.tommy, text2.Cat.T0009);

      await ƒS.Character.hide(characters.tommy);
      await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, newPositions.bottomright);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.fox, text2.Fox.T0010);
      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0011);
      await ƒS.Speech.tell(characters.fox, text2.Fox.T0012);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.happy, newPositions.bottomleft);
      await ƒS.update(0.3);
    }

    else {
      console.log("- - - Scene 14: The Fox returns - - -");
      let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
      gameMenu.open();

      ƒS.Speech.hide();
      await ƒS.Location.show(locations.deep_forest_split_bridge);
      await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

      ƒS.Character.hideAll();
      await ƒS.Character.animate(characters.tommy, characters.tommy.pose.curious, animate(animations.midToRight));
      await ƒS.Character.animate(characters.june, characters.june.pose.neutral, animate(animations.midToLeft));
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0001);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.happy, newPositions.bottomleft);
      await ƒS.update(0.3);

      if (!dataForSave.foxTrustsProtagonist)
        await ƒS.Speech.tell(characters.june, text.Fox.T0003a);
      else
        await ƒS.Speech.tell(characters.june, text.Fox.T0003);

      await ƒS.Character.hide(characters.tommy);
      await ƒS.Character.show(characters.tommy, characters.tommy.pose.curious, newPositions.bottomright);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.tommy, text.Cat.T0004);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0005);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0006);
      await ƒS.Speech.tell(characters.june, text.Fox.T0007);
    }

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.sad, newPositions.bottomright);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.tommy, text.Cat.T0008);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0009);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.neutral, newPositions.bottomright);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.tommy, text.Cat.T0010);

    await ƒS.Character.hide(characters.june);
    await ƒS.Character.show(characters.june, characters.june.pose.uncomfortable, newPositions.bottomleft);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.june, text.Fox.T0011);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0012);
    await ƒS.Speech.tell(characters.june, text.Fox.T0013);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0014);
    await ƒS.Speech.tell(characters.june, text.Fox.T0015);
    await ƒS.Speech.tell(characters.june, text.Fox.T0016);
    await ƒS.Speech.tell(characters.june, text.Fox.T0017);
    

    // Depending on the inventory, the scene ends differently
    if (ƒS.Inventory.getAmount(items.bag) != 0) {
      console.log("- - - Scene 14.1: Sounds familiar - - -");
      let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
      gameMenu.open();

      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0018);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.concerned, newPositions.bottomleft);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.june, text.Fox.T0019a);

      return "FreeFox";
    }
    else {
      console.log("- - - Scene 14.3: Doesn't sound familiar - - -");
      let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
      gameMenu.open();

      await ƒS.Speech.tell(characters.june, text.Fox.T0019b);

      let agreeWithFoxChoiceAnswer = {
        agree: "Agree",
        disagree: "Disagree",
        complain: "Complain about activism"
      };

      let agreeWithFoxChoice = await ƒS.Menu.getInput(agreeWithFoxChoiceAnswer, "decision");
      ƒS.Sound.play(sound.click, 0.2);

      switch (agreeWithFoxChoice) {
        case agreeWithFoxChoiceAnswer.agree:
          let text3 = {
            Narrator: {
              T0005: "The cat runs away back into the forest, with the fox and you trying to keep up. After a few minutes you reach the lake."
            },
            Protagonist: {
              T0001: "Yeah, I heard about it. It's disgusting."
            },
            Cat: {
              T0004: "Oh, I know a short cut, follow me!"
            },
            Fox: {
              T0002: "Exactly! I used to go there and pick up what I could so that it could be disposed properly.",
              T0003: "I haven't been there in a few weeks though, so things might have changed?"
            }
          };
          await ƒS.Speech.tell(characters.protagonist, text3.Protagonist.T0001);
          await ƒS.Speech.tell(characters.june, text3.Fox.T0002);
          await ƒS.Speech.tell(characters.june, text3.Fox.T0003);

          await ƒS.Character.hide(characters.june);
          await ƒS.Character.show(characters.june, characters.june.pose.concerned, newPositions.bottomleft);
          await ƒS.update(0.3);

          await ƒS.Speech.tell(characters.cat, text3.Cat.T0004);
          await ƒS.Speech.tell(characters.narrator, text3.Narrator.T0005);

          await ƒS.Character.hideAll();

          return "FreeFox";

        case agreeWithFoxChoiceAnswer.disagree:
          let text4 = {
            Narrator: {
              T0003: "The fox sighs.",
              T0005: "The fox hurries away back into the forest, with the cat and you trying to keep up. After a few minutes you reach the lake."
            },
            Protagonist: {
              T0001: "What, really? I never thought it was that much of a problem?"
            },
            Fox: {
              T0002: "Not that much of a problem?",
              T0004: "You know what, follow me, I have to show you something."
            }
          };
          await ƒS.Speech.tell(characters.protagonist, text4.Protagonist.T0001);

          await ƒS.Character.hide(characters.june);
          await ƒS.Character.show(characters.june, characters.june.pose.neutral, newPositions.bottomleft);
          await ƒS.update(0.3);

          await ƒS.Speech.tell(characters.june, text4.Fox.T0002);
          await ƒS.Speech.tell(characters.narrator, text4.Narrator.T0003);
          await ƒS.Speech.tell(characters.june, text4.Fox.T0004);
          await ƒS.Speech.tell(characters.narrator, text4.Narrator.T0005);

          return "RevisitLake";

        case agreeWithFoxChoiceAnswer.complain:
          let text5 = {
            Narrator: {
              T0006: "The fox seems really taken aback by all of that. The previously friendly face first turns into a disappointed, then an angry expression.",
              T0011: "The fox hisses, turns around and runs away into the forest.",
              T0014: "In silence, you both head back into the forest the way you came from. When you arrive at the bridge, you suddenly hear a loud noise coming from the small dirt path, surrounded by tall, dark trees."
            },
            Protagonist: {
              T0001: "Hey, you know what? I don't think that it is that much of a problem.",
              T0003: "Humans have been using the nature for years already. What does it matter if you throw some stuff away?",
              T0004: "I really dislike people that feel like they are better than others, especially when they pretend to care about the environment.",
              T0005: "You are really annoying with all this nature crap, you know that, right?",
              T0013: "…"
            },
            Cat: {
              T0012: "Wow, " + dataForSave.nameProtagonist + ", what was that? You were kinda rude…"
            },
            Fox: {
              T0002: "…what? Excuse me?",
              T0007: "Wow… People like you are the reason why millions of animals died and will continue to die.",
              T0008: "All of this is avoidable and fixable, but some people are too selfish to realize that.",
              T0009: "I really thought you were actually a decent human being with some common sense, but I guess I was wrong.",
              T0010: "I might be annoying but at least I am not an asshole."
            }
          };
          await ƒS.Speech.tell(characters.protagonist, text5.Protagonist.T0001);

          await ƒS.Character.hide(characters.june);
          await ƒS.Character.show(characters.june, characters.june.pose.surprised, newPositions.bottomleft);
          await ƒS.update(0.3);

          await ƒS.Speech.tell(characters.june, text5.Fox.T0002);
          await ƒS.Speech.tell(characters.protagonist, text5.Protagonist.T0003);
          await ƒS.Speech.tell(characters.protagonist, text5.Protagonist.T0004);
          await ƒS.Speech.tell(characters.protagonist, text5.Protagonist.T0005);

          await ƒS.Character.hide(characters.june);
          await ƒS.Character.show(characters.june, characters.june.pose.neutral, newPositions.bottomleft);
          await ƒS.update(0.3);

          await ƒS.Speech.tell(characters.narrator, text5.Narrator.T0006);

          await ƒS.Character.hide(characters.june);
          await ƒS.Character.show(characters.june, characters.june.pose.angry, newPositions.bottomleft);
          await ƒS.update(0.3);

          await ƒS.Speech.tell(characters.june, text5.Fox.T0007);
          await ƒS.Speech.tell(characters.june, text5.Fox.T0008);
          await ƒS.Speech.tell(characters.june, text5.Fox.T0009);
          await ƒS.Speech.tell(characters.june, text5.Fox.T0010);
          await ƒS.Speech.tell(characters.narrator, text5.Narrator.T0011);

          await ƒS.Character.hide(characters.june);
          await ƒS.Character.hide(characters.tommy);
          await ƒS.Character.animate(characters.tommy, characters.tommy.pose.angry, animate(animations.leftToMid));
          await ƒS.update(0.3);
          await ƒS.Speech.tell(characters.tommy, text5.Cat.T0012);
          await ƒS.Speech.tell(characters.protagonist, text5.Protagonist.T0013);
          await ƒS.Speech.tell(characters.narrator, text5.Narrator.T0014);

          return "ArrivalClearing";
      }
    }
  }
}