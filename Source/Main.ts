namespace Endabgabe {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("- - - Starting: An Unpolished Gem with a Tragic Backstory - - -");

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
    },
    home_bedroom: {
      name: "Bedroom",
      background: ""
    },
    home_table: {
      name: "Table",
      background: "Images/Backgrounds/home_table.png"
    },
    home_door: {
      name: "Door",
      background: ""
    },
    home_path: {
      name: "Path Behind Your Home",
      background: ""
    },
    forest_path_before: {
      name: "Path before entering the forest",
      background: ""
    },
    forest_path_into: {
      name: "Path that leads into the forest",
      background: ""
    },
    cat_search_forest: {
      name: "Forest where you search for the cat",
      background: ""
    },
    cat_search_field: {
      name: "Field where you search for the cat",
      background: ""
    },
    cat_search_bush: {
      name: "Bush where you search for the cat",
      background: ""
    },
    split_castle_forest: {
      name: "Split where you either go to the castle or into the forest",
      background: ""
    },
    split_forest: {
      name: "Left path of the split",
      background: ""
    },
    split_lake: {
      name: "Right path of the split",
      background: ""
    },
    lake_entrance: {
      name: "Lake on first arrival",
      background: ""
    },
    lake: {
      name: "The Lake",
      background: ""
    },
    lake_polluted_water: {
      name: "Polluted water",
      background: ""
    },
    lake_rocks: {
      name: "Rocks",
      background: ""
    },
    lake_bridge: {
      name: "Bride",
      background: ""
    },
    deep_forest_entrance: {
      name: "Entrance to the deeper forest",
      background: ""
    },
    deep_forest_split: {
      name: "Split path in deep forest",
      background: ""
    },
    deep_forest_split_bridge: {
      name: "Left path of deep forest split path",
      background: ""
    },
    deep_forest_split_path: {
      name: "Right path of deep forest split path",
      background: ""
    },
    clearing_ground: {
      name: "The ground of the clearing",
      background: ""
    },
    clearing_center: {
      name: "The center of the clearing",
      background: ""
    },
    clearing_trees: {
      name: "The trees around the clearing",
      background: ""
    },
    evening_walk: {
      name: "The walk home",
      background: ""
    }
  };

  export let characters = {
    narrator: {
      name: ""
    },
    protagonist: {
      name: ""
    },
    catname: {
      name: "",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Images/Characters/cat_angry.png",
        happy: "Images/Characters/cat_happy.png",
        neutral: "Images/Characters/cat_neutral.png",
        sad: "Images/Characters/cat_sad.png",
        curious: "Images/Characters/cat_curious.png",
        surprised: "Images/Characters/cat_surprised.png"
      }
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
    rock: {
      name: "Rock",
      description: "A mysterious part of a rock, found in the middle of the forest",
      image: "",
      static: true
    },
    book: {
      name: "Bag",
      description: "A bag with a Walkman and a couple of cassettes inside",
      image: "",
      static: true
    }
  };

  // Menu
  // Buttons
  export let ingameMenuButtons = {
    inventory: "Inventory",
    save: "Save",
    load: "Load",
    close: "Close",
    credits: "Credits"
  };


  // ƒS.Speech.setTickerDelays();
  // ƒS.Speech.set(); // Ohne Textgeschwindigkeit

  export async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case ingameMenuButtons.inventory:
        ƒS.Inventory.open();
        break;
      case ingameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case ingameMenuButtons.load:
        await ƒS.Progress.load();
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
    }
  }

  export let dataForSave = { // everything that is supposed to be saved
    nameProtagonist: "",
    studiesProtagonist: "",
    encounteredAnyAnimal: false,
    encounteredCat: false,
    encounteredFox: false,
    encounteredTurtle: false,
    encounteredDeer: false,
    travelWithCat: false
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: WakingUp, name: "WakingUp" }
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  }

  let uiElement: HTMLElement = document.querySelector("[type=interface]");
  dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
}