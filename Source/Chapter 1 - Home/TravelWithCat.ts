namespace Endabgabe {
  export async function TravelWithCat(): ƒS.SceneReturn {
    console.log("- - - Scene 4.1: Company - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0006: "From the way the cat is speaking, to their interests, it reminds you of a young child, talking about their dreams and things that make them happy.",
        T0009: "The cat playfully jumps around you, making it hard for you to keep walking in a straight line without stepping on it."
      },
      Protagonist: {
        T0001: "Well, sure, you can come with me.",
        T0003: "Uh, I was actually just going for a walk, nothing more. Just to clear my head. The past few weeks were pretty stressful, with exams and all that kind of stuff.",
        T0007: "So… you said you remember being a human? What was that like?"
      },
      Cat: {
        T0002: "Thank you so much! It was so boring out here, I'm glad you came along. So, where are we going?",
        T0004: "Oh exams? You're going to college? That's so cool, what do you study?",
        T0005: "Whoa, that sounds so interesting! I always wanted to be an astronaut! Going to space is one of my big dreams!",
        T0008: "It was really cool! Well, apart from all the school stuff I had to do. My mom told me to do my homework every day after school. And on the weekends, I always spent time with my friends. Now that I'm a small cat, I don't need to do homework anymore, so that's cool I guess."
      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.home_path);
    await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0001);
    await ƒS.Speech.tell(characters.tommy, text.Cat.T0002);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0003);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.curious, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.tommy, text.Cat.T0004);

    await ƒS.Speech.getInput();

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.tommy, text.Cat.T0005);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0007);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.neutral, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.tommy, text.Cat.T0008);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0009);
    await ƒS.Character.hide(characters.tommy);

    return "ForestWithCat";
  }
}