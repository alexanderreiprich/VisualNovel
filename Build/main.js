"use strict";
var Endabgabe;
(function (Endabgabe) {
    async function BeachScene() {
        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.beach, 0.04, 2, true);
        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.music, 0.2, 5, true);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.seagull, 0.05, false);
        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.swimming, 0.1, 5, true);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.people, 0.15, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.home_table);
        await Endabgabe.ƒS.update();
    }
    Endabgabe.BeachScene = BeachScene;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function Empty() {
    }
    Endabgabe.Empty = Empty;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function ExampleScene() {
        console.log("FudgeStory Template Scene starting");
        let text = {
            Aisaka: {
                T0001: "toller text",
                T0002: "noch tollerer text",
                T0003: "yay"
            },
            Protagonist: {
                T0001: "wheeee"
            }
        };
        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.nightclub, 0.2, 5, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.home_table);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.home_table);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.angry, Endabgabe.ƒS.positions.bottomleft);
        await Endabgabe.ƒS.update();
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Aisaka.T0001);
        Endabgabe.ƒS.Speech.clear();
        await Endabgabe.ƒS.update(3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Aisaka.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Aisaka.T0003);
        Endabgabe.ƒS.Speech.hide();
        // ƒS.Character.hide(characters.aisaka);
        Endabgabe.ƒS.Character.hideAll();
        await Endabgabe.ƒS.update();
        let firstDialogueElementAnswers = {
            iSayOk: "Okay.",
            iSayYes: "Yes.",
            iSayCoolio: "Coolio.🤠"
        };
        let firstDialogueElement = await Endabgabe.ƒS.Menu.getInput(firstDialogueElementAnswers, "individualCSSClass");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.iSayOk:
                // continue path here
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, "Okay.");
                Endabgabe.ƒS.Speech.clear();
                break;
            case firstDialogueElementAnswers.iSayYes:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, "Yes.");
                Endabgabe.ƒS.Speech.clear();
                break;
            case firstDialogueElementAnswers.iSayCoolio:
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, "Coolio.🤠");
                Endabgabe.ƒS.Speech.clear();
                break;
        }
    }
    Endabgabe.ExampleScene = ExampleScene;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    Endabgabe.ƒ = FudgeCore;
    Endabgabe.ƒS = FudgeStory;
    console.log("- - - Starting: An Unpolished Gem with a Tragic Backstory - - -");
    // define transitions
    Endabgabe.transitions = {
        puzzle: {
            duration: 3,
            alpha: "Transitions/puzzle.png",
            edge: 1
        }
    };
    Endabgabe.sound = {
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
    Endabgabe.locations = {
        home_bedroom: {
            name: "Bedroom",
            background: "" // TODO: Add Background
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
        lake_evening: {
            name: "Bride",
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
            background: "Images/Backgrounds/evening_walk.png" // TODO: Add Background
        },
        ending_all: {
            name: "Ending: All items collected",
            background: "Images/Backgrounds/evening_walk.png" // TODO: Add Background
        },
        ending_bag: {
            name: "Ending: Bag collected",
            background: "Images/Backgrounds/evening_walk.png" // TODO: Add Background
        },
        ending_rock: {
            name: "Ending: Rock collected",
            background: "Images/Backgrounds/evening_walk.png" // TODO: Add Background
        },
        ending_none: {
            name: "No items collected",
            background: "Images/Backgrounds/evening_walk.png" // TODO: Add Background
        }
    };
    Endabgabe.characters = {
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
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
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
        },
        richard: {
            name: "Richard",
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "",
                happy: "",
                neutral: "",
                sad: ""
            }
        },
        deername: {
            name: "DEERNAME",
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "",
                neutral: "",
                sad: "",
                curious: "",
                crying: "",
                surprised: ""
            }
        }
    };
    Endabgabe.items = {
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
    Endabgabe.ingameMenuButtons = {
        inventory: "Inventory",
        save: "Save",
        load: "Load",
        credits: "Credits"
    };
    // ƒS.Speech.setTickerDelays();
    // ƒS.Speech.set(); // Ohne Textgeschwindigkeit
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case Endabgabe.ingameMenuButtons.inventory:
                Endabgabe.ƒS.Inventory.open();
                break;
            case Endabgabe.ingameMenuButtons.save:
                await Endabgabe.ƒS.Progress.save();
                break;
            case Endabgabe.ingameMenuButtons.load:
                await Endabgabe.ƒS.Progress.load();
                break;
            case Endabgabe.ingameMenuButtons.credits:
                showCredits();
                break;
        }
    }
    Endabgabe.buttonFunctionalities = buttonFunctionalities;
    function showCredits() {
        // ƒS.Text.setClass("class");   -   Alle CSS Klassen löschen und diese hinzufügen!
        // ƒS.Text.addClass("class");   -   Eine CSS Klasse hinzufügen!
        // ƒS.Text.print("wee woo");    -   Text ausgeben!
    }
    Endabgabe.showCredits = showCredits;
    // Menu Shortcuts
    window.addEventListener("keydown", hndKeyPress);
    // Functions that manage the music player
    let musicOpen;
    let previousName;
    let previousContent;
    function hndSkip(_event) {
        _event.stopPropagation();
        console.log("SKIP");
    }
    function hndPrev(_event) {
        _event.stopPropagation();
        console.log("PREV");
    }
    function hndStop(_event) {
        _event.stopPropagation();
        console.log("STOP");
    }
    function hndPlay(_event) {
        _event.stopPropagation();
        console.log("PLAY");
    }
    async function hndMusicPlayer() {
        let nameDiv = document.getElementsByTagName("name")[0];
        let contentDiv = document.getElementsByTagName("content")[0];
        if (!musicOpen) {
            let parentDiv = document.createElement("div");
            parentDiv.id = "appendedDiv";
            let walkmanDiv = document.createElement("div");
            walkmanDiv.id = "walkmanDiv";
            let img = document.createElement("img");
            img.src = "Images/Walkman/sideview.jpg";
            img.id = "walkman";
            let skipDiv = document.createElement("div");
            skipDiv.addEventListener("pointerdown", hndSkip);
            skipDiv.id = "skipDiv";
            let prevDiv = document.createElement("div");
            prevDiv.addEventListener("pointerdown", hndPrev);
            prevDiv.id = "prevDiv";
            let playDiv = document.createElement("div");
            playDiv.addEventListener("pointerdown", hndPlay);
            playDiv.id = "playDiv";
            let stopDiv = document.createElement("div");
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
    let inventoryOpen;
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Endabgabe.ƒ.KEYBOARD_CODE.I:
                if (!inventoryOpen) {
                    Endabgabe.ƒS.Inventory.open();
                    inventoryOpen = true;
                }
                else {
                    Endabgabe.ƒS.Inventory.close();
                    inventoryOpen = false;
                }
                break;
            case Endabgabe.ƒ.KEYBOARD_CODE.M:
                if (Endabgabe.ƒS.Inventory.getAmount(Endabgabe.items.bag) != 0) {
                    if (!musicOpen) {
                        hndMusicPlayer();
                        musicOpen = true;
                    }
                    else {
                        hndMusicPlayer();
                        musicOpen = false;
                    }
                }
                break;
        }
    }
    Endabgabe.hndKeyPress = hndKeyPress;
    // Data to be saved
    Endabgabe.dataForSave = {
        nameProtagonist: "",
        studiesProtagonist: "",
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
        travelWithCat: false
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            // Chapter 1 - Home
            { scene: Endabgabe.WakingUp, name: "WakingUp", id: "WakingUp" },
            { scene: Endabgabe.PetTheCat, name: "PetTheCat", id: "PetTheCat" },
            { scene: Endabgabe.ScareTheCat, name: "ScareTheCat", id: "ScareTheCat" },
            { scene: Endabgabe.IgnoreTheCat, name: "IgnoreTheCat", id: "IgnoreTheCat" },
            { scene: Endabgabe.MeetingAgain, name: "MeetingAgain", id: "MeetingAgain" },
            { scene: Endabgabe.TravelWithCat, name: "TravelWithCat", id: "TravelWithCat" },
            { scene: Endabgabe.TravelWithoutCat, name: "TravelWithoutCat", id: "TravelWithoutCat" },
            // Chapter 2 - Forest
            { scene: Endabgabe.ForestAlone, name: "ForestAlone", id: "ForestAlone" },
            { scene: Endabgabe.ForestWithCat, name: "ForestWithCat", id: "ForestWithCat" },
            { scene: Endabgabe.MeetFox, name: "MeetFox", id: "MeetFox" },
            { scene: Endabgabe.BefriendFox, name: "BefriendFox", id: "BefriendFox" },
            { scene: Endabgabe.DontBefriendFox, name: "DontBefriendFox", id: "DontBefriendFox" },
            { scene: Endabgabe.BefriendFoxFirstEncounter, name: "BefriendFoxFirstEncounter", id: "BefriendFoxFirstEncounter" },
            { scene: Endabgabe.IntoDeepForest, name: "IntoDeepForest", id: "IntoDeepForest" },
            // Chapter 3 - Lake
            { scene: Endabgabe.EnterLake, name: "EnterLake", id: "EnterLake" },
            { scene: Endabgabe.ExamineWater, name: "ExamineWater", id: "ExamineWater" },
            { scene: Endabgabe.ExamineCastle, name: "ExamineCastle", id: "ExamineCastle" },
            { scene: Endabgabe.MeetTurtle, name: "MeetTurtle", id: "MeetTurtle" },
            { scene: Endabgabe.TurtleStory, name: "TurtleStory", id: "TurtleStory" },
            { scene: Endabgabe.Interrupted, name: "Interrupted", id: "Interrupted" },
            // Chapter 4 - Deep Forest
            { scene: Endabgabe.CatBackstory, name: "CatBackstory", id: "CatBackstory" },
            { scene: Endabgabe.CatBridge, name: "CatBridge", id: "CatBridge" },
            { scene: Endabgabe.EncounterFoxAgain, name: "EncounterFoxAgain", id: "EncounterFoxAgain" },
            { scene: Endabgabe.BridgeAlone, name: "BridgeAlone", id: "BridgeAlone" },
            { scene: Endabgabe.DeepForestAlone, name: "DeepForestAlone", id: "DeepForestAlone" },
            { scene: Endabgabe.EncounterFoxAgainNoCat, name: "EncounterFoxAgainNoCat", id: "EncounterFoxAgainNoCat" },
            { scene: Endabgabe.FreeFox, name: "FreeFox", id: "FreeFox" },
            { scene: Endabgabe.RevisitLake, name: "RevisitLake", id: "RevisitLake" },
            // Chapter 5 - Clearing
            { scene: Endabgabe.ArrivalClearing, name: "ArrivalClearing", id: "ArrivalClearing" },
            // Chapter 6 - Walk Home & Endings
            { scene: Endabgabe.WalkHome, name: "WalkHome", id: "WalkHome" },
            { scene: Endabgabe.BadEnding, name: "BadEnding", id: "BadEnding" },
            { scene: Endabgabe.GoodEnding, name: "GoodEnding", id: "GoodEnding" },
            { scene: Endabgabe.NeutralEndings, name: "NeutralEndings", id: "NeutralEndings" },
            // Empty End Scene
            { id: "Empty Scene", scene: Endabgabe.Empty, name: "End" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Endabgabe.dataForSave = Endabgabe.ƒS.Progress.setData(Endabgabe.dataForSave, uiElement);
        // hide speech on title screen
        Endabgabe.ƒS.Speech.hide();
        // start the sequence
        Endabgabe.ƒS.Progress.go(scenes);
    }
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Endabgabe.Scene = Scene;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function Template() {
        console.log("- - - Scene X: Scenetitle - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0001: ""
            }
        };
        Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.home_table);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
    }
    Endabgabe.Template = Template;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function IgnoreTheCat() {
        console.log("- - - Scene 2.2: Ignoring the Cat - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0001: "You continue your trip. Grooving with the sound of the music coming through your headphones, you carry on – your destination: a forest, roughly two kilometers away from your home."
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.home_door);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        return "MeetingAgain";
    }
    Endabgabe.IgnoreTheCat = IgnoreTheCat;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    /*   function clickResponse(): void {
        console.log("AYO");
      } */
    async function MeetingAgain() {
        console.log("- - - Scene 3: Meeting again - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0001: "Just as you turn the corner onto a dirt road leading into the forest, the music suddenly stops. You forgot to charge your Bluetooth headphones and the battery is empty now.",
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
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.home_path);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0003);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.home_path_close);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0004);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.cat, text.Cat.T0005);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0006);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.surprised, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.cat, text.Cat.T0007);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0008);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.curious, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.cat, text.Cat.T0009);
        let scene = document.getElementById("append");
        let overlay = document.createElement("div");
        overlay.id = "overlay";
        scene.appendChild(overlay);
        let name = await Endabgabe.ƒS.Speech.getInput();
        Endabgabe.dataForSave.nameProtagonist = name;
        document.getElementById("append").children[0].remove();
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.cat, name + text.Cat.T0010);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0011);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0012);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0013);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0014);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.neutral, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0015);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0016);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.sad, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0017);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0018);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0019);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0020);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0021);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0022);
        Endabgabe.dataForSave.encounteredAnyAnimal = true;
        Endabgabe.dataForSave.encounteredCat = true;
        let travelWithCatAnswer = {
            accept: "Say Yes and take the cat with you",
            decline: "Decline and carry on alone"
        };
        let travelWithCat = await Endabgabe.ƒS.Menu.getInput(travelWithCatAnswer, "decision");
        switch (travelWithCat) {
            case travelWithCatAnswer.accept:
                Endabgabe.dataForSave.travelWithCat = true;
                return "TravelWithCat";
            case travelWithCatAnswer.decline:
                Endabgabe.dataForSave.travelWithCat = false;
                return "TravelWithoutCat";
        }
    }
    Endabgabe.MeetingAgain = MeetingAgain;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function PetTheCat() {
        console.log("- - - Scene 2.1: Petting the Cat - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0001: "You bend down to pet the cat, which now lays with its belly up in front of you. The first thing you notice however are the bright green eyes of the cat. They are so shiny, they look almost fake. It must be a special breed or something.",
                T0002: "After giving the cat a few belly rubs, you continue your trip. At last, you didn't even get three meters away from your front door. Grooving with the sound of the music coming through your headphones, you carry on – your destination: a forest, roughly two kilometers away from your home."
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.home_door);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
        return "MeetingAgain";
    }
    Endabgabe.PetTheCat = PetTheCat;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function ScareTheCat() {
        console.log("- - - Scene 2.3: Scaring the Cat - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0001: "With a “hush” and a sudden move of your hands, the cat gets scared and scurries away. With the cat gone, you continue your trip.",
                T0002: "Grooving with the sound of the music coming through your headphones, you carry on – your destination: a forest, roughly two kilometers away from your home."
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.home_door);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
        return "ForestAlone";
    }
    Endabgabe.ScareTheCat = ScareTheCat;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function TravelWithCat() {
        console.log("- - - Scene 4.1: Company - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0006: "From the way the cat is speaking, to their interests, it reminds you of a young child, talking about their dreams and things that make them happy.",
                T0009: "The cat playfully jumps around you, making it hard for you to keep walking in a straight line without stepping on it."
            },
            Protagonist: {
                T0001: "Well, sure, you can come with me.",
                T0003: "Uh, I was actually just going for a walk, nothing more. Just to clear my head. The past few weeks were pretty stressful, with exams and all that kind of stuff.",
                T0007: "So… you said you remember being a human? What was that like?"
            },
            Cat: {
                T0002: "Thank you so much! It was so boring out here, I'm glad you came along. So, where are we going?",
                T0004: "Oh exams? You're going to college? That's so cool, what do you study?",
                T0005: "Whoa, that sounds so interesting! I always wanted to be an astronaut! Going to space is one of my big dreams!",
                T0008: "It was really cool! Well, apart from all the school stuff I had to do. My mom told me to do my homework every day after school. And on the weekends, I always spent time with my friends. Now that I'm a small cat, I don't need to do homework anymore, so that's cool I guess."
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.home_path);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0003);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.curious, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0004);
        await Endabgabe.ƒS.Speech.getInput();
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0005);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0006);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0007);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.neutral, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0008);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0009);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        return "ForestWithCat";
    }
    Endabgabe.TravelWithCat = TravelWithCat;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function TravelWithoutCat() {
        console.log("- - - Scene 4.2: No Company - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0001: ""
            }
        };
        Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.home_table);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
    }
    Endabgabe.TravelWithoutCat = TravelWithoutCat;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function WakingUp() {
        console.log("- - - Scene 1: Waking Up - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0001: "You open your eyes. The sun is already up and shining through your window. It is warm outside and not a single cloud obstructs the beautiful blue sky on this summer morning.",
                T0002: "As you hear the birds chirping outside of your window, you begin to realize: the school year is over, all exams are behind you and you don't have any responsibilities for the next three months.",
                T0003: "Slowly you start getting out of bed and begin thinking about breakfast. As you arrive in the kitchen, you face the inevitable question: What am I going to eat?",
                T0004: "As you crunch away on your breakfast, you read a bit through the news of today. Besides the boring sports stuff and questionable claims of politicians, one headline caught your eye.",
                T0005: "“Mysterious dust raining on earth”",
                T0006: "“Huh, I guess the aliens started with their chemical warfare” you thought to yourself, before skimming through the article.",
                T0007: "Well, it might not have been a good idea to keep the window open all night, but well, what can you do. It is summer after all, and the temperature is getting higher every day.",
                T0008: "Since the weather hasn't been this good in days, you decide to go for a little walk after eating. After all, you spent the last 4 weeks doing nothing but studying all day. Some fresh air after all this time should be refreshing.",
                T0009: "What song do you want to listen to on your walk?",
                T0010: "As you put your shoes on, you notice a small cat through the small window in your front door. It seems to be snooping around in your front yard, which is nothing out of the ordinary. Cats aren't exactly a rare sight in this part of your town.",
                T0011: "You shut the door, turn around and see the cat curling up at your feet."
            }
        };
        let pages = [" - - - NEWSPAPER - - -", "- all the news you need for the day -", "", "", "Mysterious dust raining on earth", "",
            "Small particles raining from the sky this night…", "… scientists are not sure where if comes from…", "… no explanation what it is or what it does…",
            "… citizens are advised to keep windows closed…"];
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.home_table);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0003);
        let breakfastAnswer = {
            cereal: "Cereal with Milk",
            toast: "Toast",
            eggs: "Scrambled Eggs with Bacon"
        };
        await Endabgabe.ƒS.Menu.getInput(breakfastAnswer, "decision");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0004);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0005);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0006);
        let newspaper = "";
        for (let i = 0; i < pages.length; i++) {
            newspaper += pages[i] + "\n";
        }
        await Endabgabe.ƒS.Text.print(newspaper);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0007);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0008);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0009);
        let songAnswer = {
            song1: "Song 1",
            song2: "Song 2",
            song3: "Song 3"
        };
        let song = await Endabgabe.ƒS.Menu.getInput(songAnswer, "decision");
        switch (song) {
            case songAnswer.song1:
                // ƒS.Sound.play(sound.song1);
                break;
            case songAnswer.song2:
                // ƒS.Sound.play(sound.song2);
                break;
            case songAnswer.song3:
                // ƒS.Sound.play(sound.song3);
                break;
        }
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.home_door);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0010);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0011);
        let catAnswer = {
            pet: "Pet the Cat",
            scare: "Scare it away",
            ignore: "Ignore the Cat"
        };
        let cat = await Endabgabe.ƒS.Menu.getInput(catAnswer, "decision");
        switch (cat) {
            case catAnswer.pet:
                return "PetTheCat";
            case catAnswer.scare:
                return "ScareTheCat";
            case catAnswer.ignore:
                return "IgnoreTheCat";
        }
    }
    Endabgabe.WakingUp = WakingUp;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function BefriendFox() {
        if (Endabgabe.dataForSave.travelWithCat) {
            console.log("- - - Scene 6.5.1: Even more Friends - - -");
            let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
            gameMenu.open();
            let text = {
                Narrator: {
                    T0006: "While you think about how this cute fox will do anything bad to you, it crawled out of the bush and is now looking around anxiously.",
                    T0010: "You point towards an elderly couple, that just turned a corner onto a path leading away from you and the fox.",
                    T0020: "You notice the fox chuckling a bit after the last words left their mouth.",
                    T0028: "The fox stopped in the middle of the sentence, turning its head into the direction of a small family, that is approaching you.",
                    T0029: "Without any further more words spoken, and in the blink of an eye, the fox hushed back into the bushes.",
                    T0031: "A little girl is running towards you. In her arms is a small cat that seems familiar to you.",
                    T0034: "The girl lowers the cat on the ground, which quickly walked towards you and into your arms."
                },
                Protagonist: {
                    T0001: "Tommy is a friend of mine that I met earlier. It's a cat, but he ran away once we reached the forest.",
                    T0002: "For some reason, I can talk to some animals, which is really weird, because… that's not how it is supposed to be…?",
                    T0004: "What? Why should it be a trap? I don't want to hurt you or anything, I am just as confused as you are.",
                    T0007: "Hey, by the way, my name is " + Endabgabe.dataForSave.nameProtagonist + ", what abou-",
                    T0009: "What? Oh, you mean these people back there?",
                    T0011: "Yea, they aren't coming this way. Why are you so cautious?",
                    T0013: "Nice to meet you June. You didn't happen to see Tommy, or did you?",
                    T0015: "Yeah, I hope so.",
                    T0016: "Okay, just out of curiosity, were you also once a human?",
                    T0017: "Tommy told me that he was human once, but suddenly woke up as a cat?",
                    T0021: "Really? Is there nothing you miss?",
                    T0026: "I'm so sorry that this all happened to you. But, you know what they say, it always gets better, and look at you now!",
                    T0032: "Oh, Tommy, there you are! I was looking all over for you!",
                    T0035: "Thank you so much for finding him! Have a great day!",
                    T0037: "Why did you just run off? It is too dangerous here, there are so many wild animals around that could hurt you!",
                    T0039: "…no I haven't, I think I am a bit too old for that kind of stuff.",
                    T0040: "Come on, let's head to the lake, so you can drink some water and refresh yourself.",
                    T0042: "Oh, I also met somebody. June, a fox. Apparently, you aren't the only animal I can talk to."
                },
                Fox: {
                    T0003: "So, you are telling me there are more animals that can talk? Is this not a trap from you?",
                    T0005: "Hmm. Alright, I trust you. But I swear, if you aren't as nice as you seem right now, bad things will happen to you.",
                    T0008: "Shh, I think somebody is coming, don't move!",
                    T0012: "I am always cautious, you never know who is out to harm you, you know. And to answer your question, my name is June.",
                    T0014: "No, I didn't, sorry. But I am sure you will find him soon enough.",
                    T0018: "Yes, I was a human. Until a few days ago. But to be honest, I almost prefer being a fox.",
                    T0019: "I have all the things I never had back when I was human – peace, silence, and a cute appearance.",
                    T0022: "Okay, you know what? My life wasn't the best back then. The final year of school was pretty miserable.",
                    T0023: "People didn't like me for who I am. And just because of that, they decide to make your life worse. Humans are disgusting.",
                    T0024: "The only thing I really miss is my music collection. It helped me a lot when dealing with all that stuff.",
                    T0025: "But… what am I even saying. I can accept living without it. Now I am finally happy. Well, almost, but better than before.",
                    T0027: "Yeah, I guess you are right. Actually, I-"
                },
                Cat: {
                    T0036: "*panting* that was very fun… but… the squirrel… it was too fast…",
                    T0038: "I'm sorry, but… chasing squirrels is fun! Have you tried it?",
                    T0041: "Yes, the lake! I definitely need something to drink.",
                    T0043: "Yes yes, very cool, now can we get going please, I am SO thirsty."
                },
                Girl: {
                    T0030: "Hey, look, we found a cat! Isn't it cute? Do you want to pet it?",
                    T0033: "It is your cat? Here you go! Goodbye small cat! I love you!"
                }
            };
            Endabgabe.ƒS.Speech.hide();
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.cat_search_bush);
            await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0001);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0002);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.fox, text.Fox.T0003);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0004);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.fox, text.Fox.T0005);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0006);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.uncomfortable, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0007);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.fox, text.Fox.T0008);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0009);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0010);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0011);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.fox, text.Fox.T0012);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0013);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0014);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.concerned, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0015);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0016);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0017);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.neutral, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0018);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0019);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0020);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0021);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.uncomfortable, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0022);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0023);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0024);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0025);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0026);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0027);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0028);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.concerned, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0029);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.forest_path_into);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.girl, text.Girl.T0030);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0031);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0032);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.girl, text.Girl.T0033);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0034);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0035);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0036);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0037);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0038);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0039);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0040);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.cat, text.Cat.T0041);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0042);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.cat, text.Cat.T0043);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            Endabgabe.dataForSave.encounteredAnyAnimal = true;
            Endabgabe.dataForSave.encounteredFox = true;
            return "EnterLake";
        }
        else {
            console.log("- - - Scene 6.5.3: New Friends - - -");
            let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
            gameMenu.open();
            let text = {
                Narrator: {
                    T0006: "While you think about how this cute fox will do anything bad to you, it crawled out of the bush and is now looking around anxiously.",
                    T0010: "You point towards an elderly couple, that just turned a corner onto a path leading away from you and the fox.",
                    T0020: "You notice the fox chuckling a bit after the last words left their mouth.",
                    T0031: "The fox smiles at you, turns around and vanishes behind the leaves.",
                    T0032: "You look around and sigh.",
                    T0034: "Lost in your thoughts, you continue on your way deeper into the forest."
                },
                Protagonist: {
                    T0001: "I am sorry, I didn't mean to scare you. I thought you were the cat I met earlier.",
                    T0002: "For some reason, I can talk to some animals, which is really weird, because… that's not how it is supposed to be…?",
                    T0004: "What? Why should it be a trap? I don't want to hurt you or anything, I am just as confused as you are.",
                    T0007: "Hey, by the way, my name is " + Endabgabe.dataForSave.nameProtagonist + ", what abou-",
                    T0009: "What? Oh, you mean these people back there?",
                    T0011: "Yea, they aren't coming this way. Why are you so cautious?",
                    T0013: "Nice to meet you June. I didn't expect another animal that I can talk with.",
                    T0015: "At this point, I wouldn't even be surprised.",
                    T0016: "Okay, just out of curiosity, were you also once a human?",
                    T0017: "Tommy, the cat, told me that he was human once, but one day he suddenly woke up as a cat?",
                    T0021: "Really? Is there nothing you miss?",
                    T0026: "I'm so sorry that this all happened to you. But, you know what they say, it always gets better, and look at you now!",
                    T0030: "It was nice meeting you too. Hope you find something good to eat.",
                    T0033: "What is even happening today?"
                },
                Fox: {
                    T0003: "So, you are telling me there are more animals that can talk? Is this not a trap from you?",
                    T0005: "Hmm. Alright, I trust you. But I swear, if you aren't as nice as you seem right now, bad things will happen to you.",
                    T0008: "Shh, I think somebody is coming, don't move!",
                    T0012: "I am always cautious, you never know who is out to harm you, you know. And to answer your question, my name is June.",
                    T0014: "Who knows, maybe you will find even more?",
                    T0018: "Yes, I was a human. Until a few days ago. But to be honest, I almost prefer being a fox.",
                    T0019: "I have all the things I never had back when I was human – peace, silence, and a cute appearance.",
                    T0022: "Okay, you know what? My life wasn't the best back then. The final year of school was pretty miserable.",
                    T0023: "People didn't like me for who I am. And just because of that, they decide to make your life worse. Humans are disgusting.",
                    T0024: "The only thing I really miss is my music collection. It helped me a lot when dealing with all that stuff.",
                    T0025: "But… what am I even saying. I can accept living without it. Now I am finally happy. Well, almost, but better than before.",
                    T0027: "Yeah, I guess you are right.",
                    T0028: "You know what? It was nice meeting you. I am a bit hungry now though, so I'll better go and find something to eat.",
                    T0029: "I hope I'll see you again."
                }
            };
            Endabgabe.ƒS.Speech.hide();
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.cat_search_bush);
            await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0001);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0002);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.fox, text.Fox.T0003);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0004);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.fox, text.Fox.T0005);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0006);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.uncomfortable, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0007);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.fox, text.Fox.T0008);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0009);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0010);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0011);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.fox, text.Fox.T0012);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0013);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0014);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.concerned, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0015);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0016);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0017);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.neutral, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0018);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0019);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0020);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0021);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.uncomfortable, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0022);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0023);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0024);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0025);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0026);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0027);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0028);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0029);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0030);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0031);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.forest_path_into);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0032);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0033);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0034);
            Endabgabe.dataForSave.encounteredAnyAnimal = true;
            Endabgabe.dataForSave.encounteredFox = true;
            return "DeepForestAlone"; // TODO: Deep Forest
        }
    }
    Endabgabe.BefriendFox = BefriendFox;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function BefriendFoxFirstEncounter() {
        console.log("- - - Scene 6.5.4: New unusual Friends - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0006: "You step back, still rather confused from the whole situation.",
                T0014: "You notice the fox chuckling a bit after the last words left their mouth.",
                T0025: "The fox smiles at you, turns around and vanishes behind the leaves.",
                T0026: "You look around and sigh.",
                T0028: "Lost in your thoughts, you continue on your way deeper into the forest."
            },
            Protagonist: {
                T0001: "Hey… I… what?",
                T0003: "Umm, my name is " + Endabgabe.dataForSave.nameProtagonist + ". Who are you? And why can you talk? Is this some sort of prank?",
                T0005: "Oh, sure.",
                T0008: "Well, you are the first fox that can understand what I am saying. I am still not sure if this isn't a prank. Am I on a TV show?",
                T0010: "Excuse me, what? You *became* a fox? Just like that? What happened?",
                T0012: "What? Why? Being a human is amazing. You have so much to do, endless possibilities, great people around you…",
                T0015: "Really? Is there nothing you miss?",
                T0020: "I'm so sorry that this all happened to you. But, you know what they say, it always gets better, and look at you now!",
                T0024: "It was nice meeting you too. Hope you find something good to eat.",
                T0027: "What is even happening today?"
            },
            Fox: {
                T0002: "Who are you?",
                T0004: "Step back, you are too close.",
                T0007: "My name is June. You are the first person that can actually understand what I am saying.",
                T0009: "What, no? Listen, I have been looking for somebody that can understand me ever since I've became a fox. And finally, I have found somebody.",
                T0011: "It's a long story. But yes, I was like you. I just finished school actually. But I have to admit, living here is way better than anything I have experienced in my previous life.",
                T0013: "Yes, but now I have all the things I never had back when I was human – peace, silence, and a cute appearance.",
                T0016: "Okay, you know what? My life wasn't the best back then. The final year of school was pretty miserable.",
                T0017: "People didn't like me for who I am. And just because of that, they decide to make your life worse. Humans are disgusting.",
                T0018: "The only thing I really miss is my music collection. It helped me a lot when dealing with all that stuff.",
                T0019: "But… what am I even saying. I can accept living without it. Now I am finally happy. Well, almost, but better than before.",
                T0021: "Yeah, I guess you are right.",
                T0022: "You know what? It was nice meeting you. I am a bit hungry now though, so I'll better go and find something to eat.",
                T0023: "I hope I'll see you again."
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.cat_search_bush);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.fox, text.Fox.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0003);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.fox, text.Fox.T0004);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0005);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0006);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.uncomfortable, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.fox, text.Fox.T0007);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0008);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0009);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0010);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0011);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0012);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0013);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0014);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0015);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.uncomfortable, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0016);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0017);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0018);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.neutral, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0019);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0020);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0021);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0022);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0023);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0024);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0025);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0026);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0027);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0028);
        Endabgabe.dataForSave.encounteredAnyAnimal = true;
        Endabgabe.dataForSave.encounteredFox = true;
        return "DeepForestAlone";
    }
    Endabgabe.BefriendFoxFirstEncounter = BefriendFoxFirstEncounter;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function DontBefriendFox() {
        if (Endabgabe.dataForSave.travelWithCat) {
            console.log("- - - Scene 6.5.2: Even more Friends? - - -");
            let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
            gameMenu.open();
            let text = {
                Narrator: {
                    T0002: "The fox looks at you suspiciously, almost as if it knows that you are hiding something",
                    T0008: "You take a step back, snapping a small twig in half, that was laying on the floor.",
                    T0009: "The fox flinches from the sudden noise.",
                    T0012: "The fox stopped in the middle of the sentence, turning its head into the direction of a small family, that is approaching you.",
                    T0013: "Without any further more words spoken, and in the blink of an eye, the fox hushed back into the bushes.",
                    T0015: "A little girl is running towards you. In her arms is a small cat that seems familiar to you.",
                    T0018: "The girl lowers the cat on the ground, which quickly walked towards you and into your arms."
                },
                Protagonist: {
                    T0001: "Oh, nothing. I'm here with a friend of mine, we are playing hide and seek.",
                    T0003: "But what are you doing here?",
                    T0005: "Well… I guess you are correct. By the way, my name is " + Endabgabe.dataForSave.nameProtagonist + ", what about you?",
                    T0007: "Uh, yes, sure.",
                    T0010: "Oh, sorry, didn't mean to scare you.",
                    T0016: "Oh, Tommy, there you are! I was looking all over for you!",
                    T0019: "Thank you so much for finding him! Have a great day!",
                    T0021: "Why did you just run off? It is too dangerous here, there are so many wild animals around that could hurt you!",
                    T0023: "…no I haven't, I think I am a bit too old for that kind of stuff.",
                    T0024: "Come on, let's head to the lake, so you can drink some water and refresh yourself.",
                    T0026: "Oh, I also met somebody. June, a fox. Apparently, you aren't the only animal I can talk to."
                },
                Fox: {
                    T0004: "I am a fox, I live here, why do you think I hide under bushes?",
                    T0006: "June. Now, step back, you are way too close.",
                    T0011: "Can you be more considerate? Stop being to reckless, you might as well-"
                },
                Cat: {
                    T0020: "*panting* that was very fun… but… the squirrel… it was too fast…",
                    T0022: "I'm sorry, but… chasing squirrels is fun! Have you tried it?",
                    T0025: "Yes, the lake! I definitely need something to drink.",
                    T0027: "Yes yes, very cool, now can we get going please, I am SO thirsty."
                },
                Girl: {
                    T0014: "Hey, look, we found a cat! Isn't it cute? Do you want to pet it?",
                    T0017: "It is your cat? Here you go! Goodbye small cat! I love you!"
                }
            };
            Endabgabe.ƒS.Speech.hide();
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.cat_search_bush);
            await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0001);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0003);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.fox, text.Fox.T0004);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0005);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.fox, text.Fox.T0006);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.uncomfortable, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0007);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0008);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0009);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0010);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0011);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0012);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0013);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.concerned, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.girl, text.Girl.T0014);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0015);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0016);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.girl, text.Girl.T0017);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0018);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0019);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0020);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0021);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0022);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0023);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0024);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.cat, text.Cat.T0025);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0026);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.cat, text.Cat.T0027);
            Endabgabe.dataForSave.encounteredAnyAnimal = true;
            Endabgabe.dataForSave.encounteredFox = true;
            return "EnterLake";
        }
    }
    Endabgabe.DontBefriendFox = DontBefriendFox;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function ForestAlone() {
        console.log("- - - Scene 5.2: The Forest and You - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0001: "You reach the beginning of the forest. Large trees grow left and right of the small road that leads deeper into the forest.",
                T0002: "The large shadows that are casted from the treetops provide a cool shade despite the sun being high up in the sky.",
                T0003: "As you hear the birds singing you remember why you used to come here so often. This forest seems so magical, but you can't exactly explain why.",
                T0004: "You can see a squirrel, peacefully collecting some nuts near an old tree stump. As soon as it sees you, it freezes and watches you carefully.",
                T0005: "You continue walking, heading deeper into the forest. In the distance, you can see a deer, staring at you. As you get closer, it hurries away behind some bushes.",
                T0006: "After a few hundred meters, you reach a fork in the road.",
                T0007: "The left path leads further into the forest. The right path seems to lead towards a small castle, near a little lake. Where do you want to go?"
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.forest_path_into);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0003);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0004);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0005);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.split_castle_forest);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0006);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0007);
        let forestSplitAnswer = {
            forest: "Left Path, into the forest",
            lake: "Right path, towards the castle"
        };
        let forestSplit = await Endabgabe.ƒS.Menu.getInput(forestSplitAnswer, "decision");
        switch (forestSplit) {
            case forestSplitAnswer.forest:
                return "MeetFox";
            case forestSplitAnswer.lake:
                return "EnterLake";
        }
    }
    Endabgabe.ForestAlone = ForestAlone;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function ForestWithCat() {
        console.log("- - - Scene 5.2: The Forest and its Friends - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0001: "You reach the beginning of the forest. Large trees grow left and right of the small road that leads deeper into the forest.",
                T0002: "The large shadows that are casted from the treetops provide a cool shade despite the sun being high up in the sky.",
                T0003: "As you hear the birds singing you remember why you used to come here so often. This forest seems so magical, but you can't exactly explain why.",
                T0005: "As soon as those words were spoken, the cat already took off, chasing a squirrel up a tree.",
                T0006: "You continue walking, heading deeper into the forest. In the distance, you can see a deer, staring at you. As you get closer, it hurries away behind some bushes.",
                T0008: "It seems like Tommy got so distracted by the squirrel that you lost them.",
                T0009: "You stop and turn around. What would be the best place to look for a playful cat in this forest?",
                T0010: "As you crouch through some low hanging branches and stumble onto the fields, you realize just how hot it is already.",
                T0011: "You forgot to bring some water and you also don't have any sunglasses, which makes the search on the open field more difficult than you thought.",
                T0013: "Just shouting these words already made you sweat. Before any more words leave your mouth, you begin to realize, that a cat wouldn't be here.",
                T0014: "If cats enjoy one thing, then it is being comfortable, and a field with no shadows in 30°C is definitely not a place to be comfortable at, so you decide to head back."
            },
            Cat: {
                T0004: "It is so much colder here than back there, I love it! The past days have been so hot, I have just been hiding inside bushes and trees to avoid the heat."
            },
            Protagonist: {
                T0007: "Tommy, where are you?",
                T0012: "Tommy? Stop hiding!"
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.forest_path_into);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0003);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0004);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0005);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0006);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0007);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0008);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0009);
        let lookForCatAnswer = {
            forest: "Deeper in the forest",
            field: "On the open fields behind the trees",
            bush: "Underneath some bushes next to the path"
        };
        let lookForCat = await Endabgabe.ƒS.Menu.getInput(lookForCatAnswer, "decision");
        // delete lookForCatAnswer.forest löscht die sachen aus der decision
        switch (lookForCat) {
            case lookForCatAnswer.forest:
                return "IntoDeepForest";
            case lookForCatAnswer.field:
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.cat_search_field);
                await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0010);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0011);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0012);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0013);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0014);
                let lookForCatAgainAnswer = {
                    forest: "Deeper in the forest",
                    bush: "Underneath some bushes next to the path"
                };
                let lookForCatAgain = await Endabgabe.ƒS.Menu.getInput(lookForCatAgainAnswer, "decision");
                switch (lookForCatAgain) {
                    case lookForCatAgainAnswer.forest:
                        return "IntoDeepForest";
                    case lookForCatAgainAnswer.bush:
                        return "MeetFox";
                }
            case lookForCatAnswer.bush:
                return "MeetFox";
        }
    }
    Endabgabe.ForestWithCat = ForestWithCat;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function IntoDeepForest() {
        console.log("- - - Scene 6.1: Into the deep forest - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0001: "You didn't think that a cat this small can run all the way into the forest, especially after not keeping an eye on it for less than 3 minutes.",
                T0003: "You can hear a feint rustling of leaves and before you knew it, the cat jumps out of a small tree just in front of you.",
                T0008: "The cat jumps around playfully, as if it wants to taunt you.",
                T0011: "Even though you can't see the cats face, you can sense that it is disappointed in you."
            },
            Protagonist: {
                T0002: "Hey, Tommy, where are you? You can stop chasing the squirrel now!",
                T0004: "There you are! I thought you went way deeper into the forest. Don't take off again, this is too dangerous, you don't know what lives in there!",
                T0006: "Great, but imagine you got lost or something. I wouldn't be able to find you.",
                T0009: "Yes. At last, you are a special cat. I don't want to lose a pet that can talk, you know.",
                T0012: "Of course we are friends! I just have to get used to you not being a normal cat, you know?",
                T0013: "Hey, you know what? Let's go this way, in the forest are more squirrels for you to chase! But don't run too far off again!"
            },
            Cat: {
                T0005: "Sorry… But the squirrel was so fast and I almost caught it…",
                T0007: "Hehe, were you worried about me?",
                T0010: "Oh wow, so I am just a pet for you? I thought we were friends…",
                T0014: "Yes!! More squirrels!"
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.cat_search_forest);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0003);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.sad, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0004);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0005);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0006);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0007);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0008);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0009);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.sad, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0010);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0011);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0012);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0013);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0014);
        return "CatBackstoryForest";
    }
    Endabgabe.IntoDeepForest = IntoDeepForest;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function MeetFox() {
        if (!Endabgabe.dataForSave.travelWithCat) {
            console.log("- - - Scene 6.3.2: Cold Blue Eyes [No Cat] - - -");
            let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
            gameMenu.open();
            let text = {
                Narrator: {
                    T0001: "As you turn the corner, you notice a pair of bright blue eyes in one of the bushes a few meters away from you.",
                    T0003: "You crouch down and lift up a few branches. The blue eyes, that you saw earlier, watching your every move.",
                    T0004: "As you stretch out your arm to brush away some leaves, you suddenly hear a scream right in front of you.",
                    T0005: "Reflexively, you flinch and step back.",
                    T0010: "Thoroughly confused, you stand up. Suddenly you remember the eyes. The cat also had those shiny eyes, but were they green?",
                    T0013: "You hear the sound of cracking of branches and rustling of leaves.",
                    T0014: "Slowly, you can see the eyes moving closer, and a scared fox appears from underneath the bush."
                },
                Protagonist: {
                    T0002: "Huh, is this the cat that I saw earlier?",
                    T0006: "Sorry, I didn't mean to…",
                    T0008: "What? What are you talking about?",
                    T0012: "I won't hurt you, I promise. Why would I even do that?"
                },
                Fox: {
                    T0007: "Don't come closer, or else I will bite you!",
                    T0009: "I said what I said, don't come closer. Step back!",
                    T0011: "I will come out, but only if you swear that you will not hurt me."
                }
            };
            Endabgabe.ƒS.Speech.hide();
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.cat_search_bush);
            await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0002);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0003);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0004);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0005);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0006);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.questionmark, text.Fox.T0007);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0008);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.questionmark, text.Fox.T0009);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0010);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.questionmark, text.Fox.T0011);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0012);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0013);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0014);
            if (!Endabgabe.dataForSave.encounteredCat) {
                return "BefriendFoxFirstEncounter";
            }
            else {
                return "BefriendFox";
            }
        }
        else {
            console.log("- - - Scene 6.3.1: Cold Blue Eyes - - -");
            let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
            gameMenu.open();
            let text = {
                Narrator: {
                    T0001: "As you turn the corner, you notice a pair of bright blue eyes in one of the bushes a few meters away from you.",
                    T0003: "You crouch down and lift up a few branches. The blue eyes, that you saw earlier, watching your every move.",
                    T0004: "As you stretch out your arm to brush away some leaves, you suddenly hear a scream right in front of you.",
                    T0005: "Reflexively, you flinch and step back.",
                    T0010: "Thoroughly confused, you stand up. Suddenly you remember the eyes. The cat also had those shiny eyes, but were they green?",
                    T0013: "You hear the sound of cracking of branches and rustling of leaves.",
                    T0014: "Slowly, you can see the eyes moving closer, and a scared fox appears from underneath the bush."
                },
                Protagonist: {
                    T0002: "Oh, there are you. Why did you want to come with me if you just disappear instantly?",
                    T0006: "Sorry, I didn't mean to…",
                    T0008: "What? It's me, " + Endabgabe.dataForSave.nameProtagonist + ". What are you talking about Tommy?",
                    T0012: "I won't hurt you, I promise. Why would I even do that?",
                    T0015: "Oh, you really aren't Tommy. Uhh… nice to meet you…?"
                },
                Fox: {
                    T0007: "Don't come closer, or else I will bite you!",
                    T0009: "I don't know what you mean, I don't know anybody named Tommy.",
                    T0011: "I will come out, but only if you swear that you will not hurt me.",
                    T0016: "Don't step closer. Who is Tommy?"
                }
            };
            Endabgabe.ƒS.Speech.hide();
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.cat_search_bush);
            await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0002);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0003);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0004);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0005);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0006);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.questionmark, text.Fox.T0007);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0008);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.questionmark, text.Fox.T0009);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0010);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.questionmark, text.Fox.T0011);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0012);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0013);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0014);
            let tellFoxAboutCatAnswer = {
                tellFox: "Tell the fox about your encounter with the cat",
                dontTellFox: "Keep the cat a secret for now"
            };
            let tellFoxAboutCat = await Endabgabe.ƒS.Menu.getInput(tellFoxAboutCatAnswer, "decision");
            switch (tellFoxAboutCat) {
                case tellFoxAboutCatAnswer.tellFox:
                    return "BefriendFox";
                case tellFoxAboutCatAnswer.dontTellFox:
                    return "DontBefriendFox";
            }
        }
    }
    Endabgabe.MeetFox = MeetFox;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function EnterLake() {
        console.log("- - - Scene 7: Refreshment - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0001: "After a couple minutes of walking, you reach your destination. While everybody says it is a lake, it is actually more like a big pond.",
                T0002: "On the left side is a path that leads around the lake.",
                T0003: "On the right side you can find a short bridge, that leads to the courtyard of the so-called castle. Similar to the lake, it is actually just a rather big mansion.",
                T0005: "The cat jumps from your arms to the ground and runs towards the edge of the lake. From the distance you hear intense slurping."
            },
            Protagonist: {
                T0004: "Alright, there we are, get down and drink something!"
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.lake_entrance);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0003);
        if (Endabgabe.dataForSave.travelWithCat) {
            // ƒS.Speech.setTickerDelays(150);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0004);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0005);
        }
        let examineAnswer = {
            water: "Check out the water",
            castle: "Check out the castle"
        };
        let examine = await Endabgabe.ƒS.Menu.getInput(examineAnswer, "decision");
        switch (examine) {
            case examineAnswer.water:
                return "ExamineWater";
            case examineAnswer.castle:
                return "ExamineCastle";
        }
    }
    Endabgabe.EnterLake = EnterLake;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function ExamineCastle() {
        console.log("- - - Scene 9: A small kingdom - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
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
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.lake_castle);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0003);
        let repositionLakeAnswer = {
            climbRocks: "Climb some rocks to get to a higher position",
            stepOnBridge: "Step on the bridge for a better angle"
        };
        let repositionLake = await Endabgabe.ƒS.Menu.getInput(repositionLakeAnswer, "decision");
        switch (repositionLake) {
            case repositionLakeAnswer.climbRocks:
                console.log("- - - Scene 9.1: Higher, higher! - - -");
                Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.lake_rocks);
                await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0004);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0005);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0006);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0007);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0008);
                let pickRocksUpAnswer = {
                    pickUp: "Pick them up and clean up the mess",
                    leave: "Leave them be"
                };
                let pickRocksUp = await Endabgabe.ƒS.Menu.getInput(pickRocksUpAnswer, "decision");
                switch (pickRocksUp) {
                    case pickRocksUpAnswer.pickUp:
                        return "MeetTurtle";
                    case pickRocksUpAnswer.leave:
                        console.log("- - - Scene 11: They are just stones - - -");
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0018);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0019);
                        Endabgabe.ƒS.Speech.hide();
                        await Endabgabe.ƒS.Location.show(Endabgabe.locations.lake_bridge);
                        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0020);
                        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
                        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
                        await Endabgabe.ƒS.update(0.3);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0021);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0022);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0023);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0024);
                        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
                        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.angry, Endabgabe.ƒS.positions.bottomcenter);
                        await Endabgabe.ƒS.update(0.3);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0025);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0026);
                        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
                        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
                        await Endabgabe.ƒS.update(0.3);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0027);
                        return "CatBackstory";
                }
            case repositionLakeAnswer.stepOnBridge:
                console.log("- - - Scene 9.2: Bridge - - -");
                Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.lake_bridge);
                await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0009);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0010);
                await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.neutral, Endabgabe.ƒS.positions.bottomcenter); // TODO: Add yawning pose
                await Endabgabe.ƒS.update(0.3);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0011);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0012);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0013);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0014);
                await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.angry, Endabgabe.ƒS.positions.bottomcenter);
                await Endabgabe.ƒS.update(0.3);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0015);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0016);
                await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
                await Endabgabe.ƒS.update(0.3);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0017);
                return "CatBackstory";
        }
    }
    Endabgabe.ExamineCastle = ExamineCastle;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function ExamineWater() {
        console.log("- - - Scene 8: Think of the turtles! - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0001: "You walk along the edge of the lake. Since it has been this warm for a couple of days already, you can see and hear the mosquitos buzzing everywhere.",
                T0002: "Of course, you forgot the bring any kind of protection.",
                T0003: "You spot a pile of indistinguishable things a few meters away in a shallower spot of the lake. A strong smell comes from there that really messes with your head.",
                T0004: "As you step closer to the origin of the smell, you see where it comes from.",
                T0005: "Somebody has dumped a ton of garbage into the lake. You see a lot of things floating around, all of which definitely do not belong into a body of water.",
                T0006: "Some things peak your curiosity.",
                T0007: "The bag is heavier than you thought. Surprisingly, it hasn't been in the water at all. Whoever dumped everything here, was probably too stupid to litter correctly.",
                T0008: "Inside the bag is an old Walkman, as well as a couple of old cassette tapes. You remember most of them from your childhood.",
                T0010: "You fish one of the bottles out of the water.",
                T0011: "As soon as you hold it in your hand, you realize that this is where the horrible smell came from. Out of reflex, you throw the disgusting bottle back into the water.",
                T0012: "Some things are better left untouched.",
                T0013: "With the horrid smell still stuck in your nose, you make your way back to the castle."
            },
            Protagonist: {
                T0009: "Oh wow, these albums look pretty new, some are still sealed. This is too cool to throw away. But… would it be stealing if I just took it?"
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.lake);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0003);
        let examineLakeSmellAnswer = {
            examineSmell: "Examine the smell",
            goBack: "Go back, since it might be dangerous"
        };
        let examineLakeSmell = await Endabgabe.ƒS.Menu.getInput(examineLakeSmellAnswer, "decision");
        if (examineLakeSmell == examineLakeSmellAnswer.examineSmell) {
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.lake_polluted_water);
            await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0004);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0005);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0006);
            let examineLakeItemsAnswer = {
                grabBag: "Grab a small bag lying next to the water",
                inspectBottle: "Inspect one of the bottles floating on the surface",
                dontTouch: "Don't touch anything, as it is unhygenic"
            };
            let examineLakeItems = await Endabgabe.ƒS.Menu.getInput(examineLakeItemsAnswer);
            switch (examineLakeItems) {
                case examineLakeItemsAnswer.grabBag:
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0007);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0008);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0009);
                    let takeBagAnswer = {
                        takeBag: "Take the bag with you",
                        leaveBag: "Leave it there, you are no thief"
                    };
                    let takeBag = await Endabgabe.ƒS.Menu.getInput(takeBagAnswer);
                    if (takeBag == takeBagAnswer.takeBag) {
                        Endabgabe.ƒS.Inventory.add(Endabgabe.items.bag);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0013);
                    }
                    else {
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0013);
                    }
                    return "ExamineCastle";
                case examineLakeItemsAnswer.inspectBottle:
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0010);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0011);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0012);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0013);
                    return "ExamineCastle";
                case examineLakeItemsAnswer.dontTouch:
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0013);
                    return "ExamineCastle";
            }
        }
        else {
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0013);
            return "ExamineCastle";
        }
    }
    Endabgabe.ExamineWater = ExamineWater;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function Interrupted() {
        console.log("- - - Scene 10.2: Interrupted - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0004: "You put the turtle down on the ground and without continuing his story any further, the turtle turned around and swam away.",
                T0005: "Feeling a bit guilty and confused, you call Tommy and continue your walk along the path next to the lake, leading deeper into the forest.",
                T0006: "Feeling a bit guilty and confused, you continue your walk along the path next to the lake, leading deeper into the forest."
            },
            Protagonist: {
                T0001: "Hey, uh, that's a great story, but I kinda have to get going now…",
                T0003: "Wait, I'm sorry…"
            },
            Turtle: {
                T0002: "Huh, you young people are all so stressed and entitled. Back in my days we listened to the elderly… So rude… Let me down, right now."
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.lake_rocks);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        Endabgabe.ƒS.Speech.setTickerDelays(50);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0001);
        Endabgabe.ƒS.Speech.setTickerDelays(150);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.richard, text.Turtle.T0002);
        Endabgabe.ƒS.Speech.setTickerDelays(50);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0003);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0004);
        if (Endabgabe.dataForSave.travelWithCat) {
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0005);
            return "CatBackstory";
        }
        else {
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0006);
            return "DeepForestAlone";
        }
    }
    Endabgabe.Interrupted = Interrupted;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function MeetTurtle() {
        console.log("- - - Scene 10: It's not just a boulder - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0002: "Slowly starting to sweat in the heat, you begin gathering the stones and stacking them on top of each other again.",
                T0003: "In the corner of your eye you notice a bigger, oddly shaped stone. Has it been there before?",
                T0005: "As you lift it up, you notice how heavy it is, when suddenly…",
                T0008: "You freeze. Have you gone insane or did this rock just talk to you?",
                T0010: "You turn the stone around and you see a small head with bright yellow eyes poking out of the presumed rock. You just picked up a turtle.",
            },
            Protagonist: {
                T0001: "Well, there is nobody that cleans up nature, so I guess, I have to do this.",
                T0004: "Okay, this is the last one, here we go…",
                T0007: "What?",
                T0011: "Well… you really did scare me. I'm sorry, I didn't want to… take you?",
                T0013: "Nice to meet you too, my name is " + Endabgabe.dataForSave.nameProtagonist + ". Have you been lying there all this time?"
            },
            Turtle: {
                T0006: "Well, hello there.",
                T0009: "Oh, apologies, I didn't want to scare you. People tend to overlook me, hahaha.",
                T0012: "Haha, no problem youngling. I've seen a lot of rude people in my life and you are certainly not one of them. My name is Richard, pleased to meet you."
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.lake_rocks);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0003);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0004);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0005);
        Endabgabe.ƒS.Speech.setTickerDelays(150);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.questionmark, text.Turtle.T0006);
        Endabgabe.ƒS.Speech.setTickerDelays(50);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0007);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0008);
        Endabgabe.ƒS.Speech.setTickerDelays(150);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.questionmark, text.Turtle.T0009);
        Endabgabe.ƒS.Speech.setTickerDelays(50);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0010);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0011);
        Endabgabe.ƒS.Speech.setTickerDelays(150);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.questionmark, text.Turtle.T0012);
        Endabgabe.ƒS.Speech.setTickerDelays(50);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0013);
        return "TurtleStory";
    }
    Endabgabe.MeetTurtle = MeetTurtle;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function TurtleStory() {
        console.log("- - - Scene 10.1: Long Time - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
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
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.lake_rocks);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        Endabgabe.ƒS.Speech.setTickerDelays(150);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.richard, text.Turtle.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.richard, text.Turtle.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.richard, text.Turtle.T0003);
        let interrupt = await Endabgabe.ƒS.Menu.getInput(interruptAnswer, "decision");
        if (interrupt == interruptAnswer.interrupt) {
            return "Interrupted";
        }
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.richard, text.Turtle.T0004);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.richard, text.Turtle.T0005);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.richard, text.Turtle.T0006);
        interrupt = await Endabgabe.ƒS.Menu.getInput(interruptAnswer, "decision");
        if (interrupt == interruptAnswer.interrupt) {
            return "Interrupted";
        }
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.richard, text.Turtle.T0007);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.richard, text.Turtle.T0008);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.richard, text.Turtle.T0009);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.richard, text.Turtle.T0010);
        interrupt = await Endabgabe.ƒS.Menu.getInput(interruptAnswer, "decision");
        if (interrupt == interruptAnswer.interrupt) {
            return "Interrupted";
        }
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.richard, text.Turtle.T0011);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.richard, text.Turtle.T0012);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.richard, text.Turtle.T0013);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.richard, text.Turtle.T0014);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.richard, text.Turtle.T0015);
        Endabgabe.ƒS.Speech.setTickerDelays(50);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0016);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0017);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0018);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0019);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0020);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0021);
        Endabgabe.dataForSave.freedTurtle = true;
        Endabgabe.dataForSave.freedAnimals++;
        if (Endabgabe.dataForSave.travelWithCat)
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0022);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0023);
    }
    Endabgabe.TurtleStory = TurtleStory;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function BridgeAlone() {
        console.log("- - - Scene 18: Watch your step! - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0001: "You cross the bridge and reach a dirt path. After a couple of meters, more light shines through the trees, until you step out of the forest.",
                T0002: "You are now on the side of the field, at the edge of the forest. The sun is still shining, but it isn't as hot as when you entered the forest.",
                T0003: "Gazing over the fields, you realize how far you can actually see. You could run for hours and see nothing but grass, some trees and the occasional animal.",
                T0004: "You start walking along the dirt path, lost in your thoughts, not noticing the huge tree root sticking out of the ground.",
                T0005: "Well, that is until you trip over it, resulting in you falling face first on the ground.",
                T0007: "As you lift your head to look around, you notice two blue eyes staring at you from inside the bush you just landed next to.",
                T0009: "The eyes come closer, still staring at you, until a fox appears out of the bush."
            },
            Protagonist: {
                T0006: "Ugh… what was that?",
                T0008: "…hello?"
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.deep_forest_split_bridge);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0003);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0004);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0005);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0006);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0007);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0008);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0009);
        return "EncounterFoxAgainNoCat";
    }
    Endabgabe.BridgeAlone = BridgeAlone;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function CatBackstory() {
        console.log("- - - Scene 12.1: What's up with the cat? - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0001: "As you walk deeper and deeper into the forest, you start to be more and more curious",
                T0010: "The cat hisses, as if it is still angry about the failed test.",
                T0017: "The cat slowed down, jumped, and climbed onto your shoulder.",
                T0020: "You reach the end of the path.",
                T0021: "To your left is a small bridge leading over a small river. It leads to the edge of the forest.",
                T0022: "To your right is an even smaller path, surrounded by tall trees. While it seems like there is no sunlight, you can see a clearing at the end of the path."
            },
            Protagonist: {
                T0002: "Hey Tommy, I can't help but to wonder, what is even happening today.",
                T0004: "Yeah, I mean the whole talking-to-animals-thing.",
                T0007: "I mean, I don't think it's normal to talk to cats or dogs. I couldn't do it yesterday, so something must have happened.",
                T0011: "If I'm allowed to ask, what was your life like before your cat-transformation? What about your family?",
                T0014: "Oh, I am sorry to hear that. It must be hard without a dad.",
                T0019: "Hah, yeah, I guess so."
            },
            Cat: {
                T0003: "What do you mean? It's been a great day so far!",
                T0005: "Oh, right. Hmm, yea that is really weird. I couldn't even talk to animals when I was still in school!",
                T0006: "I always tried to talk to Daisy, that's the neighbor's dog. She was so fluffy! But she never understood me…",
                T0008: "Well, I guess sometimes things happen that we can't explain.",
                T0009: "I once failed my math test even though I studied all week for it, can you believe that?",
                T0012: "Hmm, so my mom has always been working a lot.",
                T0013: "My dad left when I was little, so I don't really know much about him. My mom and my dad used to fight a lot, but that's all.",
                T0015: "No, I am happy with my mom! I love her so much! I haven't seen her since I became a cat though…",
                T0016: "But she always had so much work to do, so maybe she is just working a lot and has no time or something, I don't know…",
                T0018: "But now I have you!"
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.deep_forest_entrance);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0002);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0003);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0004);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.neutral, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0005);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0006);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0007);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0008);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.angry, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0009);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0010);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0011);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.neutral, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0012);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0013);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0014);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0015);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.neutral, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0016);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0017);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0018);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0019);
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.deep_forest_split);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0020);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0021);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0022);
        let splitPathForestAnswer = {
            bridge: "Cross the bridge",
            path: "Follow the dirt path"
        };
        let splitPathForest = await Endabgabe.ƒS.Menu.getInput(splitPathForestAnswer, "decision");
        switch (splitPathForest) {
            case splitPathForestAnswer.bridge:
                return "CatBridge";
            case splitPathForestAnswer.path:
                return ""; // TODO: Add Return
        }
    }
    Endabgabe.CatBackstory = CatBackstory;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function CatBridge() {
        console.log("- - - Scene 13: What the cat? - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0001: "You cross the bridge and reach a dirt path. After a couple of meters, more light shines through the trees, until you step out of the forest.",
                T0002: "You are now on the side of the field, at the edge of the forest. The sun is still shining, but it isn't as hot as when you entered the forest.",
                T0006: "The cat jumps from your shoulder onto the ground."
            },
            Cat: {
                T0003: "Wow! You can see so far!",
                T0005: "Well, not at this height of course.",
                T0007: "Okay, and what do we do now?",
                T0009: "Yes. Very."
            },
            Protagonist: {
                T0004: "I mean, yes, this is a field and there is no town or anything in sight. Have you never been here before?",
                T0008: "Are you bored or what?",
                T0010: "Hmm, okay…"
            }
        };
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.deep_forest_split_bridge);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.surprised, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0003);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0004);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0005);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0006);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0007);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0008);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0009);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.neutral, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0010);
        let playWithCatAnswer = {
            stick: "Use a stick with a leaf on it as a cat toy",
            iSpy: "Play 'I spy with my little eye'",
            hideAndSeek: "Play 'Hide and Seek'"
        };
        let playWithCat = await Endabgabe.ƒS.Menu.getInput(playWithCatAnswer, "decision");
        if (playWithCat == playWithCatAnswer.stick) {
            console.log("- - - Scene 13.1: DIY Toys - - -");
            let text2 = {
                Narrator: {
                    T0004: "You grab a long stick with a couple of leaves at the end of it. As you pluck every single leaf off the branch, aside from one, the cats eyes begin to light up.",
                    T0008: "You play with the cat for a couple of minutes until suddenly…",
                    T0010: "The cat is crouching beneath a nearby bush. It seems to have spotted something interesting.",
                    T0014: "Abruptly, the cat jumps back, and you can see a fox crawling out of the bush."
                },
                Cat: {
                    T0002: "What are you doing?",
                    T0005: "Ah, I see where this is going!",
                    T0007: "Yes! Come on, come on, let's play!!",
                    T0009: "Whoa, what is that?",
                    T0012: "…eyes."
                },
                Protagonist: {
                    T0001: "Well, this could work…",
                    T0003: "Just wait.",
                    T0006: "Aaaand, we're done. Enjoy your new DIY cat toy. It's like one of these rods with a feather at the end, but… with more nature.",
                    T0011: "What is it?",
                    T0013: "Huh?"
                }
            };
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0001);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text2.Cat.T0002);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.curious, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0003);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text2.Narrator.T0004);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text2.Cat.T0005);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0006);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text2.Cat.T0007);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text2.Narrator.T0008);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.curious, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text2.Cat.T0009);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text2.Narrator.T0010);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0011);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.neutral, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text2.Cat.T0012);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0013);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text2.Narrator.T0014);
            return "EncounterFoxAgain";
        }
        else if (playWithCat == playWithCatAnswer.iSpy) {
            console.log("- - - Scene 13.2: I spy... - - -");
            let text2 = {
                Narrator: {
                    T0003: "The cat points to a couple of red roses growing at the side.",
                    T0007: "Half a minute passes with the cat walking up and down the path, looking around.",
                    T0010: "The cat wasn't even close to the bright blue bottle opener that somebody lost a few meters away.",
                    T0011: "Suddenly, you hear a loud scream.",
                    T0014: "As the cat jumps back, a fox comes crawling out of the bush, it's blue eyes shining bright in the sunlight."
                },
                Protagonist: {
                    T0001: "Alright Tommy, I spy with my little eye… something red.",
                    T0004: "Yep, that's it. Okay…",
                    T0005: "I spy with my little eye… something bright blue.",
                    T0009: "Uh, what did you find?",
                    T0013: "What, are you okay?"
                },
                Cat: {
                    T0002: "Hmm, okay… ah, yes, it's one of these flowers!",
                    T0006: "Oh… okay… let me see…",
                    T0008: "Oh, I found it! Crazy how you saw that from up there!",
                    T0012: "AHHH!"
                }
            };
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0001);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text2.Cat.T0002);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.curious, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text2.Narrator.T0003);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0004);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0005);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text2.Cat.T0006);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.neutral, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text2.Narrator.T0007);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text2.Cat.T0008);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0009);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text2.Narrator.T0010);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text2.Narrator.T0011);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text2.Cat.T0012);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.surprised, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0013);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text2.Narrator.T0014);
            return "EncounterFoxAgain";
        }
        else {
            console.log("- - - Scene 13.3: Hide, Seek and Find - - -");
            let text2 = {
                Narrator: {
                    T0003: "You turn around.",
                    T0005: "Ten seconds pass, and you hear the rustling of leaves behind you. It couldn't be hard to figure out where the cat has hidden.",
                    T0008: "The cat is halfway crouched underneath a bush - The first half is visible; the other half isn't.",
                    T0010: "The cat slowly backs away from the bush, with their eyes fixated on whatever still hides in the bush.",
                    T0012: "Before the cat could answer, you can see a fox crawling out of the bush."
                },
                Protagonist: {
                    T0001: "Alright, I'll count to 10 and you have to hide. Ready?",
                    T0004: "Perfect. Let's go! 10… 9… 8…",
                    T0006: "Zero! Come out, come out, where ever you a-.",
                    T0007: "Okay, wow, Tommy, you had plent of time to hide.",
                    T0011: "What did you find?"
                },
                Cat: {
                    T0002: "Yes! I love hide and seek!",
                    T0009: "Uh, I think I found something… or rather, someone."
                }
            };
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0001);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text2.Cat.T0002);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text2.Narrator.T0003);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0004);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text2.Narrator.T0005);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0006);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0007);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text2.Narrator.T0008);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text2.Cat.T0009);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.neutral, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text2.Narrator.T0010);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0011);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text2.Narrator.T0012);
            return "EncounterFoxAgain";
        }
    }
    Endabgabe.CatBridge = CatBridge;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function DeepForestAlone() {
        console.log("- - - Scene 12.2: What's up with myself? - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0001: "As you walk deeper and deeper into the forest, you start to be more and more curious.",
                T0002: "What is happening today?",
                T0003: "Why is today such a weird day?",
                T0004: "There are so many questions but you simply do not know the answers.",
                T0005: "You reach the end of the path.",
                T0006: "To your left is a small bridge leading over a small river. It leads to the edge of the forest.",
                T0007: "To your right is an even smaller path, surrounded by tall trees. While it seems like there is no sunlight, you can see a clearing at the end of the path."
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.deep_forest_entrance);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0003);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0004);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0005);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0006);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0007);
        let splitPathForestAnswer = {
            bridge: "Cross the bridge",
            path: "Follow the dirt path"
        };
        let splitPathForest = await Endabgabe.ƒS.Menu.getInput(splitPathForestAnswer, "decision");
        switch (splitPathForest) {
            case splitPathForestAnswer.bridge:
                return "BridgeAlone";
            case splitPathForestAnswer.path:
                return; // TODO: Add Return
        }
    }
    Endabgabe.DeepForestAlone = DeepForestAlone;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function EncounterFoxAgain() {
        let text = {
            Narrator: {
                T0002: "The fox turns around and looks at you with their shiny blue eyes.",
                T0012: "It seems like this topic is a bit sensitive, as the fox ducks around and wants to avoid the question."
            },
            Protagonist: {
                T0001: "Oh is that you June?",
                T0005: "Yes, it is. June, meet Tommy.",
                T0006: "I feel like half of my friends are animals now.",
                T0009: "I don't think you have to envy somebody because of the animal they became. I mean you are a cute cat, that is also cool!",
                T0014: "It's okay if you don't talk about it, no pressure.",
                T0018: "I totally understand. Have you seen the lake? There is so much garbage in it…"
            },
            Cat: {
                T0004: "Is that the fox you told me about?",
                T0008: "Nice to meet you too! Why did you turn into a fox and I turned into a cat? Foxes are so much cooler…",
                T0010: "Yeah, I guess you are right. Anyways, do you know why you turned into a fox?"
            },
            Fox: {
                T0003: "Oh, it's you! I knew we would meet again.",
                T0007: "Nice to meet you, Tommy.",
                T0011: "…",
                T0013: "Well, I… um…",
                T0015: "No, it's okay… Well, honestly, I never liked my life as a human. Humans aren't accepting people, and if you don't fit into certain criteria, you get excluded.",
                T0016: "It sucks. And you can't do anything about it. Of course, there are people that stand up for you, but it doesn't change anything in the long run. It's a systemic problem.",
                T0017: "And it is just really… frustrating and sad. That, in addition to the disregard in terms of the planet and its resources is just depressing.",
                T0019a: "Oh, really? What kind of garbage?",
                T0019b: "I mean, have you seen the lake? It was so beautiful but now there is nothing but garbage in it."
            }
        };
        // Depending on a previous encounter, the dialogue starts differently
        if (!Endabgabe.dataForSave.encounteredFox) {
            let text2 = {
                Protagonist: {
                    T0001: "Tommy, come here, stay away from the fox!",
                    T0003: "What?",
                    T0006: "I can hear you. Can you understand me?",
                    T0008: "Uh, to be honest, I have no idea.",
                    T0011: "Me too. Well… my name is " + Endabgabe.dataForSave.nameProtagonist + ", and this is Tommy. I found him this morning and I can also talk to him."
                },
                Cat: {
                    T0004: "Huh?",
                    T0009: "He can also talk to me! Can we be friends?"
                },
                Fox: {
                    T0002: "Hey, I don't want to hurt you, I'm just curious.",
                    T0005: "…what?",
                    T0007: "Oh… yes, I can. What, how can you hear me?",
                    T0010: "I… think so? I am a bit confused.",
                    T0012: "Well, looks like you unlocked a new talent or something overnight. My name is June, nice to meet you."
                }
            };
            console.log("- - - Scene 14.2: What does the fox say? - - -");
            let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
            gameMenu.open();
            Endabgabe.ƒS.Speech.hide();
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.deep_forest_split_bridge);
            await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0001);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.surprised, Endabgabe.ƒS.positions.bottomleft);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.uncomfortable, Endabgabe.ƒS.positions.bottomright);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.fox, text2.Fox.T0002);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0003);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text2.Cat.T0004);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.curious, Endabgabe.ƒS.positions.bottomleft);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.fox, text2.Fox.T0005);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0006);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.fox, text2.Fox.T0007);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0008);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text2.Cat.T0009);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomleft);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.fox, text2.Fox.T0010);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0011);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.fox, text2.Fox.T0012);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.happy, Endabgabe.ƒS.positions.bottomright);
            await Endabgabe.ƒS.update(0.3);
        }
        else {
            console.log("- - - Scene 14: The Fox returns - - -");
            let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
            gameMenu.open();
            Endabgabe.ƒS.Speech.hide();
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.deep_forest_split_bridge);
            await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.neutral, Endabgabe.ƒS.positions.bottomright);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0001);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.happy, Endabgabe.ƒS.positions.bottomright);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0003);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.curious, Endabgabe.ƒS.positions.bottomleft);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0004);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0005);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0006);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0007);
        }
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.sad, Endabgabe.ƒS.positions.bottomleft);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0008);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0009);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.neutral, Endabgabe.ƒS.positions.bottomleft);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0010);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.uncomfortable, Endabgabe.ƒS.positions.bottomright);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0011);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0012);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0013);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0014);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0015);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0016);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0017);
        // Depending on the inventory, the scene ends differently
        if (Endabgabe.ƒS.Inventory.getAmount(Endabgabe.items.bag) != 0) {
            console.log("- - - Scene 14.1: Sounds familiar - - -");
            let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
            gameMenu.open();
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0018);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.concerned, Endabgabe.ƒS.positions.bottomright);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0019a);
        }
        else {
            console.log("- - - Scene 14.3: Doesn't sound familiar - - -");
            let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
            gameMenu.open();
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0019b);
            let agreeWithFoxChoiceAnswer = {
                agree: "Agree",
                disagree: "Disagree",
                complain: "Complain about activism"
            };
            let agreeWithFoxChoice = await Endabgabe.ƒS.Menu.getInput(agreeWithFoxChoiceAnswer, "decision");
            switch (agreeWithFoxChoice) {
                case agreeWithFoxChoiceAnswer.agree:
                    let text3 = {
                        Narrator: {
                            T0005: "The cat runs away back into the forest, with the fox and you trying to keep up. After a few minutes you reach the lake."
                        },
                        Protagonist: {
                            T0001: "Yeah, I heard about it. It's disgusting."
                        },
                        Cat: {
                            T0004: "Oh, I know a short cut, follow me!"
                        },
                        Fox: {
                            T0002: "Exactly! I used to go there and pick up what I could so that it could be disposed properly.",
                            T0003: "I haven't been there in a few weeks though, so things might have changed?"
                        }
                    };
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text3.Protagonist.T0001);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text3.Fox.T0002);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text3.Fox.T0003);
                    await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
                    await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.concerned, Endabgabe.ƒS.positions.bottomright);
                    await Endabgabe.ƒS.update(0.3);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.cat, text3.Cat.T0004);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text3.Narrator.T0005);
                    // TODO: Add return
                    return "";
                case agreeWithFoxChoiceAnswer.disagree:
                    let text4 = {
                        Narrator: {
                            T0003: "The fox sighs.",
                            T0005: "The fox hurries away back into the forest, with the cat and you trying to keep up. After a few minutes you reach the lake."
                        },
                        Protagonist: {
                            T0001: "What, really? I never thought it was that much of a problem?"
                        },
                        Fox: {
                            T0002: "Not that much of a problem?",
                            T0004: "You know what, follow me, I have to show you something."
                        }
                    };
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text4.Protagonist.T0001);
                    await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
                    await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.neutral, Endabgabe.ƒS.positions.bottomright);
                    await Endabgabe.ƒS.update(0.3);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text4.Fox.T0002);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text4.Narrator.T0003);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text4.Fox.T0004);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text4.Narrator.T0005);
                    // TODO: Add return
                    return "";
                case agreeWithFoxChoiceAnswer.complain:
                    let text5 = {
                        Narrator: {
                            T0006: "The fox seems really taken aback by all of that. The previously friendly face first turns into a disappointed, then an angry expression.",
                            T0011: "The fox hisses, turns around and runs away into the forest.",
                            T0014: "In silence, you both head back into the forest the way you came from. When you arrive at the bridge, you suddenly hear a loud noise coming from the small dirt path, surrounded by tall, dark trees."
                        },
                        Protagonist: {
                            T0001: "Hey, you know what? I don't think that it is that much of a problem.",
                            T0003: "Humans have been using the nature for years already. What does it matter if you throw some stuff away?",
                            T0004: "I really dislike people that feel like they are better than others, especially when they pretend to care about the environment.",
                            T0005: "You are really annoying with all this nature crap, you know that, right?",
                            T0013: "…"
                        },
                        Cat: {
                            T0012: "Wow, " + Endabgabe.dataForSave.nameProtagonist + ", what was that? You were kinda rude…"
                        },
                        Fox: {
                            T0002: "…what? Excuse me?",
                            T0007: "Wow… People like you are the reason why millions of animals died and will continue to die.",
                            T0008: "All of this is avoidable and fixable, but some people are too selfish to realize that.",
                            T0009: "I really thought you were actually a decent human being with some common sense, but I guess I was wrong.",
                            T0010: "I might be annoying but at least I am not an asshole."
                        }
                    };
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text5.Protagonist.T0001);
                    await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
                    await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.surprised, Endabgabe.ƒS.positions.bottomright);
                    await Endabgabe.ƒS.update(0.3);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text5.Fox.T0002);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text5.Protagonist.T0003);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text5.Protagonist.T0004);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text5.Protagonist.T0005);
                    await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
                    await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.neutral, Endabgabe.ƒS.positions.bottomright);
                    await Endabgabe.ƒS.update(0.3);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text5.Narrator.T0006);
                    await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
                    await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.angry, Endabgabe.ƒS.positions.bottomright);
                    await Endabgabe.ƒS.update(0.3);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text5.Fox.T0007);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text5.Fox.T0008);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text5.Fox.T0009);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text5.Fox.T0010);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text5.Narrator.T0011);
                    await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
                    await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.angry, Endabgabe.ƒS.positions.bottomleft);
                    await Endabgabe.ƒS.update(0.3);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text5.Cat.T0012);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text5.Protagonist.T0013);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text5.Narrator.T0014);
                    // TODO: Add return
                    return "";
            }
        }
    }
    Endabgabe.EncounterFoxAgain = EncounterFoxAgain;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function EncounterFoxAgainNoCat() {
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0002: "The fox comes out of the bush.",
                T0011: "It seems like this topic is a bit sensitive, as the fox ducks around and wants to avoid the question."
            },
            Protagonist: {
                T0001: "Oh, is that you June?",
                T0004: "How was your trip to find food? I think you should be pretty respected among the other animals?",
                T0006: "Oh, so you were a vegetarian? That's nice.",
                T0008: "Yes, definitely.",
                T0009: "It's really sad, why did you have to turn into a fox? The world needs more people like you. You are really inspiring!",
                T0013: "It's okay if you don't talk about it, no pressure.",
                T0017: "Yeah, I totally understand. Have you seen the lake? There is so much garbage in it."
            },
            Fox: {
                T0003: "Oh, it's you! I knew we would meet again!",
                T0005: "It went pretty good. I settled for some berries. I didn't eat meat when I was human and I want to avoid it as much as I can as a fox, if you understand.",
                T0007: "I've been trying to take care of nature and everything the planet gave us as much as possible. It's crazy what modern societies do to the Earth.",
                T0010: "…",
                T0012: "Well, I… um…",
                T0014: "No, it's okay… Well, honestly, I never liked my life as a human. Humans aren't accepting people, and if you don't fit into certain criteria, you get excluded.",
                T0015: "It sucks. And you can't do anything about it. Of course, there are people that stand up for you, but it doesn't change anything in the long run. It's a systemic problem.",
                T0016: "And it is just really… frustrating and sad. That, in addition to the disregard in terms of the planet and its resources is just depressing.",
                T0018a: "Oh really? What kind of garbage?",
                T0018b: "I mean, have you seen the lake? It was so beautiful but now there is nothing but garbage in it."
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.deep_forest_split_bridge);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        if (!Endabgabe.dataForSave.encounteredFox) {
            let text2 = {
                Protagonist: {
                    T0001: "Hey, hey, stop, go away!",
                    T0003: "What?",
                    T0005: "I can hear you. Can you understand me?",
                    T0007: "Uh, to be honest, I have no idea.",
                    T0008: "Neither do I. Well… my name is " + Endabgabe.dataForSave.nameProtagonist + ". This… feels weird.",
                    T0010: "Nice to meet you too. What are you doing around here?",
                    T0012: "Oh, yes… obviously you live here, apologies."
                },
                Fox: {
                    T0002: "I don't want to hurt you, no worries.",
                    T0004: "…what?",
                    T0006: "Oh… yes, I can. What, how can you hear me?",
                    T0009: "Well, looks like you unlocked a new talent or something overnight. My name is June, nice to meet you.",
                    T0011: "I mean… I live in the forest. I was just looking for some food around here."
                }
            };
            console.log("- - - Scene 18.2: What does the fox say? [no cat] - - -");
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0001);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.concerned, Endabgabe.ƒS.positions.bottomright);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.fox, text2.Fox.T0002);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0003);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.surprised, Endabgabe.ƒS.positions.bottomright);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.fox, text2.Fox.T0004);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0005);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.fox, text2.Fox.T0006);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0007);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0008);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.happy, Endabgabe.ƒS.positions.bottomright);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.fox, text2.Fox.T0009);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0010);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text2.Fox.T0011);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0012);
        }
        else {
            console.log("- - - Scene 18.1: Sounds familiar [no cat] - - -");
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0001);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.happy, Endabgabe.ƒS.positions.bottomright);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0003);
        }
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0004);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0005);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.happy, Endabgabe.ƒS.positions.bottomright);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0006);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0007);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0008);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0009);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.uncomfortable, Endabgabe.ƒS.positions.bottomright);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0010);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0011);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0012);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0013);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0014);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0015);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.angry, Endabgabe.ƒS.positions.bottomright);
        await Endabgabe.ƒS.update(0.3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0016);
        if (Endabgabe.ƒS.Inventory.getAmount(Endabgabe.items.bag) != 0) {
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0017);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.surprised, Endabgabe.ƒS.positions.bottomright);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0018a);
            return ""; // TODO: Add return
        }
        else {
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0018b);
            console.log("- - - Scene 18.3: Doesn't sound familiar - - -");
            let agreeWithFoxChoiceAnswer = {
                agree: "Agree",
                disagree: "Disagree",
                complain: "Complain about activism"
            };
            let agreeWithFoxChoice = await Endabgabe.ƒS.Menu.getInput(agreeWithFoxChoiceAnswer, "decision");
            switch (agreeWithFoxChoice) {
                case agreeWithFoxChoiceAnswer.agree:
                    let text3 = {
                        Narrator: {
                            T0004: "You turn back into the forest and after a few minutes, you both reach the lake."
                        },
                        Protagonist: {
                            T0001: "Yeah, I heard about it. It's disgusting",
                            T0003: "Hmm… I think I know a short cut, follow me!"
                        },
                        Fox: {
                            T0002: "Exactly! I used to go there and pick up what I could so that it could be disposed properly."
                        }
                    };
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text3.Protagonist.T0001);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text3.Fox.T0002);
                    await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
                    await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.neutral, Endabgabe.ƒS.positions.bottomright);
                    await Endabgabe.ƒS.update(0.3);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text3.Protagonist.T0003);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text3.Narrator.T0004);
                    // TODO: Add return
                    return "";
                case agreeWithFoxChoiceAnswer.disagree:
                    let text4 = {
                        Narrator: {
                            T0003: "The fox sighs.",
                            T0005: "The fox hurries away back into the forest, with you trying to keep up. After a few minutes you reach the lake."
                        },
                        Protagonist: {
                            T0001: "What, really? I never thought it was that much of a problem?"
                        },
                        Fox: {
                            T0002: "Not that much of a problem?",
                            T0004: "You know what, follow me, I have to show you something."
                        }
                    };
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text4.Protagonist.T0001);
                    await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
                    await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.neutral, Endabgabe.ƒS.positions.bottomright);
                    await Endabgabe.ƒS.update(0.3);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text4.Fox.T0002);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text4.Narrator.T0003);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text4.Fox.T0004);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text4.Narrator.T0005);
                    // TODO: Add return
                    return "";
                case agreeWithFoxChoiceAnswer.complain:
                    let text5 = {
                        Narrator: {
                            T0006: "The fox seems really taken aback by all of that. The previously friendly face first turns into a disappointed, then an angry expression.",
                            T0011: "The fox hisses, turns around and runs away into the forest.",
                            T0013: "In silence, you head back into the forest the way you came from. When you arrive at the bridge, you suddenly hear a loud noise coming from the small dirt path, surrounded by tall, dark trees."
                        },
                        Protagonist: {
                            T0001: "Hey, you know what? I don't think that it is that much of a problem.",
                            T0003: "Humans have been using the nature for years already. What does it matter if you throw some stuff away?",
                            T0004: "I really dislike people that feel like they are better than others, especially when they pretend to care about the environment.",
                            T0005: "You are really annoying with all this nature crap, you know that, right?",
                            T0012: "…"
                        },
                        Fox: {
                            T0002: "…what? Excuse me?",
                            T0007: "Wow… People like you are the reason why millions of animals died and will continue to die.",
                            T0008: "All of this is avoidable and fixable, but some people are too selfish to realize that.",
                            T0009: "I really thought you were actually a decent human being with some common sense, but I guess I was wrong.",
                            T0010: "I might be annoying but at least I am not an asshole."
                        }
                    };
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text5.Protagonist.T0001);
                    await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
                    await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.surprised, Endabgabe.ƒS.positions.bottomright);
                    await Endabgabe.ƒS.update(0.3);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text5.Fox.T0002);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text5.Protagonist.T0003);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text5.Protagonist.T0004);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text5.Protagonist.T0005);
                    await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
                    await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.neutral, Endabgabe.ƒS.positions.bottomright);
                    await Endabgabe.ƒS.update(0.3);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text5.Narrator.T0006);
                    await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
                    await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.angry, Endabgabe.ƒS.positions.bottomright);
                    await Endabgabe.ƒS.update(0.3);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text5.Fox.T0007);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text5.Fox.T0008);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text5.Fox.T0009);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text5.Fox.T0010);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text5.Narrator.T0011);
                    await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
                    await Endabgabe.ƒS.update(0.3);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text5.Protagonist.T0012);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text5.Narrator.T0013);
                    // TODO: Add return
                    return "";
            }
        }
    }
    Endabgabe.EncounterFoxAgainNoCat = EncounterFoxAgainNoCat;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function FreeFox() {
        if (Endabgabe.dataForSave.travelWithCat) {
            console.log("- - - Scene 15: Music makes you feel free - - -");
            let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
            gameMenu.open();
            let text = {
                Narrator: {
                    T0002: "You pull out the bag with the Walkman and the cassette tapes.",
                    T0005: "The otherwise calm and collected fox seems really happy and excited all of a sudden.",
                    T0006: "You spread all tapes out on the ground, with the fox looking at every single one of them carefully.",
                    T0008: "Suddenly the fox stops in front of one tape with an almost completely burgundy red cover image.",
                    T0011: "You lay the tape into the player and put the headphones over the fox's ears.",
                    T0013: "You get no response. Instead you see the fox staring blankly at nothing, completely sunken into the sounds coming from the headphones. Slowly, the previously bright shining blue eyes fade into black.",
                    T0014: "After around 10 seconds, the fox seems surprised, as if it doesn't recognize you, shakes the head, and runs away into the forest."
                },
                Protagonist: {
                    T0001: "Look what I found! Why would anybody throw this away?",
                    T0010: "Well, I haven't tried it, but let's give it a go.",
                    T0012: "…so, is it working?",
                    T0015: "Well… I guess it did work after all…",
                    T0017: "I have no idea. Come on, let's go into the direction that they went, maybe we can find them again?"
                },
                Fox: {
                    T0004: "Oh wow, I love cassettes, let me take a look!",
                    T0007: "Ohh… I remember this one. This one is also a classic… and this one, wow, I haven't heard this in ages… Look at all of the-",
                    T0009: "Hey, does the Walkman still work?"
                },
                Cat: {
                    T0003: "I remember these things, my mom told me she had one back when she was younger!",
                    T0016: "What was that?",
                    T0018: "I doubt that, but yes, let's go."
                }
            };
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0001);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomleft);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0003);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.happy, Endabgabe.ƒS.positions.bottomright);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0004);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0005);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0006);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0007);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.surprised, Endabgabe.ƒS.positions.bottomright);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0008);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.happy, Endabgabe.ƒS.positions.bottomright);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0009);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0010);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0011);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0012);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.neutral, Endabgabe.ƒS.positions.bottomright);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.sad, Endabgabe.ƒS.positions.bottomleft);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0013);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0014);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0015);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0016);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0017);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0018);
            Endabgabe.dataForSave.freedFox = true;
            return ""; // TODO: Add return
        }
        else {
            console.log("- - - Scene 19: Music sounds better with you - - -");
            let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
            gameMenu.open();
            let text = {
                Narrator: {
                    T0002: "You pull out the bag with the Walkman and the cassette tapes.",
                    T0004: "The otherwise calm and collected fox seems really happy and excited all of a sudden.",
                    T0005: "You spread all tapes out on the ground, with the fox looking at every single one of them carefully.",
                    T0007: "Suddenly the fox stops in front of one tape with an almost completely burgundy red cover image.",
                    T0010: "You lay the tape into the player and put the headphones over the fox's ears.",
                    T0012: "You get no response. Instead you see the fox staring blankly at nothing, completely sunken into the sounds coming from the headphones. Slowly, the previously bright shining blue eyes fade into black.",
                    T0013: "After around 10 seconds, the fox seems surprised, as if it doesn't recognize you, shakes the head, and runs away into the forest."
                },
                Protagonist: {
                    T0001: "Look what I found! Why would anybody throw this away?",
                    T0009: "Well, I haven't tried it, but let's give it a go.",
                    T0011: "…so, is it working?",
                    T0014: "Well… I guess it did work after all…"
                },
                Fox: {
                    T0003: "Oh wow, I love cassettes, let me take a look!",
                    T0006: "Ohh… I remember this one. This one is also a classic… and this one, wow, I haven't heard this in ages… Look at all of the-",
                    T0008: "Hey, does the Walkman still work?"
                }
            };
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0001);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0003);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0004);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0005);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0006);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.surprised, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0007);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.neutral, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0008);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0009);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0010);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0011);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0012);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0013);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0014);
            Endabgabe.dataForSave.freedFox = true;
            Endabgabe.dataForSave.freedAnimals++;
            return ""; // TODO: Add return
        }
    }
    Endabgabe.FreeFox = FreeFox;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function RevisitLake() {
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.lake_polluted_water);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        if (Endabgabe.dataForSave.travelWithCat) {
            console.log("- - - Scene 17: Pollution never sounded that good - - -");
            let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
            gameMenu.open();
            let text = {
                Narrator: {
                    T0002: "You stand in front of a heavily polluted area of the lake. A lot of trash floats around in the river – empty bottles, various electronic devices, or just regular trash.",
                    T0005: "You grab a bag, which wasn't fully submerged in water and open it up. Inside is a Walkman and a couple of cassettes.",
                    T0009: "The otherwise calm and collected fox seems really happy and excited all of a sudden.",
                    T0010: "You spread all tapes out on the ground, with the fox looking at every single one of them carefully.",
                    T0012: "Suddenly the fox stops in front of one tape with an almost completely burgundy red cover image.",
                    T0015: "You lay the tape into the player and put the headphones over the fox's ears.",
                    T0017: "You get no response. Instead you see the fox staring blankly at nothing, completely sunken into the sounds coming from the headphones. Slowly, the previously bright shining blue eyes fade into black.",
                    T0018: "After around 10 seconds, the fox seems surprised, as if it doesn't recognize you, shakes the head, and runs away into the forest."
                },
                Protagonist: {
                    T0004: "Yeah, you are right… This is disgusting. It's been so long in here that I can barely tell what all of these things are… What even is this…",
                    T0006: "A music player? And… a ton of albums…? Why would somebody throw this away?",
                    T0014: "Well, I haven't tried it, but let's give it a go.",
                    T0016: "…so, is it working?",
                    T0019: "Well… I guess it did work after all…",
                    T0021: "I have no idea. Come on, let's go into the direction that they went, maybe we can find them again?"
                },
                Cat: {
                    T0003: "Eww, this smells horrible…",
                    T0007: "I remember these things, my mom told me she had one back when she was younger!",
                    T0020: "What was that?",
                    T0022: "I doubt that, but yes, let's go."
                },
                Fox: {
                    T0001: "Look at this. Who throws all of this away?",
                    T0008: "Oh wow, I love cassettes, let me take a look!",
                    T0011: "Ohh… I remember this one. This one is also a classic… and this one, wow, I haven't heard this in ages… Look at all of the-",
                    T0013: "Hey, does the Walkman still work?"
                }
            };
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.angry, Endabgabe.ƒS.positions.bottomleft);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0001);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.sad, Endabgabe.ƒS.positions.bottomleft);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0003);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0004);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0005);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0006);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomleft);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0007);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.happy, Endabgabe.ƒS.positions.bottomright);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0008);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0009);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0010);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0011);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.surprised, Endabgabe.ƒS.positions.bottomright);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0012);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.happy, Endabgabe.ƒS.positions.bottomright);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0013);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0014);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0015);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0016);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.neutral, Endabgabe.ƒS.positions.bottomright);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.sad, Endabgabe.ƒS.positions.bottomleft);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0017);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0018);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0019);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0020);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0021);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text.Cat.T0022);
            return ""; // TODO: Add Return
        }
        else {
            console.log("- - - Scene 21: Pollution never sounded that good [no cat] - - -");
            let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
            gameMenu.open();
            let text = {
                Narrator: {
                    T0002: "You stand in front of a heavily polluted area of the lake. A lot of trash floats around in the river – empty bottles, various electronic devices, or just regular trash.",
                    T0004: "You grab a bag, which wasn't fully submerged in water and open it up. Inside is a Walkman and a couple of cassettes.",
                    T0007: "The otherwise calm and collected fox seems really happy and excited all of a sudden.",
                    T0008: "You spread all tapes out on the ground, with the fox looking at every single one of them carefully.",
                    T0010: "Suddenly the fox stops in front of one tape with an almost completely burgundy red cover image.",
                    T0013: "You lay the tape into the player and put the headphones over the fox's ears.",
                    T0015: "You get no response. Instead you see the fox staring blankly at nothing, completely sunken into the sounds coming from the headphones. Slowly, the previously bright shining blue eyes fade into black.",
                    T0016: "After around 10 seconds, the fox seems surprised, as if it doesn't recognize you, shakes the head, and runs away into the forest."
                },
                Protagonist: {
                    T0003: "Yeah, you are right… This is disgusting. It's been so long in here that I can barely tell what all of these things are… What even is this…",
                    T0005: "A music player? And… a ton of albums…? Why would somebody throw this away?",
                    T0012: "Well, I haven't tried it, but let's give it a go.",
                    T0014: "…so, is it working?",
                    T0017: "Well… I guess it did work after all…",
                    T0018: "No way that I will catch up to them. I hope we meet again though…"
                },
                Fox: {
                    T0001: "Look at this. Who throws all of this away?",
                    T0006: "Oh wow, I love cassettes, let me take a look!",
                    T0009: "Ohh… I remember this one. This one is also a classic… and this one, wow, I haven't heard this in ages… Look at all of the-",
                    T0011: "Hey, does the Walkman still work?"
                }
            };
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.angry, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0001);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0003);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0004);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0005);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0006);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0007);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0008);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0009);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.surprised, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0010);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.june, text.Fox.T0011);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0012);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0013);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0014);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.june);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.june, Endabgabe.characters.june.pose.neutral, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.3);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0015);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0016);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0017);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0018);
            return ""; // TODO: Add return
        }
    }
    Endabgabe.RevisitLake = RevisitLake;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function ArrivalClearing() {
        console.log("- - - Scene 22: Place of Origin - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0001: "The path is dark and surrounded by tall pine trees, which let little to no sunlight come through.",
                T0002: "After a few minutes, you reach a wide-open area of the forest.",
                T0003: "The trees seem to be burnt, as they are ash-grey and have no leaves. The grass in this area looks brown and dead.",
                T0004: "In the middle of this clearing is a strange dark object that you can't really identify."
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.home_table);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0003);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0004);
        let scaredDeer = false;
        let inspectedTrees = false;
        let clearingChoiceAnswer = {
            ground: "Analyze the ground",
            object: "Check out the object",
            trees: "Investigate the surrounding trees"
        };
        do {
            let clearingChoice = await Endabgabe.ƒS.Menu.getInput(clearingChoiceAnswer, "decision");
            switch (clearingChoice) {
                case clearingChoiceAnswer.ground:
                    console.log("- - - Scene 23: Burnt - - -");
                    delete clearingChoiceAnswer.ground;
                    let text1;
                    Endabgabe.ƒS.Speech.hide();
                    await Endabgabe.ƒS.Location.show(Endabgabe.locations.home_table);
                    await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text1.Narrator.T0001);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text1.Narrator.T0002);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text1.Narrator.T0003);
                    await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
                    await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
                    await Endabgabe.ƒS.update(0.2);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text1.Cat.T0004);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text1.Protagonist.T0005);
                    await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
                    await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.angry, Endabgabe.ƒS.positions.bottomcenter);
                    await Endabgabe.ƒS.update(0.2);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text1.Cat.T0006);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text1.Protagonist.T0007);
                    await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
                    await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
                    await Endabgabe.ƒS.update(0.2);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text1.Cat.T0008);
                    let breakBranchAnswer = {
                        break: "Jump on the branch to break it",
                        dontBreak: "Don't break the branch"
                    };
                    let breakBranch = await Endabgabe.ƒS.Menu.getInput(breakBranchAnswer, "decision");
                    if (breakBranch == breakBranchAnswer.break) {
                        console.log("- - - Scene 23.1: Breaking the Branch - - -");
                        let text1a = {
                            Narrator: {
                                T0002: "You step a bit back to take a small run up and proceed to jump on the branch.",
                                T0003: "With a loud crack, it break in two.",
                                T0004: "In the corner of your eye you can see a deer running away, scared by the loud noise."
                            },
                            Protagonist: {
                                T0001: "Alright, here we go.",
                                T0006: "Okay, enough playing around. This place is weird, I want to know what happened here."
                            },
                            Cat: {
                                T0005: "YES! That was fun!"
                            }
                        };
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text1a.Protagonist.T0001);
                        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text1a.Narrator.T0002);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text1a.Narrator.T0003);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text1a.Narrator.T0004);
                        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.curious, Endabgabe.ƒS.positions.bottomcenter);
                        await Endabgabe.ƒS.update(0.2);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text1a.Cat.T0005);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text1a.Protagonist.T0006);
                        scaredDeer = true;
                    }
                    else {
                        console.log("- - - Scene 23.2: Not breaking the Branch - - -");
                        let text1b = {
                            Protagonist: {
                                T0001: "Tommy, I think you played around enough today. Also, I really don't want to get a splinter or something."
                            },
                            Cat: {
                                T0002: "Aww, you are no fun…"
                            }
                        };
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text1b.Protagonist.T0001);
                        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
                        await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.sad, Endabgabe.ƒS.positions.bottomcenter);
                        await Endabgabe.ƒS.update(0.2);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text1b.Cat.T0002);
                    }
                    break;
                case clearingChoiceAnswer.object:
                    console.log("- - - Scene 24: The sky is falling, the wind is calling - - -");
                    delete clearingChoiceAnswer.object;
                    let text2;
                    Endabgabe.ƒS.Speech.hide();
                    await Endabgabe.ƒS.Location.show(Endabgabe.locations.home_table);
                    await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text2.Narrator.T0001);
                    await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
                    await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
                    await Endabgabe.ƒS.update(0.2);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text2.Cat.T0002);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0003);
                    await Endabgabe.ƒS.Character.hide(Endabgabe.characters.tommy);
                    await Endabgabe.ƒS.Character.show(Endabgabe.characters.tommy, Endabgabe.characters.tommy.pose.sad, Endabgabe.ƒS.positions.bottomcenter);
                    await Endabgabe.ƒS.update(0.2);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.tommy, text2.Cat.T0004);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text2.Protagonist.T0005);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text2.Narrator.T0006);
                    let pickUpAnswer = {
                        yes: "Take a part of the rock with you",
                        no: "Don't touch the rock, as it is too hot"
                    };
                    let pickUp = await Endabgabe.ƒS.Menu.getInput(pickUpAnswer, "decision");
                    if (pickUp == pickUpAnswer.yes)
                        Endabgabe.ƒS.Inventory.add(Endabgabe.items.rock);
                    break;
                case clearingChoiceAnswer.trees:
                    if (scaredDeer)
                        return "DontEncounterDeer";
                    else
                        return "EncounterDeer";
            }
        } while (!inspectedTrees);
    }
    Endabgabe.ArrivalClearing = ArrivalClearing;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function EncounterDeer() {
        console.log("- - - Scene 25: De(e/a)r God - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
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
                T0008: "Well… nice to meet you too, DEERNAME, I'm " + Endabgabe.dataForSave.nameProtagonist + ". Do you know what happened here?",
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
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.clearing_trees);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0003);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.deername);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.deername, Endabgabe.characters.deername.pose.neutral, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deer, text.Deer.T0004);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0005);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0006);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deer, text.Deer.T0007);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0008);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deername, text.Deer.T0009);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0010);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deername, text.Deer.T0011);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0012);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.deername);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.deername, Endabgabe.characters.deername.pose.sad, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deername, text.Deer.T0013);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0014);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0015);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.deername);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.deername, Endabgabe.characters.deername.pose.neutral, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deername, text.Deer.T0016);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deername, text.Deer.T0017);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0018);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deername, text.Deer.T0019);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0020);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.deername);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.deername, Endabgabe.characters.deername.pose.neutral, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deername, text.Deer.T0021);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deername, text.Deer.T0022);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0023);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0024);
        if (Endabgabe.ƒS.Inventory.getAmount(Endabgabe.items.rock) > 0) {
            console.log("- - - Scene 27: The mysterious dust - - -");
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.deername);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.deername, Endabgabe.characters.deername.pose.curious, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.2);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deername, text.Deer.T0025);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0026);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0027);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.deername);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.deername, Endabgabe.characters.deername.pose.neutral, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.2);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deername, text.Deer.T0028);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.deername);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.deername, Endabgabe.characters.deername.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.2);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deername, text.Deer.T0029);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0030);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.deername);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.deername, Endabgabe.characters.deername.pose.neutral, Endabgabe.ƒS.positions.bottomcenter);
            await Endabgabe.ƒS.update(0.2);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deername, text.Deer.T0031);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deername, text.Deer.T0032);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0033);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deername, text.Deer.T0034);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0035);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0036);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deername, text.Deer.T0037);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0038);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0039);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deername, text.Deer.T0040);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0041);
        }
        if (Endabgabe.dataForSave.travelWithCat) {
            return "Reunion";
        }
        else {
            return "FreeDeer";
        }
    }
    Endabgabe.EncounterDeer = EncounterDeer;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function FreeDeer() {
        console.log("- - - Scene 29: Relax, take it easy - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0004: "After a couple of minutes, you and the deer arrive at the lake. The sun has already set, and the crickets are chirping.",
                T0005: "With the water slowly turning more and more orange, and the leaves feint rustling, it truly is a relaxing sight.",
                T0013: "You couldn't finish your sentence, as you see the bright purple eyes fade into black.",
                T0014: "After another second, the deer seem surprised to see you.",
                T0015: "The previously very talkative animal seems to not recognize you anymore.",
                T0016: "Surprise turns into fright, and it takes off into the forest, never to be seen again. It seems like their soul is finally free."
            },
            Protagonist: {
                T0001: "You said you never really got your mind of work? And are new to the forest? Have you been to the lake yet?",
                T0003: "You might like it there, follow me.",
                T0007: "It is. And since you live here, feel free to come here as often as you want to.",
                T0008: "You don't have to stress yourself over things that you don't have any control over anymore.",
                T0012: "No problem, take care and-",
            },
            Deer: {
                T0002: "Hmm, no, I don't think so.",
                T0006: "Wow… this is beautiful.",
                T0009: "…yes, you are right. I don't think I have anything to worry about anymore.",
                T0010: "Honestly, what can I do anymore? Just relax and enjoy the moment. This is all I have ever wanted.",
                T0011: "Thank you so much…"
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.lake_evening);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0001);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.deername);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.deername, Endabgabe.characters.deername.pose.curious, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deername, text.Deer.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0003);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0004);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0005);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.deername);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.deername, Endabgabe.characters.deername.pose.surprised, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deername, text.Deer.T0006);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0007);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0008);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deername, text.Deer.T0009);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.deername);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.deername, Endabgabe.characters.deername.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deername, text.Deer.T0010);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.deername, text.Deer.T0011);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.deername);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0012);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0013);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0014);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0015);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0016);
        return "WalkHome";
    }
    Endabgabe.FreeDeer = FreeDeer;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function Reunion() {
        console.log("- - - Scene 28: Reunion - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
    }
    Endabgabe.Reunion = Reunion;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function BadEnding() {
        console.log("- - - Scene 32: The Bad Ending - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0001: "As you close your eyes, you hear a quiet meow from outside your window.",
                T0002: "You have the feeling that you did something wrong, but you can't put the finger on it.",
                T0003: "The feeling starts to grow and grow, as you drift more and more to sleep, not knowing the nightmares of the forest you are about to have."
            }
        };
        let delay = Endabgabe.ƒS.Progress.defineSignal([() => Endabgabe.ƒS.Progress.delay(4)]);
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.evening_walk); // TODO: Add bed location
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0003);
        await delay();
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, "The Bad Ending\nYou freed no animals.");
        return "Empty";
    }
    Endabgabe.BadEnding = BadEnding;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function GoodEnding() {
        console.log("- - - Scene 31: The Good Ending - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0001: "As you head to bed, you remember all the animals you met today.",
                T0002: "All of them with different stories, problems, fears and passions.",
                T0003: "You wonder where they are now.",
                T0004: "But you are certain about one thing:",
                T0005: "Where ever they are now, they are in a better place."
            }
        };
        let delay = Endabgabe.ƒS.Progress.defineSignal([() => Endabgabe.ƒS.Progress.delay(4)]);
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.evening_walk); // TODO: Add bed location
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0003);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0004);
        await delay();
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0005);
        await delay();
        Endabgabe.ƒS.Speech.hide();
        if (Endabgabe.ƒS.Inventory.getAmount(Endabgabe.items.bag) > 0 && Endabgabe.ƒS.Inventory.getAmount(Endabgabe.items.rock) > 0) {
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.ending_all);
            await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        }
        else if (Endabgabe.ƒS.Inventory.getAmount(Endabgabe.items.bag) > 0) {
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.ending_bag);
            await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        }
        else if (Endabgabe.ƒS.Inventory.getAmount(Endabgabe.items.rock) > 0) {
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.ending_rock);
            await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        }
        else {
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.ending_none);
            await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        }
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, "The Good Ending\nYou freed all animals.");
        return "Empty";
    }
    Endabgabe.GoodEnding = GoodEnding;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function NeutralEndings() {
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0001: "As you close your eyes, you hear a quiet meow from outside your window.",
                T0002: "You have the feeling that you missed something, but you can't quite put the finger on it.",
                T0003: "You start to think back to the things you have experienced today.",
                T0004a: "Tommy and DEERNAME, who are finally back together. You can't imagine how happy both of them must be now.",
                T0004b: "DEERNAME, who finally found peace after a life of stress and crushing responsiblity.",
                T0005: "June, who got to experience their favorite passion once more before being gone forever.",
                T0006: "As well as the peace of knowing, that they don't have to live with the depressing nature of humankind anymore.",
                T0007: "Richard, somebody who is finally together with his beloved wife.",
                T0008: "Everybody, ultimately at a better place now.",
                T0009: "Slowly drifting to sleep, you can see something in front of your inner eye.",
                T0010a: "A small cat, wandering around the paths and roads of your hometown aimlessly.",
                T0010b: "A cute fox, hiding under bushes and leaves, feeling like it is destined for something bigger.",
                T0010c: "An old turtle, sitting near a lake, yearning for something that it can't have.",
                T0010d: "A scared deer, stressing and worrying about everything and everyone.",
                T0011: "You don't know what all of this means, but you are too tired to worry.",
                T0012: "Maybe you will think about all of this tomorrow."
            }
        };
        let delay = Endabgabe.ƒS.Progress.defineSignal([() => Endabgabe.ƒS.Progress.delay(4)]);
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.evening_walk); // TODO: Add bed location
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0003);
        if (Endabgabe.dataForSave.freedCat && Endabgabe.dataForSave.freedDeer) {
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0004a);
        }
        else if (Endabgabe.dataForSave.freedDeer) {
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0004b);
        }
        if (Endabgabe.dataForSave.freedFox) {
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0005);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0006);
        }
        if (Endabgabe.dataForSave.freedTurtle) {
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0007);
        }
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0008);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0009);
        if (Endabgabe.dataForSave.freedCat) {
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0010a);
        }
        if (Endabgabe.dataForSave.freedFox) {
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0010b);
        }
        if (Endabgabe.dataForSave.freedTurtle) {
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0010c);
        }
        if (Endabgabe.dataForSave.freedDeer) {
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0010d);
        }
        await delay();
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0011);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0012);
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, "The Neutral Ending\nYou freed " + Endabgabe.dataForSave.freedAnimals + " animals.");
        return "Empty";
    }
    Endabgabe.NeutralEndings = NeutralEndings;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function WalkHome() {
        console.log("- - - Scene 30.1: Coming Home - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0001: "The sun has almost gone down completely, when you decide to head back home.",
                T0001a: "The sun has almost gone down completely, when you decide to head back home, with Tommy fast asleep on your shoulder.",
                T0006: "You laugh as you reach your home, unlock your front door and jump onto your bed, not knowing that this day might have just changed your life forever.",
                T0006a: "You laugh as you reach your home, unlock your front door and jump onto your bed, not knowing that you have just missed the most interesting day of your life."
            },
            Protagonist: {
                T0002a: "Wow, what a relaxing day. But… I feel like I missed something…",
                T0003a: "Well, must've been nothing.",
                T0002: "What a day, huh. What was I even doing? I guess I helped people…",
                T0003: "Were they even people? Were they animals?",
                T0004: "Where are they now? And why me?",
                T0005: "I have so many questions. Hopefully tomorrow is going to be a less stressful day. I mean, I just wanted to go for a walk…"
            }
        };
        if (Endabgabe.dataForSave.freedAnimals == 0) {
            Endabgabe.ƒS.Speech.hide();
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.evening_walk);
            await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
            if (Endabgabe.dataForSave.travelWithCat)
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001a);
            else
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0002a);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0003a);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0006a);
            return "BadEnding";
        }
        else {
            Endabgabe.ƒS.Speech.hide();
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.evening_walk);
            await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
            if (Endabgabe.dataForSave.travelWithCat && !Endabgabe.dataForSave.freedCat)
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001a);
            else
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0002);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0003);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0004);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0005);
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0006);
            if (Endabgabe.dataForSave.freedAnimals == 4) {
                return "GoodEnding";
            }
            else {
                return "NeutralEnding";
            }
        }
    }
    Endabgabe.WalkHome = WalkHome;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=main.js.map