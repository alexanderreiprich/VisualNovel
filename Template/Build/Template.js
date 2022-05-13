"use strict";
var Template;
(function (Template) {
    async function BeachScene() {
        Template.ƒS.Sound.fade(Template.sound.beach, 0.04, 2, true);
        Template.ƒS.Sound.fade(Template.sound.music, 0.2, 5, true);
        Template.ƒS.Sound.play(Template.sound.seagull, 0.05, false);
        Template.ƒS.Sound.fade(Template.sound.swimming, 0.1, 5, true);
        Template.ƒS.Sound.play(Template.sound.people, 0.15, true);
        await Template.ƒS.Location.show(Template.locations.nightcity);
        await Template.ƒS.update();
    }
    Template.BeachScene = BeachScene;
})(Template || (Template = {}));
var Template;
(function (Template) {
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
        Template.ƒS.Sound.fade(Template.sound.nightclub, 0.2, 5, true);
        await Template.ƒS.Location.show(Template.locations.nightcity);
        await Template.ƒS.update(Template.transitions.puzzle.duration, Template.transitions.puzzle.alpha, Template.transitions.puzzle.edge);
        await Template.ƒS.Location.show(Template.locations.nightcity);
        await Template.ƒS.Character.show(Template.characters.aisaka, Template.characters.aisaka.pose.angry, Template.ƒS.positions.bottomleft);
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.aisaka, text.Aisaka.T0001);
        Template.ƒS.Speech.clear();
        await Template.ƒS.update(3);
        await Template.ƒS.Speech.tell(Template.characters.aisaka, text.Aisaka.T0002);
        await Template.ƒS.Speech.tell(Template.characters.aisaka, text.Aisaka.T0003);
        Template.ƒS.Speech.hide();
        // ƒS.Character.hide(characters.aisaka);
        Template.ƒS.Character.hideAll();
        await Template.ƒS.update();
        let firstDialogueElementAnswers = {
            iSayOk: "Okay.",
            iSayYes: "Yes.",
            iSayCoolio: "Coolio.🤠"
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementAnswers, "individualCSSClass");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.iSayOk:
                // continue path here
                await Template.ƒS.Speech.tell(Template.characters.aisaka, "Okay.");
                Template.ƒS.Speech.clear();
                break;
            case firstDialogueElementAnswers.iSayYes:
                await Template.ƒS.Speech.tell(Template.characters.aisaka, "Yes.");
                Template.ƒS.Speech.clear();
                break;
            case firstDialogueElementAnswers.iSayCoolio:
                await Template.ƒS.Character.show(Template.characters.aisaka, Template.characters.aisaka.pose.happy, Template.ƒS.positions.bottomcenter);
                await Template.ƒS.Speech.tell(Template.characters.aisaka, "Coolio.🤠");
                Template.ƒS.Speech.clear();
                break;
        }
    }
    Template.ExampleScene = ExampleScene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    // define transitions
    Template.transitions = {
        puzzle: {
            duration: 1,
            alpha: "Transitions/puzzle.png",
            edge: 2
        }
    };
    Template.sound = {
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
    Template.locations = {
        nightcity: {
            name: "Nightcity",
            background: "Images/Backgrounds/Nightcity.png"
        },
        beach: {
            name: "Beach",
            background: "Images/Backgrounds/beach1.jpg"
        }
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        aisaka: {
            name: "Aisaka",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Images/Characters/aisaka_angry.png",
                happy: "Images/Characters/aisaka_happy.png",
                upset: "Images/Characters/aisaka_upset.png"
            }
        }
    };
    Template.items = {
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
    let gameMenu;
    // gameMenu = ƒS.Menu.create(ingameMenuButtons, buttonFunctionalities, "gameMenu");
    //ƒS.Speech.setTickerDelays();
    // ƒS.Speech.set(); // Ohne Textgeschwindigkeit
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case ingameMenuButtons.save:
                await Template.ƒS.Progress.save();
                break;
            case ingameMenuButtons.load:
                await Template.ƒS.Progress.load();
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
    function showCredits() {
        // ƒS.Text.setClass("class");   -   Alle CSS Klassen löschen und diese hinzufügen!
        // ƒS.Text.addClass("class");   -   Eine CSS Klasse hinzufügen!
        Template.ƒS.Text.print("wee woo");
    }
    Template.showCredits = showCredits;
    // Menu Shortcuts
    window.addEventListener("keydown", hndKeyPress);
    let inventoryOpen;
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.I:
                if (!inventoryOpen) {
                    Template.ƒS.Inventory.open();
                    inventoryOpen = true;
                }
                else {
                    Template.ƒS.Inventory.close();
                    inventoryOpen = false;
                }
                break;
            case Template.ƒ.KEYBOARD_CODE.G:
                Template.ƒS.Inventory.add(Template.items.sword);
                break;
            case Template.ƒ.KEYBOARD_CODE.A:
                Template.ƒS.Inventory.add(Template.items.paper);
                break;
            case Template.ƒ.KEYBOARD_CODE.S:
                Template.ƒS.Inventory.add(Template.items.pen);
                break;
            case Template.ƒ.KEYBOARD_CODE.D:
                Template.ƒS.Inventory.add(Template.items.clock);
                break;
            case Template.ƒ.KEYBOARD_CODE.F:
                Template.ƒS.Inventory.add(Template.items.book);
                break;
            case Template.ƒ.KEYBOARD_CODE.H:
                Template.ƒS.Inventory.add(Template.items.phone);
                break;
        }
    }
    Template.dataForSave = {
        nameProtagonist: ""
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.BeachScene, name: "BeachScene" }
        ];
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
    let uiElement = document.querySelector("[type=interface]");
    Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map