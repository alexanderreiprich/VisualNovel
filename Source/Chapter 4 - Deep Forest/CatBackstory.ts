namespace Endabgabe {
  export async function CatBackstory(): ƒS.SceneReturn {
    console.log("- - - Scene 12.1: What's up with the cat? - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "As you walk deeper and deeper into the forest, you start to be more and more curious.",
        T0010: "The cat hisses, as if it is still angry about the failed test.",
        T0017: "The cat slowed down, jumped, and climbed onto your shoulder.",
        T0020: "You reach the end of the path.",
        T0021: "To your left is a small bridge leading over a small river. It leads to the edge of the forest.",
        T0022: "To your right is an even smaller path, surrounded by tall trees. While it seems like there is no sunlight, you can see a clearing at the end of the path."
      },
      Protagonist: {
        T0002: "Hey Tommy, I can't help but to wonder, what is even happening today.",
        T0004: "Yeah, I mean the whole talking-to-animals-thing.",
        T0007: "I mean, I don't think it's normal to talk to cats or dogs. I couldn't do it yesterday, so something must have happened.",
        T0011: "If I'm allowed to ask, what was your life like before your cat-transformation? What about your family?",
        T0014: "Oh, I am sorry to hear that. It must be hard without a dad.",
        T0019: "Hah, yeah, I guess so."
      },
      Cat: {
        T0003: "What do you mean? It's been a great day so far!",
        T0005: "Oh, right. Hmm, yeah that is really weird. I couldn't even talk to animals when I was still in school!",
        T0006: "I always tried to talk to Daisy, that's the neighbor's dog. She was so fluffy! But she never understood me…",
        T0008: "Well, I guess sometimes things happen that we can't explain.",
        T0009: "I once failed my math test even though I studied all week for it, can you believe that?",
        T0012: "Hmm, so my mom has always been working a lot.",
        T0013: "My dad left when I was little, so I don't really know much about him. My mom and my dad used to fight a lot, but that's all.",
        T0015: "No, I am happy with my mom! I love her so much! I haven't seen her since I became a cat though…",
        T0016: "But she always had so much work to do, so maybe she is just working a lot and has no time or something, I don't know…",
        T0018: "But now I have you!"
      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.deep_forest_entrance);
    await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0002);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.tommy, text.Cat.T0003);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0004);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.neutral, ƒS.positions.bottomcenter);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.tommy, text.Cat.T0005);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.tommy, text.Cat.T0006);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0007);
    await ƒS.Speech.tell(characters.tommy, text.Cat.T0008);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.angry, ƒS.positions.bottomcenter);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.tommy, text.Cat.T0009);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010);

    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0011);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.neutral, ƒS.positions.bottomcenter);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.tommy, text.Cat.T0012);
    await ƒS.Speech.tell(characters.tommy, text.Cat.T0013);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0014);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.tommy, text.Cat.T0015);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.neutral, ƒS.positions.bottomcenter);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.tommy, text.Cat.T0016);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0017);
    await ƒS.Speech.tell(characters.tommy, text.Cat.T0018);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(0.3);

    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0019);

    ƒS.Speech.hide();
    await ƒS.Character.hide(characters.tommy);
    await ƒS.Location.show(locations.deep_forest_split);
    await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0020);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0021);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0022);

    let splitPathForestAnswer = {
      bridge: "Cross the bridge",
      path: "Follow the dirt path"
    };

    let splitPathForest = await ƒS.Menu.getInput(splitPathForestAnswer, "decision");

    switch (splitPathForest) {
      case splitPathForestAnswer.bridge:
        return "CatBridge";
      case splitPathForestAnswer.path:
        return "ArrivalClearing";
    }
  }
}