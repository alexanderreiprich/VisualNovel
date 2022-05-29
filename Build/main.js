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
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.catname, Endabgabe.characters.catname.pose.angry, Endabgabe.ƒS.positions.bottomleft);
        await Endabgabe.ƒS.update();
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.catname, text.Aisaka.T0001);
        Endabgabe.ƒS.Speech.clear();
        await Endabgabe.ƒS.update(3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.catname, text.Aisaka.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.catname, text.Aisaka.T0003);
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
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.catname, "Okay.");
                Endabgabe.ƒS.Speech.clear();
                break;
            case firstDialogueElementAnswers.iSayYes:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.catname, "Yes.");
                Endabgabe.ƒS.Speech.clear();
                break;
            case firstDialogueElementAnswers.iSayCoolio:
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.catname, Endabgabe.characters.catname.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.catname, "Coolio.🤠");
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
            name: "You"
        },
        catname: {
            name: "CATNAME",
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
        return Endabgabe.MeetingAgain();
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
                T0005: "Surprised and a bit scared you stumble back and fall on the ground.",
                T0006: "The Cat seems to be very happy that they finally found somebody to talk to. You, on the other hand, have a thousand questions floating around in your head.",
                T0007: "The cat stops in the middle of the sentence. It looks like it just realized something.",
                T0008: "You sigh. This isn't the way you saw this day going."
            },
            Protagonist: {
                T0001: "What, eh, yes, I am alright, but I don't think you are. Cats aren't supposed to talk…?",
                T0002: "Uhh, nice to meet you too I guess. This is really weird. You are the first cat that actually talked back to me. Did you also talk to me earlier when I left my house?",
                T0003: "Okay, so, I think we have to clear up some things first. How are you able to speak? And if other humans ignored you, does that mean they can’t understand you? Can you speak to other cats? And can you understand their meows?",
                T0004: "Wait, what do you mean with “normal cats”? You are a cat, you should also be normal right?",
                T0005: "So, just to clarify: You were a human, like me, and then suddenly you transformed into a cat? How would that even make sense?",
            },
            Cat: {
                T0001: "Oh, hi! I didn’t know we would see each other again so quickly!",
                T0002: "Oh no, I didn’t want to scare you, I’m sorry. Are you alright?",
                T0003: "Hm, now that you put it that way… yeah you are right. Every other person I talked to just gave me sweet looks and petted me. I mean I don’t complain, it feels great, but they all ignored what I was saying. You ignored me as well earlier. Oh, by the way, what is your name?",
                T0004: "? Cool, nice to meet you, I’m CATNAME!",
                T0005: "Well, there are firsts for everything right? And yes, I did, but you had headphones in, so you probably didn’t hear me. Anyways, why are you here, in the middle of nowhere? Where are you going? It’s so boring being alone, can I come with you?",
                T0006: "That’s the weird thing. All the other cats I’ve met just meowed like normal cats. And they didn’t understand me either.",
                T0007: "Oh, I probably should have told you that before – I’m not like… really a cat? I was like you once! I had two legs, went to school with my friends, had parents and…",
                T0008: "Now that I think about it, nothing makes sense. I don’t know what happened, I just… got here. All I remember is a bright red light and the next thing I know, I am walking around on four legs, doing cat stuff.",
                T0009: "You tell me, I don’t know either. It just happened. So, can I come with you now? It is so boring here, please let me come with you!"
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
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.catname, Endabgabe.characters.catname.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.catname, text.Cat.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0005);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.catname);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.catname, Endabgabe.characters.catname.pose.surprised, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.catname, text.Cat.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0001);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.catname);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.catname, Endabgabe.characters.catname.pose.curious, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.catname, text.Cat.T0003);
        let name = await Endabgabe.ƒS.Speech.getInput();
        Endabgabe.dataForSave.nameProtagonist = name;
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.catname);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.catname, Endabgabe.characters.catname.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.catname, name + text.Cat.T0004);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0002);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.catname, text.Cat.T0005);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0006);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0003);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.catname);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.catname, Endabgabe.characters.catname.pose.neutral, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.catname, text.Cat.T0006);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0004);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.catname);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.catname, Endabgabe.characters.catname.pose.sad, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.catname, text.Cat.T0007);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0007);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.catname, text.Cat.T0008);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.T0005);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.catname);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.catname, Endabgabe.characters.catname.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.catname, text.Cat.T0009);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0008);
        let travelWithCatAnswer = {
            accept: "Say Yes and take the cat with you",
            decline: "Decline and carry on alone"
        };
        let travelWithCat = await Endabgabe.ƒS.Menu.getInput(travelWithCatAnswer, "decision");
        switch (travelWithCat) {
            case "accept":
                return Endabgabe.TravelWithCat();
            case "decline":
                return Endabgabe.TravelWithoutCat();
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
        return Endabgabe.MeetingAgain();
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
        return Endabgabe.ForestAlone();
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
            Narrator: {}
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.home_table);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
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
        switch (cat) {
            case catAnswer.pet:
                return Endabgabe.PetTheCat();
            case catAnswer.scare:
                return Endabgabe.ScareTheCat();
            case catAnswer.ignore:
                return Endabgabe.IgnoreTheCat();
        }
    }
    Endabgabe.WakingUp = WakingUp;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function ForestAlone() {
        console.log("- - - Scene 5.2: The Forest and You - - -");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameMenuButtons, Endabgabe.buttonFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {}
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.home_table);
        await Endabgabe.ƒS.update(Endabgabe.transitions.puzzle.duration, Endabgabe.transitions.puzzle.alpha, Endabgabe.transitions.puzzle.edge);
    }
    Endabgabe.ForestAlone = ForestAlone;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=main.js.map