namespace Endabgabe {
  export async function ExamineCastle(): ƒS.SceneReturn {
    console.log("- - - Scene 9: A small kingdom - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "You haven't been here often in the past few years, so you completely forgot how beautiful the scenery is.",
        T0002: "The big mansion, the small bridge leading to it, the lake around it, all those statues… It radiates an almost dreamy feeling, like a small little kingdom in the middle of the woods.",
        T0003: "This would be a great opportunity to take a picture, but your current position isn't that optimal.",
        T0004: "You carefully step on the loosely stacked stones next to the edge of the lake. Some of them are a bit wet, which is why you are extra careful.",
        T0005: "Once you got around 1 meter higher, you pull out your phone. Just as you want to press the shutter button, it happens.",
        T0006: "You slip, fall and land on your back. Thankfully, not on any stones, but the soft grass.",
        T0008: "Still, it hurts, and this is something you should've seen coming. As you get up, you see that, after your short-lived climbing adventure, all stones are scattered around.",
        T0009: "Standing on the bridge, you can get a better view of both, the lake and the mansion. You take a few pictures and sit down in the shade.",
        T0010: "A few minutes pass, and by now, the cat made itself comfortable on your lap.",
        T0019: "Still a bit in pain, you get back to your feet and go back to bridge to sit on the small wall next to it.",
        T0020: "A few minutes pass, and by the time the pain has faded away, the cat made itself comfortable on your lap."
      },
      Protagonist: {
        T0007: "Ugh… why am I so stupid…?",
        T0012: "Seems like somebody didn't get enough sleep, huh. What did you do all the time?",
        T0014: "Yeah, I can imagine, I'm also a bit tired. To be honest, I kinda want to go home now.",
        T0016: "Ugh, okay. Let's go then. Don't run off again!",
        T0018: "Ouch, that hurt… why was I so stupid? My god…",
        T0022: "Very funny. Yeah, I think I am fine. What did you do all the time?",
        T0024: "Yeah, I can imagine. I kinda want to go home now.",
        T0026: "Ugh, okay. Let's go then. Don't run off again!"

      },
      Cat: {
        T0011: "*yawn*",
        T0013: "I was drinking, then I got sleepy and fell asleep on the bridge. All the chasing made me tired.",
        T0015: "No!! I still want to see the actual forest, we haven't been there yet!",
        T0017: "Noo, I won't!",
        T0021: "How was the fall? Hehe",
        T0023: "I was drinking, then I got sleepy and fell asleep on the bridge. All the chasing made me tired.",
        T0025: "No!! I still want to see the actual forest, we haven't been there yet!",
        T0027: "Noo, I won't!"
      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.lake_castle);
    await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);

    let repositionLakeAnswer = {
      climbRocks: "Climb some rocks to get to a higher position",
      stepOnBridge: "Step on the bridge for a better angle"
    };

    let repositionLake = await ƒS.Menu.getInput(repositionLakeAnswer, "decision");

    switch (repositionLake) {
      case repositionLakeAnswer.climbRocks: 
        console.log("- - - Scene 9.1: Higher, higher! - - -");

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.lake_rocks);
        await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0007);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0008);

        let pickRocksUpAnswer = {
          pickUp: "Pick them up and clean up the mess",
          leave: "Leave them be"
        };

        let pickRocksUp = await ƒS.Menu.getInput(pickRocksUpAnswer, "decision");

        switch (pickRocksUp) {
          case pickRocksUpAnswer.pickUp:
            return "MeetTurtle";
          
          case pickRocksUpAnswer.leave:
            console.log("- - - Scene 11: They are just stones - - -");
            await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0018);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0019);

            ƒS.Speech.hide();
            await ƒS.Location.show(locations.lake_bridge);
            await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);

            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0020);

            await ƒS.Character.hide(characters.tommy);
            await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter); 
            await ƒS.update(0.3);
            await ƒS.Speech.tell(characters.tommy, text.Cat.T0021);
            await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0022);
            await ƒS.Speech.tell(characters.tommy, text.Cat.T0023);
            await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0024);
            
            await ƒS.Character.hide(characters.tommy);
            await ƒS.Character.show(characters.tommy, characters.tommy.pose.angry, ƒS.positions.bottomcenter);
            await ƒS.update(0.3);
            await ƒS.Speech.tell(characters.tommy, text.Cat.T0025);
            await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0026);
    
            await ƒS.Character.hide(characters.tommy);
            await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
            await ƒS.update(0.3);
    
            await ƒS.Speech.tell(characters.tommy, text.Cat.T0027);
    
            return "";

        }

      case repositionLakeAnswer.stepOnBridge:
        console.log("- - - Scene 9.2: Bridge - - -");

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.lake_bridge);
        await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0009);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010);

        await ƒS.Character.hide(characters.tommy);
        await ƒS.Character.show(characters.tommy, characters.tommy.pose.neutral, ƒS.positions.bottomcenter); // TODO: Add yawning pose
        await ƒS.update(0.3);
        await ƒS.Speech.tell(characters.tommy, text.Cat.T0011);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0012);
        await ƒS.Speech.tell(characters.tommy, text.Cat.T0013);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0014);
        
        await ƒS.Character.hide(characters.tommy);
        await ƒS.Character.show(characters.tommy, characters.tommy.pose.angry, ƒS.positions.bottomcenter);
        await ƒS.update(0.3);
        await ƒS.Speech.tell(characters.tommy, text.Cat.T0015);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0016);

        await ƒS.Character.hide(characters.tommy);
        await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
        await ƒS.update(0.3);

        await ƒS.Speech.tell(characters.tommy, text.Cat.T0017);

        return "";
        

    }
  }
}