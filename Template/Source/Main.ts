namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  // define transitions
  export let transitions = {
    puzzle: {
      duration: 1,
      alpha: "Transitions/puzzle.png",
      edge: 2
    }
  };

  export let sound = {
    // themes
    nightclub: "Audio/nightclub.ogg",
    beach: "Audio/beach.mp3",

    // sfx
    click: "Pfad",
    seagull: "Audio/Seagulls.mp3",
    swimming: "Audio/swimming.mp3",
    music: "Audio/music.mp3",
    people: "Audio/clubambiente.mp3"
  };

  export let locations = {
    nightcity: {
      name: "Nightcity",
      background: "Images/Backgrounds/Nightcity.png"
    },
    beach: {
      name: "Beach",
      background: "Images/Backgrounds/beach1.jpg"
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

  export let items = {
    sword: {
      name: "Sword",
      description: "A sharp sword.",
      image: "Images/Items/sword.png",
      static: true
    },
    book: {
      name: "Book",
      description: "A book, with a lot of information inside.",
      image: "Images/Items/book.png",
      static: true
    },
    paper: {
      name: "Paper",
      description: "Something to write on.",
      image: "Images/Items/paper.png",
      static: false
    },
    phone: {
      name: "Phone",
      description: "The newest model of the yPhone.",
      image: "Images/Items/phone.png",
      static: true
    },
    pen: {
      name: "Pen",
      description: "Something to write with.",
      image: "Images/Items/pen.png",
      static: true
    },
    clock: {
      name: "Clock",
      description: "Tells you the time.",
      image: "Images/Items/clock.png",
      static: true
    }
  };

  // Menu
  // Buttons
  let ingameMenuButtons = {
    save: "Save",
    load: "Load",
    close: "Close",
    credits: "Credits"
  };

  let gameMenu: ƒS.Menu;
  // gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
  //ƒS.Speech.setTickerDelays();
  // ƒS.Speech.set(); // Ohne Textgeschwindigkeit
  let menuIsOpen: boolean = true;

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case ingameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case ingameMenuButtons.load:
        await ƒS.Progress.load();
        break;
      case ingameMenuButtons.close:
        gameMenu.close();
        menuIsOpen = false;
        break;
      case ingameMenuButtons.credits:
        showCredits();
        break;
    }
  }

  export function showCredits(): void {

    // ƒS.Text.setClass("class");   -   Alle CSS Klassen löschen und diese hinzufügen!
    // ƒS.Text.addClass("class");   -   Eine CSS Klasse hinzufügen!

    ƒS.Text.print("wee woo");
  }

  // Menu Shortcuts
  window.addEventListener("keydown", hndKeyPress);

  let inventoryOpen: boolean;

  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.I:
        if (!inventoryOpen) {
          ƒS.Inventory.open();
          inventoryOpen = true;
        }
        else {
          ƒS.Inventory.close();
          inventoryOpen = false;
        }
        break;
      case ƒ.KEYBOARD_CODE.G:
        ƒS.Inventory.add(items.sword);
        break;
      case ƒ.KEYBOARD_CODE.A:
        ƒS.Inventory.add(items.paper);
        break;
      case ƒ.KEYBOARD_CODE.S:
        ƒS.Inventory.add(items.pen);
        break;
      case ƒ.KEYBOARD_CODE.D:
        ƒS.Inventory.add(items.clock);
        break;
      case ƒ.KEYBOARD_CODE.F:
        ƒS.Inventory.add(items.book);
        break;
      case ƒ.KEYBOARD_CODE.H:
        ƒS.Inventory.add(items.phone);
        break;
    }
  }

  export let dataForSave = { // everything that is supposed to be saved
    nameProtagonist: ""
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: BeachScene, name: "BeachScene" }
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  }

  let uiElement: HTMLElement = document.querySelector("[type=interface]");
  dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
}