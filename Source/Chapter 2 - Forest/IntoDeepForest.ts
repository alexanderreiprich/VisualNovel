namespace Endabgabe {
  export async function IntoDeepForest(): ƒS.SceneReturn {
    console.log("- - - Scene 6.1: Into the deep forest - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "You didn't think that a cat this small can run all the way into the forest, especially after not keeping an eye on it for less than 3 minutes.",
        T0003: "You can hear a feint rustling of leaves and before you knew it, the cat jumps out of a small tree just in front of you.",
        T0008: "The cat jumps around playfully, as if it wants to taunt you.",
        T0011: "Even though you can't see the cats face, you can sense that it is disappointed in you."
      },
      Protagonist: {
        T0002: "Hey, Tommy, where are you? You can stop chasing the squirrel now!",
        T0004: "There you are! I thought you went way deeper into the forest. Don't take off again, this is too dangerous, you don't know what lives in there!",
        T0006: "Great, but imagine you got lost or something. I wouldn't be able to find you.",
        T0009: "Yes. At last, you are a special cat. I don't want to lose a pet that can talk, you know.",
        T0012: "Of course we are friends! I just have to get used to you not being a normal cat, you know?",
        T0013: "Hey, you know what? Let's go this way, in the forest are more squirrels for you to chase! But don't run too far off again!"
      },
      Cat: {
        T0005: "Sorry… But the squirrel was so fast and I almost caught it…",
        T0007: "Hehe, were you worried about me?",
        T0010: "Oh wow, so I am just a pet for you? I thought we were friends…",
        T0014: "Yes!! More squirrels!"
      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.cat_search_forest);
    await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0002);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);

    await ƒS.Character.show(characters.tommy, characters.tommy.pose.sad, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0004);
    await ƒS.Speech.tell(characters.tommy, text.Cat.T0005);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0006);
    
    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.tommy, text.Cat.T0007);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0008);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0009);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.sad, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.tommy, text.Cat.T0010);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0011);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0012);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0013);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.tommy, text.Cat.T0014);

    return "CatBackstoryForest";
    
  }
}