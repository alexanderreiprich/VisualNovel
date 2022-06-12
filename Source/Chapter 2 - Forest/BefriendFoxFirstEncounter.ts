namespace Endabgabe {
  export async function BefriendFoxFirstEncounter(): ƒS.SceneReturn {
    console.log("- - - Scene 6.5.4: New unusual Friends - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0006: "You step back, still rather confused from the whole situation.",
        T0014: "You notice the fox chuckling a bit after the last words left their mouth.",
        T0025: "The fox smiles at you, turns around and vanishes behind the leaves.",
        T0026: "You look around and sigh.",
        T0028: "Lost in your thoughts, you continue on your way deeper into the forest."
      },
      Protagonist: {
        T0001: "Hey… I… what?",
        T0003: "Umm, my name is " + dataForSave.nameProtagonist + ". Who are you? And why can you talk? Is this some sort of prank?",
        T0005: "Oh, sure.",
        T0008: "Well, you are the first fox that can understand what I am saying. I am still not sure if this isn't a prank. Am I on a TV show?",
        T0010: "Excuse me, what? You *became* a fox? Just like that? What happened?",
        T0012: "What? Why? Being a human is amazing. You have so much to do, endless possibilities, great people around you…",
        T0015: "Really? Is there nothing you miss?",
        T0020: "I'm so sorry that this all happened to you. But, you know what they say, it always gets better, and look at you now!",
        T0024: "It was nice meeting you too. Hope you find something good to eat.",
        T0027: "What is even happening today?"
      },
      Fox: {
        T0002: "Who are you?",
        T0004: "Step back, you are too close.",
        T0007: "My name is June. You are the first person that can actually understand what I am saying.",
        T0009: "What, no? Listen, I have been looking for somebody that can understand me ever since I've became a fox. And finally, I have found somebody.",
        T0011: "It's a long story. But yes, I was like you. I just finished school actually. But I have to admit, living here is way better than anything I have experienced in my previous life.",
        T0013: "Yes, but now I have all the things I never had back when I was human – peace, silence, and a cute appearance.",
        T0016: "Okay, you know what? My life wasn't the best back then. The final year of school was pretty miserable.",
        T0017: "People didn't like me for who I am. And just because of that, they decide to make your life worse. Humans are disgusting.",
        T0018: "The only thing I really miss is my music collection. It helped me a lot when dealing with all that stuff.",
        T0019: "But… what am I even saying. I can accept living without it. Now I am finally happy. Well, almost, but better than before.",
        T0021: "Yeah, I guess you are right.",
        T0022: "You know what? It was nice meeting you. I am a bit hungry now though, so I'll better go and find something to eat.",
        T0023: "I hope I'll see you again."
      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.cat_search_bush);
    await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);

    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0001);
    await ƒS.Speech.tell(characters.fox, text.Fox.T0002);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0003);
    await ƒS.Speech.tell(characters.fox, text.Fox.T0004);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0005);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);

    await ƒS.Character.hide(characters.june);
    await ƒS.Character.show(characters.june, characters.june.pose.uncomfortable, ƒS.positions.bottomcenter);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.fox, text.Fox.T0007);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0008);
    await ƒS.Speech.tell(characters.june, text.Fox.T0009);

    await ƒS.Character.hide(characters.june);
    await ƒS.Character.show(characters.june, characters.june.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0010);
    await ƒS.Speech.tell(characters.june, text.Fox.T0011);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0012);
    await ƒS.Speech.tell(characters.june, text.Fox.T0013);

    await ƒS.Character.hide(characters.june);
    await ƒS.Character.show(characters.june, characters.june.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0014);

    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0015);

    await ƒS.Character.hide(characters.june);
    await ƒS.Character.show(characters.june, characters.june.pose.uncomfortable, ƒS.positions.bottomcenter);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.june, text.Fox.T0016);
    await ƒS.Speech.tell(characters.june, text.Fox.T0017);
    await ƒS.Speech.tell(characters.june, text.Fox.T0018);

    await ƒS.Character.hide(characters.june);
    await ƒS.Character.show(characters.june, characters.june.pose.neutral, ƒS.positions.bottomcenter);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.june, text.Fox.T0019);

    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0020);
    await ƒS.Speech.tell(characters.june, text.Fox.T0021);

    await ƒS.Character.hide(characters.june);
    await ƒS.Character.show(characters.june, characters.june.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.june, text.Fox.T0022);
    await ƒS.Speech.tell(characters.june, text.Fox.T0023);

    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0024);

    await ƒS.Character.hide(characters.june);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0025);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0026);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0027);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0028);

    dataForSave.encounteredAnyAnimal = true;
    dataForSave.encounteredFox = true;

    return "DeepForestAlone";

  }
}