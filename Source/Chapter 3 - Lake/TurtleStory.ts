namespace Endabgabe {
  export async function TurtleStory(): ƒS.SceneReturn {
    console.log("- - - Scene 10.1: Long Time - - -");
    let gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Turtle: {
        T0001: "Oh, please, just because I am an old lad doesn't mean that I have been here for decades. I actually remember being young like you…",
        T0002: "Back then I used to come here all the time to admire this amazing lake… I have probably been here for longer than you are alive hahaha.",
        T0003: "I remember coming here with my girlfriend when I was your age… we had picnics here every week, it was a great tradition. Oh, it was fantastic…",
        T0004: "This was also my go-to place when I eventually broke up with her… oh man… The only things comforting me were the calm chirping of birds and the splashing of the water.",
        T0005: "There is just something to calming about this place. I also came back here when my wife died a few years ago. Maybe this is the place that I am destined to be, haha",
        T0006: "Aw, it was too early for her to go, you know. She was still so young and happy… I remember meeting her for the first time back when I used to work at the bank. She was the one with the gorgeous smile, haha, I remember like it was yesterday.",
        T0007: "I asked her out on a date on a sunny summer afternoon. We got some ice cream and then went to watch a movie. Exactly there I knew that I wanted to marry her. And I did… our marriage was amazing, there wasn't a single boring day.",
        T0008: "We used to surprise each other with small gifts every once in a while. I kept those gifts all my life, every single one of them.",
        T0009: "Even the ones I didn't really find a use for. But that is not what matters. It is the fact that we kept this tradition going for so long.",
        T0010: "Once I got her the most beautiful ring I could find, and you couldn't imagine what her face looked like when she saw what I got her, hahaha.", 
        T0011: "But it all vanished when she got diagnosed with cancer… It was a horrible sight to see. Every day became a struggle. But I loved her every single day, until she passed away.",
        T0012: "I still think about her every day. I just hope that she is happy in heaven and that I can join her someday…",
        T0013: "…",
        T0014: "Oh my, I am sorry, I haven't had anybody to speak with for years. I just needed to get all of this out, you know.",
        T0015: "I've just… been so lonely… without my wife…"
      },
      Narrator: {
        T0016: "The turtle stops talking, as if it just realized something. Suddenly you notice, that the previous yellow eyes, slowly fade to black.",
        T0017: "After a minute or two, you put the turtle down.",
        T0018: "Without another word to say, it turns around and robs back into the water.",
        T0020: "There are a ton of questions floating around in your head. You have answers to none of them.",
        T0023: "Still confused, not knowing what just happened, you start walking along the path next to the lake, leading deeper into the forest."
      },
      Protagonist: {
        T0019: "…what just happened? Richard? Did I just imagine all of this? What happened to him?",
        T0021: "This must have been… No, this was definitely real. I… I need to clear my mind.",
        T0022: "Tommy? Come here!"
      }
    };

    let interruptAnswer = {
      interrupt: "Interrupt",
      listen: "Listen"
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.lake_rocks);
    await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);

    ƒS.Speech.setTickerDelays(150);
    await ƒS.Speech.tell(characters.richard, text.Turtle.T0001);
    await ƒS.Speech.tell(characters.richard, text.Turtle.T0002);
    await ƒS.Speech.tell(characters.richard, text.Turtle.T0003);

    let interrupt = await ƒS.Menu.getInput(interruptAnswer, "decision");
    if (interrupt == interruptAnswer.interrupt) {
      return "Interrupted";
    }

    await ƒS.Speech.tell(characters.richard, text.Turtle.T0004);
    await ƒS.Speech.tell(characters.richard, text.Turtle.T0005);
    await ƒS.Speech.tell(characters.richard, text.Turtle.T0006);

    interrupt = await ƒS.Menu.getInput(interruptAnswer, "decision");
    if (interrupt == interruptAnswer.interrupt) {
      return "Interrupted";
    }

    await ƒS.Speech.tell(characters.richard, text.Turtle.T0007);
    await ƒS.Speech.tell(characters.richard, text.Turtle.T0008);
    await ƒS.Speech.tell(characters.richard, text.Turtle.T0009);
    await ƒS.Speech.tell(characters.richard, text.Turtle.T0010);

    interrupt = await ƒS.Menu.getInput(interruptAnswer, "decision");
    if (interrupt == interruptAnswer.interrupt) {
      return "Interrupted";
    }

    await ƒS.Speech.tell(characters.richard, text.Turtle.T0011);
    await ƒS.Speech.tell(characters.richard, text.Turtle.T0012);
    await ƒS.Speech.tell(characters.richard, text.Turtle.T0013);
    await ƒS.Speech.tell(characters.richard, text.Turtle.T0014);
    await ƒS.Speech.tell(characters.richard, text.Turtle.T0015);

    ƒS.Speech.setTickerDelays(50);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0016);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0017);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0018);

    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0019);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0020);
    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0021);

    dataForSave.freedTurtle = true;
    dataForSave.freedAnimals++;

    if (dataForSave.travelWithCat)
      await ƒS.Speech.tell(characters.protagonist, text.Protagonist.T0022);

    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0023);
  }
}