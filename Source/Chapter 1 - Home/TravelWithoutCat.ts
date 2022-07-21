namespace Endabgabe {
  export async function TravelWithoutCat(): ƒS.SceneReturn {
    console.log("- - - Scene 4.2: No Company - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0002: "The cat has a disappointed look on its face. It seems like it waited for a long time to finally have a friend.",
        T0004: "With a little hesitation, the cat turned around, looked at you one last time with their shiny eyes, and disappeared into the bushes. After a couple of seconds, everything goes quiet. You are alone again."
      },
      Protagonist: {
        T0001: "Hey, I’m sorry but I really don’t want company right now. I’ve just finished my exams and I need to relax on my own for a while, okay? Maybe we some other day, okay? I mean you know where I live."
      },
      Cat: {
        T0003: "Oh… okay, yeah, I understand. I’ll just go now."
      }
    };

    await ƒS.Location.show(locations.home_path_close);
    await ƒS.update();

    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0001);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.neutral, newPositions.bottomcenter);
    await ƒS.update(0.2);
    
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
    await ƒS.Speech.tell(characters.tommy, text.Cat.T0003);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.sad, newPositions.bottomcenter);
    await ƒS.update(0.2);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.animate(characters.tommy, characters.tommy.pose.sad, animate("centerLeftOut"));
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);

    return "ForestAlone";
  }
}