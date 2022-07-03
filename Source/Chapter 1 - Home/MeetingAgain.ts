namespace Endabgabe {

/*   function clickResponse(): void {
    console.log("AYO");
  } */

  export async function MeetingAgain(): ƒS.SceneReturn {
    console.log("- - - Scene 3: Meeting again - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "Just as you turn the corner onto a dirt road leading into the forest, the music suddenly stops - …you forgot to charge your Bluetooth headphones.",
        T0002: "Slightly annoyed you continue walking. The annoyance slowly subsides, however, as you notice the wind blowing through the leaves, making soft but distinct rustling sounds.",
        T0003: "Suddenly, the peaceful quiet gets disrupted, as you can hear movement coming from a bush on your left. As you peek through the leaves, you can see two bright green eyes staring back.",
        T0004: "After the initial shock, you step back and the cat you saw earlier hops out the bush.",
        T0006: "Surprised and a bit scared you stumble back and fall on the ground.",
        T0013: "The Cat seems to be very happy that they finally found somebody to talk to. You, on the other hand, have a thousand questions floating around in your head.",
        T0018: "The cat stops in the middle of the sentence. It looks like it just realized something.",
        T0022: "You sigh. This isn't the way you saw this day going."
      },
      Protagonist: {
        T0008: "What, eh, yes, I am alright, but I don't think you are. Cats aren't supposed to talk…?",
        T0011: "Uhh, nice to meet you too I guess. This is really weird. You are the first cat that actually talked back to me. Did you also talk to me earlier when I left my house?",
        T0014: "Okay, so, I think we have to clear up some things first. How are you able to speak? And if other humans ignored you, does that mean they can't understand you? Can you speak to other cats? And can you understand their meows?",
        T0016: "Wait, what do you mean with “normal cats”? You are a cat, you should also be normal right?",
        T0020: "So, just to clarify: You were a human, like me, and then suddenly you transformed into a cat? How would that even make sense?"

      },
      Cat: {
        T0005: "Oh, hi! I didn't know we would see each other again so quickly!",
        T0007: "Oh no, I didn't want to scare you, I'm sorry. Are you alright?",
        T0009: "Hm, now that you put it that way… yeah you are right. Every other person I talked to just gave me sweet looks and petted me. I mean I don't complain, it feels great, but they all ignored what I was saying. You ignored me as well earlier. Oh, by the way, what is your name?",
        T0010: "? Cool, nice to meet you, I'm Tommy!",
        T0012: "Well, there are firsts for everything right? And yes, I did, but you had headphones in, so you probably didn't hear me. Anyways, why are you here, in the middle of nowhere? Where are you going? It's so boring being alone, can I come with you?",
        T0015: "That's the weird thing. All the other cats I've met just meowed like normal cats. And they didn't understand me either.",
        T0017: "Oh, I probably should have told you that before – I'm not like… really a cat? I was like you once! I had two legs, went to school with my friends, had parents and…",
        T0019: "Now that I think about it, nothing makes sense. I don't know what happened, I just… got here. All I remember is a bright red light and the next thing I know, I am walking around on four legs, doing cat stuff.",
        T0021: "You tell me, I don't know either. It just happened. So, can I come with you now? It is so boring here, please let me come with you!"
      }
    };

/*     let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.classList.add("musicplayer");
    newDiv.addEventListener("click", clickResponse);
    document.getElementById("append").appendChild(newDiv);
    console.log("appended"); */

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.home_path);
    await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);

    await ƒS.Location.show(locations.home_path_close);
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);

    await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.cat, text.Cat.T0005);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.surprised, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.cat, text.Cat.T0007);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0008);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.curious, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.cat, text.Cat.T0009);

    let scene: HTMLElement = document.getElementById("append");
    let overlay: HTMLDivElement = document.createElement("div");
    overlay.id = "overlay";
    scene.appendChild(overlay);

    let name: string = await ƒS.Speech.getInput();
    dataForSave.nameProtagonist = name;

    document.getElementById("append").children[0].remove();
    
    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.cat, name + text.Cat.T0010);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0011);
    await ƒS.Speech.tell(characters.tommy, text.Cat.T0012);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0013);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0014);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.neutral, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.tommy, text.Cat.T0015);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0016);
  
    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.sad, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.tommy, text.Cat.T0017);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0018);
    await ƒS.Speech.tell(characters.tommy, text.Cat.T0019);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0020);

    await ƒS.Character.hide(characters.tommy);
    await ƒS.Character.show(characters.tommy, characters.tommy.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(0.2);
    await ƒS.Speech.tell(characters.tommy, text.Cat.T0021);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0022);

    dataForSave.encounteredAnyAnimal = true;
    dataForSave.encounteredCat = true;

    let travelWithCatAnswer = {
      accept: "Say Yes and take the cat with you",
      decline: "Decline and carry on alone"
    };

    let travelWithCat = await ƒS.Menu.getInput(travelWithCatAnswer, "decision");
    ƒS.Sound.play(sound.click, 0.2);

    switch (travelWithCat) {
      case travelWithCatAnswer.accept: 
        dataForSave.travelWithCat = true;
        return "TravelWithCat";
      case travelWithCatAnswer.decline:
        dataForSave.travelWithCat = false;
        return "TravelWithoutCat";
    }

  }
}