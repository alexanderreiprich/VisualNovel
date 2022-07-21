namespace Endabgabe {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("- - - Starting: An Unpolished Gem with a Tragic Backstory - - -");

  // alert("Hi!\nWelcome to my Visual Novel.\nPlease use the option to view this window in fullscreen (F11) to get the best playing experience!\n\nHave fun! <3");

  // define transitions
  export let transitions = {
    puzzle: {
      duration: 2,
      alpha: "Transitions/puzzle.png",
      edge: 1
    },
    blink: {
      duration: 2,
      alpha: "Transitions/blink.png",
      edge: 0.2
    },
    reverse_blink: {
      duration: 2,
      alpha: "Transitions/reverse_blink.png",
      edge: 0.2
    },
    swoosh: {
      duration: 1.5,
      alpha: "Transitions/swoosh.png",
      edge: 0.4
    },
    swipe: {
      duration: 1.5,
      alpha: "Transitions/swipe.png",
      edge: 0.4
    },
    dream: {
      duration: 1.5,
      alpha: "Transitions/dream.png",
      edge: 0.4
    },
    dream_reverse: {
      duration: 1.5,
      alpha: "Transitions/dream_reverse.png",
      edge: 0.4
    }
  };

  export let sound = {
    // background
    forest_ambience_1: "Audio/SFX/forest_ambience_1.mp3",
    forest_ambience_2: "Audio/SFX/forest_ambience_2.mp3",
    forest_bird: "Audio/SFX/forest_bird.mp3",
    clearing_ambience: "Audio/SFX/clearing_ambience.mp3",

    // sfx
    click: "Audio/SFX/click.mp3",
    cassette_in: "Audio/SFX/cassette_in.mp3",
    cassette_out: "Audio/SFX/cassette_out.mp3",
    cassette_scroll: "Audio/SFX/cassette_scroll.mp3",
    door: "Audio/SFX/door.mp3",
    lake: "Audio/SFX/lake.mp3",
    meow: "Audio/SFX/meow.mp3",
    mosquitos: "Audio/SFX/mosquitos.mp3",
    newspaper: "Audio/SFX/newspaper.mp3",
    purr: "Audio/SFX/purr.mp3",
    cat_slurp: "Audio/SFX/cat_slurp.mp3",
    crickets: "Audio/SFX/crickets.mp3",
    grasshoppers: "Audio/SFX/grasshoppers.mp3",
    bird_flying: "Audio/SFX/bird_flying.mp3",
    branch_break: "Audio/SFX/branch_break.mp3",
    rustle_1: "Audio/SFX/rustle_1.mp3",
    rustle_2: "Audio/SFX/rustle_2.mp3",
    stones_falling: "Audio/SFX/stones_falling.mp3",
    dream_start: "Audio/SFX/dream.mp3",
    dream_end: "Audio/SFX/dream_end.mp3",

    // songs
    ophelia: "Audio/Songs/ophelia.mp3",
    freaks: "Audio/Songs/freaks.mp3",
    twentymins: "Audio/Songs/20mins.mp3",
    fiveofive: "Audio/Songs/505.mp3",
    emotion: "Audio/Songs/emotion.mp3",
    righthere: "Audio/Songs/righthere.mp3",
    spacesong: "Audio/Songs/spacesong.mp3",
    icanthandlechange: "Audio/Songs/icanthandlechange.mp3"
  };

  export let locations = {
    home_bedroom: {
      name: "Bedroom",
      background: "Images/Backgrounds/home_bedroom.png"
    },
    home_table: {
      name: "Table",
      background: "Images/Backgrounds/home_table.png"
    },
    home_door: {
      name: "Door",
      background: "Images/Backgrounds/home_door.png"
    },
    home_door_ground: {
      name: "Door Ground",
      background: "Images/Backgrounds/home_door_ground.png"
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
      name: "Bridge",
      background: "Images/Backgrounds/lake_bridge.png"
    },
    lake_flashback: {
      name: "Lake Flashback",
      background: "Images/Backgrounds/lake_flashback.png"
    },
    lake_evening: {
      name: "Lake Evening",
      background: "Images/Backgrounds/lake_evening.png"
    },
    deep_forest_entrance: {
      name: "Entrance to the deeper forest",
      background: "Images/Backgrounds/deep_forest_entrance.png"
    },
    deep_forest_split: {
      name: "Split path in deep forest",
      background: "Images/Backgrounds/deep_forest_split.png"
    },
    deep_forest_split_bridge: {
      name: "Left path of deep forest split path",
      background: "Images/Backgrounds/deep_forest_split_bridge.png"
    },
    deep_forest_split_path: {
      name: "Right path of deep forest split path",
      background: "Images/Backgrounds/deep_forest_split_path.png"
    },
    clearing_ground: {
      name: "The ground of the clearing",
      background: "Images/Backgrounds/clearing_ground.png"
    },
    clearing_center: {
      name: "The center of the clearing",
      background: "Images/Backgrounds/clearing_center.png"
    },
    clearing_trees: {
      name: "The trees around the clearing",
      background: "Images/Backgrounds/clearing_trees.png"
    },
    evening_walk: {
      name: "The walk home",
      background: "Images/Backgrounds/evening_walk.png"
    },
    home_bedroom_night: {
      name: "Bedroom at night",
      background: "Images/Backgrounds/home_bedroom_night.png"
    },
    ending_all: {
      name: "Ending: All items collected",
      background: "Images/Backgrounds/ending_all.png"
    },
    ending_bag: {
      name: "Ending: Bag collected",
      background: "Images/Backgrounds/ending_bag.png"
    },
    ending_rock: {
      name: "Ending: Rock collected",
      background: "Images/Backgrounds/ending_rock.png"
    },
    ending_none: {
      name: "No items collected",
      background: "Images/Backgrounds/ending_none.png"
    },
    blank: {
      name: "Blank",
      background: "Images/Backgrounds/blank.png"
    }
  };

  export let animations = {
    leftToMid: "leftToMid",
    rightToMid: "rightToMid",
    midToLeft: "midToLeft",
    midToRight: "midToRight",
    rightOut: "rightOut",
    centerRightOut: "centerRightOut",
    centerLeftOut: "centerLeftOut", 
    leftOut: "leftOut",
    outToLeft: "outToLeft"
  };

  export let newPositions = {
    bottomleft: new FudgeStory.Position(-470, -540),
    bottomright: new FudgeStory.Position(470, -540),
    bottomcenter: new FudgeStory.Position(0, -540),
    rightout: new FudgeStory.Position(2470, -540),
    leftout: new FudgeStory.Position(-2470, -540)
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
    turtle: {
      name: "Turtle"
    },
    deer: {
      name: "Deer"
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
        surprised: "Images/Characters/cat_surprised.png",
        crying: "Images/Characters/cat_crying.png",
        yawning: "Images/Characters/cat_yawn.png",
        empty: "Images/Characters/cat_empty.png"
      }
    },
    june: {
      name: "June",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Images/Characters/fox_mad.png",
        happy: "Images/Characters/fox_laughing.png",
        neutral: "Images/Characters/fox_neutral.png",
        surprised: "Images/Characters/fox_surprised.png",
        uncomfortable: "Images/Characters/fox_uncomfortable.png",
        concerned: "Images/Characters/fox_concerned.png",
        empty: "Images/Characters/fox_empty.png"
      }
    },
    richard: {
      name: "Richard",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Images/Characters/turtle_angry.png",
        crying: "Images/Characters/turtle_crying.png",
        neutral: "Images/Characters/turtle_neutral.png",
        dreaming: "Images/Characters/turtle_dreaming.png",
        empty: "Images/Characters/turtle_empty.png"
      }
    },
    olivia: {
      name: "Olivia",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        happy: "Images/Characters/deer_happy.png",
        neutral: "Images/Characters/deer_neutral.png",
        sad: "Images/Characters/deer_sad.png",
        curious: "Images/Characters/deer_curious.png",
        crying: "Images/Characters/deer_crying.png",
        surprised: "Images/Characters/deer_surprised.png",
        empty: "Images/Characters/deer_empty.png"
      }
    }
  };

  export let items = {
    rock: {
      name: "Rock",
      description: "A mysterious part of a rock, found in the middle of the forest.",
      image: "Images/Items/rock.png",
      static: true
    },
    bag: {
      name: "Bag",
      description: "A bag with an old SUNY Walkman and a couple of cassettes inside. It looks like it could still work.",
      image: "Images/Items/bag.png",
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
        toggleCredits();
        break;
    }
  }

  let creditsOpen: boolean = false;

  export function toggleCredits(): void {
    if (!creditsOpen) {
      ƒS.Speech.hide();
      creditsOpen = true;
      let credits: HTMLImageElement = document.createElement("img");
      credits.src = "Images/credits.png";
      credits.id = "credits_img";
      document.getElementById("append").appendChild(credits);
    }
    else {
      ƒS.Speech.show();
      creditsOpen = false;
      document.getElementById("append").removeChild(document.getElementById("credits_img"));
    }
  }

  // Menu Shortcuts
  window.addEventListener("keydown", hndKeyPress);

  // Functions that manage the music player
  let musicOpen: boolean;
  let previousName: string;
  let previousContent: string;
  let playlist: string[] = [sound.ophelia, sound.freaks, sound.twentymins, sound.fiveofive, sound.righthere, sound.icanthandlechange];
  let curSong: number = 0;

  function hndSkip(_event: Event): void {
    _event.stopPropagation();
    ƒS.Sound.play(playlist[curSong], 0);
    if (curSong == playlist.length - 1)
      curSong = 0;
    else
      curSong++;

    ƒS.Sound.play(sound.cassette_scroll, 1);
    document.getElementsByTagName("content")[0].innerHTML = "Changing cassette...";
    window.setTimeout((): void => { 
      ƒS.Sound.play(playlist[curSong], 0.5);
      document.getElementsByTagName("content")[0].innerHTML = "Now Playing: " + playlist[curSong];
    },                2000);
    console.log("SKIP");
  }

  function hndPrev(_event: Event): void {
    _event.stopPropagation();
    ƒS.Sound.play(playlist[curSong], 0);
    if (curSong == 0)
      curSong = playlist.length - 1;
    else
      curSong--;

    ƒS.Sound.play(sound.cassette_scroll, 1);
    document.getElementsByTagName("content")[0].innerHTML = "Changing cassette...";
    window.setTimeout((): void => { 
      ƒS.Sound.play(playlist[curSong], 0.5);
      document.getElementsByTagName("content")[0].innerHTML = "Now Playing: " + playlist[curSong];
    },                2000);
    console.log("PREV");
  }

  function hndStop(_event: Event): void {
    _event.stopPropagation();
    ƒS.Sound.play(playlist[curSong], 0);
    curSong = 0;
    ƒS.Sound.play(sound.cassette_out, 1);
    console.log("STOP");
  }

  function hndPlay(_event: Event): void {
    _event.stopPropagation();
    ƒS.Sound.play(sound.cassette_in, 1);
    document.getElementsByTagName("content")[0].innerHTML = "Putting in cassette...";
    window.setTimeout((): void => {
      ƒS.Sound.play(playlist[curSong], 0.5);
      document.getElementsByTagName("content")[0].innerHTML = "Now Playing: " + playlist[curSong];
      console.log("PLAY");
    },                4000);

  }

  async function hndMusicPlayer(): Promise<void> {

    let nameDiv: Element = document.getElementsByTagName("name")[0];
    let contentDiv: Element = document.getElementsByTagName("content")[0];

    if (!musicOpen) {
      let parentDiv: HTMLDivElement = document.createElement("div");
      parentDiv.id = "appendedDiv";

      let walkmanDiv: HTMLDivElement = document.createElement("div");
      walkmanDiv.id = "walkmanDiv";

      let img: HTMLImageElement = document.createElement("img");
      img.src = "Images/Walkman/walkman.png";
      img.id = "walkman";

      let skipDiv: HTMLDivElement = document.createElement("div");
      skipDiv.addEventListener("pointerdown", hndSkip);
      skipDiv.id = "skipDiv";

      let prevDiv: HTMLDivElement = document.createElement("div");
      prevDiv.addEventListener("pointerdown", hndPrev);
      prevDiv.id = "prevDiv";

      let playDiv: HTMLDivElement = document.createElement("div");
      playDiv.addEventListener("pointerdown", hndPlay);
      playDiv.id = "playDiv";

      let stopDiv: HTMLDivElement = document.createElement("div");
      stopDiv.addEventListener("pointerdown", hndStop);
      stopDiv.id = "stopDiv";

      walkmanDiv.appendChild(skipDiv);
      walkmanDiv.appendChild(prevDiv);
      walkmanDiv.appendChild(playDiv);
      walkmanDiv.appendChild(stopDiv);

      previousName = nameDiv.innerHTML;
      previousContent = contentDiv.innerHTML;

      nameDiv.innerHTML = "";
      contentDiv.innerHTML = "You grab the music player. Skip the songs using the << and >> buttons, play using the > button and stop the music altogether by pressing the ▪ button";

      walkmanDiv.appendChild(img);
      parentDiv.appendChild(walkmanDiv);
      document.getElementById("append").appendChild(parentDiv);
    }
    else {
      nameDiv.innerHTML = previousName;
      contentDiv.innerHTML = previousContent;

      document.getElementById("append").removeChild(document.getElementById("appendedDiv"));
    }
  }


  // Keybinds
  let inventoryOpen: boolean;
  export async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.I:
        ƒS.Inventory.add(items.bag);
        if (!inventoryOpen) {
          ƒS.Inventory.open();
          inventoryOpen = true;
        }
        else {
          ƒS.Inventory.close();
          inventoryOpen = false;
        }
        break;
      case ƒ.KEYBOARD_CODE.M:
        // if (ƒS.Inventory.getAmount(items.bag) != 0) {
        if (!musicOpen) {
          hndMusicPlayer();
          musicOpen = true;
        }
        else {
          hndMusicPlayer();
          musicOpen = false;
        }
        // }
        break;
    }
  }

  export function animate(_animation: string): ƒS.AnimationDefinition {
    switch (_animation) {
      case animations.leftToMid:
        return {
          start: { translation: newPositions.bottomleft },
          end: { translation: newPositions.bottomcenter },
          duration: 1.5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };

      case animations.rightToMid:
        return {
          start: { translation: newPositions.bottomright },
          end: { translation: newPositions.bottomcenter },
          duration: 1.5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };

      case animations.midToLeft:
        return {
          start: { translation: newPositions.bottomcenter },
          end: { translation: newPositions.bottomleft },
          duration: 1.5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };

      case animations.midToRight:
        return {
          start: { translation: newPositions.bottomcenter },
          end: { translation: newPositions.bottomright },
          duration: 1.5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };

      case animations.rightOut:
        return {
          start: { translation: newPositions.bottomright },
          end: { translation: newPositions.rightout },
          duration: 1.5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      
      case animations.centerRightOut:
        return {
          start: { translation: newPositions.bottomcenter },
          end: { translation: newPositions.rightout },
          duration: 1.5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      
      case animations.centerLeftOut: 
        return {
          start: { translation: newPositions.bottomcenter },
          end: { translation: newPositions.leftout },
          duration: 1.5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };

      case animations.leftOut:
        return {
          start: { translation: newPositions.bottomleft },
          end: { translation: newPositions.rightout },
          duration: 1.5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };

      case animations.outToLeft:
        return {
          start: { translation: newPositions.leftout },
          end: { translation: newPositions.bottomleft },
          duration: 1.5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };

      default:
        return {
          start: { translation: ƒS.positions.bottomcenter },
          end: { translation: ƒS.positions.bottomcenter },
          duration: 1.5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
  }

  // Data to be saved

  export let dataForSave = {
    nameProtagonist: "",
    encounteredAnyAnimal: false,
    encounteredCat: false,
    encounteredFox: false,
    encounteredTurtle: false,
    encounteredDeer: false,
    freedCat: false,
    freedFox: false,
    freedTurtle: false,
    freedDeer: false,
    freedAnimals: 0,
    travelWithCat: false,
    groundAndObjectAnalyzed: false, // Used to determine if player can go back to previous choices in DontEncounterDeer()
    foxTrustsProtagonist: false // Used to check if the player told the fox about the cat in Chapter 1
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
      { scene: MeetTurtle, name: "MeetTurtle", id: "MeetTurtle" },
      { scene: TurtleStory, name: "TurtleStory", id: "TurtleStory" },
      { scene: Interrupted, name: "Interrupted", id: "Interrupted" },

      // Chapter 4 - Deep Forest
      { scene: CatBackstory, name: "CatBackstory", id: "CatBackstory" },
      { scene: CatBridge, name: "CatBridge", id: "CatBridge" },
      { scene: EncounterFoxAgain, name: "EncounterFoxAgain", id: "EncounterFoxAgain" },
      { scene: BridgeAlone, name: "BridgeAlone", id: "BridgeAlone" },
      { scene: DeepForestAlone, name: "DeepForestAlone", id: "DeepForestAlone" },
      { scene: EncounterFoxAgainNoCat, name: "EncounterFoxAgainNoCat", id: "EncounterFoxAgainNoCat" },
      { scene: FreeFox, name: "FreeFox", id: "FreeFox" },
      { scene: RevisitLake, name: "RevisitLake", id: "RevisitLake" },

      // Chapter 5 - Clearing
      { scene: ArrivalClearing, name: "ArrivalClearing", id: "ArrivalClearing" },
      { scene: EncounterDeer, name: "EncounterDeer", id: "EncounterDeer" },
      { scene: FreeDeer, name: "FreeDeer", id: "FreeDeer" },
      { scene: Reunion, name: "Reunion", id: "Reunion" },

      // Chapter 6 - Walk Home & Endings
      { scene: WalkHome, name: "WalkHome", id: "WalkHome" },
      { scene: BadEnding, name: "BadEnding", id: "BadEnding" },
      { scene: GoodEnding, name: "GoodEnding", id: "GoodEnding" },
      { scene: NeutralEndings, name: "NeutralEndings", id: "NeutralEndings" },

      // Empty End Scene
      { id: "Empty Scene", scene: Empty, name: "End" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    ƒS.Speech.setTickerDelays(20);
    ƒS.Speech.hide();
    ƒS.Progress.go(scenes);
  }
}