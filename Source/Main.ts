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
      background: "Images/Backgrounds/forest_path_before.png"
    },
    forest_path_into: {
      name: "Path that leads into the forest",
      background: "Images/Backgrounds/forest_path_into.png"
    },
    cat_search_forest: {
      name: "Forest where you search for the cat",
      background: "Images/Backgrounds/split_forest.png"
    },
    cat_search_field: {
      name: "Field where you search for the cat",
      background: "Images/Backgrounds/cat_search_fields.png"
    },
    cat_search_bush: {
      name: "Bush where you search for the cat",
      background: "Images/Backgrounds/cat_search_bush.png"
    },
    split_castle_forest: {
      name: "Split where you either go to the castle or into the forest",
      background: "Images/Backgrounds/split_castle_forest.png"
    },
    split_forest: {
      name: "Left path of the split",
      background: "Images/Backgrounds/split_forest.png"
    },
    split_lake: {
      name: "Right path of the split",
      background: "Images/Backgrounds/split_lake.png"
    },
    lake_entrance: {
      name: "Lake on first arrival",
      background: "Images/Backgrounds/lake_entrance.png"
    },
    lake: {
      name: "The Lake",
      background: "Images/Backgrounds/lake.png"
    },
    lake_castle: {
      name: "Castle near the lake",
      background: "Images/Backgrounds/lake_castle.png"
    },
    lake_polluted_water: {
      name: "Polluted water",
      background: "Images/Backgrounds/lake_polluted_water.png"
    },
    lake_rocks: {
      name: "Rocks",
      background: "Images/Backgrounds/lake_rocks.png"
    },
    lake_bridge: {
      name: "Bride",
      background: "Images/Backgrounds/lake_bridge.png"
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
    questionmark: {
      name: "???"
    },
    cat: {
      name: "Cat"
    },
    fox: {
      name: "Fox"
    },
    girl: {
      name: "Girl"
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
      pose: {
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
      description: "A mysterious part of a rock, found in the middle of the forest.",
      image: "",
      static: true
    },
    bag: {
      name: "Bag",
      description: "A bag with a Walkman and a couple of cassettes inside. It look like it could still work.",
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
      { scene: ForestWithCat, name: "ForestWithCat", id: "ForestWithCat" },
      { scene: MeetFox, name: "MeetFox", id: "MeetFox" },
      { scene: BefriendFox, name: "BefriendFox", id: "BefriendFox" },
      { scene: DontBefriendFox, name: "DontBefriendFox", id: "DontBefriendFox" },
      { scene: BefriendFoxFirstEncounter, name: "BefriendFoxFirstEncounter", id: "BefriendFoxFirstEncounter" },
      { scene: IntoDeepForest, name: "IntoDeepForest", id: "IntoDeepForest" },


      // Chapter 3 - Lake
      { scene: EnterLake, name: "EnterLake", id: "EnterLake" },
      { scene: ExamineWater, name: "ExamineWater", id: "ExamineWater" },
      { scene: ExamineCastle, name: "ExamineCastle", id: "ExamineCastle" },

      // Chapter 4 - Deep Forest

      // Chapter 5 - Clearing

      // Empty End Scene
      { id: "Empty Scene", scene: Empty, name: "End" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // hide speech on title screen
    ƒS.Speech.hide();
    // start the sequence
    ƒS.Progress.go(scenes);
  }


}