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
      background: "Images/Backgrounds/home_door.png"
    },
    home_path: {
      name: "Path Behind Your Home",
      background: "Images/Backgrounds/home_path.png"
    },
    home_path_close: {
      name: "Path Behind Your Home",
      background: "Images/Backgrounds/home_path_close.png"
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
      name: "You"
    },
    cat: {
      name: "Cat"
    },
    fox: {
      name: "Fox"
    },
    tommy: {
      name: "Tommy",
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
    june: {
      name: "June",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose : {
        angry: "Images/Characters/fox_mad.png",
        happy: "Images/Characters/fox_laughing.png",
        neutral: "Images/Characters/fox_neutral.png",
        //sad: "Images/Characters/fox_sad.png",
        //curious: "Images/Characters/fox_curious.png",
        surprised: "Images/Characters/fox_surprised.png",
        uncomfortable: "Images/Characters/fox_uncomfortable.png",
        concerned: "Images/Characters/fox_concerned.png"
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
      // Chapter 1 - Home
      { scene: WakingUp, name: "WakingUp", id: "WakingUp" },
      { scene: PetTheCat, name: "PetTheCat", id: "PetTheCat" },
      { scene: ScareTheCat, name: "ScareTheCat", id: "ScareTheCat" },
      { scene: IgnoreTheCat, name: "IgnoreTheCat", id: "IgnoreTheCat" },
      { scene: MeetingAgain, name: "MeetingAgain", id: "MeetingAgain" },
      { scene: TravelWithCat, name: "TravelWithCat", id: "TravelWithCat" },
      { scene: TravelWithoutCat, name: "TravelWithoutCat", id: "TravelWithoutCat" },

      // Chapter 2 - Forest
      { scene: ForestAlone, name: "ForestAlone", id: "ForestAlone" },
      { scene: ForestWithCat, name: "ForestWithCat", id: "ForestWithCat" }
    ];
    // TODO: Wie kann man spezifische Szenen spielen?
    // start the sequence
    ƒS.Progress.go(scenes);
  }

  let uiElement: HTMLElement = document.querySelector("[type=interface]");
  dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
}