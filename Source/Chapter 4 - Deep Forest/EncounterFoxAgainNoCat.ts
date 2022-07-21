namespace Endabgabe {

  export async function EncounterFoxAgainNoCat(): ƒS.SceneReturn {

    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0002: "The fox comes out of the bush.",
        T0011: "It seems like this topic is a bit sensitive, as the fox ducks around and wants to avoid the question."
      },
      Protagonist: {
        T0001: "Oh, is that you June?",
        T0004: "How was your trip to find food? I think you should be pretty respected among the other animals?",
        T0006: "Oh, so you were a vegetarian? That's nice.",
        T0008: "Yes, definitely.",
        T0009: "It's really sad, why did you have to turn into a fox? The world needs more people like you. You are really inspiring!",
        T0013: "It's okay if you don't talk about it, no pressure.",
        T0017: "Yeah, I totally understand. Have you seen the lake? There is so much garbage in it."

      },
      Fox: {
        T0003: "Oh, it's you! I knew we would meet again!",
        T0005: "It went pretty good. I settled for some berries. I didn't eat meat when I was human and I want to avoid it as much as I can as a fox, if you understand.",
        T0007: "I've been trying to take care of nature and everything the planet gave us as much as possible. It's crazy what modern societies do to the Earth.",
        T0010: "…",
        T0012: "Well, I… um…",
        T0014: "No, it's okay… Well, honestly, I never liked my life as a human. Humans aren't accepting people, and if you don't fit into certain criteria, you get excluded.",
        T0015: "It sucks. And you can't do anything about it. Of course, there are people that stand up for you, but it doesn't change anything in the long run. It's a systemic problem.",
        T0016: "And it is just really… frustrating and sad. That, in addition to the disregard in terms of the planet and its resources is just depressing.",
        T0018a: "Oh really? What kind of garbage?",
        T0018b: "I mean, have you seen the lake? It was so beautiful but now there is nothing but garbage in it."
      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.deep_forest_split_bridge);
    await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

    if (!dataForSave.encounteredFox) {
      let text2 = {
        Protagonist: {
          T0001: "Hey, hey, stop, go away!",
          T0003: "What?",
          T0005: "I can hear you. Can you understand me?",
          T0007: "Uh, to be honest, I have no idea.",
          T0008: "Well… my name is " + dataForSave.nameProtagonist + ". This… feels weird.",
          T0010: "Nice to meet you too. What are you doing around here?",
          T0012: "Oh, yes… obviously you live here, apologies."
        },
        Fox: {
          T0002: "I don't want to hurt you, no worries.",
          T0004: "…what?",
          T0006: "Oh… yes, I can. What, how can you hear me? What's your name?",
          T0009: "Well, looks like you unlocked a new talent or something overnight. My name is June, nice to meet you.",
          T0011: "I mean… I live in the forest. I was just looking for some food around here."
        }
      };
      console.log("- - - Scene 18.2: What does the fox say? [no cat] - - -");
      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0001);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.concerned, newPositions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.fox, text2.Fox.T0002);
      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0003);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.surprised, newPositions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.fox, text2.Fox.T0004);
      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0005);
      await ƒS.Speech.tell(characters.fox, text2.Fox.T0006);

      if (dataForSave.nameProtagonist == "") {
        let scene: HTMLElement = document.getElementById("append");
        let overlay: HTMLDivElement = document.createElement("div");
        overlay.id = "overlay";
        scene.appendChild(overlay);

        let name: string = await ƒS.Speech.getInput();
        dataForSave.nameProtagonist = name;

        document.getElementById("append").children[0].remove();
      }

      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0007);
      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0008);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.happy, newPositions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.fox, text2.Fox.T0009);
      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0010);
      await ƒS.Speech.tell(characters.june, text2.Fox.T0011);
      await ƒS.Speech.tell(characters.protagonist, text2.Protagonist.T0012);

    }

    else {
      console.log("- - - Scene 18.1: Sounds familiar [no cat] - - -");
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0001);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.happy, newPositions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.june, text.Fox.T0003);

    }

    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0004);
    await ƒS.Speech.tell(characters.june, text.Fox.T0005);

    await ƒS.Character.hide(characters.june);
    await ƒS.Character.show(characters.june, characters.june.pose.happy, newPositions.bottomcenter);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0006);
    await ƒS.Speech.tell(characters.june, text.Fox.T0007);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0008);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0009);

    await ƒS.Character.hide(characters.june);
    await ƒS.Character.show(characters.june, characters.june.pose.uncomfortable, newPositions.bottomcenter);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.june, text.Fox.T0010);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0011);
    await ƒS.Speech.tell(characters.june, text.Fox.T0012);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0013);
    await ƒS.Speech.tell(characters.june, text.Fox.T0014);
    await ƒS.Speech.tell(characters.june, text.Fox.T0015);

    await ƒS.Character.hide(characters.june);
    await ƒS.Character.show(characters.june, characters.june.pose.angry, newPositions.bottomcenter);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.june, text.Fox.T0016);


    if (ƒS.Inventory.getAmount(items.bag) != 0) {
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0017);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.surprised, newPositions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.june, text.Fox.T0018a);

      return "FreeFox";
    }

    else {
      await ƒS.Speech.tell(characters.june, text.Fox.T0018b);
      console.log("- - - Scene 18.3: Doesn't sound familiar - - -");

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
              T0004: "You turn back into the forest and after a few minutes, you both reach the lake."
            },
            Protagonist: {
              T0001: "Yeah, I heard about it. It's disgusting.",
              T0003: "Hmm… I think I know a short cut, follow me!"
            },
            Fox: {
              T0002: "Exactly! I used to go there and pick up what I could so that it could be disposed properly."
            }
          };
          await ƒS.Speech.tell(characters.protagonist, text3.Protagonist.T0001);
          await ƒS.Speech.tell(characters.june, text3.Fox.T0002);

          await ƒS.Character.hide(characters.june);
          await ƒS.Character.show(characters.june, characters.june.pose.neutral, newPositions.bottomcenter);
          await ƒS.update(0.3);

          await ƒS.Speech.tell(characters.protagonist, text3.Protagonist.T0003);

          await ƒS.Speech.tell(characters.narrator, text3.Narrator.T0004);

          return "RevisitLake";

        case agreeWithFoxChoiceAnswer.disagree:
          let text4 = {
            Narrator: {
              T0003: "The fox sighs.",
              T0005: "The fox hurries away back into the forest, with you trying to keep up. After a few minutes you reach the lake."
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
          await ƒS.Character.show(characters.june, characters.june.pose.neutral, newPositions.bottomcenter);
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
              T0013: "In silence, you head back into the forest the way you came from. When you arrive at the bridge, you suddenly hear a loud noise coming from the small dirt path, surrounded by tall, dark trees."
            },
            Protagonist: {
              T0001: "Hey, you know what? I don't think that it is that much of a problem.",
              T0003: "Humans have been using the nature for years already. What does it matter if you throw some stuff away?",
              T0004: "I really dislike people that feel like they are better than others, especially when they pretend to care about the environment.",
              T0005: "You are really annoying with all this nature crap, you know that, right?",
              T0012: "…"
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
          await ƒS.Character.show(characters.june, characters.june.pose.surprised, newPositions.bottomcenter);
          await ƒS.update(0.3);

          await ƒS.Speech.tell(characters.june, text5.Fox.T0002);
          await ƒS.Speech.tell(characters.protagonist, text5.Protagonist.T0003);
          await ƒS.Speech.tell(characters.protagonist, text5.Protagonist.T0004);
          await ƒS.Speech.tell(characters.protagonist, text5.Protagonist.T0005);

          await ƒS.Character.hide(characters.june);
          await ƒS.Character.show(characters.june, characters.june.pose.neutral, newPositions.bottomcenter);
          await ƒS.update(0.3);

          await ƒS.Speech.tell(characters.narrator, text5.Narrator.T0006);

          await ƒS.Character.hide(characters.june);
          await ƒS.Character.show(characters.june, characters.june.pose.angry, newPositions.bottomcenter);
          await ƒS.update(0.3);

          await ƒS.Speech.tell(characters.june, text5.Fox.T0007);
          await ƒS.Speech.tell(characters.june, text5.Fox.T0008);
          await ƒS.Speech.tell(characters.june, text5.Fox.T0009);
          await ƒS.Speech.tell(characters.june, text5.Fox.T0010);
          await ƒS.Speech.tell(characters.narrator, text5.Narrator.T0011);

          await ƒS.Character.hide(characters.june);
          await ƒS.update(0.3);
          await ƒS.Speech.tell(characters.protagonist, text5.Protagonist.T0012);
          await ƒS.Speech.tell(characters.narrator, text5.Narrator.T0013);

          return "ArrivalClearing";
      }
    }
  }
}