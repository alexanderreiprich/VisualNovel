namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  // define transitions
  export let transitions = {
    puzzle: {
      duration: 1,
      alpha: "Transitions/puzzle.png",
      edge: 1
    }
  };

  export let sound = {
    // themes
    nightclub: "Audio/nightclub.ogg",

    // sfx
    click: "Pfad"
  };

  export let locations = {
    nightcity: {
      name: "Nightcity",
      background: "Images/Backgrounds/Nightcity.png"
    }
  };

  export let characters = {
    narrator: {
      name: ""
    },
    aisaka: {
      name: "Aisaka",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Images/Characters/aisaka_angry.png",
        happy: "Images/Characters/aisaka_happy.png",
        upset: "Images/Characters/aisaka_upset.png"
      }
    }
  };

  export let dataForSave = { // everything that is supposed to be saved
    nameProtagonist: ""
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: ExampleScene, name: "ExampleScene" }
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}