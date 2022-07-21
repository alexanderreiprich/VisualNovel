namespace Endabgabe {
  export async function BefriendFox(): ƒS.SceneReturn {
    if (dataForSave.travelWithCat) {
      console.log("- - - Scene 6.5.1: Even more Friends - - -");
      let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
      gameMenu.open();

      let text = {
        Narrator: {
          T0006: "While you think about how this cute fox will do anything bad to you, it crawled out of the bush and is now looking around anxiously.",
          T0010: "You point towards an elderly couple, that just turned a corner onto a path leading away from you and the fox.",
          T0020: "You notice the fox chuckling a bit after the last words left their mouth.",
          T0028: "The fox stopped in the middle of the sentence, turning its head into the direction of a small family, that is approaching you.",
          T0029: "Without any further more words spoken, and in the blink of an eye, the fox hushed back into the bushes.",
          T0031: "A little girl is running towards you. In her arms is a small cat that seems familiar to you.",
          T0034: "The girl lowers the cat on the ground, which quickly walked towards you and into your arms."

        },
        Protagonist: {
          T0001: "Tommy is a friend of mine that I met earlier. It's a cat, but he ran away once we reached the forest.",
          T0002: "For some reason, I can talk to some animals, which is really weird, because… that's not how it is supposed to be…?",
          T0004: "What? Why should it be a trap? I don't want to hurt you or anything, I am just as confused as you are.",
          T0007: "Hey, by the way, my name is " + dataForSave.nameProtagonist + ", what abou-",
          T0009: "What? Oh, you mean these people back there?",
          T0011: "Yea, they aren't coming this way. Why are you so cautious?",
          T0013: "Nice to meet you June. You didn't happen to see Tommy, or did you?",
          T0015: "Yeah, I hope so.",
          T0016: "Okay, just out of curiosity, were you also once a human?",
          T0017: "Tommy told me that he was human once, but suddenly woke up as a cat?",
          T0021: "Really? Is there nothing you miss?",
          T0026: "I'm so sorry that this all happened to you. But, you know what they say, it always gets better, and look at you now!",
          T0032: "Oh, Tommy, there you are! I was looking all over for you!",
          T0035: "Thank you so much for finding him! Have a great day!",
          T0037: "Why did you just run off? It is too dangerous here, there are so many wild animals around that could hurt you!",
          T0039: "…no I haven't, I think I am a bit too old for that kind of stuff.",
          T0040: "Come on, let's head to the lake, so you can drink some water and refresh yourself.",
          T0042: "Oh, I also met somebody. June, a fox. Apparently, you aren't the only animal I can talk to."
        },
        Fox: {
          T0003: "So, you are telling me there are more animals that can talk? Is this not a trap from you?",
          T0005: "Hmm. Alright, I trust you. But I swear, if you aren't as nice as you seem right now, bad things will happen to you.",
          T0008: "Shh, I think somebody is coming, don't move!",
          T0012: "I am always cautious, you never know who is out to harm you, you know. And to answer your question, my name is June.",
          T0014: "No, I didn't, sorry. But I am sure you will find him soon enough.",
          T0018: "Yes, I was a human. Until a few days ago. But to be honest, I almost prefer being a fox.",
          T0019: "I have all the things I never had back when I was human – peace, silence, and a cute appearance.",
          T0022: "Okay, you know what? My life wasn't the best back then. The final year of school was pretty miserable.",
          T0023: "People didn't like me for who I am. And just because of that, they decide to make your life worse. Humans are disgusting.",
          T0024: "The only thing I really miss is my music collection. It helped me a lot when dealing with all that stuff.",
          T0025: "But… what am I even saying. I can accept living without it. Now I am finally happy. Well, almost, but better than before.",
          T0027: "Yeah, I guess you are right. Actually, I-"
        },
        Cat: {
          T0036: "*panting* that was very fun… but… the squirrel… it was too fast…",
          T0038: "I'm sorry, but… chasing squirrels is fun! Have you tried it?",
          T0041: "Yes, the lake! I definitely need something to drink.",
          T0043: "Yes yes, very cool, now can we get going please, I am SO thirsty."
        },
        Girl: {
          T0030: "Hey, look, we found a cat! Isn't it cute? Do you want to pet it?",
          T0033: "It is your cat? Here you go! Goodbye small cat! I love you!"
        }
      };

      ƒS.Speech.hide();
      await ƒS.Location.show(locations.cat_search_bush);
      await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0001);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0002);
      await ƒS.Speech.tell(characters.fox, text.Fox.T0003);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0004);
      await ƒS.Speech.tell(characters.fox, text.Fox.T0005);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.uncomfortable, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0007);
      await ƒS.Speech.tell(characters.fox, text.Fox.T0008);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0009);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0011);
      await ƒS.Speech.tell(characters.fox, text.Fox.T0012);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0013);
      await ƒS.Speech.tell(characters.june, text.Fox.T0014);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.concerned, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0015);

      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0016);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0017);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.neutral, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.june, text.Fox.T0018);
      await ƒS.Speech.tell(characters.june, text.Fox.T0019);
      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.happy, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0020);

      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0021);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.uncomfortable, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.june, text.Fox.T0022);
      await ƒS.Speech.tell(characters.june, text.Fox.T0023);
      await ƒS.Speech.tell(characters.june, text.Fox.T0024);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.happy, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.june, text.Fox.T0025);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0026);
      await ƒS.Speech.tell(characters.june, text.Fox.T0027);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0028);
      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.concerned, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0029);
      await ƒS.Character.hide(characters.june);
      await ƒS.Location.show(locations.forest_path_into);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.girl, text.Girl.T0030);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0031);
      

      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0032);
      await ƒS.Speech.tell(characters.girl, text.Girl.T0033);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0034);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0035);

      await ƒS.Character.hide(characters.tommy);
      await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.tommy, text.Cat.T0036);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0037);
      await ƒS.Speech.tell(characters.tommy, text.Cat.T0038);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0039);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0040);
      await ƒS.Speech.tell(characters.tommy, text.Cat.T0041);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0042);
      await ƒS.Speech.tell(characters.tommy, text.Cat.T0043);

      await ƒS.Character.hide(characters.tommy);

      dataForSave.encounteredAnyAnimal = true;
      dataForSave.encounteredFox = true;

      return "EnterLake";
    
    }
  

    else {
      console.log("- - - Scene 6.5.3: New Friends - - -");
      let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
      gameMenu.open();

      let text = {
        Narrator: {
          T0006: "While you think about how this cute fox will do anything bad to you, it crawled out of the bush and is now looking around anxiously.",
          T0010: "You point towards an elderly couple, that just turned a corner onto a path leading away from you and the fox.",
          T0020: "You notice the fox chuckling a bit after the last words left their mouth.",
          T0031: "The fox smiles at you, turns around and vanishes behind the leaves.",
          T0032: "You look around and sigh.",
          T0034: "Lost in your thoughts, you continue on your way deeper into the forest."

        },
        Protagonist: {
          T0001: "I am sorry, I didn't mean to scare you. I thought you were the cat I met earlier.",
          T0002: "For some reason, I can talk to some animals, which is really weird, because… that's not how it is supposed to be…?",
          T0004: "What? Why should it be a trap? I don't want to hurt you or anything, I am just as confused as you are.",
          T0007: "Hey, by the way, my name is " + dataForSave.nameProtagonist + ", what abou-",
          T0009: "What? Oh, you mean these people back there?",
          T0011: "Yea, they aren't coming this way. Why are you so cautious?",
          T0013: "Nice to meet you June. I didn't expect another animal that I can talk with.",
          T0015: "At this point, I wouldn't even be surprised.",
          T0016: "Okay, just out of curiosity, were you also once a human?",
          T0017: "Tommy, the cat, told me that he was human once, but one day he suddenly woke up as a cat?",
          T0021: "Really? Is there nothing you miss?",
          T0026: "I'm so sorry that this all happened to you. But, you know what they say, it always gets better, and look at you now!",
          T0030: "It was nice meeting you too. Hope you find something good to eat.",
          T0033: "What is even happening today?"
        },
        Fox: {
          T0003: "So, you are telling me there are more animals that can talk? Is this not a trap from you?",
          T0005: "Hmm. Alright, I trust you. But I swear, if you aren't as nice as you seem right now, bad things will happen to you.",
          T0008: "Shh, I think somebody is coming, don't move!",
          T0012: "I am always cautious, you never know who is out to harm you, you know. And to answer your question, my name is June.",
          T0014: "Who knows, maybe you will find even more?",
          T0018: "Yes, I was a human. Until a few days ago. But to be honest, I almost prefer being a fox.",
          T0019: "I have all the things I never had back when I was human – peace, silence, and a cute appearance.",
          T0022: "Okay, you know what? My life wasn't the best back then. The final year of school was pretty miserable.",
          T0023: "People didn't like me for who I am. And just because of that, they decide to make your life worse. Humans are disgusting.",
          T0024: "The only thing I really miss is my music collection. It helped me a lot when dealing with all that stuff.",
          T0025: "But… what am I even saying. I can accept living without it. Now I am finally happy. Well, almost, but better than before.",
          T0027: "Yeah, I guess you are right.",
          T0028: "You know what? It was nice meeting you. I am a bit hungry now though, so I'll better go and find something to eat.",
          T0029: "I hope I'll see you again."
        }
      };

      ƒS.Speech.hide();
      await ƒS.Location.show(locations.cat_search_bush);
      await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0001);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0002);
      await ƒS.Speech.tell(characters.fox, text.Fox.T0003);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0004);
      await ƒS.Speech.tell(characters.fox, text.Fox.T0005);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.uncomfortable, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0007);
      await ƒS.Speech.tell(characters.fox, text.Fox.T0008);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0009);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0011);
      await ƒS.Speech.tell(characters.fox, text.Fox.T0012);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0013);
      await ƒS.Speech.tell(characters.june, text.Fox.T0014);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.concerned, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0015);

      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0016);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0017);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.neutral, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.june, text.Fox.T0018);
      await ƒS.Speech.tell(characters.june, text.Fox.T0019);
      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.happy, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0020);

      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0021);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.uncomfortable, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.june, text.Fox.T0022);
      await ƒS.Speech.tell(characters.june, text.Fox.T0023);
      await ƒS.Speech.tell(characters.june, text.Fox.T0024);

      await ƒS.Character.hide(characters.june);
      await ƒS.Character.show(characters.june, characters.june.pose.happy, ƒS.positions.bottomcenter);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.june, text.Fox.T0025);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0026);
      await ƒS.Speech.tell(characters.june, text.Fox.T0027);
      await ƒS.Speech.tell(characters.june, text.Fox.T0028);
      await ƒS.Speech.tell(characters.june, text.Fox.T0029);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0030);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0031);

      await ƒS.Character.hide(characters.june);
      await ƒS.Location.show(locations.forest_path_into);
      await ƒS.update(0.3);

      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0032);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0033);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0034);
    
      dataForSave.encounteredAnyAnimal = true;
      dataForSave.encounteredFox = true;
      dataForSave.foxTrustsProtagonist = true;

      return "DeepForestAlone";
    }
  }
}
