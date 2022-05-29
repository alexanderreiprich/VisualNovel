"use strict";
var Endabgabe;
(function (Endabgabe) {
    async function BeachScene() {
        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.beach, 0.04, 2, true);
        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.music, 0.2, 5, true);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.seagull, 0.05, false);
        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.swimming, 0.1, 5, true);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.people, 0.15, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.nightcity);
        await Endabgabe.ƒS.update();
    }
    Endabgabe.BeachScene = BeachScene;
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
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.nightcity);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.nightcity);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.aisaka, Endabgabe.characters.aisaka.pose.angry, Endabgabe.ƒS.positions.bottomleft);
        await Endabgabe.ƒS.update();
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.aisaka, text.Aisaka.T0001);
        Endabgabe.ƒS.Speech.clear();
        await Endabgabe.ƒS.update(3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.aisaka, text.Aisaka.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.aisaka, text.Aisaka.T0003);
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
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.aisaka, "Okay.");
                Endabgabe.ƒS.Speech.clear();
                break;
            case firstDialogueElementAnswers.iSayYes:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.aisaka, "Yes.");
                Endabgabe.ƒS.Speech.clear();
                break;
            case firstDialogueElementAnswers.iSayCoolio:
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.aisaka, Endabgabe.characters.aisaka.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.aisaka, "Coolio.🤠");
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
            duration: 1,
            alpha: "Transitions/puzzle.png",
            edge: 2
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
    Endabgabe.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: ""
        },
        catname: {
            name: "",
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
        aisaka: {
            name: "Aisaka",
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Images/Characters/aisaka_angry.png",
                happy: "Images/Characters/aisaka_happy.png",
                upset: "Images/Characters/aisaka_upset.png"
            }
        }
    };
    Endabgabe.items = {
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
    Endabgabe.ingameMenuButtons = {
        inventory: "Inventory",
        save: "Save",
        load: "Load",
        close: "Close",
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
        Endabgabe.ƒS.Text.print("wee woo");
    }
    Endabgabe.showCredits = showCredits;
    // Menu Shortcuts
    window.addEventListener("keydown", hndKeyPress);
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
        }
    }
    Endabgabe.dataForSave = {
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
    function start(_event) {
        let scenes = [
            { scene: Endabgabe.WakingUp, name: "WakingUp" }
        ];
        // start the sequence
        Endabgabe.ƒS.Progress.go(scenes);
    }
    let uiElement = document.querySelector("[type=interface]");
    Endabgabe.dataForSave = Endabgabe.ƒS.Progress.setData(Endabgabe.dataForSave, uiElement);
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
                T0007: "“Small particles raining from the sky this night…”",
                T0008: "“… scientists are not sure where if comes from…”",
                T0009: "“… no explanation what it is or what it does…”",
                T0010: "“… citizens are advised to keep windows closed…”",
                T0011: "Well, it might not have been a good idea to keep the window open all night, but well, what can you do. It is summer after all, and the temperature is getting higher every day.",
                T0012: "Since the weather hasn't been this good in days, you decide to go for a little walk after eating. After all, you spent the last 4 weeks doing nothing but studying all day. Some fresh air after all this time should be refreshing."
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.home_table);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0003);
        return WakingUp(); // Nächste Szene aufrufen
    }
    Endabgabe.WakingUp = WakingUp;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=main.js.map