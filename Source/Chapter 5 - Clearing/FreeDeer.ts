namespace Endabgabe {
  export async function FreeDeer(): ƒS.SceneReturn {
    console.log("- - - Scene 29: Relax, take it easy - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0004: "After a couple of minutes, you and the deer arrive at the lake. The sun has already set, and the crickets are chirping.",
        T0005: "With the water slowly turning more and more orange, and the leaves feint rustling, it truly is a relaxing sight.",
        T0013: "You couldn't finish your sentence, as you see the bright purple eyes fade into black.",
        T0014: "After another second, the deer seem surprised to see you.",
        T0015: "The previously very talkative animal seems to not recognize you anymore.",
        T0016: "Surprise turns into fright, and it takes off into the forest, never to be seen again. It seems like their soul is finally free."
      },
      Protagonist: {
        T0001: "You said you never really got your mind of work? And are new to the forest? Have you been to the lake yet?",
        T0003: "You might like it there, follow me.",
        T0007: "It is. And since you live here, feel free to come here as often as you want to.",
        T0008: "You don't have to stress yourself over things that you don't have any control over anymore.",
        T0012: "No problem, take care and-",

      },
      Deer: {
        T0002: "Hmm, no, I don't think so.",
        T0006: "Wow… this is beautiful.",
        T0009: "…yes, you are right. I don't think I have anything to worry about anymore.",
        T0010: "Honestly, what can I do anymore? Just relax and enjoy the moment. This is all I have ever wanted.",
        T0011: "Thank you so much…"
      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.lake_evening);
    await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0001);

    await ƒS.Character.hide(characters.deername);
    await ƒS.Character.show(characters.deername, characters.deername.pose.curious, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.deername, text.Deer.T0002);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0003);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);

    await ƒS.Character.hide(characters.deername);
    await ƒS.Character.show(characters.deername, characters.deername.pose.surprised, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.deername, text.Deer.T0006);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0007);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0008);
    await ƒS.Speech.tell(characters.deername, text.Deer.T0009);

    await ƒS.Character.hide(characters.deername);
    await ƒS.Character.show(characters.deername, characters.deername.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.deername, text.Deer.T0010);
    await ƒS.Speech.tell(characters.deername, text.Deer.T0011);

    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0012);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0013);
    
    await ƒS.Character.hide(characters.deername);
    await ƒS.Character.show(characters.deername, characters.deername.pose.empty, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0014);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0015);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0016);

    await ƒS.Character.animate(characters.deername, characters.deername.pose.empty, animate("rightOut"));
    await ƒS.update(0.3);

    dataForSave.freedDeer = true;
    dataForSave.freedAnimals++;

    return "WalkHome";
  }
}