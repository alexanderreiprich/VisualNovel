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
            //{ scene: DontBefriendFox, name: "DontBefriendFox", id: "DontBefriendFox" },
            //{ scene: BefriendFoxFirstEncounter, name: "BefriendFoxFirstEncounter", id: "BefriendFoxFirstEncounter" },
            { scene: Endabgabe.IntoDeepForest, name: "IntoDeepForest", id: "IntoDeepForest" }
            // Chapter 3 - Lake
            // Chapter 4 - Deep Forest
            // Chapter 5 - Clearing
        ];
        // TODO: Wie kann man spezifische Szenen spielen?
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
    async function Template() {
        console.log("- - - Scene X: Scenetitle - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {}
        };
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
        let name = await Endabgabe.ƒS.Speech.getInput();
        Endabgabe.dataForSave.nameProtagonist = name;
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
        let travelWithCatAnswer = {
            accept: "Say Yes and take the cat with you",
            decline: "Decline and carry on alone"
        };
        let travelWithCat = await Endabgabe.ƒS.Menu.getInput(travelWithCatAnswer, "decision");
        switch (travelWithCat) {
            case travelWithCatAnswer.accept:
                return "TravelWithCat";
            case travelWithCatAnswer.decline:
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
        // await ƒS.Speech.getInput();
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
            Narrator: {}
        };
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
                T0007: "“Small particles raining from the sky this night…”",
                T0008: "“… scientists are not sure where if comes from…”",
                T0009: "“… no explanation what it is or what it does…”",
                T0010: "“… citizens are advised to keep windows closed…”",
                T0011: "Well, it might not have been a good idea to keep the window open all night, but well, what can you do. It is summer after all, and the temperature is getting higher every day.",
                T0012: "Since the weather hasn't been this good in days, you decide to go for a little walk after eating. After all, you spent the last 4 weeks doing nothing but studying all day. Some fresh air after all this time should be refreshing.",
                T0013: "What song do you want to listen to on your walk?",
                T0014: "As you put your shoes on, you notice a small cat through the small window in your front door. It seems to be snooping around in your front yard, which is nothing out of the ordinary. Cats aren't exactly a rare sight in this part of your town.",
                T0015: "You shut the door, turn around and see the cat curling up at your feet."
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.home_table);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0003);
        let breakfastAnswer = {
            cereal: "Ceral with Milk",
            toast: "Toast",
            eggs: "Scrambled Eggs with Bacon"
        };
        await Endabgabe.ƒS.Menu.getInput(breakfastAnswer, "decision");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0004);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0005);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0006);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0007);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0008);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0009);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0010);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0011);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0012);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0013);
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
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0014);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0015);
        let catAnswer = {
            pet: "Pet the Cat",
            scare: "Scare it away",
            ignore: "Ignore the Cat"
        };
        let cat = await Endabgabe.ƒS.Menu.getInput(catAnswer, "decision");
        switch (cat) { // TODO: ist das der richtige Weg um zwischen Szenen zu switchen?
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
            // Even more friends
        }
        else {
            // New friend
        }
    }
    Endabgabe.BefriendFox = BefriendFox;
})(Endabgabe || (Endabgabe = {}));
// New unusual Friends
// Even more Friends?
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
                T0003: "As you hear the birds singing you remember why you used to come here so often. This forest seems so magical, but you can’t exactly explain why.",
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
                return "";
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
                T0003: "As you hear the birds singing you remember why you used to come here so often. This forest seems so magical, but you can’t exactly explain why.",
                T0005: "As soon as those words were spoken, the cat already took off, chasing a squirrel up a tree.",
                T0006: "You continue walking, heading deeper into the forest. In the distance, you can see a deer, staring at you. As you get closer, it hurries away behind some bushes.",
                T0008: "It seems like Tommy got so distracted by the squirrel that you lost them.",
                T0009: "You stop and turn around. What would be the best place to look for a playful cat in this forest?",
                T0010: "As you crouch through some low hanging branches and stumble onto the fields, you realize just how hot it is already.",
                T0011: "You forgot to bring some water and you also don’t have any sunglasses, which makes the search on the open field more difficult than you thought.",
                T0013: "Just shouting these words already made you sweat. Before any more words leave your mouth, you begin to realize, that a cat wouldn’t be here.",
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
                T0001: "You didn’t think that a cat this small can run all the way into the forest, especially after not keeping an eye on it for less than 3 minutes.",
                T0003: "You can hear a feint rustling of leaves and before you knew it, the cat jumps out of a small tree just in front of you.",
                T0008: "The cat jumps around playfully, as if it wants to taunt you.",
                T0011: "Even though you can’t see the cats face, you can sense that it is disappointed in you."
            },
            Protagonist: {
                T0002: "Hey, Tommy, where are you? You can stop chasing the squirrel now!",
                T0004: "There you are! I thought you went way deeper into the forest. Don’t take off again, this is too dangerous, you don’t know what lives in there!",
                T0006: "Great, but imagine you got lost or something. I wouldn’t be able to find you.",
                T0009: "Yes. At last, you are a special cat. I don’t want to lose a pet that can talk, you know.",
                T0012: "Of course we are friends! I just have to get used to you not being a normal cat, you know?",
                T0013: "Hey, you know what? Let’s go this way, in the forest are more squirrels for you to chase! But don’t run too far off again!"
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
                    T0006: "Sorry, I didn’t mean to…",
                    T0008: "What? What are you talking about?",
                    T0012: "I won’t hurt you, I promise. Why would I even do that?",
                },
                Fox: {
                    T0007: "Don’t come closer, or else I will bite you!",
                    T0009: "I said what I said, don’t come closer. Step back!",
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
                    T0006: "Sorry, I didn’t mean to…",
                    T0008: "What? It’s me, " + Endabgabe.dataForSave.nameProtagonist + ". What are you talking about Tommy?",
                    T0012: "I won’t hurt you, I promise. Why would I even do that?",
                    T0015: "Oh, you really aren't Tommy. Uhh… nice to meet you…?"
                },
                Fox: {
                    T0007: "Don’t come closer, or else I will bite you!",
                    T0009: "I don’t know what you mean, I don’t know anybody named Tommy.",
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
//# sourceMappingURL=main.js.map