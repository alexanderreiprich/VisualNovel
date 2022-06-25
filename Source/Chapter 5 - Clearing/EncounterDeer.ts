namespace Endabgabe {
  export async function EncounterDeer(): ƒS.SceneReturn {
    console.log("- - - Scene 25: De(e/a)r God - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0002: "Sunken in your thoughts, you almost don't notice a deer with bright purple eyes staring right at you, only a couple of meters away.",
        T0005: "You stop, torn from your thoughts, and hesitate.",
        T0026: "The deer takes a closer look at the rock, flipping it around numerous times.",
        T0027: "After a minute or two, it looks back up."
      },
      Protagonist: {
        T0001: "What happened to these trees? It looks like they got burned, but why should there be a fire here?",
        T0003: "It could be a wildfire… or maybe…",
        T0006: "…hello? Did you just speak to me?",
        T0008: "Well… nice to meet you too, DEERNAME, I'm " + dataForSave.nameProtagonist + ". Do you know what happened here?",
        T0010: "Oh, okay, I thought as somebody that lives in the forest, you might know something.",
        T0012: "I assume you were also once human?",
        T0014: "I'm so sorry, I can't imagine what it is like to lose everything…",
        T0015: "You must have really enjoyed your job, if you miss it so much?",
        T0018: "I understand… well, now you have the freedom to do whatever you want! No more work or any other responsibilities.",
        T0020: "What was your job, if I may ask?",
        T0023: "I see…",
        T0024: "I found this rock over there, could you take a look at it? It seems like you are the right person for this.",
        T0030: "Oh, is that what was in the newspaper this morning? This… stardust thing? I didn't really read the article to be honest.",
        T0033: "So, this is something you have never seen before? And nobody had any idea what it could be?",
        T0035: "This might be a really stupid theory, but in the newspaper, it said that we should keep windows and doors closed overnight.",
        T0036: "Was that because of the mysterious dust? Because nobody knew what it was and whether it was dangerous or not?",
        T0038: "I totally missed that. My window was completely open the whole night…",
        T0039: "Could it be that some of the dust came into my room? Might that be the reason why I can talk to you?",
        T0041: "Hmm…"
      },
      Deer: {
        T0004: "Hello.",
        T0007: "I did. It is not often that I see a human here. Nice to meet you, my name is DEERNAME.",
        T0009: "No, I do not. I just got here, so I am just as surprised as you.",
        T0011: "Apologies. I'm also fairly new to all of this, so I still have to figure a lot out.",
        T0013: "Correct. I still miss being human. My friends, my job, and especially my son… I guess it's all gone now.",
        T0016: "Well… to be honest I don't really know if I enjoyed it so much. I worked a lot.",
        T0017: "I barely had time for my son or myself, it was so exhausting. But it gave life meaning. I am just the kind of person that works a lot and forgets everything else.",
        T0019: "I know… but I still feel like I have to do something. I don't think I really know how to do… well, nothing.",
        T0021: "I worked at a center for astronomy. My job was to analyze any potential meteoroids and check if they could hit our planet.",
        T0022: "This job was so special to me, ever since I finished my geology studies.",
        T0025: "Sure, let me see…",
        T0028: "Yes, this is a piece of a meteoroid. More specifically, it is part of the one that was scheduled to fly above earth last night.",
        T0029: "This was the current project I worked on, before I… well, before all of this happened.",
        T0031: "Yes, it was this one.",
        T0032: "We knew that is was coming, but we never figured out, what it really is. The elements in the rock where unidentifiable for us.",
        T0034: "Correct.",
        T0037: "Exactly. I think they even announced all of that in the news on tv and the radio.",
        T0040: "As I said, we never knew what the dust and the meteoroid really are, it was all just speculation."
      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.clearing_trees);
    await ƒS.update(transitions.swoosh.duration, transitions.swoosh.alpha, transitions.swoosh.edge);

    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0003);

    // await ƒS.Character.hide(characters.deername);
    await ƒS.Character.show(characters.deername, characters.deername.pose.neutral, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.deer, text.Deer.T0004);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0006);
    await ƒS.Speech.tell(characters.deer, text.Deer.T0007);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0008);
    await ƒS.Speech.tell(characters.deername, text.Deer.T0009);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0010);
    await ƒS.Speech.tell(characters.deername, text.Deer.T0011);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0012);

    await ƒS.Character.hide(characters.deername);
    await ƒS.Character.show(characters.deername, characters.deername.pose.sad, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.deername, text.Deer.T0013);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0014);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0015);

    await ƒS.Character.hide(characters.deername);
    await ƒS.Character.show(characters.deername, characters.deername.pose.neutral, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.deername, text.Deer.T0016);
    await ƒS.Speech.tell(characters.deername, text.Deer.T0017);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0018);
    await ƒS.Speech.tell(characters.deername, text.Deer.T0019);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0020);

    await ƒS.Character.hide(characters.deername);
    await ƒS.Character.show(characters.deername, characters.deername.pose.neutral, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.deername, text.Deer.T0021);
    await ƒS.Speech.tell(characters.deername, text.Deer.T0022);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0023);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0024);

    if (ƒS.Inventory.getAmount(items.rock) > 0) {

      console.log("- - - Scene 27: The mysterious dust - - -");

      await ƒS.Character.hide(characters.deername);
      await ƒS.Character.show(characters.deername, characters.deername.pose.curious, ƒS.positions.bottomcenter);
      await ƒS.update(0.2);
  
      await ƒS.Speech.tell(characters.deername, text.Deer.T0025);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0026);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0027);
  
      await ƒS.Character.hide(characters.deername);
      await ƒS.Character.show(characters.deername, characters.deername.pose.neutral, ƒS.positions.bottomcenter);
      await ƒS.update(0.2);
  
      await ƒS.Speech.tell(characters.deername, text.Deer.T0028);
  
      await ƒS.Character.hide(characters.deername);
      await ƒS.Character.show(characters.deername, characters.deername.pose.happy, ƒS.positions.bottomcenter);
      await ƒS.update(0.2);
  
      await ƒS.Speech.tell(characters.deername, text.Deer.T0029);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0030);
  
      await ƒS.Character.hide(characters.deername);
      await ƒS.Character.show(characters.deername, characters.deername.pose.neutral, ƒS.positions.bottomcenter);
      await ƒS.update(0.2);
  
      await ƒS.Speech.tell(characters.deername, text.Deer.T0031);
      await ƒS.Speech.tell(characters.deername, text.Deer.T0032);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0033);
      await ƒS.Speech.tell(characters.deername, text.Deer.T0034);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0035);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0036);
      await ƒS.Speech.tell(characters.deername, text.Deer.T0037);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0038);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0039);
      await ƒS.Speech.tell(characters.deername, text.Deer.T0040);
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0041);
    }

    if (dataForSave.travelWithCat) {
      return "Reunion";
    }
    else {
      return "FreeDeer";
    }
  }
}