namespace Endabgabe {
  export async function DontBefriendFox(): ƒS.SceneReturn {
    if (dataForSave.travelWithCat) {
      console.log("- - - Scene 6.5.2: Even more Friends? - - -");
      let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
      gameMenu.open();

      let text = {
        Narrator: {
          T0002: "The fox looks at you suspiciously, almost as if it knows that you are hiding something.",
          T0008: "You take a step back, snapping a small twig in half, that was laying on the floor.",
          T0009: "The fox flinches from the sudden noise.",
          T0012: "The fox stopped in the middle of the sentence, turning its head into the direction of a small family, that is approaching you.",
          T0013: "Without any further more words spoken, and in the blink of an eye, the fox hushed back into the bushes.",
          T0015: "A little girl is running towards you. In her arms is a small cat that seems familiar to you.",
          T0018: "The girl lowers the cat on the ground, which quickly walked towards you and into your arms."

        },
        Protagonist: {
          T0001: "Oh, nothing. I'm here with a friend of mine, we are playing hide and seek.",
          T0003: "But what are you doing here?",
          T0005: "Well… I guess you are correct. By the way, my name is " + dataForSave.nameProtagonist + ", what about you?",
          T0007: "Uh, yes, sure.",
          T0010: "Oh, sorry, didn't mean to scare you.",
          T0016: "Oh, Tommy, there you are! I was looking all over for you!",
          T0019: "Thank you so much for finding him! Have a great day!",
          T0021: "Why did you just run off? It is too dangerous here, there are so many wild animals around that could hurt you!",
          T0023: "…no I haven't, I think I am a bit too old for that kind of stuff.",
          T0024: "Come on, let's head to the lake, so you can drink some water and refresh yourself.",
          T0026: "Oh, I also met somebody. June, a fox. Apparently, you aren't the only animal I can talk to."
        },
        Fox: {
          T0004: "I am a fox, I live here, why do you think I hide under bushes?",
          T0006: "June. Now, step back, you are way too close.",
          T0011: "Can you be more considerate? Stop being to reckless, you might as well-"
        },
        Cat: {
          T0020: "*panting* that was very fun… but… the squirrel… it was too fast…",
          T0022: "I'm sorry, but… chasing squirrels is fun! Have you tried it?",
          T0025: "Yes, the lake! I definitely need something to drink.",
          T0027: "Yes yes, very cool, now can we get going please, I am SO thirsty."
        },
        Girl: {
          T0014: "Hey, look, we found a cat! Isn't it cute? Do you want to pet it?",
          T0017: "It is your cat? Here you go! Goodbye small cat! I love you!"
        }
      };

      ƒS.Speech.hide();
      await ƒS.Location.show(locations.cat_search_bush);
      await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0001);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0003);
      await ƒS.Speech.tell(characters.fox, text.Fox.T0004);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0005);
      await ƒS.Speech.tell(characters.fox, text.Fox.T0006);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.uncomfortable, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0007);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0008);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0009);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0010);
      await ƒS.Speech.tell(characters.june, text.Fox.T0011);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0012);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0013);

      await ƒS.Character.hide(characters.june);
      await ƒS.Location.show(locations.forest_path_into);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.girl, text.Girl.T0014);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0015);


      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0016);
      await ƒS.Speech.tell(characters.girl, text.Girl.T0017);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0018);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0019);

      await ƒS.Character.hide(characters.tommy);
      await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.tommy, text.Cat.T0020);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0021);
      await ƒS.Speech.tell(characters.tommy, text.Cat.T0022);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0023);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0024);
      await ƒS.Speech.tell(characters.cat, text.Cat.T0025);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0026);
      await ƒS.Speech.tell(characters.cat, text.Cat.T0027);

      await ƒS.Character.hide(characters.tommy);
      await ƒS.update(0.3);

      dataForSave.encounteredAnyAnimal = true;
      dataForSave.encounteredFox = true;

      return "EnterLake";

    }
  }
}